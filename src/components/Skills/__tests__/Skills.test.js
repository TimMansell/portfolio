import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skills from '../Skills';

jest.mock(
  '../json/skills.json',
  () => [
    {
      title: 'title 1',
      list: ['skill 1', 'skill 2'],
      icon: {
        name: 'code',
        family: 'fa',
      },
    },
    {
      title: 'title 2',
      list: ['skill 3', 'skill 4'],
      icon: {
        name: 'css3-alt',
        family: 'fab',
      },
    },
  ],
  { virtual: true }
);

describe('Skills', () => {
  it('should render my component', () => {
    render(<Skills />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Skills />);

    expect(asFragment()).toMatchSnapshot();
  });
});
