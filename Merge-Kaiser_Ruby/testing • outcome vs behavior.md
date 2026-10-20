---
topics:
  - "[[Development Testing]]"
  - "[[Software development]]"
---
## The idea

#resource

A test can check one of two things:

- **Outcome (behavior):** what the code *produced or changed*. A returned value, a saved record, a sent email, a changed state.
- **Interaction (call counts):** *how* the code did it internally. "Method X was called exactly once, with these arguments, before method Y."

The advice is to prefer the first. Tests should describe *what the system does*, not *how it is wired internally*.

## Example

A service that cancels an order:

```php
class OrderCanceller
{
    public function __construct(
        private OrderRepository $orders,
        private PaymentGateway $payments,
    ) {}

    public function cancel(int $orderId): void
    {
        $order = $this->orders->find($orderId);
        $order->cancel();
        $this->payments->refund($order->getPaymentId());
        $this->orders->save($order);
    }
}
```

**Interaction-based test (brittle):**

```php
public function testCancel(): void
{
    $orders = $this->createMock(OrderRepository::class);
    $payments = $this->createMock(PaymentGateway::class);

    $orders->expects($this->once())->method('find')->willReturn($order);
    $payments->expects($this->once())->method('refund')->with('pay_123');
    $orders->expects($this->once())->method('save')->with($order);

    (new OrderCanceller($orders, $payments))->cancel(1);
}
```

==This test is really a copy of the implementation written in mock syntax.==

**Outcome-based test:**

```php
public function testCancelRefundsAndMarksOrderCancelled(): void
{
    $orders = new InMemoryOrderRepository([$order]);
    $payments = new FakePaymentGateway();

    (new OrderCanceller($orders, $payments))->cancel(1);

    $this->assertTrue($orders->find(1)->isCancelled());
    $this->assertSame(['pay_123'], $payments->refundedPaymentIds());
}
```

This asserts the result: the order is cancelled and the payment was refunded. It doesn't care how many times `find()` ran or in what order.

## Why outcomes are better

1. **Refactoring doesn't break them.** Suppose you change `cancel()` to call `find()` through a cache, or to batch the save. The behavior is identical, but the interaction test fails because the call pattern changed. Tests that fail on harmless refactors teach people to distrust or delete tests.
2. **They catch real bugs.** A mock-based test can pass while the real system is broken (the mocked repository never actually saved anything). An outcome test verifies that the state really changed.
3. **They document behavior.** Reading "cancelling an order marks it cancelled and refunds the payment" tells you what the feature does. Reading a list of `expects($this->once())` tells you how the code happens to be written.
4. **Fewer mocks to maintain.** Fakes and in-memory implementations are reused across tests, while mock setups are rewritten each time.

## When call counts are legitimate

The rule is "prefer", not "never". Interaction checks make sense when **the call itself is the outcome**, usually at a boundary with the outside world:

- "No email is sent when the user has opted out" (`never()` on a mailer).
- "The payment provider is charged exactly once", where double-charging would be a real bug.
- "The request is not retried after a 4xx."

There the side effect is the behavior you care about, and there's nothing in your own state to assert on instead.

Even here, a fake that records sent emails (or Symfony's `assertEmailCount()`) is usually clearer than a mock.

## A quick self-check

Ask: *"If I rewrote this internals completely but it behaved identically, would this test still pass?"* If not, the test is coupled to implementation, not behavior.

## In an interview

A strong candidate will explain that excessive mocking of their own code creates tests that mirror the implementation, and they'll mention using fakes or in-memory implementations instead. They'll also acknowledge the legitimate exception for boundary side effects.