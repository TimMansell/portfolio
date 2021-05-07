import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SectionWrap from '../SectionWrap';

const defaultProps = {
  id: 'test',
  type: 'primary',
};

describe('Section', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );
  });

  it('should match snapshot', () => {
    const snapshot = renderer
      .create(
        <SectionWrap {...defaultProps}>
          <p>test</p>
        </SectionWrap>
      )
      .toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render a default component', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('.container')).toHaveLength(1);
  });

  it('should wrap an element', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('p').text()).toEqual('test');
  });

  it('should display a primary background', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.hasClass('bgPrimary')).toBeTruthy();
  });

  it('should display a secondary background', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps} type="secondary">
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.hasClass('bgSecondary')).toBeTruthy();
  });

  it('should display a tertiary background', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps} type="tertiary">
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.hasClass('bgTertiary')).toBeTruthy();
  });

  it('should render a medium container', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps} container="medium">
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('.container').hasClass('containerMedium')).toBeTruthy();
  });

  it('should render a large container', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps} container="large">
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('.container').hasClass('containerLarge')).toBeTruthy();
  });

  it('should bind an id', () => {
    const wrapper = shallow(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(wrapper.find('#test')).toHaveLength(1);
  });
});
