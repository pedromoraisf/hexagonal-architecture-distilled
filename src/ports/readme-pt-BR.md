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

## Visão conceitual

Seguindo uma das motivações de Alistair Cockburn, a indústria cultivou escritas por códigos de casos de uso que teriam um vasto conhecimento sobre suas tecnologias ou atores. 

O emaranhamento entre regras de negócio e interações com essas entidades seria o grande problema, onde a visão de lado "esquerdo" e "direito" da aplicação pode ser modificada por um olhar de "dentro" e "fora" do aplicativo.

Considerando a afirmação acima, as Portas entram como uma demarcação de qual lugar no código teria interação com o mundo externo.

A ideia em torno de Porta vem da mesma visão da porta do sistema operacional ou de aparelhos eletrônicos. Protocolos que abrem margem para conexão de dispositivos que respeitem seu protocolo (a.k.a Adaptador).

## Olhar arquitetural

Pensando na arquitetura do sistema como um todo, Portas estariam diretamente inclusas na parte de dentro (regras de negócio, casos de uso, etc.), fornecendo uma definição clara dos dados que entram, os que retornam e as funções que podem ser usadas.

<p align="center">
<img src="./../../docs/ports-cut.png" height="300">
</p>

Geralmente são descritas por Interfaces Abstratas - tanto o recurso de linguagens orientadas a objetos quanto dependências injetadas por parâmetros ou funções de ordem maior como foi feito nos exemplos desse repositório.

### Qual a quantidade ideal de portas?

Não existe uma definição quanto a isto. Alistair revela que não é ideal ter uma visão extrema, onde de um lado teríamos apenas uma porta para entrada de dados e outra para saída, quanto uma porta para cada caso de uso.

Geralmente as Portas são definidas de acordo com sua posição conceitual no código. Por exemplo, se o código recebe certos dados, realiza o tratamento internamente e comunica uma API externa para o tráfego dos mesmos, teríamos uma porta para comunicação com essa API.

Nesse projeto, usei o padrão de Repositórios para encapsulamento de operações com o banco de dados por coleções - veja a referência no final.

Nesse caso, cada repositório tem uma Porta em específico.

Em um projeto que não tenha um padrão como este, uma Porta para o banco de dados como um todo pode ser suficiente.

## Observando na prática

Olhando para as pastas "database" e "http-framework" observa-se a existência de duas Portas.

Por mais que exista uma pasta "database" genérica, defino a Porta de acordo com os repositórios. Com o surgimento de novos, Portas equivalentes são adicionadas.

O objeto de exemplo no arquivo "http-framework.js" contém a demarcação dos métodos que essa Porta fornece.

Optei por essa implementação pelo fato do JavaScript não ter o recurso de Interfaces. Nesse caso, o objeto ajuda o IntelliSense do meu editor de código a fornecer a lista de métodos da Porta quando referenciada no Caso de Uso.

Perceba que não existe uma implementação ou apego tecnológico por como o método irá fazer. Com o nome do método autoexplicativo, revelo apenas qual a sua utilidade.

Dessa forma, tendo a tecnologia externa desacoplada do código de Caso de Uso como descrito no tópico <a href="#visao-arquitetural">Visão Arquitetural</a>, abre-se margem para multiplas implementações de Adaptadores que respeitem o protocolo fornecido pela Porta.

## Referências

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- P of EEA Catalog - Repository <a href="https://martinfowler.com/eaaCatalog/repository.html">https://martinfowler.com/eaaCatalog/repository.html/</a>