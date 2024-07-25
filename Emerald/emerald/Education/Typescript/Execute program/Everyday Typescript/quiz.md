


```typescript
type Success = {
    kind: 'success',
    value: any
}

type Failure = {
  kind: 'failure',
  reason: string
}

type Result = Success | Failure;

function elemAt<T>(elements: Array<T>, i: number) {
  if (elements.length === 0) {
    return {kind: 'failure', reason: 'array is empty'}
  }
  if (i < 0 || i >= elements.length) {
    return {kind: 'failure', reason: 'no element at that index'}
  }

  return {kind: 'success', value: elements[i]}
}

const r = elemAt([1, 2, 3], 1)
const f = elemAt([1, 2, 3], 5)
const t = elemAt([1,2 ], 2)

```