import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CurrentStackItem from '../CurrentStackItem';

const props = {
  url: 'test url',
  name: 'babel',
  width: '50',
  height: '50',
};

describe('CurrentStackItem', () => {
  it('should render my component', () => {
    render(<CurrentStackItem {...props} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<CurrentStackItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be correct link href', () => {
    const { getByTestId } = render(<CurrentStackItem {...props} />);

    expect(getByTestId('stack-item-link')).toHaveAttribute('href', props.url);
  });
});
