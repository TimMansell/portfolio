import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Tagline from '../Tagline';

describe('Tagline', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Tagline />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Tagline />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
