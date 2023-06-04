import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Labels from '../Labels';

const defaultProps = {
  labels: [
    {
      items: ['label 1', 'label 2', 'label 3'],
      type: 'primary',
    },
    {
      items: ['label 4', 'label 5'],
      type: 'secondary',
    },
  ],
};

describe('Label', () => {
  it('should render my component', () => {
    const props = {
      ...defaultProps,
    };

    render(<Labels {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
    };
    const { asFragment } = render(<Labels {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as large label', () => {
    const props = {
      ...defaultProps,
      size: 'lg',
    };

    const { getByTestId } = render(<Labels {...props} />);

    expect(getByTestId('labels')).toHaveClass('isLarge');
  });

  it('should render as centered', () => {
    const props = {
      ...defaultProps,
      centered: true,
    };

    const { getByTestId } = render(<Labels {...props} />);

    expect(getByTestId('labels')).toHaveClass('isCentered');
  });

  it('should list correct amount of labels', () => {
    const { getAllByTestId } = render(<Labels {...defaultProps} />);

    expect(getAllByTestId('label')).toHaveLength(5);
  });
});
