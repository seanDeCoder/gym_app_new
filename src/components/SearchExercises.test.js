import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchExercises from './SearchExercises';

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

test('body parts are fetched correctly', async () => {
  render(
    <MemoryRouter>
      <SearchExercises />
    </MemoryRouter>
  );

  const bodyPartsListItems = await screen.findAllByTestId(/body-parts/i);
  expect(bodyPartsListItems.length).toBe(11);
})