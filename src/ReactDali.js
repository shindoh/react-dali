import ReactReconciler from 'react/lib/ReactReconciler';
import ReactElement from 'react/lib/ReactElement';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactInstanceHandles from 'react/lib/ReactInstanceHandles';
import ReactUpdates from 'react/lib/ReactUpdates';

import invariant from 'invariant';
import ReactDaliInjection from './ReactDaliInjection';

//brief to react mount

ReactDaliInjection.inject();

var TopLevelWrapper = function() {};
TopLevelWrapper.prototype.isReactComponent = {};
TopLevelWrapper.displayName = 'TopLevelWrapper';
TopLevelWrapper.prototype.render = function(){
	return this.props;
}

function mountComponentIntoNode(
	componentInstance: ReactComponent, 
	rootID: number,
	container: any,
    transaction: any,
    context: any) {

	var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);

}

//??? what does mean batch in this case ???
function batchedMountComponentIntoNode(componentInstance, rootID, container, context) {



  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, context);
  ReactUpdates.ReactReconcileTransaction.release(transaction);
}


var ReactDail = {

	render(
		nextElement: ReactElement, 
		context: any
	): void {
			
		invariant(
			(context['BUILD'] && (context['BUILD'].toString().indexOf('Dali')==0)),
			"context must be Dali object.");

		var container = context.stage;

		var nextWrappedelement = new ReactElement(
			TopLevelWrapper,
			null,
			null,
			null,
			null,
			null,
			nextElement
		);

		//in _renderNewRootComponent
		var componentInstance = instantiateReactComponent(nextWrappedelement);

		//register container
		var reactRootID = ReactInstanceHandles.createReactRootID(0);
	
		ReactUpdates.batchedUpdates(
			batchedMountComponentIntoNode,
			componentInstance,
			reactRootID,
			container,
			this.screen);

	}
}






export default ReactDail;






