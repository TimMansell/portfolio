import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('Main', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Main />);
  });
});
