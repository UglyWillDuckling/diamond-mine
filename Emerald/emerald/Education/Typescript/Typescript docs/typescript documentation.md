#superset
#type
#duck-typing
#javascript
#docs
### what is typescript

* **superset** of javascript - anything [[javascript]] can do [[typescript]] can do too

### how it works

* uses [[duck typing]] 🦆 very fine grained which allows defining types for almost any occasion
	* very useful if all you need are local types that need to be used in one part of an application or library
	* extremely useful for small apps
	* can allow for iterative and evolving design that is more flexible and can more easily adapt to changing requirements (**structured typing**)
	* it doesn't care so much for declarations as it does for actual features available on an object
* very fine grained which allows defining types for almost any occasion
	* very useful if all you need are local types that need to be used in one part of an application or library
	* extremely useful for small apps
	* can allow for iterative and evolving design that is more flexible and can more easily adapt to varying requirements

### tooling 🧰

* ability to set strictness levels
	* **tsconfig** or CLI arguments

### possible pitfalls 🍂

* the code examples seem very low level with lots of type and null checking
* there doesn't see to be allot of [[encapsulation]] (information hiding), instead, most of the properties are exposed
  this can be good for smaller problems but large applications might present problems