<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/EtmzwEQAbSvqS2ev3sgvpxDd2u6y9fFDTUZoOkEaTzY/rs:fit:1063:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDA0/LzIyNzQyNDQ5LWRi/ZmEtNGZkMi04ZWYw/LWIwZWExMDNlYTAz/Ny5wbmc.png" height="150">
    <h2 align="center">Portas</h2>
  </a>
</p>

<p align="center">
  "Para prevenir surpresas, tenho deixado sempre abertas todas as janelas e todas as portas." - ABREU, C. F.
</p>
<br />

## Olhar arquitetural

Portas são o limite arquitetural do Hexágono. 

Seguindo a visão conceitual descrita na publicação que direciona este repositório, os arquivos que contém o padrão porta estão contidos respectivamente nas pastas "driven" e "driver".

Observe a imagem abaixo, onde uma porta primária e outra secundária estão do mesmo lado. A intenção seria apenas para mostrar de uma forma sintetizada, os adaptadores entrando em contato com a porta.

Conceitualmente, sabemos que as portas estavam em "lados diferentes".

<p align="center">
<img src="./../../../docs/ports-cut.png" height="300">
</p>

Geralmente, portas são representadas como Interfaces Abstratas - tanto o recurso de linguagens orientadas a objetos quanto dependências injetadas por parâmetros ou funções de ordem maior, como exemplifiquei nesse repositório.

## Observando na prática

Optei por uma abordagem onde utilizo um dos extremos para definição de portas - uma porta primária para todas as entradas.

Sou tentado a seguir essa implementação pelo fato dos adaptadores dessa porta - express e mock - serem responsáveis por injetar as entradas de suas respectivas tecnologias.

Implementando em uma linguagem mais orientada a objetos, poderia ser trivial definir portas para o contato com o código contido dentro do Hexágono. Na publicação pai deste repositório, adiciono o link para um repositório que contém estes exemplos.

Outra decisão curiosa foi a forma de representação das portas. Optei por essa implementação pelo fato do JavaScript não ter o recurso de Interfaces. Nesse caso, o objeto ajuda o IntelliSense do meu editor de código a fornecer a lista de métodos da porta quando referenciada no código cliente.

Perceba que não existe uma descrição ou apego tecnológico por como será feito. Com o nome da porta autoexplicativa, revelo apenas qual a sua intenção.

Dessa forma, tendo a tecnologia externa desacoplada do código contido no Hexágono, como descrito no tópico <a href="#olhar-arquitetural">Olhar Arquitetural</a>, abre-se margem para multiplas implementações de adaptadores que respeitem o protocolo fornecido pela porta.

## Referências

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- P of EEA Catalog - Repository <a href="https://martinfowler.com/eaaCatalog/repository.html">https://martinfowler.com/eaaCatalog/repository.html/</a>