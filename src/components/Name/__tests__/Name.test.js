import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Name from '../Name';

describe('Name', () => {
  it('should render my component', () => {
    render(<Name />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Name />);

    expect(asFragment()).toMatchSnapshot();
  });
});
