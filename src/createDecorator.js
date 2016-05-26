import { inject } from 'aurelia-framework'
import { bindActionCreators } from 'redux'

export const createDependencies = (store, actionCreators) => {
  const actionsCallbacks =
    bindActionCreators(actionCreators, store.dispatch)
  return [store, actionsCallbacks]
}

export const createDecroator = store => actionCreators => {
  const actionsCallbacks =
    bindActionCreators(actionCreators, store.dispatch)
  return inject(store, actionsCallbacks)
}
