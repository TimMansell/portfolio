import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SectionWrap from '../SectionWrap';

const defaultProps = {
  id: 'test',
  type: 'primary',
};

describe('Section', () => {
  it('should render my component', () => {
    render(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a default component', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps} container="medium">
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section')).toBeInTheDocument();
  });

  it('should wrap an element', () => {
    const { getByText } = render(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(getByText('test')).toBeInTheDocument();
  });

  it('should display a primary background', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section')).toHaveClass('bgPrimary');
  });

  it('should display a secondary background', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps} type="secondary">
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section')).toHaveClass('bgSecondary');
  });

  it('should display a tertiary background', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps} type="tertiary">
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section')).toHaveClass('bgTertiary');
  });

  it('should render a medium container', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps} container="medium">
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section-container')).toHaveClass('containerMedium');
  });

  it('should render a large container', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps} container="large">
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section-container')).toHaveClass('containerLarge');
  });

  it('should bind an id', () => {
    const { getByTestId } = render(
      <SectionWrap {...defaultProps}>
        <p>test</p>
      </SectionWrap>
    );

    expect(getByTestId('section')).toHaveAttribute('id', defaultProps.id);
  });
});
