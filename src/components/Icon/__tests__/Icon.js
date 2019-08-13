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
  IconGithub
} from '../Icon';

describe('Default Icon', () => {
  it('should match snapshot', () => {
    const props = {
      name: [
        'fab',
        'css3-alt'
      ],
      className: 'test-class',
      size: 'md',
      padded: true
    };

    const snapshot = renderer.create(<Icon {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render my default Icon', () => {
    const props = {
      name: [
        'fa',
        'code'
      ]
    };

    const wrapper = mount(<Icon {...props} />);

    expect(wrapper.props().name).toEqual(props.name);
  });

  it('should render a custom class', () => {
    const props = {
      className: 'test-class'
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should add a size class', () => {
    const props = {
      size: 'md'
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('icon--md')).toEqual(true);
  });

  it('should add a margin', () => {
    const props = {
      padded: true
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('icon--padded')).toEqual(true);
  });
});

// Custom icons.
describe('Icons', () => {
  it('should render a custom class', () => {
    const props = {
      className: 'test-class'
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should have a padded prop', () => {
    const props = {
      padded: true
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.props().padded).toEqual(props.padded);
  });

  it('should have a size prop', () => {
    const props = {
      size: 'md'
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.props().size).toEqual(props.size);
  });

  it('should render my IconChevronDown', () => {
    const wrapper = shallow(<IconChevronDown />);
  });

  it('should render my IconAngleUp', () => {
    const wrapper = shallow(<IconAngleUp />);
  });

  it('should render my IconTerminal', () => {
    const wrapper = shallow(<IconTerminal />);
  });

  it('should render my IconAngleUp', () => {
    const wrapper = shallow(<IconAngleUp />);
  });

  it('should render my IconClipboardList', () => {
    const wrapper = shallow(<IconClipboardList />);
  });

  it('should render my IconGamepad', () => {
    const wrapper = shallow(<IconGamepad />);
  });

  it('should render my IconDesktop', () => {
    const wrapper = shallow(<IconDesktop />);
  });

  it('should render my IconChalkboardTeacher', () => {
    const wrapper = shallow(<IconChalkboardTeacher />);
  });

  it('should render my IconCode', () => {
    const wrapper = shallow(<IconCode />);
  });

  it('should render my IconCodeBranch', () => {
    const wrapper = shallow(<IconCodeBranch />);
  });

  it('should render my IconMugHot', () => {
    const wrapper = shallow(<IconMugHot />);
  });

  it('should render my IconBicycle', () => {
    const wrapper = shallow(<IconBicycle />);
  });

  it('should render my IconQuoteLeft', () => {
    const wrapper = shallow(<IconQuoteLeft />);
  });

  it('should render my IconQuoteRight', () => {
    const wrapper = shallow(<IconQuoteRight />);
  });

  it('should render my IconCss3Alt', () => {
    const wrapper = shallow(<IconCss3Alt />);
  });

  it('should render my IconJs', () => {
    const wrapper = shallow(<IconJs />);
  });

  it('should render my IconTrello', () => {
    const wrapper = shallow(<IconTrello />);
  });

  it('should render my IconLinkedin', () => {
    const wrapper = shallow(<IconLinkedin />);
  });

  it('should render my IconTwitter', () => {
    const wrapper = shallow(<IconTwitter />);
  });

  it('should render my IconGithub', () => {
    const wrapper = shallow(<IconGithub />);
  });
});
