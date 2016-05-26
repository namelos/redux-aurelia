'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDecroator = exports.createDependencies = undefined;

var _aureliaFramework = require('aurelia-framework');

var _redux = require('redux');

var createDependencies = exports.createDependencies = function createDependencies(store, actionCreators) {
  var actionsCallbacks = (0, _redux.bindActionCreators)(actionCreators, store.dispatch);
  return [store, actionsCallbacks];
};

var createDecroator = exports.createDecroator = function createDecroator(store) {
  return function (actionCreators) {
    var actionsCallbacks = (0, _redux.bindActionCreators)(actionCreators, store.dispatch);
    return (0, _aureliaFramework.inject)(store, actionsCallbacks);
  };
};