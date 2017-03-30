import React from 'react';
import Card from './components/Card';
import Grid from './components/Grid';

import programs from './fixtures/programs';

console.debug(programs);

class App extends React.Component {
  render() {
    return (
			<div id="app">
        <div className="header">
				  <Card />
        </div>
        <Grid items={programs}/>
			</div>
		);
  }
}

export default App;
