<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/W4rsar4DB9mqC4ftdCnIwiup-9uaGC1LT-aHrnJKuQg/rs:fit:610:580/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzAz/LzY3YjNiMmY5LTQ2/N2YtNGYxNi1hYzYw/LWE3NjUwYTI3NTUw/Zi5wbmc.png" height="150">
    <h2 align="center">Use Cases</h2>
    <h4 align="center">Also known in the context of Hexagonal Architecture as: Internal Layer or Core</h4>
  </a>
</p>
<br />

## Conceptual vision

Following the idea of Ivar Jacobson and later of Alistair Cockburn, Use Cases would be under the umbrella of Requirements Engineering and would be classifiers that define interactions between a system and more actors.

Use Cases can be described as functionalities that a system must respect. The mold of your identity.

Thinking about a digital menu system for a restaurant, some of its features would be: Order food, Pay the order, Register a food and Add a promotional coupon.

Therefore, use cases must know what the system does, not how it does it.

If the system uses a relational database to query a food and return it to the customer to place the order, or a specific payment _gateway_ to process the order, it is not the Use Case's responsibility for such knowledge.

As stated in [Ports](./../ports/readme.md), the industry saved too much time by building Use Cases that surpassed conceptual limits that they shouldn't.

As such, the idea of Ports and Adapters fits the context very well.

Writing a Use Case, in the calling line for a database, I can demarcate with an Interface (Port), and in another complement layer with a specific implementation (Adapter).

## Architectural look

According to the definitions of [Port](./../ports/readme.md) and [Adapter](./../adapters/readme.md), the Use Case - Internal Layer or Core - would be an orchestrator. A specific point for calling Ports.

Thinking about the Use Case "Order a food" (mentioned in the topic above), I can place a Query Port of the "Food" after the internal validation of the received data. To launch the system, it would be enough to code the implementation of the Port (either in SQL, NoSQL or in memory) and finish with the _fitting of the pieces_.

In this way, we make room for multiple implementations of the same Port without _smearing_ the Use Case with _external technology_ code.

## Observing in practice

Let's look at "@/usecases/edit-a-particular-post.js".

In this file, there is mention of two distinct Ports. In line 12, 13, and 14, I call functions that are received by parameter (Ports via Dependency Injection) to compose the top-level view of the Use Case.

Note that the Use Case is not intended to know how the system will perform "badRequest" or "ok".

This is one of the great promises of Object Orientation through the concept of Polymorphism. Multiple implementations of the same abstraction.

**Note that in this case, we are exercising the concept of Polymorphism without even being in a language with the resource of Interfaces.**

## Viewing in practice

If the theory exercised in this file is too abstract, I appeal for its implementation in the file "@/usecases/edit-a-particular-post.spec.js".

In this file, we have unit testing as a specification of the Edit a Post Use Case functionality.

Note that on line 21, I build a function "makeSut", which contains the functionality that is under testing (sut).

This function serves as a container for what will be tested in the file. In this case, the "Edit a Particular Post" Use Case.

Before returning "sut", I inject the execution of the functions that hold the code I want to test.

In this case, I use "Post repository in memory" and "Http framework mock". In the file that will build the production artifact, I use "Post repository MongoDB" and "Express http framework" - they are all in the folder "@/adapters".

In this way, I develop the composition idea for my Use Cases, having a decoupled and secure view of each isolated component.

## References

- Object Oriented Software Engineering: A Use Case Driven Approach - Ivar Jacobson
- Writing Effective Use Cases - Alistair Cockburn
- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma, Richard Helm, Ralph Johnson Dr, and John Vlissides.
- SUT, xUnit Patterns - <a href="http://xunitpatterns.com/SUT.html">http://xunitpatterns.com/SUT.html</a>
