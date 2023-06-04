import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CurrentStack from '../CurrentStack';

describe('CurrentStack', () => {
  it('should render my component', () => {
    render(<CurrentStack />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<CurrentStack />);

    expect(asFragment()).toMatchSnapshot();
  });
});
