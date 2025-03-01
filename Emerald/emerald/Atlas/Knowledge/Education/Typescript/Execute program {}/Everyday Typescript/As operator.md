#javascript 
#port
#legacy
#unsafe

as is used to bypass the default typescript type checker and force it to regard a variable to be of a certain type.
Primarily used for working with and porting legacy [[javascript]] code.

Using `as` can be dangerous as we are no longer relying on the analyisis of the type system

---

**example**
```typescript
const user = {} as {name: string, likesOlives: boolean}
user.likesOlives
// undefined
```
*the user doesn't atm doesn't know what olives are, but the type system doesn't complain 🫒*


### example of using types instead of `as`

```typescript
type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
type Card = {
  rank: number | 'J' | 'Q' | 'K' | 'A'
  suit: Suit
};
type TrumpSuits = {
  spades: Suit
  sheepshead: Suit
}
const card: Card = {rank: 'Q', suit: 'clubs'};
const trumpSuits: TrumpSuits = {
  spades: 'spades',
  sheepshead: 'diamonds',
};

card.suit = trumpSuits.sheepshead;
card.suit;
// 'diamonds'
```

the code above works even though we are assigning a string, 'diamonds', to a property that is expected to be of type `Suit`. This is due to to the inferences being made bye the type system
