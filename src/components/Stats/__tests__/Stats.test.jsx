import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Stats from '../Stats';

vi.mock('../json/stats.json', () => ({
  default: { loc: 3029, pullRequests: 73, commits: 339, coffees: 108 },
}));

describe('Stats', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Stats />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Stats />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should list correct amount of items', () => {
    const wrapper = shallow(<Stats />);
    const list = wrapper.find('[data-test="stats-items"]');

    expect(list.children()).toHaveLength(4);
  });
});
