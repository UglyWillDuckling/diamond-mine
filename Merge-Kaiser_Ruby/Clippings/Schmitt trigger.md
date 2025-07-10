---
source: https://en.wikipedia.org/wiki/Schmitt_trigger
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2003-11-25
created: 2025-06-21
tags:
  - circuit
---

![histy|250](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hysteresis_sharp_curve.svg/250px-Hysteresis_sharp_curve.svg.png)
*Transfer function of a Schmitt trigger. The horizontal and vertical axes are input voltage and output voltage, respectively. T and − are the switching thresholds, and **M** are the output voltage levels.*

In [electronics](https://en.wikipedia.org/wiki/Electronics "Electronics"), a **Schmitt trigger** is a [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator") circuit with [hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis") implemented by applying [positive feedback](https://en.wikipedia.org/wiki/Positive_feedback "Positive feedback") to the noninverting input of a comparator or differential amplifier. It is an [active circuit](https://en.wikipedia.org/wiki/Passivity_\(engineering\) "Passivity (engineering)") which converts an [analog](https://en.wikipedia.org/wiki/Analog_signal "Analog signal") input signal to a [digital](https://en.wikipedia.org/wiki/Digital_signal "Digital signal") output signal. The circuit is named a *trigger* because the output retains its value until the input changes sufficiently to trigger a change. In the non-inverting configuration, 
when the input is higher than a chosen threshold, the output is high. When the input is below a **different** (lower) chosen threshold the output is low, **and when the input is between the two levels the output retains its value.** 

This dual threshold action is called *[hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis")* and implies that the Schmitt trigger possesses [memory](https://en.wikipedia.org/wiki/Memory "Memory") and can act as a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator") (latch or [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)")). There is a close relation between the two kinds of circuits: a Schmitt trigger can be converted into a latch and a latch can be converted into a Schmitt trigger.
%%remember: Schmitt trigger(gate) can functions as a flip-flop  %%

Schmitt trigger devices are typically used in [signal conditioning](https://en.wikipedia.org/wiki/Signal_conditioning "Signal conditioning") applications to **remove noise from signals used in digital circuits,** particularly mechanical [contact bounce](https://en.wikipedia.org/wiki/Switch#Contact_bounce "Switch") in [switches](https://en.wikipedia.org/wiki/Switch "Switch"). They are also used in [closed loop](https://en.wikipedia.org/wiki/Feedback "Feedback") [negative feedback](https://en.wikipedia.org/wiki/Negative_feedback "Negative feedback") configurations to implement [relaxation oscillators](https://en.wikipedia.org/wiki/Relaxation_oscillator "Relaxation oscillator"), used in [function generators](https://en.wikipedia.org/wiki/Function_generator "Function generator") and [switching power supplies](https://en.wikipedia.org/wiki/Switched-mode_power_supply "Switched-mode power supply").

![noise|300](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Smitt_hysteresis_graph.svg/250px-Smitt_hysteresis_graph.svg.png)
*Comparison of the action of an ordinary comparator (A) and a Schmitt trigger (B) on a noisy analog input signal (U). The green dotted lines are the circuit's switching thresholds. The Schmitt trigger tends to remove noise from the signal.*

## History

The Schmitt trigger was invented by American scientist [Otto H. Schmitt](https://en.wikipedia.org/wiki/Otto_Schmitt "Otto Schmitt") in 1934 while he was a graduate student,[^5] later described in his doctoral dissertation (1937) as a *thermionic trigger*.[^6] It was a direct result of Schmitt's study of the neural impulse propagation in [squid](https://en.wikipedia.org/wiki/Squid "Squid") nerves.[^6]

## Implementation

### Fundamental idea

![diagram|400](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ideal_feedback_model.svg/330px-Ideal_feedback_model.svg.png)
*Block diagram of a Schmitt trigger circuit. It is a system with positive feedback in which the output signal fed back into the input causes the amplifier A to switch rapidly from one saturated state to the other when the input crosses a threshold. > 1 is the amplifier gain B < 1 is the feedback transfer function*

Circuits with hysteresis are based on positive feedback. Any active circuit can be made to behave as a Schmitt trigger by applying positive feedback so that the [loop gain](https://en.wikipedia.org/wiki/Loop_gain "Loop gain") is more than one. The positive feedback is introduced by adding a part of the output voltage to the input voltage. These circuits contain an [attenuator](https://en.wikipedia.org/wiki/Attenuator_\(electronics\) "Attenuator (electronics)") (the B box in the figure on the right) and an [adder](https://en.wikipedia.org/wiki/Analog_adder "Analog adder") (the circle with "+" inside) in addition to an amplifier acting as a comparator. There are three specific techniques for implementing this general idea. The [first](https://en.wikipedia.org/wiki/#dynamic_threshold) two of them are dual versions (series and parallel) of the general positive feedback system. In these configurations, the output voltage increases the effective difference input voltage of the comparator by "decreasing the threshold" or by "increasing the circuit input voltage"; the threshold and memory properties are incorporated in one element. In the [third technique](https://en.wikipedia.org/wiki/#two_thresholds), the threshold and memory properties are separated.

#### **Dynamic threshold (series feedback):** 

when the input voltage crosses the threshold in either direction, the circuit itself changes its own threshold to the opposite direction. For this purpose, it subtracts a part of its output voltage from the threshold (it is equal to adding voltage to the input voltage). Thus the output affects the threshold and does not affect the input voltage. These circuits are implemented by a differential amplifier with "series positive feedback" where the input is connected to the inverting input and the inverted output to the non-inverting input. In this arrangement, attenuation and summation are separated: a voltage divider acts as an attenuator and the loop acts as a simple [series voltage summer](https://en.wikipedia.org/wiki/KVL "KVL"). Examples are the classic transistor [emitter-coupled Schmitt trigger](https://en.wikipedia.org/wiki/#Classic_emitter-coupled_circuit), the [op-amp inverting Schmitt trigger](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger), etc.

#### **Modified input voltage (parallel feedback):** 

when the input voltage crosses the threshold in either direction the circuit changes its input voltage in the same direction (now **it adds a part of its output voltage directly to the input voltage**). ==Thus the output augments the input voltage and does not affect the threshold.== 
These circuits can be implemented by a single-ended non-inverting amplifier with "parallel positive feedback" where the input and the output sources are connected through resistors to the input. The two resistors form a weighted [parallel summer](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws#Kirchhoff's_current_law_\(KCL\) "Kirchhoff's circuit laws") incorporating both the attenuation and summation. Examples are the less familiar [collector-base coupled Schmitt trigger](https://en.wikipedia.org/wiki/#Collector-base_coupled_circuit), the [op-amp non-inverting Schmitt trigger](https://en.wikipedia.org/wiki/#Non-inverting_Schmitt_trigger), etc.

Some circuits and elements exhibiting [negative resistance](https://en.wikipedia.org/wiki/Negative_resistance "Negative resistance") can also act in a similar way: [negative impedance converters](https://en.wikipedia.org/wiki/Negative_impedance_converter "Negative impedance converter") (NIC), [neon lamps](https://en.wikipedia.org/wiki/Relaxation_oscillator#Pearson%E2%80%93Anson_electronic_relaxation_oscillator "Relaxation oscillator"), [tunnel diodes](https://en.wikipedia.org/wiki/Tunnel_diode "Tunnel diode") (e.g., a diode with an N-shaped current–voltage characteristic in the first quadrant), etc. In the last case, an oscillating input will cause the diode to move from one rising leg of the "N" to the other and back again as the input crosses the rising and falling switching thresholds.

#### **Two different unidirectional thresholds** 

are assigned in this case to two separate open-loop comparators (without hysteresis) driving a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator") (latch) or [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)"). The trigger is toggled high when the input voltage crosses down to up the high threshold and low when the input voltage crosses up to down the low threshold. Again, there is a positive feedback, but now it is concentrated only in the memory cell. Examples are the [555 timer](https://en.wikipedia.org/wiki/555_timer "555 timer") and the switch debouncing circuit.[^7]

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Schmitt_trigger_symbol.svg/250px-Schmitt_trigger_symbol.svg.png)

The Schmitt trigger symbol shown with a non-inverting hysteresis curve embedded in a buffer. Schmitt triggers can also be shown with inverting hysteresis curves and may be followed by bubbles. The documentation for the particular Schmitt trigger being used must be consulted to determine whether the device is non-inverting (i.e., where positive output transitions are caused by positive-going inputs) or inverting (i.e., where positive output transitions are caused by negative-going inputs).

The symbol for Schmitt triggers in circuit diagrams is a triangle with a symbol inside representing its ideal hysteresis curve.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Schmitt_trigger_with_transistors.svg/327px-Schmitt_trigger_with_transistors.svg.png)

Schmitt trigger implemented by two emitter-coupled BJTs stages.

The original Schmitt trigger is based on the [dynamic threshold](https://en.wikipedia.org/wiki/#dynamic_threshold) idea that is implemented by a [voltage divider](https://en.wikipedia.org/wiki/Voltage_divider "Voltage divider") with a switchable upper leg (the collector resistors R <sub>C1</sub> and R <sub>C2</sub>) and a steady lower leg (R <sub>E</sub>). Q1 acts as a [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator") with a [differential input](https://en.wikipedia.org/wiki/Differential_input "Differential input") (Q1 base-emitter junction) consisting of an inverting (Q1 base) and a non-inverting (Q1 emitter) inputs. The input voltage is applied to the inverting input; the output voltage of the voltage divider is applied to the non-inverting input thus determining its threshold. The comparator output drives the second [common collector](https://en.wikipedia.org/wiki/Common_collector "Common collector") stage Q2 (an *emitter follower*) through the voltage divider R <sub>1</sub> -R <sub>2</sub>. The emitter-coupled transistors Q1 and Q2 actually compose an electronic [double throw switch](https://en.wikipedia.org/wiki/Switch#Contact_terminology "Switch") that switches over the upper legs of the voltage divider and changes the threshold in a different (to the input voltage) direction.

This configuration can be considered as a [differential amplifier](https://en.wikipedia.org/wiki/Differential_amplifier "Differential amplifier") with series positive feedback between its non-inverting input (Q2 base) and output (Q1 collector) that forces the transition process. There is also a smaller negative feedback introduced by the emitter resistor R <sub>E</sub>. To make the positive feedback dominate over the negative one and to obtain a hysteresis, the proportion between the two collector resistors is chosen so that R <sub>C1</sub> > R <sub>C2</sub>. Thus less current flows through and there is less voltage drop across R <sub>E</sub> when Q1 is switched on than in the case when Q2 is switched on. As a result, the circuit has two different thresholds in regard to ground (V <sub>−</sub> in the image).

##### Operation

**Initial state.** For the NPN transistors shown on the right, imagine the input voltage is below the shared emitter voltage (high threshold for concreteness) so that the Q1 base-emitter junction is reverse-biased and Q1 does not conduct. The Q2 base voltage is determined by the divider described above so that Q2 is conducting and the trigger output is in the low state. The two resistors R <sub>C2</sub> and R <sub>E</sub> form another voltage divider that determines the high threshold. Neglecting V <sub>BE</sub>, the high threshold value is approximately

${\displaystyle V_{\mathrm {HT} }={\frac {R_{\mathrm {E} }}{R_{\mathrm {E} }+R_{\mathrm {C2} }}}{V_{+}}}$ .

The output voltage is low but well above ground. It is approximately equal to the high threshold and may not be low enough to be a logical zero for subsequent digital circuits. This may require an additional level shifting circuit following the trigger circuit.

**Crossing up the high threshold.** When the input voltage (Q1 base voltage) rises slightly above the voltage across the emitter resistor R <sub>E</sub> (the high threshold), Q1 begins conducting. Its collector voltage goes down and Q2 starts toward cutoff, because the voltage divider now provides lower Q2 base voltage. The common emitter voltage follows this change and goes down, making Q1 conduct more. The current begins to steer from the right leg of the circuit to the left one. Although Q1 is conducting more, it passes less current through R <sub>E</sub> (since R <sub>C1</sub> > R <sub>C2</sub>); the emitter voltage continues dropping and the effective Q1 base-emitter voltage continuously increases. This avalanche-like process continues until Q1 becomes completely turned on (saturated) and Q2 turned off. The trigger transitions to the high state and the output (Q2's collector) voltage is close to V+. Now the two resistors R <sub>C1</sub> and R <sub>E</sub> form a voltage divider that determines the low threshold. Its value is approximately

${\displaystyle V_{\mathrm {LT} }={\frac {R_{\mathrm {E} }}{R_{\mathrm {E} }+R_{\mathrm {C1} }}}{V_{+}}}$ .

**Crossing down the low threshold.** With the trigger now in the high state, if the input voltage drops enough (below the low threshold), Q1 begins cutting off. Its collector current reduces; as a result, the shared emitter voltage drops slightly and Q1's collector voltage rises significantly. The R <sub>1</sub> -R <sub>2</sub> voltage divider conveys this change to the Q2 base voltage and it begins conducting. The voltage across R <sub>E</sub> rises, further reducing the Q1 base-emitter potential in the same avalanche-like manner, and Q1 ceases to conduct. Q2 becomes completely turned on (saturated) and the output voltage becomes low again.

##### Variations

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Schmitt_trigger_inverted_symbol.svg/250px-Schmitt_trigger_inverted_symbol.svg.png)

Symbol depicting an inverting Schmitt trigger by showing an inverted hysteresis curve inside a buffer. Other symbols show a hysteresis curve (which may be inverting or non-inverting) embedded in a buffer followed by a bubble, which is similar to the traditional symbol for a digital inverter that shows a buffer followed by a bubble. In general, the direction of the Schmitt trigger (inverting or non-inverting) is not necessarily clear from the symbol because multiple conventions are used, even with the same manufacturer. There are several factors leading to such ambiguity, 1 These circumstances may warrant a closer investigation of the documentation for each particular Schmitt trigger.

**Non-inverting circuit.** The classic non-inverting Schmitt trigger can be turned into an inverting trigger by taking V <sub>out</sub> from the emitters instead of from a Q2 collector. In this configuration, the output voltage is equal to the dynamic threshold (the shared emitter voltage) and both the output levels stay away from the supply rails. Another disadvantage is that the load changes the thresholds so, it has to be high enough. The base resistor R <sub>B</sub> is obligatory to prevent the impact of the input voltage through Q1 base-emitter junction on the emitter voltage.

**Direct-coupled circuit.** To simplify the circuit, the R <sub>1</sub> –R <sub>2</sub> voltage divider can be omitted connecting Q1 collector directly to Q2 base. The base resistor R <sub>B</sub> can be omitted as well so that the input voltage source drives directly Q1's base.[^8] In this case, the common emitter voltage and Q1 collector voltage are not suitable for outputs. Only Q2 collector should be used as an output since, when the input voltage exceeds the high threshold and Q1 saturates, its base-emitter junction is forward biased and transfers the input voltage variations directly to the emitters. As a result, the common emitter voltage and Q1 collector voltage follow the input voltage. This situation is typical for over-driven transistor [differential amplifiers](https://en.wikipedia.org/wiki/Differential_amplifier#Long-tailed_a_nice_pair "Differential amplifier") and [ECL](https://en.wikipedia.org/wiki/Emitter-coupled_logic#Operation "Emitter-coupled logic") gates.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Schmitt_parallel.svg/250px-Schmitt_parallel.svg.png)

BJT bistable collector-base coupled circuit can be converted to a Schmitt trigger by connecting an additional base resistor to one of the bases

Like every latch, the fundamental collector-base coupled [bistable circuit](https://en.wikipedia.org/wiki/Latch_\(electronics\)#Basic_bistable_circuit "Latch (electronics)") operates with hysteresis. It can be converted to a Schmitt trigger by connecting an additional base resistor R to one of the inputs (Q1's base in the figure). The two resistors R and R <sub>4</sub> form a parallel voltage summer (the circle in the block diagram [above](https://en.wikipedia.org/wiki/#Fundamental_idea)) that sums output (Q2's collector) voltage and the input voltage, and drives the single-ended transistor "comparator" Q1. When the base voltage crosses the threshold (V <sub>BE0</sub> ∞ 0.65 V) in either direction, a part of Q2's collector voltage is added in the same direction to the input voltage. Thus the output [modifies](https://en.wikipedia.org/wiki/#modified_input) the input voltage by means of parallel positive feedback and does not affect the threshold (the base-emitter voltage).

The emitter-coupled version has the advantage that the input transistor is reverse biased when the input voltage is quite below the high threshold so the transistor is definitely cut off. This was important when germanium transistors were used for implementing the circuit, and this configuration has continued to be popular. The input base resistor can be omitted, since the emitter resistor limits the current when the input base-emitter junction is forward-biased.

An emitter-coupled Schmitt trigger *logical zero* output level may not be low enough and might need an additional output level shifting circuit. The collector-coupled Schmitt trigger has extremely low (almost zero) output at *logical zero*.

### Op-amp implementations

Schmitt triggers are commonly implemented using an [operational amplifier](https://en.wikipedia.org/wiki/Operational_amplifier "Operational amplifier") or a dedicated [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator").[^2] An [open-loop](https://en.wikipedia.org/wiki/Open-loop_gain "Open-loop gain") op-amp and comparator may be considered as an analog-digital device having analog inputs and a digital output that extracts the [sign](https://en.wikipedia.org/wiki/Sign_function "Sign function") of the voltage difference between its two inputs.[^3] The positive feedback is applied by adding a part of the output voltage to the input voltage in [series](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger) or [parallel](https://en.wikipedia.org/wiki/#Non-inverting_Schmitt_trigger) manner. Due to the extremely high op-amp gain, the loop gain is also high enough and provides the avalanche-like process.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Op-Amp_Schmitt_Trigger.svg/300px-Op-Amp_Schmitt_Trigger.svg.png)

Schmitt trigger implemented by a non-inverting comparator

In this circuit, the two resistors R <sub>1</sub> and R <sub>2</sub> form a parallel voltage summer. It adds a part of the output voltage to the input voltage thus augmenting it during and after switching that occurs when the resulting voltage is near ground. This *parallel positive feedback* creates the needed [hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis") that is controlled by the proportion between the [resistances](https://en.wikipedia.org/wiki/Resistor "Resistor") of R <sub>1</sub> and R <sub>2</sub>. The output of the parallel voltage summer is single-ended (it produces voltage with respect to ground) so the circuit does not need an amplifier with a differential input. Since conventional op-amps have a differential input, the inverting input is grounded to make the reference point zero volts.

The output voltage always has the same sign as the *op-amp input voltage* but it does not always have the same sign as the *circuit input voltage* (the signs of the two input voltages can differ). When the circuit input voltage is above the high threshold or below the low threshold, the output voltage has the same sign as the *circuit input voltage* (the circuit is non-inverting). It acts like a comparator that switches at a different point depending on whether the output of the comparator is high or low. When the circuit input voltage is between the thresholds, the output voltage is undefined and it depends on the last state (the circuit behaves as an elementary [latch](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\)#Basic_bistable_circuit "Flip-flop (electronics)")).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hysteresis_sharp_curve.svg/250px-Hysteresis_sharp_curve.svg.png)

Typical transfer function of a non-inverting Schmitt trigger like the circuit above.

For instance, if the Schmitt trigger is currently in the high state, the output will be at the positive power supply rail (+V <sub>S</sub>). The output voltage V <sub>+</sub> of the resistive summer can be found by applying the [superposition theorem](https://en.wikipedia.org/wiki/Superposition_theorem "Superposition theorem"):

${\displaystyle V_{\mathrm {+} }={\frac {R_{2}}{R_{1}+R_{2}}}\cdot V_{\mathrm {in} }+{\frac {R_{1}}{R_{1}+R_{2}}}\cdot V_{\mathrm {s} }}$

The comparator will switch when V <sub>+</sub> =0. Then ${\displaystyle {R_{2}}\cdot V_{\mathrm {in} }=-{R_{1}}\cdot V_{\mathrm {s} }}$ (the same result can be obtained by applying the current conservation principle). So ${\displaystyle V_{\text{in}}}$ must drop below ${\displaystyle -{\frac {R_{1}}{R_{2}}}{V_{s}}}$ to get the output to switch. Once the comparator output has switched to − *V* <sub>S</sub>, the threshold becomes ${\displaystyle +{\frac {R_{1}}{R_{2}}}{V_{s}}}$ to switch back to high. So this circuit creates a switching band centered on zero, with trigger levels ${\displaystyle \pm {\frac {R_{1}}{R_{2}}}{V_{s}}}$ (it can be shifted to the left or the right by applying a bias voltage to the inverting input). The input voltage must rise above the top of the band, and then below the bottom of the band, for the output to switch on (plus) and then back off (minus). If *R* <sub>1</sub> is zero or *R* <sub>2</sub> is infinity (i.e., an [open circuit](https://en.wikipedia.org/wiki/Open-circuit_voltage "Open-circuit voltage")), the band collapses to zero width, and it behaves as a standard comparator. The transfer characteristic is shown in the picture on the left. The value of the threshold *T* is given by ${\displaystyle {\frac {R_{1}}{R_{2}}}{V_{s}}}$ and the maximum value of the output *M* is the power supply rail.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Opampschmitt_realistic_xcircuit.svg/500px-Opampschmitt_realistic_xcircuit.svg.png)

A practical Schmitt trigger configuration with precise thresholds

A unique property of circuits with parallel positive feedback is the impact on the input source. In circuits with [negative parallel feedback](https://en.wikipedia.org/wiki/Negative-feedback_amplifier "Negative-feedback amplifier") (e.g., an inverting amplifier), the virtual ground at the inverting input separates the input source from the op-amp output. Here there is no virtual ground, and the steady op-amp output voltage is applied through R <sub>1</sub> -R <sub>2</sub> network to the input source. The op-amp output passes an opposite current through the input source (it injects current into the source when the input voltage is positive and it draws current from the source when it is negative).

A practical Schmitt trigger with precise thresholds is shown in the figure on the right. The transfer characteristic has exactly the same shape of the previous basic configuration, and the threshold values are the same as well. On the other hand, in the previous case, the output voltage was depending on the power supply, while now it is defined by the [Zener diodes](https://en.wikipedia.org/wiki/Zener_diode "Zener diode") (which could also be replaced with a single [double-anode Zener diode](https://en.wikipedia.org/w/index.php?title=Double-anode_Zener_diode&action=edit&redlink=1 "Double-anode Zener diode (page does not exist)")). In this configuration, the output levels can be modified by appropriate choice of Zener diode, and these levels are resistant to power supply fluctuations (i.e., they increase the [PSRR](https://en.wikipedia.org/wiki/PSRR "PSRR") of the comparator). The resistor *R* <sub>3</sub> is there to limit the current through the diodes, and the resistor *R* <sub>4</sub> minimizes the input voltage offset caused by the comparator's input leakage currents (see *[limitations of real op-amps](https://en.wikipedia.org/wiki/Operational_amplifier#Limitations_of_real_op-amps "Operational amplifier")*).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Op-Amp_Inverting_Schmitt_Trigger.svg/300px-Op-Amp_Inverting_Schmitt_Trigger.svg.png)

Schmitt trigger implemented by an inverting comparator

In the inverting version, the attenuation and summation are separated. The two resistors R <sub>1</sub> and R <sub>2</sub> act only as a "pure" attenuator (voltage divider). The input loop acts as a [series voltage summer](https://en.wikipedia.org/wiki/KVL "KVL") that adds a part of the output voltage in series to the circuit input voltage. This *series positive feedback* creates the needed hysteresis that is controlled by the proportion between the [resistances](https://en.wikipedia.org/wiki/Resistor "Resistor") of R <sub>1</sub> and the whole resistance (R <sub>1</sub> and R <sub>2</sub>). The effective voltage applied to the op-amp input is floating so the op-amp must have a differential input.

The circuit is named *inverting* since the output voltage always has an opposite sign to the input voltage when it is out of the hysteresis cycle (when the input voltage is above the high threshold or below the low threshold). However, if the input voltage is within the hysteresis cycle (between the high and low thresholds), the circuit can be inverting as well as non-inverting. The output voltage is undefined and it depends on the last state so the circuit behaves like an elementary latch.

To compare the two versions, the circuit operation will be considered at the same conditions as above. If the Schmitt trigger is currently in the high state, the output will be at the positive power supply rail (+V <sub>S</sub>). The output voltage V <sub>+</sub> of the voltage divider is:

${\displaystyle V_{\mathrm {+} }={\frac {R_{1}}{R_{1}+R_{2}}}\cdot V_{\mathrm {s} }}$

The comparator will switch when V <sub>in</sub> = V <sub>+</sub>. So ${\displaystyle V_{\text{in}}}$ must exceed above this voltage to get the output to switch. Once the comparator output has switched to − *V* <sub>S</sub>, the threshold becomes ${\displaystyle -{\frac {R_{1}}{R_{1}+R_{2}}}{V_{s}}}$ to switch back to high. So this circuit creates a switching band centered on zero, with trigger levels ${\displaystyle \pm {\frac {R_{1}}{R_{1}+R_{2}}}{V_{s}}}$ (it can be shifted to the left or the right by connecting R <sub>1</sub> to a bias voltage). The input voltage must rise above the top of the band, and then below the bottom of the band, for the output to switch off (minus) and then back on (plus). If *R* <sub>1</sub> is zero (i.e., a [short circuit](https://en.wikipedia.org/wiki/Short_circuit "Short circuit")) or *R* <sub>2</sub> is infinity, the band collapses to zero width, and it behaves as a standard comparator.

In contrast with the parallel version, this circuit does not impact on the input source since the source is separated from the voltage divider output by the high op-amp input differential impedance.

In the inverting amplifier voltage drop across resistor (R1) decides the reference voltages i.e., upper threshold voltage (V+) and lower threshold voltages (V−) for the comparison with input signal applied. These voltages are fixed as the output voltage and resistor values are fixed.

so by changing the drop across (R1) threshold voltages can be varied. By adding a bias voltage in series with resistor (R1) drop across it can be varied, which can change threshold voltages. Desired values of reference voltages can be obtained by varying bias voltage.

The above equations can be modified as:

${\displaystyle V_{\pm }=\pm V_{s}{\frac {R_{1}}{R_{1}+R_{2}}}+V_{b}{\frac {R_{2}}{R_{1}+R_{2}}}}$

## Applications

Schmitt triggers are typically used in open loop configurations for noise immunity and [closed loop](https://en.wikipedia.org/wiki/Feedback "Feedback") configurations to implement [function generators](https://en.wikipedia.org/wiki/Function_generator "Function generator").

- **[Analog-to-digital conversion](https://en.wikipedia.org/wiki/Analog-to-digital_conversion "Analog-to-digital conversion")***:* The Schmitt trigger is effectively a one bit analog to digital converter. When the signal reaches a given level it switches from its low to high state.
- **Level detection***:* The Schmitt trigger circuit is able to provide level detection. When undertaking this application, it is necessary that the hysteresis voltage is taken into account so that the circuit switches on the required voltage.
- **Line reception***:* When running a data line that may have picked up noise into a logic gate it is necessary to ensure that a logic output level is only changed as the data changed and not as a result of spurious noise that may have been picked up. Using a Schmitt trigger broadly enables the peak to peak noise to reach the level of the hysteresis before spurious triggering may occur.

### Noise immunity

One application of a Schmitt trigger is to increase the noise immunity in a circuit with only a single input threshold. With only one input threshold, a [noisy](https://en.wikipedia.org/wiki/Noise_\(physics\) "Noise (physics)") input signal [^4] near that threshold could cause the output to switch rapidly back and forth from noise alone. A noisy Schmitt Trigger input signal near one threshold can cause only one switch in output value, after which it would have to move beyond the other threshold in order to cause another switch.

For example, an [amplified](https://en.wikipedia.org/wiki/Linear_amplifier "Linear amplifier") [infrared](https://en.wikipedia.org/wiki/Infrared "Infrared") [photodiode](https://en.wikipedia.org/wiki/Photodiode "Photodiode") may generate an electric signal that switches frequently between its absolute lowest value and its absolute highest value. This signal is then [low-pass filtered](https://en.wikipedia.org/wiki/Low-pass_filter "Low-pass filter") to form a smooth signal that rises and falls corresponding to the relative amount of time the switching signal is on and off. That filtered output passes to the input of a Schmitt trigger. The net effect is that the output of the Schmitt trigger only passes from low to high after a received infrared signal excites the photodiode for longer than some known period, and once the Schmitt trigger is high, it only moves low after the infrared signal ceases to excite the photodiode for longer than a similar known period. Whereas the photodiode is prone to spurious switching due to noise from the environment, the delay added by the filter and Schmitt trigger ensures that the output only switches when there is certainly an input stimulating the device.

Schmitt triggers are common in many switching circuits for similar reasons (e.g., for [switch debouncing](https://en.wikipedia.org/wiki/Switch#Contact_bounce "Switch")).

List of IC including input Schmitt triggers

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Opamprelaxationoscillator.svg/500px-Opamprelaxationoscillator.svg.png)

Output and capacitor waveforms for comparator -based relaxation oscillator

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/SchmittTriggerRelaxationOscillator.png/330px-SchmittTriggerRelaxationOscillator.png)

A Schmitt Trigger-based implementation of a relaxation oscillator

A Schmitt trigger is a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator"), and it can be used to implement another type of multivibrator, the [relaxation oscillator](https://en.wikipedia.org/wiki/Relaxation_oscillator "Relaxation oscillator"). This is achieved by connecting a single RC integrating circuit between the output and the input of an inverting Schmitt trigger. The output will be a continuous [square wave](https://en.wikipedia.org/wiki/Square_wave_\(waveform\) "Square wave (waveform)") whose [frequency](https://en.wikipedia.org/wiki/Frequency "Frequency") depends on the values of R and C, and the threshold points of the Schmitt trigger. Since multiple Schmitt trigger circuits can be provided by a single [integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") (e.g. the [4000 series](https://en.wikipedia.org/wiki/4000_series "4000 series") [CMOS](https://en.wikipedia.org/wiki/CMOS "CMOS") device type 40106 contains 6 of them), a spare section of the IC can be quickly pressed into service as a simple and reliable oscillator with only two external components.

Here, a comparator-based Schmitt trigger is used in its [inverting configuration](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger). Additionally, slow negative feedback is added with an integrating [RC network](https://en.wikipedia.org/wiki/RC_circuit#Integrator "RC circuit"). The result, which is shown on the right, is that the output automatically oscillates from *V* <sub><i>SS</i></sub> to *V* <sub><i>DD</i></sub> as the capacitor charges from one Schmitt trigger threshold to the other.

## See also

- [Operational amplifier applications](https://en.wikipedia.org/wiki/Operational_amplifier_applications#Schmitt_trigger "Operational amplifier applications")
- [Threshold detector with hysteresis](https://en.wikipedia.org/wiki/Threshold_detector_with_hysteresis "Threshold detector with hysteresis")
- [List of 4000-series integrated circuits](https://en.wikipedia.org/wiki/List_of_4000-series_integrated_circuits "List of 4000-series integrated circuits") - includes logic chips with Schmitt trigger inputs
- [List of 7400-series integrated circuits](https://en.wikipedia.org/wiki/List_of_7400-series_integrated_circuits "List of 7400-series integrated circuits") - includes logic chips with Schmitt trigger inputs

## Notes

## References

## External links

- [Inverting Schmitt Trigger Calculator](http://www.random-science-tools.com/electronics/inverting-schmitt-trigger-calculator.htm)
- [Non-Inverting Schmitt Trigger Calculator](http://www.random-science-tools.com/electronics/schmitt-trigger-calculator.htm)

[^1]: One factor contributing to ambiguity is that one simple transistor-based realization of a Schmitt trigger is naturally inverting, with a non-inverting Schmitt trigger sometimes consisting of such an inverting implementation followed by an inverter. An additional inverter may be added for buffering a stand-alone inverting configuration. Consequently, inverting configurations within an integrated circuit may be naturally inverting, while non-inverting configurations are implemented with a single inverter, and stand-alone inverting configurations may be implemented with two inverters. As a result, symbols that combine inverting bubbles and hysteresis curves may be using the hysteresis curve to describe the entire device or the embedded Schmitt trigger only.

[^2]: Usually, negative feedback is used in op-amp circuits. Some operational amplifiers are designed to be used only in negative-feedback configurations that enforce a negligible difference between the inverting and non-inverting inputs. They incorporate input-protection circuitry that prevent the inverting and non-inverting inputs from operating far away from each other. For example, [clipper circuits](https://en.wikipedia.org/wiki/Clipper_\(electronics\) "Clipper (electronics)") made up of two general purpose [diodes](https://en.wikipedia.org/wiki/Diode "Diode") with opposite bias in parallel [\[1\]](http://www.analog.com/library/analogdialogue/archives/42-10/off_amps.html) or two [Zener diodes](https://en.wikipedia.org/wiki/Zener_diode "Zener diode") with opposite bias in series (i.e., a [double-anode Zener diode](https://en.wikipedia.org/w/index.php?title=Double-anode_Zener_diode&action=edit&redlink=1 "Double-anode Zener diode (page does not exist)")) are sometimes used internally across the two inputs of the operational amplifier. In these cases, the operational amplifiers will fail to function well as comparators. Conversely, comparators are designed under the assumption that the input voltages can differ significantly.

[^3]: When the non-inverting (+) input is at a higher voltage than the inverting (−) input, the comparator output switches nearly to + *V* <sub>S</sub>, which is its high supply voltage. When the non-inverting (+) input is at a lower voltage than the inverting (−) input, the comparator output switches nearly to - *V* <sub>S</sub>, which is its low supply voltage.

[^4]: Where the noise amplitude is assumed to be small compared to the change in Schmitt trigger threshold.

[^5]: Schmitt, Otto H. (January 1938). "A Thermionic Trigger". *Journal of Scientific Instruments*. **15** (1): 24– 26. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[1938JScI...15...24S](https://ui.adsabs.harvard.edu/abs/1938JScI...15...24S). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1088/0950-7671/15/1/305](https://doi.org/10.1088%2F0950-7671%2F15%2F1%2F305).

[^6]: August 2004 issue of the Pavek Museum of Broadcasting Newsletter [http://160.94.102.47/Otto\_Images/PavekOHSbio.pdf](http://160.94.102.47/Otto_Images/PavekOHSbio.pdf) [Archived](https://web.archive.org/web/20151001140145/http://160.94.102.47/Otto_Images/PavekOHSbio.pdf) 2015-10-01 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^7]: [Debouncing switches with an SR latch](http://www.ee.nmt.edu/~elosery/fall_2008/ee231L/lab6.pdf)

[^8]: [7414 datasheet](http://www.datasheetcatalog.org/datasheets/400/334439_DS.pdf)![[~/×/b643d89b645f1b69a28fe1f4cdabbb70_MD5.png]]

Transfer function of a Schmitt trigger. The horizontal and vertical axes are input voltage and output voltage, respectively. T and − are the switching thresholds, and M are the output voltage levels.

In [electronics](https://en.wikipedia.org/wiki/Electronics "Electronics"), a **Schmitt trigger** is a [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator") circuit with [hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis") implemented by applying [positive feedback](https://en.wikipedia.org/wiki/Positive_feedback "Positive feedback") to the noninverting input of a comparator or differential amplifier. It is an [active circuit](https://en.wikipedia.org/wiki/Passivity_\(engineering\) "Passivity (engineering)") which converts an [analog](https://en.wikipedia.org/wiki/Analog_signal "Analog signal") input signal to a [digital](https://en.wikipedia.org/wiki/Digital_signal "Digital signal") output signal. The circuit is named a *trigger* because the output retains its value until the input changes sufficiently to trigger a change. In the non-inverting configuration, when the input is higher than a chosen threshold, the output is high. When the input is below a different (lower) chosen threshold the output is low, and when the input is between the two levels the output retains its value. This dual threshold action is called *[hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis")* and implies that the Schmitt trigger possesses [memory](https://en.wikipedia.org/wiki/Memory "Memory") and can act as a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator") (latch or [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)")). There is a close relation between the two kinds of circuits: a Schmitt trigger can be converted into a latch and a latch can be converted into a Schmitt trigger.

Schmitt trigger devices are typically used in [signal conditioning](https://en.wikipedia.org/wiki/Signal_conditioning "Signal conditioning") applications to remove noise from signals used in digital circuits, particularly mechanical [contact bounce](https://en.wikipedia.org/wiki/Switch#Contact_bounce "Switch") in [switches](https://en.wikipedia.org/wiki/Switch "Switch"). They are also used in [closed loop](https://en.wikipedia.org/wiki/Feedback "Feedback") [negative feedback](https://en.wikipedia.org/wiki/Negative_feedback "Negative feedback") configurations to implement [relaxation oscillators](https://en.wikipedia.org/wiki/Relaxation_oscillator "Relaxation oscillator"), used in [function generators](https://en.wikipedia.org/wiki/Function_generator "Function generator") and [switching power supplies](https://en.wikipedia.org/wiki/Switched-mode_power_supply "Switched-mode power supply").

![[~/×/d29195e511a5d5731f3a94c02cef282b_MD5.png]]

Comparison of the action of an ordinary comparator (A) and a Schmitt trigger (B) on a noisy analog input signal (U). The green dotted lines are the circuit's switching thresholds. The Schmitt trigger tends to remove noise from the signal.

In signal theory, a schmitt trigger is essentially a one-bit [quantizer](https://en.wikipedia.org/wiki/Quantization_\(signal_processing\) "Quantization (signal processing)").

## History

The Schmitt trigger was invented by American scientist [Otto H. Schmitt](https://en.wikipedia.org/wiki/Otto_Schmitt "Otto Schmitt") in 1934 while he was a graduate student,[^5] later described in his doctoral dissertation (1937) as a *thermionic trigger*.[^6] It was a direct result of Schmitt's study of the neural impulse propagation in [squid](https://en.wikipedia.org/wiki/Squid "Squid") nerves.[^6]

## Implementation

### Fundamental idea

![[~/×/0123f9a9bf3cd1ab0903b524c284798f_MD5.png]]

Block diagram of a Schmitt trigger circuit. It is a system with positive feedback in which the output signal fed back into the input causes the amplifier A to switch rapidly from one saturated state to the other when the input crosses a threshold. > 1 is the amplifier gain B < 1 is the feedback transfer function

Circuits with hysteresis are based on positive feedback. Any active circuit can be made to behave as a Schmitt trigger by applying positive feedback so that the [loop gain](https://en.wikipedia.org/wiki/Loop_gain "Loop gain") is more than one. The positive feedback is introduced by adding a part of the output voltage to the input voltage. These circuits contain an [attenuator](https://en.wikipedia.org/wiki/Attenuator_\(electronics\) "Attenuator (electronics)") (the B box in the figure on the right) and an [adder](https://en.wikipedia.org/wiki/Analog_adder "Analog adder") (the circle with "+" inside) in addition to an amplifier acting as a comparator. There are three specific techniques for implementing this general idea. The [first](https://en.wikipedia.org/wiki/#dynamic_threshold) two of them are dual versions (series and parallel) of the general positive feedback system. In these configurations, the output voltage increases the effective difference input voltage of the comparator by "decreasing the threshold" or by "increasing the circuit input voltage"; the threshold and memory properties are incorporated in one element. In the [third technique](https://en.wikipedia.org/wiki/#two_thresholds), the threshold and memory properties are separated.

**Dynamic threshold (series feedback):** when the input voltage crosses the threshold in either direction, the circuit itself changes its own threshold to the opposite direction. For this purpose, it subtracts a part of its output voltage from the threshold (it is equal to adding voltage to the input voltage). Thus the output affects the threshold and does not affect the input voltage. These circuits are implemented by a differential amplifier with "series positive feedback" where the input is connected to the inverting input and the inverted output to the non-inverting input. In this arrangement, attenuation and summation are separated: a voltage divider acts as an attenuator and the loop acts as a simple [series voltage summer](https://en.wikipedia.org/wiki/KVL "KVL"). Examples are the classic transistor [emitter-coupled Schmitt trigger](https://en.wikipedia.org/wiki/#Classic_emitter-coupled_circuit), the [op-amp inverting Schmitt trigger](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger), etc.

**Modified input voltage (parallel feedback):** when the input voltage crosses the threshold in either direction the circuit changes its input voltage in the same direction (now it adds a part of its output voltage directly to the input voltage). Thus the output augments the input voltage and does not affect the threshold. These circuits can be implemented by a single-ended non-inverting amplifier with "parallel positive feedback" where the input and the output sources are connected through resistors to the input. The two resistors form a weighted [parallel summer](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws#Kirchhoff's_current_law_\(KCL\) "Kirchhoff's circuit laws") incorporating both the attenuation and summation. Examples are the less familiar [collector-base coupled Schmitt trigger](https://en.wikipedia.org/wiki/#Collector-base_coupled_circuit), the [op-amp non-inverting Schmitt trigger](https://en.wikipedia.org/wiki/#Non-inverting_Schmitt_trigger), etc.

Some circuits and elements exhibiting [negative resistance](https://en.wikipedia.org/wiki/Negative_resistance "Negative resistance") can also act in a similar way: [negative impedance converters](https://en.wikipedia.org/wiki/Negative_impedance_converter "Negative impedance converter") (NIC), [neon lamps](https://en.wikipedia.org/wiki/Relaxation_oscillator#Pearson%E2%80%93Anson_electronic_relaxation_oscillator "Relaxation oscillator"), [tunnel diodes](https://en.wikipedia.org/wiki/Tunnel_diode "Tunnel diode") (e.g., a diode with an N-shaped current–voltage characteristic in the first quadrant), etc. In the last case, an oscillating input will cause the diode to move from one rising leg of the "N" to the other and back again as the input crosses the rising and falling switching thresholds.

**Two different unidirectional thresholds** are assigned in this case to two separate open-loop comparators (without hysteresis) driving a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator") (latch) or [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)"). The trigger is toggled high when the input voltage crosses down to up the high threshold and low when the input voltage crosses up to down the low threshold. Again, there is a positive feedback, but now it is concentrated only in the memory cell. Examples are the [555 timer](https://en.wikipedia.org/wiki/555_timer "555 timer") and the switch debouncing circuit.[^7]

![[~/×/08bbf54043e7e51e0395718402f844bd_MD5.png]]

The Schmitt trigger symbol shown with a non-inverting hysteresis curve embedded in a buffer. Schmitt triggers can also be shown with inverting hysteresis curves and may be followed by bubbles. The documentation for the particular Schmitt trigger being used must be consulted to determine whether the device is non-inverting (i.e., where positive output transitions are caused by positive-going inputs) or inverting (i.e., where positive output transitions are caused by negative-going inputs).

The symbol for Schmitt triggers in circuit diagrams is a triangle with a symbol inside representing its ideal hysteresis curve.

![[~/×/9ac66ad95f019188ca0903e12404b412_MD5.png]]

Schmitt trigger implemented by two emitter-coupled BJTs stages.

The original Schmitt trigger is based on the [dynamic threshold](https://en.wikipedia.org/wiki/#dynamic_threshold) idea that is implemented by a [voltage divider](https://en.wikipedia.org/wiki/Voltage_divider "Voltage divider") with a switchable upper leg (the collector resistors R <sub>C1</sub> and R <sub>C2</sub>) and a steady lower leg (R <sub>E</sub>). Q1 acts as a [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator") with a [differential input](https://en.wikipedia.org/wiki/Differential_input "Differential input") (Q1 base-emitter junction) consisting of an inverting (Q1 base) and a non-inverting (Q1 emitter) inputs. The input voltage is applied to the inverting input; the output voltage of the voltage divider is applied to the non-inverting input thus determining its threshold. The comparator output drives the second [common collector](https://en.wikipedia.org/wiki/Common_collector "Common collector") stage Q2 (an *emitter follower*) through the voltage divider R <sub>1</sub> -R <sub>2</sub>. The emitter-coupled transistors Q1 and Q2 actually compose an electronic [double throw switch](https://en.wikipedia.org/wiki/Switch#Contact_terminology "Switch") that switches over the upper legs of the voltage divider and changes the threshold in a different (to the input voltage) direction.

This configuration can be considered as a [differential amplifier](https://en.wikipedia.org/wiki/Differential_amplifier "Differential amplifier") with series positive feedback between its non-inverting input (Q2 base) and output (Q1 collector) that forces the transition process. There is also a smaller negative feedback introduced by the emitter resistor R <sub>E</sub>. To make the positive feedback dominate over the negative one and to obtain a hysteresis, the proportion between the two collector resistors is chosen so that R <sub>C1</sub> > R <sub>C2</sub>. Thus less current flows through and there is less voltage drop across R <sub>E</sub> when Q1 is switched on than in the case when Q2 is switched on. As a result, the circuit has two different thresholds in regard to ground (V <sub>−</sub> in the image).

##### Operation

**Initial state.** For the NPN transistors shown on the right, imagine the input voltage is below the shared emitter voltage (high threshold for concreteness) so that the Q1 base-emitter junction is reverse-biased and Q1 does not conduct. The Q2 base voltage is determined by the divider described above so that Q2 is conducting and the trigger output is in the low state. The two resistors R <sub>C2</sub> and R <sub>E</sub> form another voltage divider that determines the high threshold. Neglecting V <sub>BE</sub>, the high threshold value is approximately

${\displaystyle V_{\mathrm {HT} }={\frac {R_{\mathrm {E} }}{R_{\mathrm {E} }+R_{\mathrm {C2} }}}{V_{+}}}$ .

The output voltage is low but well above ground. It is approximately equal to the high threshold and may not be low enough to be a logical zero for subsequent digital circuits. This may require an additional level shifting circuit following the trigger circuit.

**Crossing up the high threshold.** When the input voltage (Q1 base voltage) rises slightly above the voltage across the emitter resistor R <sub>E</sub> (the high threshold), Q1 begins conducting. Its collector voltage goes down and Q2 starts toward cutoff, because the voltage divider now provides lower Q2 base voltage. The common emitter voltage follows this change and goes down, making Q1 conduct more. The current begins to steer from the right leg of the circuit to the left one. Although Q1 is conducting more, it passes less current through R <sub>E</sub> (since R <sub>C1</sub> > R <sub>C2</sub>); the emitter voltage continues dropping and the effective Q1 base-emitter voltage continuously increases. This avalanche-like process continues until Q1 becomes completely turned on (saturated) and Q2 turned off. The trigger transitions to the high state and the output (Q2's collector) voltage is close to V+. Now the two resistors R <sub>C1</sub> and R <sub>E</sub> form a voltage divider that determines the low threshold. Its value is approximately

${\displaystyle V_{\mathrm {LT} }={\frac {R_{\mathrm {E} }}{R_{\mathrm {E} }+R_{\mathrm {C1} }}}{V_{+}}}$ .

**Crossing down the low threshold.** With the trigger now in the high state, if the input voltage drops enough (below the low threshold), Q1 begins cutting off. Its collector current reduces; as a result, the shared emitter voltage drops slightly and Q1's collector voltage rises significantly. The R <sub>1</sub> -R <sub>2</sub> voltage divider conveys this change to the Q2 base voltage and it begins conducting. The voltage across R <sub>E</sub> rises, further reducing the Q1 base-emitter potential in the same avalanche-like manner, and Q1 ceases to conduct. Q2 becomes completely turned on (saturated) and the output voltage becomes low again.

##### Variations

![[~/×/d639bf237c73dc354d204acc2e2c6309_MD5.png]]

Symbol depicting an inverting Schmitt trigger by showing an inverted hysteresis curve inside a buffer. Other symbols show a hysteresis curve (which may be inverting or non-inverting) embedded in a buffer followed by a bubble, which is similar to the traditional symbol for a digital inverter that shows a buffer followed by a bubble. In general, the direction of the Schmitt trigger (inverting or non-inverting) is not necessarily clear from the symbol because multiple conventions are used, even with the same manufacturer. There are several factors leading to such ambiguity, 1 These circumstances may warrant a closer investigation of the documentation for each particular Schmitt trigger.

**Non-inverting circuit.** The classic non-inverting Schmitt trigger can be turned into an inverting trigger by taking V <sub>out</sub> from the emitters instead of from a Q2 collector. In this configuration, the output voltage is equal to the dynamic threshold (the shared emitter voltage) and both the output levels stay away from the supply rails. Another disadvantage is that the load changes the thresholds so, it has to be high enough. The base resistor R <sub>B</sub> is obligatory to prevent the impact of the input voltage through Q1 base-emitter junction on the emitter voltage.

**Direct-coupled circuit.** To simplify the circuit, the R <sub>1</sub> –R <sub>2</sub> voltage divider can be omitted connecting Q1 collector directly to Q2 base. The base resistor R <sub>B</sub> can be omitted as well so that the input voltage source drives directly Q1's base.[^8] In this case, the common emitter voltage and Q1 collector voltage are not suitable for outputs. Only Q2 collector should be used as an output since, when the input voltage exceeds the high threshold and Q1 saturates, its base-emitter junction is forward biased and transfers the input voltage variations directly to the emitters. As a result, the common emitter voltage and Q1 collector voltage follow the input voltage. This situation is typical for over-driven transistor [differential amplifiers](https://en.wikipedia.org/wiki/Differential_amplifier#Long-tailed_a_nice_pair "Differential amplifier") and [ECL](https://en.wikipedia.org/wiki/Emitter-coupled_logic#Operation "Emitter-coupled logic") gates.

![[~/×/9ff2d3527215c4f8ba77985a391fca4f_MD5.png]]

BJT bistable collector-base coupled circuit can be converted to a Schmitt trigger by connecting an additional base resistor to one of the bases

Like every latch, the fundamental collector-base coupled [bistable circuit](https://en.wikipedia.org/wiki/Latch_\(electronics\)#Basic_bistable_circuit "Latch (electronics)") operates with hysteresis. It can be converted to a Schmitt trigger by connecting an additional base resistor R to one of the inputs (Q1's base in the figure). The two resistors R and R <sub>4</sub> form a parallel voltage summer (the circle in the block diagram [above](https://en.wikipedia.org/wiki/#Fundamental_idea)) that sums output (Q2's collector) voltage and the input voltage, and drives the single-ended transistor "comparator" Q1. When the base voltage crosses the threshold (V <sub>BE0</sub> ∞ 0.65 V) in either direction, a part of Q2's collector voltage is added in the same direction to the input voltage. Thus the output [modifies](https://en.wikipedia.org/wiki/#modified_input) the input voltage by means of parallel positive feedback and does not affect the threshold (the base-emitter voltage).

The emitter-coupled version has the advantage that the input transistor is reverse biased when the input voltage is quite below the high threshold so the transistor is definitely cut off. This was important when germanium transistors were used for implementing the circuit, and this configuration has continued to be popular. The input base resistor can be omitted, since the emitter resistor limits the current when the input base-emitter junction is forward-biased.

An emitter-coupled Schmitt trigger *logical zero* output level may not be low enough and might need an additional output level shifting circuit. The collector-coupled Schmitt trigger has extremely low (almost zero) output at *logical zero*.

### Op-amp implementations

Schmitt triggers are commonly implemented using an [operational amplifier](https://en.wikipedia.org/wiki/Operational_amplifier "Operational amplifier") or a dedicated [comparator](https://en.wikipedia.org/wiki/Comparator "Comparator").[^2] An [open-loop](https://en.wikipedia.org/wiki/Open-loop_gain "Open-loop gain") op-amp and comparator may be considered as an analog-digital device having analog inputs and a digital output that extracts the [sign](https://en.wikipedia.org/wiki/Sign_function "Sign function") of the voltage difference between its two inputs.[^3] The positive feedback is applied by adding a part of the output voltage to the input voltage in [series](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger) or [parallel](https://en.wikipedia.org/wiki/#Non-inverting_Schmitt_trigger) manner. Due to the extremely high op-amp gain, the loop gain is also high enough and provides the avalanche-like process.

![[~/×/de0a6e9c4ae84f8d24eba032359972e5_MD5.png]]

Schmitt trigger implemented by a non-inverting comparator

In this circuit, the two resistors R <sub>1</sub> and R <sub>2</sub> form a parallel voltage summer. It adds a part of the output voltage to the input voltage thus augmenting it during and after switching that occurs when the resulting voltage is near ground. This *parallel positive feedback* creates the needed [hysteresis](https://en.wikipedia.org/wiki/Hysteresis "Hysteresis") that is controlled by the proportion between the [resistances](https://en.wikipedia.org/wiki/Resistor "Resistor") of R <sub>1</sub> and R <sub>2</sub>. The output of the parallel voltage summer is single-ended (it produces voltage with respect to ground) so the circuit does not need an amplifier with a differential input. Since conventional op-amps have a differential input, the inverting input is grounded to make the reference point zero volts.

The output voltage always has the same sign as the *op-amp input voltage* but it does not always have the same sign as the *circuit input voltage* (the signs of the two input voltages can differ). When the circuit input voltage is above the high threshold or below the low threshold, the output voltage has the same sign as the *circuit input voltage* (the circuit is non-inverting). It acts like a comparator that switches at a different point depending on whether the output of the comparator is high or low. When the circuit input voltage is between the thresholds, the output voltage is undefined and it depends on the last state (the circuit behaves as an elementary [latch](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\)#Basic_bistable_circuit "Flip-flop (electronics)")).

![[~/×/b643d89b645f1b69a28fe1f4cdabbb70_MD5.png]]

Typical transfer function of a non-inverting Schmitt trigger like the circuit above.

For instance, if the Schmitt trigger is currently in the high state, the output will be at the positive power supply rail (+V <sub>S</sub>). The output voltage V <sub>+</sub> of the resistive summer can be found by applying the [superposition theorem](https://en.wikipedia.org/wiki/Superposition_theorem "Superposition theorem"):

${\displaystyle V_{\mathrm {+} }={\frac {R_{2}}{R_{1}+R_{2}}}\cdot V_{\mathrm {in} }+{\frac {R_{1}}{R_{1}+R_{2}}}\cdot V_{\mathrm {s} }}$

The comparator will switch when V <sub>+</sub> =0. Then ${\displaystyle {R_{2}}\cdot V_{\mathrm {in} }=-{R_{1}}\cdot V_{\mathrm {s} }}$ (the same result can be obtained by applying the current conservation principle). So ${\displaystyle V_{\text{in}}}$ must drop below ${\displaystyle -{\frac {R_{1}}{R_{2}}}{V_{s}}}$ to get the output to switch. Once the comparator output has switched to − *V* <sub>S</sub>, the threshold becomes ${\displaystyle +{\frac {R_{1}}{R_{2}}}{V_{s}}}$ to switch back to high. So this circuit creates a switching band centered on zero, with trigger levels ${\displaystyle \pm {\frac {R_{1}}{R_{2}}}{V_{s}}}$ (it can be shifted to the left or the right by applying a bias voltage to the inverting input). The input voltage must rise above the top of the band, and then below the bottom of the band, for the output to switch on (plus) and then back off (minus). If *R* <sub>1</sub> is zero or *R* <sub>2</sub> is infinity (i.e., an [open circuit](https://en.wikipedia.org/wiki/Open-circuit_voltage "Open-circuit voltage")), the band collapses to zero width, and it behaves as a standard comparator. The transfer characteristic is shown in the picture on the left. The value of the threshold *T* is given by ${\displaystyle {\frac {R_{1}}{R_{2}}}{V_{s}}}$ and the maximum value of the output *M* is the power supply rail.

![[~/×/5fa4622ae222379110e9129ec241bc99_MD5.png]]

A practical Schmitt trigger configuration with precise thresholds

A unique property of circuits with parallel positive feedback is the impact on the input source. In circuits with [negative parallel feedback](https://en.wikipedia.org/wiki/Negative-feedback_amplifier "Negative-feedback amplifier") (e.g., an inverting amplifier), the virtual ground at the inverting input separates the input source from the op-amp output. Here there is no virtual ground, and the steady op-amp output voltage is applied through R <sub>1</sub> -R <sub>2</sub> network to the input source. The op-amp output passes an opposite current through the input source (it injects current into the source when the input voltage is positive and it draws current from the source when it is negative).

A practical Schmitt trigger with precise thresholds is shown in the figure on the right. The transfer characteristic has exactly the same shape of the previous basic configuration, and the threshold values are the same as well. On the other hand, in the previous case, the output voltage was depending on the power supply, while now it is defined by the [Zener diodes](https://en.wikipedia.org/wiki/Zener_diode "Zener diode") (which could also be replaced with a single [double-anode Zener diode](https://en.wikipedia.org/w/index.php?title=Double-anode_Zener_diode&action=edit&redlink=1 "Double-anode Zener diode (page does not exist)")). In this configuration, the output levels can be modified by appropriate choice of Zener diode, and these levels are resistant to power supply fluctuations (i.e., they increase the [PSRR](https://en.wikipedia.org/wiki/PSRR "PSRR") of the comparator). The resistor *R* <sub>3</sub> is there to limit the current through the diodes, and the resistor *R* <sub>4</sub> minimizes the input voltage offset caused by the comparator's input leakage currents (see *[limitations of real op-amps](https://en.wikipedia.org/wiki/Operational_amplifier#Limitations_of_real_op-amps "Operational amplifier")*).

![[~/×/842ff75e3e6e6009fbb8387b384c8097_MD5.png]]

Schmitt trigger implemented by an inverting comparator

In the inverting version, the attenuation and summation are separated. The two resistors R <sub>1</sub> and R <sub>2</sub> act only as a "pure" attenuator (voltage divider). The input loop acts as a [series voltage summer](https://en.wikipedia.org/wiki/KVL "KVL") that adds a part of the output voltage in series to the circuit input voltage. This *series positive feedback* creates the needed hysteresis that is controlled by the proportion between the [resistances](https://en.wikipedia.org/wiki/Resistor "Resistor") of R <sub>1</sub> and the whole resistance (R <sub>1</sub> and R <sub>2</sub>). The effective voltage applied to the op-amp input is floating so the op-amp must have a differential input.

The circuit is named *inverting* since the output voltage always has an opposite sign to the input voltage when it is out of the hysteresis cycle (when the input voltage is above the high threshold or below the low threshold). However, if the input voltage is within the hysteresis cycle (between the high and low thresholds), the circuit can be inverting as well as non-inverting. The output voltage is undefined and it depends on the last state so the circuit behaves like an elementary latch.

To compare the two versions, the circuit operation will be considered at the same conditions as above. If the Schmitt trigger is currently in the high state, the output will be at the positive power supply rail (+V <sub>S</sub>). The output voltage V <sub>+</sub> of the voltage divider is:

${\displaystyle V_{\mathrm {+} }={\frac {R_{1}}{R_{1}+R_{2}}}\cdot V_{\mathrm {s} }}$

The comparator will switch when V <sub>in</sub> = V <sub>+</sub>. So ${\displaystyle V_{\text{in}}}$ must exceed above this voltage to get the output to switch. Once the comparator output has switched to − *V* <sub>S</sub>, the threshold becomes ${\displaystyle -{\frac {R_{1}}{R_{1}+R_{2}}}{V_{s}}}$ to switch back to high. So this circuit creates a switching band centered on zero, with trigger levels ${\displaystyle \pm {\frac {R_{1}}{R_{1}+R_{2}}}{V_{s}}}$ (it can be shifted to the left or the right by connecting R <sub>1</sub> to a bias voltage). The input voltage must rise above the top of the band, and then below the bottom of the band, for the output to switch off (minus) and then back on (plus). If *R* <sub>1</sub> is zero (i.e., a [short circuit](https://en.wikipedia.org/wiki/Short_circuit "Short circuit")) or *R* <sub>2</sub> is infinity, the band collapses to zero width, and it behaves as a standard comparator.

In contrast with the parallel version, this circuit does not impact on the input source since the source is separated from the voltage divider output by the high op-amp input differential impedance.

In the inverting amplifier voltage drop across resistor (R1) decides the reference voltages i.e., upper threshold voltage (V+) and lower threshold voltages (V−) for the comparison with input signal applied. These voltages are fixed as the output voltage and resistor values are fixed.

so by changing the drop across (R1) threshold voltages can be varied. By adding a bias voltage in series with resistor (R1) drop across it can be varied, which can change threshold voltages. Desired values of reference voltages can be obtained by varying bias voltage.

The above equations can be modified as:

${\displaystyle V_{\pm }=\pm V_{s}{\frac {R_{1}}{R_{1}+R_{2}}}+V_{b}{\frac {R_{2}}{R_{1}+R_{2}}}}$

## Applications

Schmitt triggers are typically used in open loop configurations for noise immunity and [closed loop](https://en.wikipedia.org/wiki/Feedback "Feedback") configurations to implement [function generators](https://en.wikipedia.org/wiki/Function_generator "Function generator").

- **[Analog-to-digital conversion](https://en.wikipedia.org/wiki/Analog-to-digital_conversion "Analog-to-digital conversion")***:* The Schmitt trigger is effectively a one bit analog to digital converter. When the signal reaches a given level it switches from its low to high state.
- **Level detection***:* The Schmitt trigger circuit is able to provide level detection. When undertaking this application, it is necessary that the hysteresis voltage is taken into account so that the circuit switches on the required voltage.
- **Line reception***:* When running a data line that may have picked up noise into a logic gate it is necessary to ensure that a logic output level is only changed as the data changed and not as a result of spurious noise that may have been picked up. Using a Schmitt trigger broadly enables the peak to peak noise to reach the level of the hysteresis before spurious triggering may occur.

### Noise immunity

One application of a Schmitt trigger is to increase the noise immunity in a circuit with only a single input threshold. With only one input threshold, a [noisy](https://en.wikipedia.org/wiki/Noise_\(physics\) "Noise (physics)") input signal [^4] near that threshold could cause the output to switch rapidly back and forth from noise alone. A noisy Schmitt Trigger input signal near one threshold can cause only one switch in output value, after which it would have to move beyond the other threshold in order to cause another switch.

For example, an [amplified](https://en.wikipedia.org/wiki/Linear_amplifier "Linear amplifier") [infrared](https://en.wikipedia.org/wiki/Infrared "Infrared") [photodiode](https://en.wikipedia.org/wiki/Photodiode "Photodiode") may generate an electric signal that switches frequently between its absolute lowest value and its absolute highest value. This signal is then [low-pass filtered](https://en.wikipedia.org/wiki/Low-pass_filter "Low-pass filter") to form a smooth signal that rises and falls corresponding to the relative amount of time the switching signal is on and off. That filtered output passes to the input of a Schmitt trigger. The net effect is that the output of the Schmitt trigger only passes from low to high after a received infrared signal excites the photodiode for longer than some known period, and once the Schmitt trigger is high, it only moves low after the infrared signal ceases to excite the photodiode for longer than a similar known period. Whereas the photodiode is prone to spurious switching due to noise from the environment, the delay added by the filter and Schmitt trigger ensures that the output only switches when there is certainly an input stimulating the device.

Schmitt triggers are common in many switching circuits for similar reasons (e.g., for [switch debouncing](https://en.wikipedia.org/wiki/Switch#Contact_bounce "Switch")).

List of IC including input Schmitt triggers

![[~/×/930cabbb53d6e3fbf5b56130218dce21_MD5.png]]

Output and capacitor waveforms for comparator -based relaxation oscillator

![[~/×/e9e5583b5294440049f4b0db26dddaa1_MD5.png]]

A Schmitt Trigger-based implementation of a relaxation oscillator

A Schmitt trigger is a [bistable multivibrator](https://en.wikipedia.org/wiki/Bistable_multivibrator "Bistable multivibrator"), and it can be used to implement another type of multivibrator, the [relaxation oscillator](https://en.wikipedia.org/wiki/Relaxation_oscillator "Relaxation oscillator"). This is achieved by connecting a single RC integrating circuit between the output and the input of an inverting Schmitt trigger. The output will be a continuous [square wave](https://en.wikipedia.org/wiki/Square_wave_\(waveform\) "Square wave (waveform)") whose [frequency](https://en.wikipedia.org/wiki/Frequency "Frequency") depends on the values of R and C, and the threshold points of the Schmitt trigger. Since multiple Schmitt trigger circuits can be provided by a single [integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") (e.g. the [4000 series](https://en.wikipedia.org/wiki/4000_series "4000 series") [CMOS](https://en.wikipedia.org/wiki/CMOS "CMOS") device type 40106 contains 6 of them), a spare section of the IC can be quickly pressed into service as a simple and reliable oscillator with only two external components.

Here, a comparator-based Schmitt trigger is used in its [inverting configuration](https://en.wikipedia.org/wiki/#Inverting_Schmitt_trigger). Additionally, slow negative feedback is added with an integrating [RC network](https://en.wikipedia.org/wiki/RC_circuit#Integrator "RC circuit"). The result, which is shown on the right, is that the output automatically oscillates from *V* <sub><i>SS</i></sub> to *V* <sub><i>DD</i></sub> as the capacitor charges from one Schmitt trigger threshold to the other.

## See also

- [Operational amplifier applications](https://en.wikipedia.org/wiki/Operational_amplifier_applications#Schmitt_trigger "Operational amplifier applications")
- [Threshold detector with hysteresis](https://en.wikipedia.org/wiki/Threshold_detector_with_hysteresis "Threshold detector with hysteresis")
- [List of 4000-series integrated circuits](https://en.wikipedia.org/wiki/List_of_4000-series_integrated_circuits "List of 4000-series integrated circuits") - includes logic chips with Schmitt trigger inputs
- [List of 7400-series integrated circuits](https://en.wikipedia.org/wiki/List_of_7400-series_integrated_circuits "List of 7400-series integrated circuits") - includes logic chips with Schmitt trigger inputs

## Notes

## References

## External links

- [Inverting Schmitt Trigger Calculator](http://www.random-science-tools.com/electronics/inverting-schmitt-trigger-calculator.htm)
- [Non-Inverting Schmitt Trigger Calculator](http://www.random-science-tools.com/electronics/schmitt-trigger-calculator.htm)

[^1]: One factor contributing to ambiguity is that one simple transistor-based realization of a Schmitt trigger is naturally inverting, with a non-inverting Schmitt trigger sometimes consisting of such an inverting implementation followed by an inverter. An additional inverter may be added for buffering a stand-alone inverting configuration. Consequently, inverting configurations within an integrated circuit may be naturally inverting, while non-inverting configurations are implemented with a single inverter, and stand-alone inverting configurations may be implemented with two inverters. As a result, symbols that combine inverting bubbles and hysteresis curves may be using the hysteresis curve to describe the entire device or the embedded Schmitt trigger only.

[^2]: Usually, negative feedback is used in op-amp circuits. Some operational amplifiers are designed to be used only in negative-feedback configurations that enforce a negligible difference between the inverting and non-inverting inputs. They incorporate input-protection circuitry that prevent the inverting and non-inverting inputs from operating far away from each other. For example, [clipper circuits](https://en.wikipedia.org/wiki/Clipper_\(electronics\) "Clipper (electronics)") made up of two general purpose [diodes](https://en.wikipedia.org/wiki/Diode "Diode") with opposite bias in parallel [\[1\]](http://www.analog.com/library/analogdialogue/archives/42-10/off_amps.html) or two [Zener diodes](https://en.wikipedia.org/wiki/Zener_diode "Zener diode") with opposite bias in series (i.e., a [double-anode Zener diode](https://en.wikipedia.org/w/index.php?title=Double-anode_Zener_diode&action=edit&redlink=1 "Double-anode Zener diode (page does not exist)")) are sometimes used internally across the two inputs of the operational amplifier. In these cases, the operational amplifiers will fail to function well as comparators. Conversely, comparators are designed under the assumption that the input voltages can differ significantly.

[^3]: When the non-inverting (+) input is at a higher voltage than the inverting (−) input, the comparator output switches nearly to + *V* <sub>S</sub>, which is its high supply voltage. When the non-inverting (+) input is at a lower voltage than the inverting (−) input, the comparator output switches nearly to - *V* <sub>S</sub>, which is its low supply voltage.

[^4]: Where the noise amplitude is assumed to be small compared to the change in Schmitt trigger threshold.

[^5]: Schmitt, Otto H. (January 1938). "A Thermionic Trigger". *Journal of Scientific Instruments*. **15** (1): 24– 26. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[1938JScI...15...24S](https://ui.adsabs.harvard.edu/abs/1938JScI...15...24S). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1088/0950-7671/15/1/305](https://doi.org/10.1088%2F0950-7671%2F15%2F1%2F305).

[^6]: August 2004 issue of the Pavek Museum of Broadcasting Newsletter [http://160.94.102.47/Otto\_Images/PavekOHSbio.pdf](http://160.94.102.47/Otto_Images/PavekOHSbio.pdf) [Archived](https://web.archive.org/web/20151001140145/http://160.94.102.47/Otto_Images/PavekOHSbio.pdf) 2015-10-01 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^7]: [Debouncing switches with an SR latch](http://www.ee.nmt.edu/~elosery/fall_2008/ee231L/lab6.pdf)

[^8]: [7414 datasheet](http://www.datasheetcatalog.org/datasheets/400/334439_DS.pdf)