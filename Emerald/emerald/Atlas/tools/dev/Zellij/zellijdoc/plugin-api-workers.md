- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin Workers](plugin-api-workers.html\#plugin-workers)

Plugin workers are a way to get around the fact that wasm/wasi threads are not stable yet. If a plugin has a potentially long operation to perform, it can declare a worker on startup and send and receive messages from it.

## [The ZellijWorker trait](plugin-api-workers.html\#the-zellijworker-trait)

`zellij-tile` provides the following interface for workers:

```rust
#![allow(unused)]
fn main() {
pub trait ZellijWorker<'de>: Default + Serialize + Deserialize<'de> {
    fn on_message(&mut self, message: String, payload: String) {}
}
}
```

The `on_message` method will be called when the plugin uses the [`post_message_to`](plugin-api-commands.html#post_message_to) plugin command with an arbitrary `message` and `payload`. These are specified as `String` s so that plugins can decide on their own method of serialization.

## [Registering Workers](plugin-api-workers.html\#registering-workers)

To register workers on startup, plugins can use the `register_worker` macro like so:

```rust
#![allow(unused)]

fn main() {
pub struct TestWorker {
    // ...
}
impl ZellijWorker for TestWorker {
    // ...
}
register_worker!(
    TestWorker,
    test_worker, // the namespace of the worker, anything before the final _worker will be the worker namespace
    TEST_WORKER // a name for static variable used to store the worker state between invocations
);
}
```

For more information, please see the [`zellij-tile`](https://docs.rs/zellij-tile/latest/zellij_tile/) API documentation.

## [Sending messages to workers](plugin-api-workers.html\#sending-messages-to-workers)

When a plugin (or another worker) wishes to send messages to a worker, they use the [`post_message_to`](plugin-api-commands.html#post_message_to) plugin command. They should use the worker namespace used when registering the worker, eg. `post_message_to("test", ...)` for the `test_worker` example above.

## [Sending messages from workers to plugins](plugin-api-workers.html\#sending-messages-from-workers-to-plugins)

When a worker wishes to send a message to a plugin, they use the [`post_message_to_plugin`](plugin-api-commands.html#post_message_to_plugin) command. This message will trigger the plugin's [update](http://zellij.dev/documentation/plugin-api-lifecycle.html#update) method with a [`CustomMessage`](plugin-api-events.html#CustomMessage) event. Be sure to [`subscribe`](plugin-api-commands.html#subscribe) to it beforehand!

[Previous chapter](plugin-api-logging.html "Previous chapter")[Next chapter](plugin-pipes.html "Next chapter")

[Previous chapter](plugin-api-logging.html "Previous chapter")[Next chapter](plugin-pipes.html "Next chapter")

