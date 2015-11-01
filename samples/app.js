import React, {Component} from '../src/react';
import ReactDali from '../src/ReactDali';

var Dali = require('../build/Release/dali');

let window = {
  x: 800,
  y: 500,
  width: 800,
  height: 600,
  transparent: false,
  name: 'my-first-dali-app'
};

let viewMode = {
  'stereoscopic-mode': 'mono',
  'stereo-base': 65
};

let options = {
  'window': window,
  'view-mode': viewMode
};

var dali = Dali(options);


class App extends Component{

	componentWillMount(){
		return({
			message : 'hello'
		})
	}

	render() {
		return (
			<layer>
				<textfield placeholderText={this.message}>
				</textfield>
			</layer>
			)
		
	}
}

ReactDali.render(<App/>, dali);
