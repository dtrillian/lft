import React from 'react';
import './GridItem.css';

class GridItem extends React.Component {
  render() {

    const itemStyle = {
      backgroundImage: `url(img/${this.props.payload.image})`
    };

    return (
			<div className="grid-item">
        <div className="grid-item__content" style={itemStyle}>
          <div className="grid-item__title">
            {this.props.payload.title}
          </div>
        </div>
			</div>
		);
  }
}

GridItem.propTypes = {
  payload: React.PropTypes.object.isRequired
}

export default GridItem;
