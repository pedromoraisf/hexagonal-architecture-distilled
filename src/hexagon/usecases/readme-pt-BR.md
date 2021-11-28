<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/W4rsar4DB9mqC4ftdCnIwiup-9uaGC1LT-aHrnJKuQg/rs:fit:610:580/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzAz/LzY3YjNiMmY5LTQ2/N2YtNGYxNi1hYzYw/LWE3NjUwYTI3NTUw/Zi5wbmc.png" height="150">
    <h2 align="center">Casos de Uso</h2>
    <h4 align="center">Conhecido também no contexto da Arquitetura Hexagonal como: Camada Interna ou Core (Núcleo)</h4>
  </a>
</p>
<br />

## Visão conceitual

Seguindo a ideia de Ivar Jacobson e posteriormente de Alistair Cockburn, Casos de Uso estariam sob o guarda-chuva da Engenharia de Requisitos e seriam classificadores que definem interações entre um sistema e mais atores.

Casos de Uso podem ser descritos como funcionalidades que um sistema deve respeitar. O molde de sua identidade.

Pensando em um sistema de cardápio digital para restaurante, algumas de suas funcionalidades seriam: Pedir um prato, Pagar o pedido, Cadastrar um prato e Adicionar um cupom promocional.

Sendo assim, os casos de uso devem saber o que o sistema faz, e não como ele faz.

Se o sistema usa um banco de dados relacional para consultar um prato e retornar para o cliente realizar o pedido, ou um _gateway_ de pagamento específico para processar o pedido, não é responsabilidade do Caso de Uso tal conhecimento.

Como dito em [Portas](./../ports/readme-pt-BR.md), a indústria conservou tempo de mais construindo Casos de Usos que ultrapassassem limites conceituais que não deveriam ultrapassar.

Sendo assim, a ideia de Portas e Adaptadores se encaixa muito bem no contexto.

Escrevendo um Caso de Uso, na linha de chamada para um banco de dados, posso demarcar com uma Interface (Porta), e em outra camada complemento com uma implementação específica (Adaptador).

## Olhar arquitetural

Segundo as definições de [Porta](./../ports/readme-pt-BR.md) e [Adaptador](./../adapters/readme-pt-BR.md), o Caso de Uso - Camada Interna ou Core (Núcleo) - seria um orquestrador. Um ponto específico para chamada de Portas.

Pensando no Caso de Uso "Pedir um prato" (mencionado no tópico acima), posso posicionar uma Porta de consulta do "Prato" depois da validação interna dos dados recebidos. Para realização do lançamento do sistema, bastaria codificar a implementação da Porta (tanto em SQL, NoSQL ou em memória) e finalizar com o _encaixe das peças_.

Dessa forma, abrimos margem para múltiplas implementações de uma mesma Porta sem _sujar_ o Caso de Uso com código de _tecnologia externa_.

## Observando na prática

Observemos "@/hexagon/usecases/edit-a-particular-post.js".

Nesse arquivo, tem-se a menção de duas portas distintas. Na linha 12, 13 e 14, chamo funções que são recebidas por parâmetro (Portas por meio de Injeção de Dependência) para compor a visão de alto nível do Caso de Uso.

Perceba que o Caso de Uso não tem intenção em saber como o sistema realizará "badRequest" ou "ok".

Essa é uma das grandes promessas da Orientação a Objetos por meio do conceito de Polimorfismo. Múltiplas implementações da mesma abstração.

**Perceba que neste caso, estamos exercitando o conceito de Polimorfismo sem ao menos estar em uma linguagem com o recurso de Interfaces.**

## Visualizando na prática

Caso a teoria exercitada neste arquivo esteja muito abstrata, apelo para concretização no arquivo "@/hexagon/usecases/edit-a-particular-post.spec.js".

Nesse arquivo, tem-se o teste unitário como especificação da funcionalidade do Caso de Uso de Editar um Post.

Perceba que na linha 21, construo uma função "makeSut", que contém a funcionalidade que está sob testes (sut).

Essa função serve de container para o que será testado no arquivo. No caso, o Caso de Uso "Edit a Particular Post".

Antes de retornar "sut", injeto a execução das funções que detém o código que desejo testar.

No caso, uso "Post repository in memory" e "Http framework mock". No arquivo que será construído o artefato de produção, uso "Post repository MongoDB" e "Express http framework" - encontram-se todos na pasta "@/adapters".

Dessa forma, desenvolvo a ideia de composição para meus Casos de Uso, tendo uma visão desacoplada e segura sobre cada componente isolado.

## Referências

- Object Oriented Software Engineering: A Use Case Driven Approach - Ivar Jacobson
- Writing Effective Use Cases - Alistair Cockburn
- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma, Richard Helm, Ralph Johnson Dr, e John Vlissides.
- SUT, xUnit Patterns - <a href="http://xunitpatterns.com/SUT.html">http://xunitpatterns.com/SUT.html</a>
