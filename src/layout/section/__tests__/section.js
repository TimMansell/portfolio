import React from 'react';
import { shallow } from 'enzyme';

import Section from '../section';

describe("Section", () => {
    it("should render my component", () => {
        const wrapper = shallow(<Section />);
    });

    it("should render a default component", () => {
        const wrapper = shallow(<Section />);

        expect(wrapper.hasClass('layout-section')).toBeTruthy();
        expect(wrapper.find('.container')).toHaveLength(1);
    });

    it("should wrap an element", () => {
        const wrapper = shallow(<Section><p>test</p></Section>);

        expect(wrapper.find('p').text()).toEqual('test');
    });

    it("should display a primary background", () => {
        const wrapper = shallow(<Section background="primary" />);

        expect(wrapper.hasClass('bg--primary')).toBeTruthy();
    });

    it("should display a secondary background", () => {
        const wrapper = shallow(<Section background="secondary" />);

        expect(wrapper.hasClass('bg--secondary')).toBeTruthy();
    });

    it("should display a tertiary background", () => {
        const wrapper = shallow(<Section background="tertiary" />);

        expect(wrapper.hasClass('bg--tertiary')).toBeTruthy();
    });

    it("should render a medium container", () => {
        const wrapper = shallow(<Section container="medium" />);

        expect(wrapper.find('.container--medium')).toHaveLength(1);
    });

    it("should render a large container", () => {
        const wrapper = shallow(<Section container="large" />);

        expect(wrapper.find('.container--large')).toHaveLength(1);
    });

    it("should bind an id", () => {
        const wrapper = shallow(<Section id="test" />);

        expect(wrapper.find('#test')).toHaveLength(1);
    });
});
