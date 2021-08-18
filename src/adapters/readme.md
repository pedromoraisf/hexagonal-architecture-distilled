<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/Mh7LQsapa3U6bOVyJUiLqt_flRpvlJFTxFRFTtBPKC8/rs:fit:549:403/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDc4/Lzg4NGM0ZDQ2LWY5/OGItNDc1NS04ZGY0/LWQwOGQ1MDZmNWE4/Yi5wbmc.png" height="150">
    <h2 align="center">Adapters</h2>
  </a>
</p>

<p align="center">
  "A thing is well designed if it adapts to the people who use it. For code, that means it must adapt by changing. So we believe in the ETC principle: Easier to Change. ETC. That's it. - The Pragmatic Programmer."
</p>
<br />

## Conceptual vision

The Adapter design pattern was first published in the book Design Patterns: Elements of Reusable Object-Oriented Software.

Following part of the original definition in the book, we understand that with the Adapter pattern, we can convert a class's interface into another interface expected by the client.

In case a system needs functionalities that involve database, it would be enough to develop a function or class with all this implementation grouped.

Finally, the part of the code that depends on such functionality (client) would call the Adapter function.

Taking a step back, we can see Adapter as a happy medium between an implementation that doesn't directly respect what our client code needs.

I write the above paragraph with the phrase "does not directly respect [...]" making reference to the decoupling proposed by Alistair Cockburn.

As an example in this project, in some Use Cases I needed to run "find" in the Publications repository, not something like `SELECT * FROM publications` or `collection.findOne({})`. At least the Use Case does not need to understand this implementation to retrieve persisted Publications.

### Connection with other concepts

Considering that the Adapter in this context is presented as a point of cohesion between the client's code and the implementation of external technologies, we have in effect the Dependency Inversion Principle (D of SOLID).

Instead of the client code pointing its direct dependency to the ORM, Query Builder or any database Driver, it would point to an adapter class or function (which is under our control) and that would point to an external technology.

## Architectural look

Considering the explanation of [Ports](./../ports/readme.md), the Adapters would be the implementation of the protocol defined in the Port.

One of the magic that appears in the junction of these two concepts in Hexagonal Architecture would be the multiple implementations of the same protocol.

Inside the "http" folder, we can see two other folders: "express" and "mock".

I implement in "express" the Adapter with the micro-framework code according to the Port protocols, which is useful for production code. Already in the folder "mock", there is an implementation that is useful for our unit test cases.

In this way, we make room for changing external technologies in a simple, safe and uncoupled way.

### Challenge to the reader

Create a Pull Request implementing one more Adapter for the "http" or "database" port. Choose another valid technology for the Port category.

If the reader accepts the challenge, he will enjoy a security when change the system's technologies.

## One last conceptual brushstroke

Exercising thinking in this decoupled way, we can see that the business rules of the systems we model and/or work with can exist without framework code involved.

In this way, we can isolate layers of the architecture that change at different speeds.

Looks like we're back to basics, right?

## Observing in practice

In JavaScript, as it doesn't have the Interface feature, we have to be strict with the Adapter implementation according to the Port definition.

A good practice in these cases (and also in cases that have the Interface feature) is to build integration tests.

With Hexagonal Architecture, Clean Architecture, Onion, Vertical Slice, among others, we can clearly see unit test integration tests.

An example integration test done to cover the functionality of the Adapter implementation in MongoDB, is in the file "@/adapters/database/mongodb/post-repository/post-repository.test.js".

End-to-end testing is also welcome. Inside the "e2e" folder I have tests that serve as system operation acceptance.

If you switch Adapters to an SQL implementation, end-to-end tests need to keep passing.

## References

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma, Richard Helm, Ralph Johnson Dr, and John Vlissides.
- Clean Architecture: A Craftsman’s Guide to Software Structure and Design - Robert C. Martin
- The Pragmatic Programmer - David Thomas and Andrew Hunt.