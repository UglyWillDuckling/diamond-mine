part_of:: [[Efforts/Simmering/DAS - watchlist/DAS - watchlist]]
___

![[das-0002-how-and-why-to-avoid-nil.mp4]]

- [x] go through the video :LiCircleDivide:
- [x] write the last section in [[ruby programming language]]

## code

```rb
class Person
  def subscribe
    Subscriber.new(Subscription.new)
  end
end

class Subscriber
  attr_reader :subscription

  def initialize(subscription)
    @subscription = subscription
  end
end

class Subscription
end

person = Person.new

subscriber = person.subscribe
puts subscriber.subsription
```

## thoughts 🗯

- creating a new Class opens up **space** for new ideas
	- it also reduces possibility for error as the new class adds it's own conditions and boundaries and can only exist in certain scenarios
	- i.e. **there is no** subscriber without a valid subscription
- `nils` are much more ==obvious==
- the system is more **expressive** as we now have a new `domain concept`
	- the new concept can be used to think 🤔 and communicate 🛰
	- it also opens up new informational space within itself
			this new space is made even more useful by the fact it has a **boundary** which simplifies conditions
		- e.g. no need to check if a `subscription` exists, it **has to**

> **subscribers** have subscriptions, not every Person(people) does/do