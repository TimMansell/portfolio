import React from 'react';

export default class SkillsItem extends React.Component {
    render() {
        return (
			<div className="stack__item">
				<a href={this.props.stack.url} target="_blank"  rel="noopener noreferrer">
					<img 
						src={require(`./img/${this.props.stack.img}`)} 
						alt={this.props.stack.name} 
						className="stack__image img--responsive"
						width={this.props.stack.width}
						title={this.props.stack.name} 
					/>
				</a>
			</div>
		);
    }
}