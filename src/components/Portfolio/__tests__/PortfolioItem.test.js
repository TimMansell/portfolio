import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PortfolioItem from '../PortfolioItem';

const defaultProps = {
  title: 'Title',
  years: ['2020'],
  types: ['Personal'],
  description: 'Description',
  tech: ['Tech', 'Tech 2'],
  url: 'url.com',
  img: 'test',
  source: 'source',
};

describe('PortfolioItem', () => {
  it('should render my component', () => {
    render(<PortfolioItem {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<PortfolioItem {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render source button', () => {
    const { getByText } = render(<PortfolioItem {...defaultProps} />);

    expect(getByText('View source')).toBeInTheDocument();
  });

  it('should not render source button', () => {
    const { title, years, description, tech, url, img, types } = defaultProps;

    const props = {
      title,
      years,
      types,
      description,
      tech,
      url,
      img,
    };

    const { queryByText } = render(<PortfolioItem {...props} />);

    expect(queryByText('View source')).not.toBeInTheDocument();
  });
});
