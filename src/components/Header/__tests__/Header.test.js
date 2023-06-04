import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';

const props = {
  title: 'Test Title',
  text: 'text',
  type: 'primary',
};

describe('Header', () => {
  it('should render my component', () => {
    render(<Header {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Header {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should display a title', () => {
    const { getByText } = render(<Header {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('Should display a sub-title', () => {
    const { getByText } = render(<Header {...props} />);

    expect(getByText(props.text)).toBeInTheDocument();
  });

  it('Should display a primary class', () => {
    const { getByTestId } = render(<Header {...props} />);

    expect(getByTestId('header')).toHaveClass('headingPrimary');
  });

  it('Should display a secondary class', () => {
    const { getByTestId } = render(<Header {...props} type="secondary" />);

    expect(getByTestId('header')).toHaveClass('headingSecondary');
  });

  it('Should display a teritiary class', () => {
    const { getByTestId } = render(<Header {...props} type="tertiary" />);

    expect(getByTestId('header')).toHaveClass('headingTertiary');
  });
});
