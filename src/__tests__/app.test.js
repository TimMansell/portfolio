import React from 'react';
import { render } from '@testing-library/react';

import { App } from '../app';

describe('App', () => {
  it('should render my component', () => {
    render(<App />);
  });
});
