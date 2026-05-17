---
source: https://en.wikipedia.org/wiki/Message_queue
created: 2026-04-23
tags:
  - article
category:
  - "[[Topic]]"
---
In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **message queues** and **mailboxes** are [software-engineering](https://en.wikipedia.org/wiki/Software_engineering "Software engineering") [components](https://en.wikipedia.org/wiki/Software_componentry "Software componentry") typically used for [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication "Inter-process communication") (IPC), or for inter- [thread](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)") communication within the same process. They use a [queue](https://en.wikipedia.org/wiki/Queue_\(data_structure\) "Queue (data structure)") for [messaging](https://en.wikipedia.org/wiki/Message_\(computer_science\) "Message (computer science)") – the passing of control or of content. [Group communication systems](https://en.wikipedia.org/wiki/Group_communication_system "Group communication system") provide similar kinds of functionality.

The message queue paradigm is a sibling of the [publisher/subscriber](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern "Publish–subscribe pattern") pattern, and is typically one part of a larger [message-oriented middleware](https://en.wikipedia.org/wiki/Message-oriented_middleware "Message-oriented middleware") system. Most messaging systems support both the publisher/subscriber and message queue models in their [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface"), e.g. [Java Message Service](https://en.wikipedia.org/wiki/Java_Message_Service "Java Message Service") (JMS).

Competing Consumers pattern enables multiple concurrent consumers to process messages on the same message queue. [^1]

## Remit and ownership

## Usage

In a typical message-queueing implementation, a [system administrator](https://en.wikipedia.org/wiki/System_administrator "System administrator") installs and configures message-queueing software (a [queue manager](https://en.wikipedia.org/wiki/Queue_manager "Queue manager") or broker), and defines a named message queue. Or they register with a [message queuing service](https://en.wikipedia.org/wiki/Message_queuing_service "Message queuing service").

An application then registers a software routine that "listens" for messages placed onto the queue.

Second and subsequent applications may connect to the queue and transfer a message onto it.

The queue-manager software stores the messages until a receiving application connects and then calls the registered software routine. The receiving application then processes the message in an appropriate manner.

There are often numerous options as to the exact semantics of message passing, including:

- Durability – messages may be kept in memory, written to disk, or even committed to a [DBMS](https://en.wikipedia.org/wiki/Database "Database") if the need for reliability indicates a more resource-intensive solution.
- Security policies – which applications should have access to these messages?
- Message purging policies – queues or messages may have a " [time to live](https://en.wikipedia.org/wiki/Time_to_live "Time to live") ".
- Message filtering – some systems support filtering data so that a subscriber may only see messages matching some pre-specified criteria of interest.
- Delivery policies – do we need to guarantee that a message is delivered at least once, or no more than once?
- Routing policies – in a system with many queue servers, what servers should receive a message or a queue's messages?
- Batching policies – should messages be delivered immediately? Or should the system wait a bit and try to deliver many messages at once?
- Queuing criteria – when should a message be considered "enqueued"? When one queue has it? Or when it has been forwarded to at least one remote queue? Or to all queues?
- Receipt notification – A publisher may need to know when some or all subscribers have received a message.

These are all considerations that can have substantial effects on transaction semantics, system reliability, and system efficiency.

## Standards and protocols

Historically, message queuing has used proprietary, closed protocols, restricting the ability for different operating systems or programming languages to interact in a heterogeneous set of environments.

An early attempt to make message queuing more ubiquitous was [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") ' [JMS](https://en.wikipedia.org/wiki/Java_Message_Service "Java Message Service") specification, which provided a [Java](https://en.wikipedia.org/wiki/Java_\(software_platform\) "Java (software platform)") -only abstraction of a client [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface"). This allowed Java developers to switch between providers of message queuing in a fashion similar to that of developers using [SQL](https://en.wikipedia.org/wiki/SQL "SQL") databases. In practice, given the diversity of message queuing techniques and scenarios, this wasn't always as practical as it could be.

Three standards have emerged which are used in open source message queue implementations:

1. [Advanced Message Queuing Protocol](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol "Advanced Message Queuing Protocol") (AMQP) – feature-rich message queue protocol, approved as ISO/IEC 19464 since April 2014
2. [Streaming Text Oriented Messaging Protocol](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol "Streaming Text Oriented Messaging Protocol") (STOMP) – simple, text-oriented message protocol
3. [MQTT](https://en.wikipedia.org/wiki/MQTT "MQTT") (formerly MQ Telemetry Transport) – lightweight message queue protocol especially for embedded devices

These protocols are at different stages of standardization and adoption. The first two operate at the same level as [HTTP](https://en.wikipedia.org/wiki/HTTP "HTTP"), MQTT at the level of [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP").

Some proprietary implementations also use HTTP to provide message queuing by some implementations, such as [Amazon](https://en.wikipedia.org/wiki/Amazon.com "Amazon.com") 's [SQS](https://en.wikipedia.org/wiki/Amazon_Simple_Queue_Service "Amazon Simple Queue Service"). This is because it is always possible to layer asynchronous behaviour (which is what is required for message queuing) over a synchronous protocol using request-response semantics. However, such implementations are constrained by the underlying protocol in this case and may not be able to offer the full fidelity or set of options required in message passing above.

## Synchronous vs. asynchronous

Many of the more widely known [communications protocols](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol") in use operate [synchronously](https://en.wikipedia.org/wiki/Synchronization_\(computer_science\) "Synchronization (computer science)"). The HTTP protocol – used in the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web "World Wide Web") and in [web services](https://en.wikipedia.org/wiki/Web_service "Web service") – offers an obvious example where a user sends a request for a web page and then waits for a reply.

However, scenarios exist in which synchronous behaviour is not appropriate. For example, [AJAX](https://en.wikipedia.org/wiki/AJAX "AJAX") ([Asynchronous](https://en.wiktionary.org/wiki/asynchronous "wikt:asynchronous") [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") and [XML](https://en.wikipedia.org/wiki/XML "XML")) can be used to asynchronously send text, JSON or XML messages to update part of a web page with more relevant information. [Google](https://en.wikipedia.org/wiki/Google "Google") uses this approach for their Google Suggest, a search feature which sends the user's partially typed queries to Google's servers and returns a list of possible full queries the user might be interested in the process of typing. This list is asynchronously updated as the user types.

Other asynchronous examples exist in event notification systems and [publish/subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern "Publish–subscribe pattern") systems.

- An application may need to notify another that an event has occurred, but does not need to wait for a response.
- In publish/subscribe systems, an application "publishes" information for any number of clients to read.

In both of the above examples it would not make sense for the sender of the information to have to wait if, for example, one of the recipients had crashed.

Applications need not be exclusively synchronous or asynchronous. An interactive application may need to respond to certain parts of a request immediately (such as telling a customer that a sales request has been accepted, and handling the promise to draw on inventory), but may queue other parts (such as completing calculation of billing, forwarding data to the central accounting system, and calling on all sorts of other services) to be done some time later.

In all these sorts of situations, having a subsystem which performs message-queuing (or alternatively, a broadcast messaging system) can help improve the behavior of the overall system.

## Implementation in UNIX

There are two common message queue implementations in [UNIX](https://en.wikipedia.org/wiki/Unix "Unix"). One is part of the SYS V API, the other one is part of [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX").

### SYS V

UNIX SYS V implements message passing by keeping an array of linked lists as message queues. Each message queue is identified by its index in the array, and has a unique descriptor. A given index can have multiple possible descriptors. UNIX gives standard functions to access the message passing feature.[^7]

`msgget()`

This system call takes a key as an argument and returns a descriptor of the queue with the matching key if it exists. If it does not exist, and the `IPC_CREAT` flag is set, it makes a new message queue with the given key and returns its descriptor.

`msgrcv()`

Used to receive a message from a given queue descriptor. The caller process must have read permissions for the queue. It is of two types.[^8]
- Blocking receive puts the child to sleep if it cannot find a requested message type. It sleeps until another message is posted in the queue, and then wakes up to check again.
- Non-blocking receive returns immediately to the caller, mentioning that it failed.

`msgctl()`

Used to change message queue parameters like the owner. Most importantly, it is used to delete the message queue by passing the `IPC_RMID` flag. A message queue can be deleted only by its creator, owner, or the superuser.

### POSIX

The POSIX.1-2001 message queue API is the later of the two UNIX message queue APIs. It is distinct from the SYS V API, but provides similar function. The unix man page `mq_overview(7)` provides an overview of POSIX message queues.

[^1]: Gorton, Ian (2022). *Foundations of Scalable Systems*. O'Reilly Media. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781098106034](https://en.wikipedia.org/wiki/Special:BookSources/9781098106034 "Special:BookSources/9781098106034").

[^2]: Dive Into Queue Module In Python. [Overview of POSIX message queues](http://linux.die.net/man/7/mq_overview)

[^3]: Win32 system message queues. ["About Messages and Message Queues"](https://web.archive.org/web/20120317065349/http://msdn.microsoft.com/en-us/library/ms644927\(VS.85\).aspx). *Windows User Interface*. Microsoft Developer Network. Archived from [the original](http://msdn.microsoft.com/en-us/library/ms644927\(VS.85\).aspx) on March 17, 2012. Retrieved April 21, 2010.

[^4]: Linux and POSIX message queues. [Overview of POSIX message queues](http://linux.die.net/man/7/mq_overview) [Archived](https://web.archive.org/web/20120504002336/http://linux.die.net/man/7/mq_overview) 2012-05-04 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") at linux.die.net

[^5]: Using Linux Message Queues. [Linux message queue functions](http://www.civilized.com/files/msgfuncs.txt) [Archived](https://web.archive.org/web/20120408091327/http://www.civilized.com/files/msgfuncs.txt) 2012-04-08 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") at www.civilized.com

[^6]: For example, the MSMQ product. ["Message Queuing (MSMQ)"](https://msdn.microsoft.com/en-us/library/ms711472.aspx). *Network Communication*. Microsoft Developer Network. Retrieved May 9, 2009.

[^7]: Bach, M.J. (1986). [*The Design of the UNIX Operating System*](https://archive.org/details/designofunixoper00bach). Prentice-Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780132017992](https://en.wikipedia.org/wiki/Special:BookSources/9780132017992 "Special:BookSources/9780132017992").

[^8]: Abraham Silberschatz, Peter B. Galvin (1994). *Operating Systems Concepts*. Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780201504804](https://en.wikipedia.org/wiki/Special:BookSources/9780201504804 "Special:BookSources/9780201504804").

[^9]: Cartwright, Corky. ["GUI Programming"](https://www.cs.rice.edu/~cork/newBook/node89.html). *Rice University:Robert (Corky) Cartwright*. Retrieved June 27, 2020.

[^10]: Nystrom, Robert (2014). [*Game Programming Patterns*](https://gameprogrammingpatterns.com/event-queue.html). Genever Benning. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0990582908](https://en.wikipedia.org/wiki/Special:BookSources/978-0990582908 "Special:BookSources/978-0990582908"). Retrieved June 27, 2020.