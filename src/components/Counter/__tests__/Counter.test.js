import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from '../Counter';

const props = {
  begin: 0,
  end: 3,
};

describe('Counter', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render my component', () => {
    render(<Counter {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Counter {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should start at correct number', async () => {
    const { getByText } = render(<Counter {...props} />);

    expect(getByText(props.begin)).toBeInTheDocument();
  });

  it('should end at correct number', async () => {
    const { getByText } = render(<Counter {...props} />);

    act(() => jest.advanceTimersByTime(9000));

    expect(getByText(props.end)).toBeInTheDocument();
  });
});
