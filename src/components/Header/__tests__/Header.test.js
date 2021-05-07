import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from '../Header';

const props = {
  title: 'Test Title',
  text: 'text',
  type: 'primary',
};

describe('Header', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Header {...props} />);
  });

  it('Should display a title', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('[data-test="heading-title"]').text()).toEqual(
      props.title
    );
  });

  it('Should display a sub-title', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('[data-test="heading-description"]').text()).toEqual(
      'text'
    );
  });

  it('Should display a primary class', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.hasClass('headingPrimary')).toBeTruthy();
  });

  it('Should display a secondary class', () => {
    const wrapper = shallow(<Header {...props} type="secondary" />);

    expect(wrapper.hasClass('headingSecondary')).toBeTruthy();
  });

  it('Should display a teritiary class', () => {
    const wrapper = shallow(<Header {...props} type="tertiary" />);

    expect(wrapper.hasClass('headingTertiary')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Header {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
