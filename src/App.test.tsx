import React from 'react';
import { act } from 'react-dom/test-utils';

import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('todo input', () => {
  test('renders the todo input', () => {
    render(<App />);
    const toDoInput = screen.getByTestId('to-do-input');

    expect(toDoInput).toBeInTheDocument();
  });

  test('new todo added after input submit and is unchecked', async () => {
    setup(<App />);
    const toDoInput = screen.getByTestId('to-do-input');

    const toDo = 'Do the dishes';

    act(() => {
      userEvent.type(toDoInput, `${toDo} {enter}`);
    });

    const toDoCheckbox = await screen.findByLabelText(toDo, { selector: 'input' });

    await waitFor(() => {
      expect(toDoCheckbox).toBeInTheDocument();
      expect(toDoCheckbox).not.toBeChecked();
    });
  });
});

describe('todo component', () => {
  test('toggle todo', async () => {
    setup(<App />);

    const toDo = screen.getAllByTestId('to-do-label')[0];
    const checkbox = within(toDo).getByRole('checkbox');

    await waitFor(() => {
      expect(checkbox).not.toBeChecked();
    });

    // click toDo first time

    act(() => {
      userEvent.click(toDo);
    });

    await waitFor(() => {
      expect(checkbox).toBeChecked();
    });

    // click toDo second time

    act(() => {
      userEvent.click(toDo);
    });

    await waitFor(() => {
      expect(checkbox).not.toBeChecked();
    });
  });
});

describe('counter', () => {
  test('counter loads', () => {
    setup(<App />);

    const counter = screen.getByTestId('counter');

    expect(counter).toBeInTheDocument();
  });

  test('counter increases by one when a new todo added', async () => {
    setup(<App />);

    const counter = screen.getByTestId('counter');
    const initialNumber = parseInt(counter.innerHTML, 10);

    const toDoInput = screen.getByTestId('to-do-input');

    const toDo = 'Do the dishes';

    act(() => {
      userEvent.type(toDoInput, `${toDo} {enter}`);
    });

    await waitFor(() => {
      const resultNumber = parseInt(counter.innerHTML, 10);

      expect(resultNumber - initialNumber).toBe(1);
    });
  });

  test('counter decreases/increases by one when todo is toggled', async () => {
    setup(<App />);

    const counter = screen.getByTestId('counter');
    const initialNumber = parseInt(counter.innerHTML, 10);

    const toDo = screen.getAllByTestId('to-do-label')[0];

    act(() => {
      userEvent.click(toDo);
    });

    await waitFor(() => {
      const resultNumber = parseInt(counter.innerHTML, 10);

      expect(resultNumber - initialNumber).toBe(-1);
    });

    act(() => {
      userEvent.click(toDo);
    });

    await waitFor(() => {
      const resultNumber = parseInt(counter.innerHTML, 10);

      expect(resultNumber).toEqual(initialNumber);
    });
  });
});

describe('filter', () => {
  test('filter options load and are "all", "active" and "completed"', () => {
    setup(<App />);

    const filter = screen.getByTestId('filter');

    expect(filter).toBeInTheDocument();

    const allOption = within(filter).getByText(/all/i);
    const activeOption = within(filter).getByText(/active/i);
    const completedOption = within(filter).getByText(/completed/i);

    expect(allOption).toBeInTheDocument();
    expect(activeOption).toBeInTheDocument();
    expect(completedOption).toBeInTheDocument();
  });

  test('filtered todos correspond to the selected filter option', async () => {
    setup(<App />);

    const filter = screen.getByTestId('filter');
    const activeOption = within(filter).getByText(/active/i);
    const completedOption = within(filter).getByText(/completed/i);
    const allOption = within(filter).getByText(/all/i);

    let activeToDos: HTMLElement[];
    let completedToDos: HTMLElement[];

    // check active filter option

    act(() => {
      userEvent.click(activeOption);
    });

    await waitFor(() => {
      activeToDos = screen.getAllByTestId('to-do-label');

      activeToDos.forEach((toDo) => {
        const checkbox = within(toDo).getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
      });
    });

    // check completed filter option

    act(() => {
      userEvent.click(completedOption);
    });

    await waitFor(() => {
      completedToDos = screen.getAllByTestId('to-do-label');

      completedToDos.forEach((toDo) => {
        const checkbox = within(toDo).getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });
    });

    // check all filter option

    act(() => {
      userEvent.click(allOption);
    });

    await waitFor(() => {
      const allToDos = screen.getAllByTestId('to-do-label');

      expect(allToDos).toEqual(expect.arrayContaining(activeToDos));
      expect(allToDos).toEqual(expect.arrayContaining(completedToDos));
    });
  });

  test('shows not found component when no todo matches the filter option', async () => {
    setup(<App />);

    const filter = screen.getByTestId('filter');
    const completedOption = within(filter).getByText(/completed/i);
    const activeOption = within(filter).getByText(/active/i);
    const clearButton = screen.getByTestId('clear-button');

    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument();

    // clear completed todos and switch to completed filter option

    act(() => {
      userEvent.click(clearButton);
      userEvent.click(completedOption);
    });

    await waitFor(() => {
      const notFound = screen.getByTestId('not-found');

      expect(notFound).toBeInTheDocument();
    });

    // switch to active filter option and make all active todos completed

    act(() => {
      userEvent.click(activeOption);
    });

    await waitFor(() => {
      const notFound = screen.queryByTestId('not-found');

      expect(notFound).not.toBeInTheDocument();
    });

    const todos = screen.getAllByTestId('to-do-component');

    act(() => {
      todos.forEach((todo) => {
        const checkbox = within(todo).getByRole('checkbox');

        userEvent.click(checkbox);
      });
    });

    await waitFor(() => {
      const notFound = screen.getByTestId('not-found');

      expect(notFound).toBeInTheDocument();
    });
  });
});

describe('clear completed button', () => {
  test('clear completed button loads', () => {
    setup(<App />);

    const clearButton = screen.getByTestId('clear-button');

    expect(clearButton).toBeInTheDocument();
  });

  test('clear completed button deletes only completed todos when clicked and counter does not change', async () => {
    setup(<App />);

    const clearButton = screen.getByTestId('clear-button');
    const toDoInput = screen.getByTestId('to-do-input');

    // add uncompleted todo

    const uncompletedText = 'Uncompleted';

    act(() => {
      userEvent.type(toDoInput, `${uncompletedText} {enter}`);
    });
    const uncompletedToDo = await screen.findByLabelText(uncompletedText, { selector: 'input' });

    await waitFor(() => {
      expect(uncompletedToDo).not.toBeChecked();
    });

    // add completed todo

    const completedText = 'Completed';

    act(() => {
      userEvent.type(toDoInput, `${completedText} {enter}`);
    });
    const completedToDo = await screen.findByLabelText(completedText, { selector: 'input' });

    act(() => {
      userEvent.click(completedToDo);
    });

    await waitFor(() => {
      expect(completedToDo).toBeChecked();
    });

    // get number of uncompleted todos

    const counter = screen.getByTestId('counter');
    const initialNumber = parseInt(counter.innerHTML, 10);

    // clear completed todos

    act(() => {
      userEvent.click(clearButton);
    });

    await waitFor(() => {
      expect(uncompletedToDo).toBeInTheDocument();
      expect(completedToDo).not.toBeInTheDocument();

      const resultNumber = parseInt(counter.innerHTML, 10);

      expect(resultNumber).toEqual(initialNumber);
    });
  });
});

describe('footer', () => {
  test('footer disappears when there is no todos', async () => {
    setup(<App />);

    const initialFooter = screen.getByTestId('footer');

    expect(initialFooter).toBeInTheDocument();

    // make sure there are no pre-existing completed todos

    const clearButton = screen.getByTestId('clear-button');

    act(() => {
      userEvent.click(clearButton);
    });

    // make active todos completed

    const todos = screen.getAllByTestId('to-do-component');

    todos.forEach((todo) => {
      const checkbox = within(todo).getByRole('checkbox');

      userEvent.click(checkbox);
    });

    // clear completed todos

    await waitFor(() => {
      userEvent.click(clearButton);
    });

    await waitFor(() => {
      const footer = screen.queryByTestId('footer');

      expect(footer).not.toBeInTheDocument();
    });
  });
});
