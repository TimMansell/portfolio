import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Skills from '../Skills';

vi.mock('../json/skills.json', () => ({
  default: [
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
}));

describe('Skills', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Skills />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Skills />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
