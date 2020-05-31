import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SectionWrap from '../SectionWrap';

describe('Section', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<SectionWrap />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<SectionWrap />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render a default component', () => {
    const wrapper = shallow(<SectionWrap />);

    // expect(wrapper.hasClass('section-wrap')).toBeTruthy();
    expect(wrapper.find('.container')).toHaveLength(1);
  });

  it('should wrap an element', () => {
    const wrapper = shallow(
      <SectionWrap>
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('p').text()).toEqual('test');
  });

  it('should display a primary background', () => {
    const wrapper = shallow(<SectionWrap background="primary" />);

    expect(wrapper.hasClass('bgPrimary')).toBeTruthy();
  });

  it('should display a secondary background', () => {
    const wrapper = shallow(<SectionWrap background="secondary" />);

    expect(wrapper.hasClass('bgSecondary')).toBeTruthy();
  });

  it('should display a tertiary background', () => {
    const wrapper = shallow(<SectionWrap background="tertiary" />);

    expect(wrapper.hasClass('bgTertiary')).toBeTruthy();
  });

  it('should render a medium container', () => {
    const wrapper = shallow(<SectionWrap container="medium" />);

    expect(wrapper.find('.container').hasClass('medium')).toBeTruthy();
  });

  it('should render a large container', () => {
    const wrapper = shallow(<SectionWrap container="large" />);

    expect(wrapper.find('.container').hasClass('large')).toBeTruthy();
  });

  it('should bind an id', () => {
    const wrapper = shallow(<SectionWrap id="test" />);

    expect(wrapper.find('#test')).toHaveLength(1);
  });
});
