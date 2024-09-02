#typescript 
#practical
#coding

--- 
## Chapter 3
#unions
#literals
realtes to chapter [[Learning TypeScript book#chapter 3 - Unions and literals]]

### The Narrow Trail
Take a look at ./src/index.ts. It contains a runCommands() function you'll be working within.

	Don't worry if you haven't covered functions in TypeScript yet. This project doesn't require knowing []()about how TypeScript works with them.

The game logic you're to write will keep track of four pieces of state:

Available Resource: Which of Food or Water will be available to resupply (see later), initially without a value

Day: What day of travel it is, initially 1
Food: A numeric value for how much food the player has left, initially 5
Water: A numeric value for how much water the player has left, initially 5

**The goal of the game is for the player to still have both Food and Water after Day passes 7.**

Your logic will continuously generate a random number between 1 and 6 to simulate a dice roll for a new day. Each day, one of the following commands will happen based on that rolled number:

1, Food: Subsequent Resupply rolls will increase the player's Food supplies
2, Water: Subsequent Resupply rolls will increase the player's Water supplies
3-6, Resupply:
If no Available Resource value is set: set Available Resource to Food if the rolled number is even or Water if the rolled number is odd
If an Available Resource value is set: increase the corresponding resource by the rolled number, then unset the Available Resource value.
After the dice roll actions are completed, decrease both food and water by 1. If either is 0 then return false.

Once the Day state passes 7 (the player has lasted 7 days with sufficient supplies), return true.

**Examples**

Here's a step-by-step example of a player losing the game:

|     |      |        |     |      |             |     |
| --- | ---- | ------ | --- | ---- | ----------- | --- |
| Day | Roll | Change | New | Food | Water state |     |
| 1   |      |        |     |      |             |     |
|     |      |        |     |      |             |     |
|     |      |        |     |      |             |     |

Day	Roll	Change	New Food State	New Water State
1	3	Available Resource is now Water	4	4
2	4	Increase Water by 4	3	7
3	4	Available Resource is now Food	2	6
4	1	Available Resource is (still) Food	1	5
5	2	Available Resource is now Water	0 💀	4

---

#### Solution

- the solution is based on around the separation of the different commands into specific classes
	- the classes themselves all conform to the same `Command` interface
	- all of the commands get access and modificaction rights of the same set of `game resources`
	- the commands don't know about each other
- the main function decides on which command to use based on the randomNumber that is generated on each `tick`
	- after each `tick` the resources are decreased by `1`

```typescript
function randomInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Command {
	execute(state: GameState): void;
}

class WaterCmd {
	execute(state: GameState): void {
		state.nextSupply = "water";
	}
}

class FoodCmd {
	execute(state: GameState): void {
		state.nextSupply = "food";
	}
}

class ResupplyCmd {
	static canIAnswer(randomNumber: number, state: GameState): boolean {
		if (randomNumber >= 3) {
			new ResupplyCmd().execute(state);
			return true;
		}

		return false;
	}

	execute(state: GameState): void {
		switch (state.nextSupply) {
			case "food":
				state.food += state.randomNumber;
				state.nextSupply = undefined;
				break;
			case "water":
				state.water += state.randomNumber;
				state.nextSupply = undefined;
				break;
			default:
				state.nextSupply = state.randomNumber % 2 === 0 ? "food" : "water";
				break;
		}
	}
}

class GameState {
	food: number = 5;
	water: number = 5;
	nextSupply: "food" | "water" | undefined = undefined;
	randomNumber: number = 0;

	dead(): boolean {
		return this.food <= 0 || this.water <= 0;
	}
}

export function runCommands(): boolean {
	let state = new GameState();

	for (let i = 1; i <= 7; i++) {
		state.randomNumber = randomInteger(1, 6);

		let command: Command;

		// the command classes themselves could also answer on their own if they are applicable for the given random number
		// foodCommand->willYouAnswer()
		switch (state.randomNumber) {
			case 1:
				command = new FoodCmd();
				break;
			case 2:
				command = new WaterCmd();
				break;
			default:
				command = new ResupplyCmd();
				break;
		}

		command.execute(state);

		state.food -= 1;
		state.water -= 1;

		if (state.dead()) {
			return false;
		}
	}

	return true;
}
```

**second solution**
```typescript
function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Command {
  execute(state: GameState): void;
}

abstract class Cmd {
  static canYouAnswer(randomNumber: number, state: GameState): boolean {
    return false
  }
}

class Tmp { }
class WaterCmd extends Cmd implements Command {
  // play around with static blocks
  static hello: Tmp
  static {
    // we can do whatever we want here
    this.hello = new Tmp
  }

  static canYouAnswer(randomNumber: number, state: GameState): boolean {
    if (randomNumber === 2) {
      new WaterCmd().execute(state);
      return true;
    }

    return false;
  }

  execute(state: GameState): void {
    state.nextSupply = "water";
  }
}

class FoodCmd extends Cmd implements Command {
  static canYouAnswer(randomNumber: number, state: GameState): boolean {
    if (randomNumber === 1) {
      new ResupplyCmd().execute(state);
      return true
    }

    return false
  }

  execute(state: GameState): void {
    state.nextSupply = "food";
  }
}

class ResupplyCmd extends Cmd implements Command {
  static canYouAnswer(randomNumber: number, state: GameState): boolean {
    if (randomNumber >= 3) {
      new ResupplyCmd().execute(state);
      return true;
    }

    return false;
  }

  execute(state: GameState): void {
    switch (state.nextSupply) {
      case "food":
        state.food += state.randomNumber;
        state.nextSupply = undefined;
        break;
      case "water":
        state.water += state.randomNumber;
        state.nextSupply = undefined;
        break;
      default:
        state.nextSupply = state.randomNumber % 2 === 0 ? "food" : "water";
        break;
    }
  }
}

class GameState {
  food: number = 5;
  water: number = 5;
  nextSupply: "food" | "water" | undefined = undefined;
  readonly randomNumber: number = 0;

	updateRandomNumber() {
	}

  resourcesDepleted(): boolean {
    return this.food <= 0 || this.water <= 0;
  }
}

export function runCommands(): boolean {
  let state = new GameState();

  const commandClasses = [WaterCmd, FoodCmd, ResupplyCmd];

  for (let i = 1; i <= 7; i++) {
    state.randomNumber = randomInteger(1, 6);

    // this time we use an array of classes to determine if one of the commands should be executed
    // all of the logic is now inside the Command classes
    for (const commandClass of commandClasses) {
      if (commandClass.canYouAnswer(state.randomNumber, state)) {
        break
      }
    }

    state.food -= 1;
    state.water -= 1;
    if (state.resourcesDepleted()) {
      return false;
    }
  }

  return true;
}
```

#### important 📕
- classes are objects as well [[javascript]]
- you can define classes inside any [[closure]] - this makes it easy to define <mark style="background: #FFF3A3A6;">local classes </mark>tied to a specific context
- **static classes** are implemented extremely well in [[javascript]] [doc]
	- you can also use entire <mark style="background: #FFB8EBA6;">static blocks</mark>
	- static classes work just like other [[object]]'s
- you can implement <mark style="background: #ABF7F7A6;">interfaces</mark> in [[typescript]] using the
	`implements` keyword - [implement doc](https://www.typescriptlang.org/docs/handbook/interfaces.html)
-  typescript even supports `[abstract` classes](https://www.tutorialsteacher.com/typescript/abstract-class)

**static blocks**
```javascript
class Statistitian {
	static {
		// this refers to the class itself
		this.instance = new Statistitian()
	}	
}
```

#### <mark style="background: #BBFABBA6;">questions</mark>?
- is this the best we can do with shared state?
	- should more responsibility be put on the `state` class? More behavior?
- are classes and objects in this case the same?
	- what should we use?
	- how could the requirements change and how would we adjust?