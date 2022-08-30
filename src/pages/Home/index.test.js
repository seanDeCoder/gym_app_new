import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('exercises are fetched correctly on load', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const exerciseCards = await screen.findAllByTestId(/exercise-cards/i);
  expect(exerciseCards.length).toBe(8);
})
