<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/Mh7LQsapa3U6bOVyJUiLqt_flRpvlJFTxFRFTtBPKC8/rs:fit:549:403/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDc4/Lzg4NGM0ZDQ2LWY5/OGItNDc1NS04ZGY0/LWQwOGQ1MDZmNWE4/Yi5wbmc.png" height="150">
    <h2 align="center">Adapters (Adaptadores)</h2>
  </a>
</p>

<p align="center">
  "A thing is well designed if it adapts to the people who use it. For code, that means it must adapt by changing. So we believe in the ETC principle: Easier to Change. ETC. That's it. - The Pragmatic Programmer."
</p>
<br />

## Visão Conceitual

O padrão de projeto Adapter foi publicado inicialmente no livro Design Patterns: Elements of Reusable Object-Oriented Software.

Seguindo parte da definição original do livro, entendemos que com o padrão Adapter, podemos converter a interface de uma classe em outra interface esperada pelo cliente.

Caso um sistema necessite de funcionalidades que envolvam banco de dados, bastaria desenvolver uma função ou classe com toda essa implementação agrupada.

Por fim, a parte do código que depende de tal funcionalidade (cliente) chamaria a função Adapter.

Dando um passo para trás, podemos enxergar o Adapter como um meio termo entre uma implementação que não respeita diretamente o que nosso código cliente necessita.

Escrevo o parágrafo acima com a frase "não respeita diretamente [...]" fazendo menção ao desacoplamento proposto por Alistair Cockburn.

Como exemplo nesse projeto, em alguns Casos de Uso necessitei de executar "find" no repositório de Publicações, e não algo parecido como `SELECT * FROM publications` ou `collection.findOne({})`. Pelo menos o Caso de Uso não necessita entender dessa implementação para recuperar Publicações persistidas.

### Conexão com outros conceitos

Tendo em mente que o Adapter nesse contexto é apresentado como um ponto de coesão entre o código cliente e a implementação de tecnologias externas, temos em vigor o Princípio da Inversão de Dependência (D do SOLID).

Em vez do código cliente apontar sua dependência direta pro ORM, Query Builder ou qualquer Driver de banco de dados, ele apontaria para uma função ou classe Adapter (que está sob o nosso controle) e essa apontaria para a tecnologia externa.

## Olhar Arquitetural

Considerando a explicação de [Portas](./../ports/readme-pt-BR.md), os Adapters seriam a implementação do protocolo definido na Porta.

Uma das mágicas que aparecem na junção desses dois conceitos na Arquitetura Hexagonal, seria a de multiplas implementações do mesmo protocolo.

Dentro da pasta "http", podemos observar duas outras pastas: "express" e "mock". 

Implemento em "express" o Adapter com o código do micro-framework de acordo com os protocolos da Porta, que é útil para o código de produção. Ja na pasta "mock", tem-se uma implementação que é útil para nossos casos de teste unitários.

Dessa maneira, abrimos margem para mudança de técnologias externas de uma maneira simples, segura e desacoplada.

### Desafio ao leitor

Crie uma Pull Request implementando mais um Adapter para a porta "http" ou "database". Escolha outra técnologia válida para a categoria da Porta.

Caso o leitor aceite o desafio, irá saborear uma segurança ao mexer nas técnologias do sistema.

## Uma última pincelada conceitual

Exercitando o pensamento dessa forma desacoplada, conseguimos enxergar que as regras de negócio dos sistemas que modelamos e/ou trabalhamos podem existir sem código de framework envolvido.

Dessa forma, podemos isolar camadas da arquitetura que mudam em velocidades diferentes.

Parece que voltamos aos princípios, né?

## Observando na prática

No JavaScript, como não tem o recurso de Interface, temos que ser rígidos com a implementação do Adapter de acordo com a definição da Porta.

Uma boa prática nesses casos (e também em casos que tenham o recurso de Interface) é a construção de testes de integração.

Com a Arquitetura Hexagonal, Arquitetura Limpa, Onion, Vertical Slice, entre outras, conseguimos enxergar claramente testes de integração de testes unitários.

Um exemplo de teste de integração feito para cobrir as funcionalidades da implementação do Adaptador em MongoDB, está no arquivo "@/adapters/database/mongodb/post-repository/post-repository.test.js".

Testes end-to-end também são bem vindos. Dentro da pasta "e2e" tenho testes que servem como aceitação de funcionamento do sistema.

Caso troque os Adapters para uma implementação de SQL, testes end-to-end necessitam continuar passando.

## Referências

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma, Richard Helm, Ralph Johnson Dr, and John Vlissides.
- Clean Architecture: A Craftsman’s Guide to Software Structure and Design - Robert C. Martin
- The Pragmatic Programmer - David Thomas and Andrew Hunt.