import ReactMultiChild from 'react/lib/ReactMultiChild';

class ReactDaliComponent{

	displayName : 'ReactDaliComponent';

	//should know details of this properties.
	constructor(tag) {
	  this._tag = tag.toLowerCase();
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._nodeWithLegacyProperties = null;
	}

	construct(element) {
	  this._currentElement = element;
	}

	mountComponent(rootID, transaction, context) {
		this._rootNodeID = rootID;

		var props = this._currentElement.props;

		switch(this._tag) {
			case 'layer':
				break;

			case 'textfield':

				break;
		};



		//check 'createInitialChildren' in ReactDOMComponent.js for childen.

	}
};

Object.assign(ReactDaliComponent.prototype, ReactMultiChild.Mixin);

export default ReactDaliComponent;