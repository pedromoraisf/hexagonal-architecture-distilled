<p align="center">
  <a href="https://mymenon.com.br">
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

## Arquitetural Map

This is an overview of the design and Hexagonal Architecture's look at it. 

It is not directly attached to any kind of UML diagram.

<img src="./requirements/arquitetural-approach.png">

## How to Run

### Local:
- Install Node.js >= 14
- Open this repo and install dependencies
- Run `npm run start`

### Docker 🐳:
- Having the node installed, open this repo and run `npm run docker:up`
- If you want to disassemble the composition, run `npm run docker:down`

## // TODO

- [x] Implement the MongoDB adapter.
- [x] Implement the Express adapter.
- [x] Create Docker environment.
- [x] Create e2e Tests to View Results.
- [ ] Make a Markdown for each conceptual folder (usecases, ports, adapters) explaining every detail.
- [ ] Create the post itself, on my blog 😅.

