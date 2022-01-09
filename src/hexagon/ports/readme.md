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

## Conceptual vision

Following one of Alistair Cockburn's motivations, the industry has cultivated use case code writings that would have vast knowledge about their technologies or actors.

The entanglement between business rules and interactions with these entities would be the big problem, where the "left" and "right" side view of the application can be modified by an "inside" and "outside" look of the application.

Considering the above statement, the Ports enter as a demarcation of which place in the code would interact with the outside world.

The idea around Port comes from the same vision of the operating system or electronics port. Protocols that make room for the connection of devices that respect their protocol (a.k.a Adapter).

## Architectural look

Thinking about the architecture of the system as a whole, Ports would be directly included inside (business rules, use cases, etc.), providing a clear definition of the data that comes in, what data is returned and the functions that can be used.

<p align="center">
<img src="./../../../docs/ports-cut.png" height="300">
</p>

They are usually described by Abstract Interfaces - both the feature of object-oriented languages or dependencies injected by parameters or higher order functions as was done in the examples in this repository.

### What is the ideal number of ports?

There is no definition for this. Alistair reveals that it is not ideal to have an extreme view, where on the one hand we would have only one port for data input and the other for output, as well as one port for each use case.

Ports are usually defined according to their conceptual position in the code. For example, if the code receives certain data, performs the processing internally and communicates an external API, we would have a port for communication with this API.

In this project, I used the Repositories pattern for encapsulating database operations by collections - see the reference at the end.

In this case, each repository has a specific Port.

In a project that doesn't have a standard like this, one Port to the database as a whole may be sufficient.

## Observing in practice 

Looking at the "database" and "http-framework" folders, there are two Ports.

As much as there is a generic "database" folder, I define the Port according to the repositories. As new ones appear, equivalent Ports are added.

The example object in the "http-framework.js" file contains the demarcation of the methods that this Port provides.

I chose this implementation because JavaScript doesn't have the Interfaces feature. In this case, the object helps my code editor's IntelliSense provide the list of methods of the Port when referenced in the Use Case.

Realize that there is no implementation or technological attachment to how the method will do. With the self-explanatory method name, I just reveal its usefulness.

Thus, having the external technology decoupled from the Use Case code as described in the <a href="#architectural-look">Architectural Look</a> topic, there is room for multiple implementations of Adapters that respect the protocol provided by the Port.

## References

- Hexagonal Architecture - <a href="https://alistair.cockburn.us/hexagonal-architecture/">https://alistair.cockburn.us/hexagonal-architecture/</a>
- P of EEA Catalog - Repository <a href="https://martinfowler.com/eaaCatalog/repository.html">https://martinfowler.com/eaaCatalog/repository.html/</a>