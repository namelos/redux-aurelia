## Redux-aurelia

### Install
```
npm install --save redux-aurelia
```

### Usage

```js
// just set up redux store as normal
import { createStore } from 'redux'

import { createDecroator, createModule } from 'redux-aurelia'

import counter from './counter'
export { increment, decrement, add } from './counter'

const reducer = combineReducers({ counter })

export const store = createStore(reducer)

// setting up your decorator
export const decorator = createDecroator(store)
export const module = createModule(store)
```

```js
// some-vm.js
import { decorator, increment, decrement, add } from './store'

@decorator({ increment, decrement, add })
export default class {

  constructor(store, { increment, decrement, add }) {
    this.store = store
    this.increment = increment
    this.decrement = decrement
    this.add = add
    this.sync()
    store.subscribe(this.sync)
  }

  sync = () => {
    this.counter = this.store.getState().counter
  }
}
```

```html
<!--some-view.html-->
<template>
  <p>counter: ${counter}</p>
  <button click.trigger="increment()">increment</button>
  <button click.trigger="decrement()">decrement</button>
  <button click.trigger="add(5)">add 5</button>
  <input type="text" value.bind="input">
  <button click.trigger="add(input)">add n</button>
</template>
```

### Bonus Magic:
You could easily set up a module with out the model view class, most of the time...

```js
// some-other-vm.js
import { module, increment, decrement, add } from './store'

export default module({ increment, decrement, add })
// Boom, as easy as done.
```

```html
<!--some-other-view.html-->
<template>
  <p>counter: ${state.counter}</p>
  <button click.trigger="increment()">increment</button>
  <button click.trigger="decrement()">decrement</button>
  <button click.trigger="add(5)">add 5</button>
  <input type="text" value.bind="input">
  <button click.trigger="add(input)">add n</button>
</template>
```
