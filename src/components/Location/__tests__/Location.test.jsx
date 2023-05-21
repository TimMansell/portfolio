import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Location from '../Location';

describe('Location', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Location />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Location />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
