## idea

Pass private members to **state** objects and <mark style="background: #ABF7F7A6;">share</mark> them between each other

> [!warning] Doesn't work because of [[javascript]]. 
> A good idea though.
- it is good enough for the State classes to not be exported, this makes the ==public== `stateState`  method unusable outside the module

---
## implementation in [[typescript]]

```ts
// player.ts

abstract class State {
	#setStateAction: (state: State) => void
	
	constructor(setStateAction: (state: State) => void) {
		this.#setStateAction = setStateAction
	}

	abstract play()
}

class ReadyState() {
	play() {
		
	}
}

class Player {
	#state: State

	constructor() {
		this.#state = new ReadyState(this.#setState)
	}

	play() {
		this.#state.play()
	}

	#setState(state: State) {
		this.#state = state
	}
}
```
