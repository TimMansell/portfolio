import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '../Button';

const props = {
  href: 'test href',
  target: 'test target',
  title: 'test title',
};

const text = 'text';

describe('Button', () => {
  it('should render my component', () => {
    const { getByText } = render(<Button {...props}>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Button {...props}>{text}</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have correct properties', () => {
    const { getByText } = render(<Button {...props}>{text}</Button>);

    const element = getByText(text);

    expect(element).toHaveAttribute('href', props.href);
    expect(element).toHaveAttribute('target', props.target);
    expect(element).toHaveAttribute('title', props.title);
  });
});
