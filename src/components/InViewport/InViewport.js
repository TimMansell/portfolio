import React from 'react';
import PropTypes from 'prop-types';
import inViewport from 'in-viewport';

export class InViewport extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isInViewport: false
    };

    this.refInViewport = React.createRef();
  }

  componentDidMount () {
    const element = this.refInViewport.current;

    inViewport(element, this.visible);
  }

  visible = () => {
    this.setState(prevState => ({
      isInViewport: true
    }));
  }

  render () {
    const { children } = this.props;
    const { isInViewport } = this.state;

    return <div ref={this.refInViewport}>
      {!isInViewport && <span>&nbsp;</span> }
      {isInViewport && <span>{children}</span>}
    </div>;
  }
}

InViewport.propTypes = {
  children: PropTypes.node.isRequired
};

export default InViewport;
