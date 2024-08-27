
> [!warning] Haven't tried this one yet

Pass private members to **state** objects and <mark style="background: #ABF7F7A6;">share</mark> them between each other

---

## to test

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
