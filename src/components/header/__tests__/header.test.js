import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

const props = {
  title: 'Test Title'
}

describe("Header", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header {...props} />);
  });

  it("Should display a title", () => {
    const wrapper = shallow(<Header {...props} />);

    expect(
      wrapper.find('[data-test-heading-title]').text()
      ).toEqual(props.title);
  });

  it("Should display a sub-title", () => {
    const wrapper = shallow(<Header {...props} text="text" />);

    expect(
      wrapper.find('[data-test-heading-description]').text()
    ).toEqual('text');
  });

  it("Should display a primary class", () => {
    const wrapper = shallow(<Header {...props} primary />);

    expect(
      wrapper.hasClass('heading--primary')
    ).toBeTruthy();
  });

  it("Should display a secondary class", () => {
    const wrapper = shallow(<Header {...props} secondary />);

    expect(
      wrapper.hasClass('heading--secondary')
    ).toBeTruthy();
  });

  it("Should display a teritiary class", () => {
    const wrapper = shallow(<Header {...props} tertiary />);

    expect(
      wrapper.hasClass('heading--tertiary')
    ).toBeTruthy();
  });
});
