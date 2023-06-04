import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../Hero';

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
});
