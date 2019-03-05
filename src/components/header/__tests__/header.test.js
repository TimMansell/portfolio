import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

describe("Header", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header />);
  });

  it("Should display a title", () => {
    const wrapper = shallow(<Header title="t1itle" />);

    expect(
      wrapper.find('[data-test-heading-title]').text()
      ).toEqual('title');
  });

  it("Should display a sub-title", () => {
    const wrapper = shallow(<Header text="text" />);

    expect(
      wrapper.find('[data-test-heading-description]').text()
    ).toEqual('text');
  });

  it("Should display a primary class", () => {
    const wrapper = shallow(<Header primary />);

    expect(
      wrapper.hasClass('heading--primary')
    ).toBeTruthy();
  });

  it("Should display a secondary class", () => {
    const wrapper = shallow(<Header secondary />);

    expect(
      wrapper.hasClass('heading--secondary')
    ).toBeTruthy();
  });

  it("Should display a teritiary class", () => {
    const wrapper = shallow(<Header tertiary />);

    expect(
      wrapper.hasClass('heading--tertiary')
    ).toBeTruthy();
  });
});
