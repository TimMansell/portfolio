import { it, describe, expect } from 'vitest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../Button';

const props = {
  href: 'test href',
  target: 'test target',
  title: 'test title',
};

describe('Button', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Button {...props}>text</Button>);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<Button {...props}>text</Button>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should have correct properties', () => {
    const wrapper = shallow(<Button {...props}>text</Button>);

    expect(wrapper.props().href).toBe(props.href);
    expect(wrapper.props().target).toBe(props.target);
    expect(wrapper.props().title).toBe(props.title);
  });
});
