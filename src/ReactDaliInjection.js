import ReactInjection from 'react/lib/ReactInjection';
import ReactDefaultBatchingStrategy from 'react/lib/ReactDefaultBatchingStrategy';

import ReactDaliReconcileTransaction from './ReactDaliReconcileTransaction';
import ReactDaliComponent from './ReactDaliComponent';
import createReactRootIndex from './createReactRootIndex';

export default class ReactDaliInjection{

	static inject(){


	  ReactInjection.Updates.injectReconcileTransaction(ReactDaliReconcileTransaction);
	  
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

	  ReactInjection.NativeComponent.injectGenericComponentClass(
	    ReactDaliComponent
	  );

      ReactInjection.RootIndex.injectCreateReactRootIndex(createReactRootIndex);

	}
}
