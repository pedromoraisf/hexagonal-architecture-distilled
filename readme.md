<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/M_NCQ9o8yHajuGD4x7kQ9WgUGSze1FKoaK3lcRMEE8E/rs:fit:840:616/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTgx/L2ZiOWExYjViLTFi/NjEtNDMzMC05NTMw/LWZhZjlkNjM1YjFm/NS5wbmc.png" height="150">
    <h2 align="center">Hexagonal Architecture Distilled in JavaScript</h2>
  </a>
</p>

<p align="center">
  The ultimate guide to understand Hexagonal Architecture (a.k.a Ports and Adapters) in JavaScript.
</p>
<br />

## Project Presentation

This is a simple blog project, with the most basic use cases we can have.

## Motivation and Disclaimers

This is a sample repository for my "Hexagonal Architecture Distilled in JavaScript" publication.

The code writing style was motivated by the familiarity of JavaScript programmers.

The design was as simple as possible in order not to obscure the practical examples of Hexagonal Architecture concepts.

I suggest that the consumer of this content does not get attached to peripheral concepts (Decorator design pattern, etc). Focus on Ports and Adapters.

## Glossary

- <a href="./src/ports/readme.md">Ports - @/ports/readme.md</a>
- <a href="./src/adapters/readme.md">Adapters - @/adapters/readme.md</a>
- <a href="./src/usecases/readme.md">Use Cases - @/usecases/readme.md</a>

## Architectural Map

This is an overview of the design and Hexagonal Architecture's look at it. 

It is not directly attached to any kind of UML diagram.

<img src="./docs/architectural-approach.png">

## How to Run

#### Local:
- Install Node.js >= 14
- Open this repo and install dependencies
- Run: `npm run start`

#### Docker 🐳:
- Having the node installed, open this repo and run: `npm run docker:up`
- If you want to disassemble the composition, run: `npm run docker:down`

## How to Test

#### Unit and Integration:
- Unitary tests, run: `npm run test:unit`
- Integration tests, run: `npm run test:integration`
- Both tests, run: `npm run test`

#### e2e:
- Having the environment mounted (both local or docker), run: `npm run test:create-a-post` and copy the "_id" returned property
- Input above returned property in TESTABLE_POST_ID variable on e2e/docker/get-a-specific-post.test.js and run: `npm run test:get-a-specific-post`
- Input above returned property in TESTABLE_POST_ID variable on e2e/docker/edit-a-specific-post.test.js and run: `npm run test:edit-a-specific-post`
- Run: `npm run test:list-all-posts`

## // TODO

- [x] Implement the MongoDB adapter.
- [x] Implement the Express adapter.
- [x] Create Docker environment.
- [x] Create e2e Tests to View Results.
- [x] Make a Markdown for each conceptual folder (usecases, ports, adapters) explaining every detail.
  - [x] Ports
  - [x] Adapters
  - [x] Use Cases / Business
- [ ] Create the post itself, on my blog 😅.

