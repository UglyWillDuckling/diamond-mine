#howto/dataview 

You can actually `convert` the duration into whatever you want by using methods on the `Duration` object.

```
duration.years
duration.minutes
...
```


> [!NOTE] be Careful
> The values returned will all be for the whole duration value, NOT just the part you're asking for

## example

For duration of 73 years and 2 months

`duration.years` will return a decimal value of around 73.2
`duration.minutes` will return 38479680 
etc.