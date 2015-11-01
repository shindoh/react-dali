import ReactReconciler from 'react/lib/ReactReconciler';
import ReactElement from 'react/lib/ReactElement';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactInstanceHandles from 'react/lib/ReactInstanceHandles';
import ReactUpdates from 'react/lib/ReactUpdates';

import ReactDaliInjection from './ReactDaliInjection';

//brief to react mount

ReactDaliInjection.inject();

var TopLevelWraper = function() {};
TopLevelWraper.prototype.inReactComponent = {};
TopLevelWraper.prototype.render = function(){
	return this.props;
}

export default class ReactDail{

	static render(nextElement, container){

		var nextWrappedelement = new ReactElement(
			TopLevelWraper,
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
			(componentInstance) => {
		        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);

				transaction.perform(
					(componentInstance,
					 rootID, 
					 container, 
					 transaction, 
					 shouldReuseMarkup, 
					 context) => {
					 	var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
						componentInstance._renderedComponent._topLevelWrapper = componentInstance;
 // 						ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);

					},
					null,
					componentInstance,
				    reactRootID,
				    container,
			        transaction,
			        false,  
			        {}	// ?? context meaning in here
				);

		        ReactUpdates.ReactReconcileTransaction.release(transaction);	
			},
			componentInstance
		);

	}
}










