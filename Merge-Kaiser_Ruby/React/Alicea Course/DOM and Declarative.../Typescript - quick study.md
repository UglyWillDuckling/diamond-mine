#note/study/typescript

made_during:: [[Team Create-Edit Modal Component]]
___
### importing types

```ts
import type { ModalProps } from '@gemini/ui'
```

### function declaration

type goes right after the function `name`

```ts
  const trigger: ModalProps['trigger'] = (props) => (
    <Button {...props}>{t('Create Team')}</Button>
  )
```