import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../Hero';
import images from '../json/images.json';

describe('Hero', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render my component', () => {
    render(<Hero />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Hero />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should change images', () => {
    const { getAllByTestId } = render(<Hero />);

    const element = getAllByTestId('picture')[0];

    expect(element).toHaveAttribute('title', images[0].title);

    act(() => jest.advanceTimersByTime(9000));

    expect(element).toHaveAttribute('title', images[1].title);
  });
});
