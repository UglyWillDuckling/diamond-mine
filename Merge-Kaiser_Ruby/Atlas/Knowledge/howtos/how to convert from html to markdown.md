#howto/md/convert

## entire directory using find

```sh
find ./ -iname "*.html" -type f -exec sh -c 'pandoc "${0}" -o "${0%.html}.md"' {} \;
```
