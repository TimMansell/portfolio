import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Labels from '../Labels';

const defaultProps = {
  labels: [
    {
      items: ['label 1', 'label 2', 'label 3'],
      type: 'primary',
    },
    {
      items: ['label 4', 'label 5'],
      type: 'secondary',
    },
  ],
};

describe('Label', () => {
  it('should render my component', () => {
    const props = {
      ...defaultProps,
    };

    // eslint-disable-next-line
    const wrapper = shallow(<Labels {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
    };
    const snapshot = renderer.create(<Labels {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render as large label', () => {
    const props = {
      ...defaultProps,
      size: 'lg',
    };
    const wrapper = shallow(<Labels {...props} />);

    expect(wrapper.hasClass('isLarge')).toBeTruthy();
  });

  it('should render as centered', () => {
    const props = {
      ...defaultProps,
      centered: true,
    };
    const wrapper = shallow(<Labels {...props} />);

    expect(wrapper.hasClass('isCentered')).toBeTruthy();
  });

  it('should list correct amount of labels', () => {
    const wrapper = shallow(<Labels {...defaultProps} />);
    const list = wrapper.find('[data-test="labels"]');

    expect(list.children()).toHaveLength(5);
  });
});
