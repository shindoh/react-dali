import Transaction from 'react/lib/Transaction';
import PooledClass from 'react/lib/PooledClass';
import CallbackQueue from 'react/lib/CallbackQueue';

var ON_DOM_READY_QUEUE = {

	initialize: function() {
		this.reactMountReady.reset();
	},

	close: function() {
		this.reactMountReady.notifyAll();
	}
};

var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUE];

function ReactDaliReconcileTransaction() {
	this.reinitializeTransaction();
	this.reactMountReady = CallbackQueue.getPooled(null);
}

var Mixin = {
	getTransactionWrappers: function() {
		return TRANSACTION_WRAPPERS;
	},

	getReactMountReady: function() {
		return this.reactMountReady;
	},

	destructor: function() {
		CallbackQueue.release(this.reactMountReady);
		this.reactMountReady = null;
	},
}

Object.assign(
	ReactDaliReconcileTransaction.prototype,
	Transaction.Mixin,
	Mixin
);

PooledClass.addPoolingTo(ReactDaliReconcileTransaction);

export default ReactDaliReconcileTransaction;
