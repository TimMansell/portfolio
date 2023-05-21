import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CurrentStack from '../CurrentStack';

describe('CurrentStack', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<CurrentStack />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<CurrentStack />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
