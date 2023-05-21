import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Copyright from '../Copyright';

describe('Copyright', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Copyright />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Copyright />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
