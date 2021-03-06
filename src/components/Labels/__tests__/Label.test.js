import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Label from '../Label';

const defaultProps = {
  label: 'test label',
  type: 'primary',
};

describe('Label', () => {
  it('should render my component', () => {
    const props = {
      ...defaultProps,
    };

    // eslint-disable-next-line
    const wrapper = shallow(<Label {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
    };
    const snapshot = renderer.create(<Label {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should display a primary background', () => {
    const props = {
      ...defaultProps,
    };
    const wrapper = shallow(<Label {...props} />);

    expect(wrapper.hasClass('isPrimary')).toBeTruthy();
  });

  it('should display a secondary background', () => {
    const props = {
      ...defaultProps,
      type: 'secondary',
    };
    const wrapper = shallow(<Label {...props} />);

    expect(wrapper.hasClass('isSecondary')).toBeTruthy();
  });

  it('should display a tertiary background', () => {
    const props = {
      ...defaultProps,
      type: 'tertiary',
    };
    const wrapper = shallow(<Label {...props} />);

    expect(wrapper.hasClass('isTertiary')).toBeTruthy();
  });

  it('should render as large label', () => {
    const props = {
      ...defaultProps,
      size: 'lg',
    };
    const wrapper = shallow(<Label {...props} />);

    expect(wrapper.hasClass('isLarge')).toBeTruthy();
  });
});
