My name is Christopher Besch and I propose to generate firmware from schematics.
At the German Aerospace Centre Institute for Space Systems we develop satellites.
Our next satellite to orbit is PLUTO, shown in this artistic render.

Like every other satellite, PLUTO has a PCDU, it's Power Conditioning and Distribution Unit.
At the DLR we develop both PCDUs' hardware and firmware in house.
Each satellite's PCDU performs the same operation, distributing power, but for different subsystems.
Therefore, our PCDU hardware development benefits from a snippet based approach:
We construct the hardware not from individual components but from snippets, groups of components performing a well defined function.
This allows us individually test snippets and to quickly develop hardware for a new PCDU based on a library of snippets.
The firmware development, however, still needed to create custom code for each and every PCDU.
The process of reading the schematics and adjusting pin definitions alone isn't just laborious but also highly prone to errors.

To tackle this problem we got together with the Chair for Embedded Systems at the Karlsruhe Institute for Technology and introduce the Group Netlist.
The picture on the right shows a simplified Group Netlist.
The Group Netlist is an abstract and tool agnostic representation of the hardware.
We group multiple components fulfilling a well defined function into Groups.
The schematics on the left, for example, shows a Group, an ADC.
You can find it in the Group Netlist on the right attaching the current measurement with the microcontroller.
As you can see, the Group Netlist represents what Groups there are and how they interconnect.
Therefore, the Group Netlist contains exactly the information needed to write firmware:
what functionality there is and through which microcontroller pin it connects.

To validate our approach, we implemented kicad_firmware_generation, a reference implementation for KiCad.
Going through the left flowchart, kicad_firmware_generation starts by generating an XML Group Netlist out of the hardware's KiCad netlist.
To understand what Groups there are, each snippet's external pin needs an annotation, as you can see on the left.
Afterwards kicad_firmware_generation generates firmware from the Group Netlist and Jinja2 templates.
The workflow is entirely deterministic and thus fit for continuous integration.
Where previously a cumbersome process bridged hardware and firmware development, our approach continuously runs and ensures that hardware and software are consistent.
Furthermore, after we introduced kicad_firmware_generation into our PCDU firmware development it found a fault in the PCDU's electrical design!
Two control pins for a power switch were swapped.
No one spotted this fault before because the power switch and the microcontroller are actually on different boards, bridged through a large connector.
One had to trace the circuit through five schematics pages split across two projects.
The firmware generation based on the Group Netlist caught the fault.

To quantify the ability to catch faults, we systematically injected thousands of faults into the PCDU schematics and checked how many our tooling caught.
This showed that our tooling finds up to 75% of those faults similar to the actual fault in the PCDU.
Lastly, to show our approaches scalability, we took 120 Open-Hardware KiCad projects, added synthetic annotations and measured the runtime of our tooling.
As you can see on the right, the runtime is bottlenecked by KiCad's own netlist exporter.
This shows that our approach doesn't just accelerate firmware development for small project.
Our approach is also highly useful at finding faults and scales to large projects.







While the netlist explains what electrical components there are and how they connect, the Group Netlist
Like every other satellite, PLUTO has a PCDU, it's Power Conditioning and Distribution Unit, inside its Electrical Power System.
The famous Apollo 13 incident occurred in the Electrical Power System, so we know how critical these units are.
Because we developed our approach only to accelerate firmware development, we were surprised at this finding.
