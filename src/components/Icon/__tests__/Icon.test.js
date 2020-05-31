import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Icon, {
  IconChevronDown,
  IconAngleUp,
  IconTerminal,
  IconClipboardList,
  IconGamepad,
  IconDesktop,
  IconChalkboardTeacher,
  IconCode,
  IconCodeBranch,
  IconMugHot,
  IconBicycle,
  IconQuoteLeft,
  IconQuoteRight,
  IconCss3Alt,
  IconJs,
  IconTrello,
  IconLinkedin,
  IconTwitter,
  IconGithub,
} from '../Icon';

describe('Default Icon', () => {
  it('should match snapshot', () => {
    const props = {
      name: ['fab', 'css3-alt'],
      className: 'test-class',
      size: 'md',
      padded: true,
    };

    const snapshot = renderer.create(<Icon {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render my default Icon', () => {
    const props = {
      name: ['fa', 'code'],
    };

    const wrapper = mount(<Icon {...props} />);

    expect(wrapper.props().name).toEqual(props.name);
  });

  it('should render a custom class', () => {
    const props = {
      className: 'test-class',
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should add a size class', () => {
    const props = {
      size: 'md',
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('md')).toEqual(true);
  });

  it('should add a margin', () => {
    const props = {
      padded: true,
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('padded')).toEqual(true);
  });
});

// Custom icons.
describe('Icons', () => {
  it('should render a custom class', () => {
    const props = {
      className: 'test-class',
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should have a padded prop', () => {
    const props = {
      padded: true,
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.props().padded).toEqual(props.padded);
  });

  it('should have a size prop', () => {
    const props = {
      size: 'md',
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.props().size).toEqual(props.size);
  });

  it('should render my IconChevronDown', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconChevronDown />);
  });

  it('should render my IconAngleUp', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconAngleUp />);
  });

  it('should render my IconTerminal', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconTerminal />);
  });

  it('should render my IconClipboardList', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconClipboardList />);
  });

  it('should render my IconGamepad', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconGamepad />);
  });

  it('should render my IconDesktop', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconDesktop />);
  });

  it('should render my IconChalkboardTeacher', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconChalkboardTeacher />);
  });

  it('should render my IconCode', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCode />);
  });

  it('should render my IconCodeBranch', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCodeBranch />);
  });

  it('should render my IconMugHot', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconMugHot />);
  });

  it('should render my IconBicycle', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconBicycle />);
  });

  it('should render my IconQuoteLeft', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconQuoteLeft />);
  });

  it('should render my IconQuoteRight', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconQuoteRight />);
  });

  it('should render my IconCss3Alt', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCss3Alt />);
  });

  it('should render my IconJs', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconJs />);
  });

  it('should render my IconTrello', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconTrello />);
  });

  it('should render my IconLinkedin', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconLinkedin />);
  });

  it('should render my IconTwitter', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconTwitter />);
  });

  it('should render my IconGithub', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconGithub />);
  });
});
