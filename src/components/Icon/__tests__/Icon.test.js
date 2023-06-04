import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

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
  it('should render my default Icon', () => {
    const props = {
      ...defaultprops,
    };

    render(<Icon {...props} />);
  });

  it('should match snapshot', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
      size: 'md',
      padded: true,
    };

    const { asFragment } = render(<Icon {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a custom class', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
    };

    const { getByTestId } = render(<Icon {...props} />);

    expect(getByTestId('icon')).toHaveClass('test-class');
  });

  it('should add a size class', () => {
    const props = {
      ...defaultprops,
      size: 'md',
    };

    const { getByTestId } = render(<Icon {...props} />);

    expect(getByTestId('icon')).toHaveClass('iconMd');
  });

  it('should add a margin', () => {
    const props = {
      ...defaultprops,
      padded: true,
    };

    const { getByTestId } = render(<Icon {...props} />);

    expect(getByTestId('icon')).toHaveClass('iconPadded');
  });
});

// Custom icons.
describe('Icons', () => {
  it('should render a custom class', () => {
    const props = {
      ...defaultprops,
      className: 'test-class',
    };

    const { getByTestId } = render(<IconChevronDown {...props} />);

    expect(getByTestId('icon')).toHaveClass('test-class');
  });

  it('should have a padded prop', () => {
    const props = {
      ...defaultprops,
      padded: true,
    };

    const { getByTestId } = render(<IconChevronDown {...props} />);

    expect(getByTestId('icon')).toHaveClass('iconPadded');
  });

  it('should have a size prop', () => {
    const props = {
      ...defaultprops,
      size: 'md',
    };

    const { getByTestId } = render(<IconChevronDown {...props} />);

    expect(getByTestId('icon')).toHaveClass('iconMd');
  });

  it('should render my IconChevronDown', () => {
    render(<IconChevronDown />);
  });

  it('should render my IconAngleUp', () => {
    render(<IconAngleUp />);
  });

  it('should render my IconTerminal', () => {
    render(<IconTerminal />);
  });

  it('should render my IconCode', () => {
    render(<IconCode />);
  });

  it('should render my IconTasks', () => {
    render(<IconTasks />);
  });

  it('should render my IconCodeBranch', () => {
    render(<IconCodeBranch />);
  });

  it('should render my IconCodeLaptop', () => {
    render(<IconCodeLaptop />);
  });

  it('should render my IconMugHot', () => {
    render(<IconMugHot />);
  });

  it('should render my IconQuoteLeft', () => {
    render(<IconQuoteLeft />);
  });

  it('should render my IconQuoteRight', () => {
    render(<IconQuoteRight />);
  });

  it('should render my IconCogs', () => {
    render(<IconCogs />);
  });

  it('should render my IconBug', () => {
    render(<IconBug />);
  });

  it('should render my IconTools', () => {
    render(<IconTools />);
  });

  it('should render my IconCss3Alt', () => {
    render(<IconCss3Alt />);
  });

  it('should render my IconJs', () => {
    render(<IconJs />);
  });

  it('should render my IconLinkedin', () => {
    render(<IconLinkedin />);
  });

  it('should render my IconTwitter', () => {
    render(<IconTwitter />);
  });

  it('should render my IconGithub', () => {
    render(<IconGithub />);
  });

  it('should render my IconAppStoreIos', () => {
    render(<IconAppStoreIos />);
  });
});
