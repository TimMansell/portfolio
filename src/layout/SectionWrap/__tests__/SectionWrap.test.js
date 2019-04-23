import React from 'react';
import { shallow } from 'enzyme';

import SectionWrap from '../SectionWrap';

describe("Section", () => {
    it("should render my component", () => {
        const wrapper = shallow(<SectionWrap />);
    });

    it("should render a default component", () => {
        const wrapper = shallow(<SectionWrap />);

        expect(wrapper.hasClass('layout-section')).toBeTruthy();
        expect(wrapper.find('.container')).toHaveLength(1);
    });

    it("should wrap an element", () => {
        const wrapper = shallow(<SectionWrap><p>test</p></SectionWrap>);

        expect(wrapper.find('p').text()).toEqual('test');
    });

    it("should display a primary background", () => {
        const wrapper = shallow(<SectionWrap background="primary" />);

        expect(wrapper.hasClass('bg--primary')).toBeTruthy();
    });

    it("should display a secondary background", () => {
        const wrapper = shallow(<SectionWrap background="secondary" />);

        expect(wrapper.hasClass('bg--secondary')).toBeTruthy();
    });

    it("should display a tertiary background", () => {
        const wrapper = shallow(<SectionWrap background="tertiary" />);

        expect(wrapper.hasClass('bg--tertiary')).toBeTruthy();
    });

    it("should render a medium container", () => {
        const wrapper = shallow(<SectionWrap container="medium" />);

        expect(wrapper.find('.container--medium')).toHaveLength(1);
    });

    it("should render a large container", () => {
        const wrapper = shallow(<SectionWrap container="large" />);

        expect(wrapper.find('.container--large')).toHaveLength(1);
    });

    it("should bind an id", () => {
        const wrapper = shallow(<SectionWrap id="test" />);

        expect(wrapper.find('#test')).toHaveLength(1);
    });
});
