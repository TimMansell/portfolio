import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Icon, {
  IconChevronDown,
  IconAngleUp,
  IconTerminal,
  IconCode,
  IconTasks,
  IconCodeBranch,
  IconCodeLaptop,
  IconMugHot,
  IconQuoteLeft,
  IconQuoteRight,
  IconCogs,
  IconBug,
  IconTools,
  IconCss3Alt,
  IconJs,
  IconLinkedin,
  IconTwitter,
  IconGithub,
  IconAppStoreIos,
} from '../Icon';

const defaultprops = {
  name: ['fab', 'css3-alt'],
};

describe('Default Icon', () => {
  it('should match snapshot', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
      size: 'md',
      padded: true,
    };

    const snapshot = renderer.create(<Icon {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render my default Icon', () => {
    const props = {
      ...defaultprops,
    };

    const wrapper = mount(<Icon {...props} />);

    expect(wrapper.props().name).toEqual(props.name);
  });

  it('should render a custom class', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should add a size class', () => {
    const props = {
      ...defaultprops,
      size: 'md',
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('iconMd')).toEqual(true);
  });

  it('should add a margin', () => {
    const props = {
      ...defaultprops,
      padded: true,
    };

    const wrapper = shallow(<Icon {...props} />);

    expect(wrapper.hasClass('iconPadded')).toEqual(true);
  });
});

// Custom icons.
describe('Icons', () => {
  it('should render a custom class', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should have a padded prop', () => {
    const props = {
      ...defaultprops,
      padded: true,
    };

    const wrapper = shallow(<IconChevronDown {...props} />);

    expect(wrapper.props().padded).toEqual(props.padded);
  });

  it('should have a size prop', () => {
    const props = {
      ...defaultprops,
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

  it('should render my IconCode', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCode />);
  });

  it('should render my IconTasks', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconTasks />);
  });

  it('should render my IconCodeBranch', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCodeBranch />);
  });

  it('should render my IconCodeLaptop', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCodeLaptop />);
  });

  it('should render my IconMugHot', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconMugHot />);
  });

  it('should render my IconQuoteLeft', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconQuoteLeft />);
  });

  it('should render my IconQuoteRight', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconQuoteRight />);
  });

  it('should render my IconCogs', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCogs />);
  });

  it('should render my IconBug', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconBug />);
  });

  it('should render my IconTools', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconTools />);
  });

  it('should render my IconCss3Alt', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconCss3Alt />);
  });

  it('should render my IconJs', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconJs />);
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

  it('should render my IconAppStoreIos', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<IconAppStoreIos />);
  });
});
