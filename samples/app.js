import React, {Component} from '../src/react';
import ReactDali from '../src/ReactDali';

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

// will be defined by dali-node
var stage = {};


/* how to know element type (custon-class, generic-class ... etc) 
 * when jsx is exchanged as babel-node. babel-node know that?
 */
ReactDali.render(<App/>, stage);
