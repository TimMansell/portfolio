import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RetiredSkills from '../RetiredSkills';

jest.mock(
  '../json/retiredSkills.json',
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

describe('Retired Skills', () => {
  it('should render my component', () => {
    render(<RetiredSkills />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<RetiredSkills />);

    expect(asFragment()).toMatchSnapshot();
  });
});
