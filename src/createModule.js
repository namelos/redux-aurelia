import { createDependencies } from './createDecorator'

export const createModule = store => actionCreators => {
  return class {
    static inject = () =>
      createDependencies(store, actionCreators)

    constructor(store, actions) {
      this.store = store
      Object.keys(actions).map(action => {
        this[action] = actions[action]
      })
      this.sync()
      store.subscribe(this.sync)
    }

    sync = () =>
      this.state = this.store.getState()
  }
}
