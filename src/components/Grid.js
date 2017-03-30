import React from 'react';
import GridItem from './GridItem';
import './Grid.css';

class Grid extends React.Component {
  render() {
    const gridItems =
    this.props.items.map((gridItem, index) => {
      return <GridItem payload={gridItem} key={index}/>;
    });

    return (
			<div className="programs-grid">
        {gridItems}
			</div>
		);
  }
}

Grid.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default Grid;
