#howto/neotest

about:: 
- [[neotest-pest Neotest adapter for Pest]]
- [[Neotest]]

finds the php classes based on `use` declarations and stores them as @symbols.
___

```lua
local php_watch_query = [[
  ;query
  ;Captures use clauses
  (namespace_use_declaration (namespace_use_clause (qualified_name prefix: (namespace_name (name)) (name) @symbol)))
]]
```