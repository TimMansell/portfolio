import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from '../Label';

const defaultProps = {
  label: 'test label',
  type: 'primary',
};

describe('Label', () => {
  it('should render my component', () => {
    const props = {
      ...defaultProps,
    };

    render(<Label {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
    };
    const { asFragment } = render(<Label {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a primary background', () => {
    const props = {
      ...defaultProps,
    };
    const { getByText } = render(<Label {...props} />);

    expect(getByText(defaultProps.label)).toHaveClass('isPrimary');
  });

  it('should display a secondary background', () => {
    const props = {
      ...defaultProps,
      type: 'secondary',
    };
    const { getByText } = render(<Label {...props} />);

    expect(getByText(defaultProps.label)).toHaveClass('isSecondary');
  });

  it('should display a tertiary background', () => {
    const props = {
      ...defaultProps,
      type: 'tertiary',
    };
    const { getByText } = render(<Label {...props} />);

    expect(getByText(defaultProps.label)).toHaveClass('isTertiary');
  });

  it('should render as large label', () => {
    const props = {
      ...defaultProps,
      size: 'lg',
    };
    const { getByText } = render(<Label {...props} />);

    expect(getByText(defaultProps.label)).toHaveClass('isLarge');
  });
});
