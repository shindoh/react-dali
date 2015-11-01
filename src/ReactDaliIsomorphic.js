import ReactChildren from 'react/lib/ReactChildren';
import ReactComponent from 'react/lib/ReactComponent';
import ReactClass from 'react/lib/ReactClass';
import ReactElement from 'react/lib/ReactElement';
import ReactElementValidator from 'react/lib/ReactElementValidator';
import ReactPropTypes from 'react/lib/ReactPropTypes';
import ReactVersion from 'react/lib/ReactVersion';

var {
	createElement,
	createFactory,
	cloneElement
} = ReactElement;

var React = {

  Component: ReactComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  version: ReactVersion,

};

export default React;