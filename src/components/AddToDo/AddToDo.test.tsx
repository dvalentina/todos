import React from 'react';
import { act } from 'react-dom/test-utils';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddToDo from '.';

describe('add todo component', () => {
  test('does not submit empty input', async () => {
    const mockAddToDo = jest.fn();

    render(<AddToDo addToDo={mockAddToDo} />);
    userEvent.setup();

    const input = screen.getByTestId('to-do-input');

    // submit empty input

    act(() => {
      userEvent.type(input, '{enter}');
    });

    await waitFor(() => {
      expect(mockAddToDo).not.toHaveBeenCalled();
    });

    // submit input with spaces

    act(() => {
      userEvent.type(input, '              {enter}');
    });

    await waitFor(() => {
      expect(mockAddToDo).not.toHaveBeenCalled();
    });
  });
});
