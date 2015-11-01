import ReactDali from './ReactDali';
import ReactDaliIsomorphic from './ReactDaliIsomorphic';


var React = {};

React = Object.assign(React, ReactDaliIsomorphic);

React = Object.assign(React, {
	render: ReactDali.render
});

export default React;