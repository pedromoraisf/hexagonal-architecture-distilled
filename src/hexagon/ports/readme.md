<p align="center">
  <a href="https://pedromoraisf.medium.com">
    <img src="https://ouch-cdn2.icons8.com/EtmzwEQAbSvqS2ev3sgvpxDd2u6y9fFDTUZoOkEaTzY/rs:fit:1063:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDA0/LzIyNzQyNDQ5LWRi/ZmEtNGZkMi04ZWYw/LWIwZWExMDNlYTAz/Ny5wbmc.png" height="150">
    <h2 align="center">Ports</h2>
  </a>
</p>

<p align="center">
  "Para prevenir surpresas, tenho deixado sempre abertas todas as janelas e todas as portas." - ABREU, C. F.
</p>
<br />

## Architectural look

Ports are the architectural boundary of the Hexagon. 

Following the conceptual view described in the publication that directs this repository, the files containing the pattern port are contained respectively in the "driven" and "driver" folders.

Look at the image below, where a primary and a secondary port are on the same side. The intention would just be to show in a synthesized way the adapters coming in contact with the port.

Conceptually, we know that the ports were on "different sides".

<p align="center">
<img src="./../../../docs/ports-cut.png" height="300">
</p>

Generally, ports are represented as Abstract Interfaces - both the resource of object-oriented languages and dependencies injected by parameters or higher-order functions, as I've exemplified in this repository.

## Observing in practice 

I opted for an approach where I use one of the extremes to define ports - a primary port for all inputs.

I'm tempted to follow this implementation because the adapters on this port - express and mock - are responsible for injecting inputs from their respective technologies.

Implementing in a more object-oriented language, it could be trivial to define ports for the contact with the code contained inside the Hexagon. In the parent publication of this repository, I add the link to a repository that contains these examples.

Another curious decision was the form of representation of the ports. I chose this implementation because JavaScript doesn't have the Interfaces feature. In this case, the object helps my code editor's IntelliSense provide the list of methods of the port when referenced in client code.

Realize that there is no description or technological attachment for how it will be done. With the name of the self-explanatory port, I just reveal its intention.

In this way, having the external technology decoupled from the code contained in the Hexagon, as described in the <a href="#architectural-look">Architectural Look</a> topic, there is room for multiple implementations of adapters that respect the protocol provided by the port.

## References

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- P of EEA Catalog - Repository <a href="https://martinfowler.com/eaaCatalog/repository.html">https://martinfowler.com/eaaCatalog/repository.html/</a>