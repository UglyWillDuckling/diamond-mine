#namespace
#module

## Intro

TypeScript supports the module system in modern JavaScript, sometimes called "ES6 modules". In this system, each source file is a self-contained module.
A module can't see variables, functions, types, or other properties defined in other modules. However, a module can choose to "**export**" certain properties, which can then be "**imported**" and used by other modules.

In addition to modules, TypeScript also has "namespaces". These are specific to TypeScript and don't exist in JavaScript.

We can think of namespaces as <mark style="background: #FFF3A3A6;">separate</mark> "modules" that live side by side inside of a single source file. **The language designers' intent was that we'd use modules in some situations and namespaces in others.** 
For example, we might want dozens of very small, **related** modules. Rather than create dozens of small files, we can use namespaces to put all of them in a single file. In other cases, we'll have large modules that deserve their own files.

---
## example with 2 namespaces

```ts
namespace Util {
  export function wordCount(s: string) {
    return s.split(/\b\w+\b/g).length - 1;
  }
}

namespace Tests {
  export function testWordCount() {
    if (Util.wordCount('hello there') !== 2) {
      throw new Error("Expected word count for 'hello there' to be 2");
    }
    return 'ok';
  }
}
Tests.testWordCount();
```


### simulate error

#### without the ns reference

```ts
namespace Util {
  export function wordCount(s: string) {
    return s.split(/\b\w+\b/g).length - 1;
  }
}

namespace Tests {
  export function testWordCount() {
    if (Util.wordCount('hello there') !== 2) {
      throw new Error("Expected word count for 'hello there' to be 2");
    }
    return 'ok';
  }
}

testWordCount();
// error
```

#### without export

```ts
namespace Util {
  function wordCount(s: string) {
    return s.split(/\b\w+\b/g).length - 1;
  }
  
  // We reference `wordCount` here to prevent this error:
  //   type error: 'wordCount' is declared but its value is never read.
  wordCount;
}

namespace Tests {
  export function testWordCount() {
    if (Util.wordCount('hello there') !== 2) {
      throw new Error("Expected word count for 'hello there' to be 2");
    }
    return 'ok';
  }
}
Tests.testWordCount();
// type error
```

> The error message there is a bit weird: it references the typeof type operator, which you may not have seen yet. But the error's meaning is still clear. From outside of the Util module, there is no wordCount; it's invisible.

## implementation

### breaking the rule

> Namespaces break the type-level extension rule in the same way as enums. In namespace Util { export function wordCount ... }, we can't remove the type definitions. The entire namespace is a type definition! And what about the other code outside of the namespace calling Util.wordCount(...)? If we delete the Util namespace before generating JavaScript code, then Util doesn't exist any more, so the Util.wordCount(...) function call can't possibly work.

> [!warning] note
> 	For both enums and namespaces, the TypeScript compiler can't delete the type annotations. Instead, it has to generate new JavaScript code that doesn't exist in the original TypeScript code.

## tooling issues

When it comes to enums and namespaces, things are more difficult. The tools have to implement parts of an actual TypeScript compiler. It's not good enough to remove the enums or namespaces; they have to know how to turn namespace Util { ... } into working JavaScript code, even though JavaScript doesn't have namespaces at all.
