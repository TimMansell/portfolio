import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroImage from '../HeroImage';

describe('HeroImage', () => {
  it('should render my component', () => {
    render(<HeroImage />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<HeroImage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
