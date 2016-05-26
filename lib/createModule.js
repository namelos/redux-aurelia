'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModule = undefined;

var _createDecorator = require('./createDecorator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createModule = exports.createModule = function createModule(store) {
  return function (actionCreators) {
    var _class, _temp, _initialiseProps;

    return _temp = _class = function _class(store, actions) {
      var _this = this;

      _classCallCheck(this, _class);

      _initialiseProps.call(this);

      this.store = store;
      Object.keys(actions).map(function (action) {
        _this[action] = actions[action];
      });
      this.sync();
      store.subscribe(this.sync);
    }, _class.inject = function () {
      return (0, _createDecorator.createDependencies)(store, actionCreators);
    }, _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.sync = function () {
        return _this2.state = _this2.store.getState();
      };
    }, _temp;
  };
};