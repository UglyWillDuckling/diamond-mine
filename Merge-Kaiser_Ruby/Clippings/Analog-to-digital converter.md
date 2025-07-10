---
source: "https://en.wikipedia.org/wiki/Analog-to-digital_converter"
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2002-02-22
created: 2025-06-17
tags:
---


![[~/×/94e7fc7f6766e624235857e90b7872ad_MD5.jpg|200]]

4-channel stereo multiplexed analog-to-digital converter WM8775SEDS made by Wolfson Microelectronics placed on an X-Fi Fatal1ty Pro sound card

![[~/×/c52ce5bf169112163722e22c846751ab_MD5.jpg|200]]

AD570 8-bit successive-approximation analog-to-digital converter

![[~/×/81e29e772924f1e24a02cde8e6388fa9_MD5.png|200]]

AD570/AD571 silicon die

![[~/×/b65d21b4c84f76b8978269cdad950ce3_MD5.jpg|200]]
INTERSIL ICL7107. 3.5 digit (i.e. conversion from analog to a numeric range of 0 to 1999 vs. 3 digit range of 0 to 999, typically used in meters, counters, etc.) single-chip A/D converter
____

In [electronics](https://en.wikipedia.org/wiki/Electronics "Electronics"), an **analog-to-digital converter** (**ADC**, **A/D**, or **A-to-D**) is a system that converts an [analog signal](https://en.wikipedia.org/wiki/Analog_signal "Analog signal"), such as a sound picked up by a [microphone](https://en.wikipedia.org/wiki/Microphone "Microphone") or light entering a [digital camera](https://en.wikipedia.org/wiki/Digital_camera "Digital camera"), into a [digital signal](https://en.wikipedia.org/wiki/Digital_signal_\(signal_processing\) "Digital signal (signal processing)"). An ADC may also provide an isolated measurement such as an [electronic device](https://en.wikipedia.org/wiki/Electronic_device "Electronic device") that converts an analog input [voltage](https://en.wikipedia.org/wiki/Voltage "Voltage") or [current](https://en.wikipedia.org/wiki/Electric_current "Electric current") to a digital number representing the magnitude of the voltage or current. Typically the digital output is a [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement "Two's complement") binary number that is proportional to the input, but there are other possibilities.

There are several ADC [architectures](https://en.wikipedia.org/wiki/Hardware_architecture "Hardware architecture"). Due to the complexity and the need for precisely matched [components](https://en.wikipedia.org/wiki/Electronic_component "Electronic component"), all but the most specialized ADCs are implemented as [integrated circuits](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") (ICs). These typically take the form of [metal–oxide–semiconductor](https://en.wikipedia.org/wiki/Metal%E2%80%93oxide%E2%80%93semiconductor "Metal–oxide–semiconductor") (MOS) [mixed-signal integrated circuit](https://en.wikipedia.org/wiki/Mixed-signal_integrated_circuit "Mixed-signal integrated circuit") chips that integrate both [analog](https://en.wikipedia.org/wiki/Analogue_electronics "Analogue electronics") and [digital circuits](https://en.wikipedia.org/wiki/Digital_circuits "Digital circuits").

A [digital-to-analog converter](https://en.wikipedia.org/wiki/Digital-to-analog_converter "Digital-to-analog converter") (DAC) performs the reverse function; it converts a digital signal into an analog signal.

## Explanation

An ADC converts a continuous-time and continuous-amplitude [analog signal](https://en.wikipedia.org/wiki/Analog_signal "Analog signal") to a [discrete-time](https://en.wikipedia.org/wiki/Discrete-time "Discrete-time") and discrete-amplitude [digital signal](https://en.wikipedia.org/wiki/Digital_signal_\(signal_processing\) "Digital signal (signal processing)"). The conversion involves [quantization](https://en.wikipedia.org/wiki/Quantization_\(signal_processing\) "Quantization (signal processing)") of the input, so it necessarily introduces a small amount of [quantization error](https://en.wikipedia.org/wiki/Quantization_error "Quantization error"). Furthermore, instead of continuously performing the conversion, an ADC does the conversion periodically, [sampling](https://en.wikipedia.org/wiki/Sampling_\(signal_processing\) "Sampling (signal processing)") the input, and limiting the allowable bandwidth of the input signal.

The performance of an ADC is primarily characterized by its [bandwidth](https://en.wikipedia.org/wiki/Bandwidth_\(signal_processing\) "Bandwidth (signal processing)") and [signal-to-noise and distortion ratio](https://en.wikipedia.org/wiki/Signal-to-noise_and_distortion_ratio "Signal-to-noise and distortion ratio") (SNDR). The bandwidth of an ADC is characterized primarily by its [sampling rate](https://en.wikipedia.org/wiki/Sampling_rate "Sampling rate"). The SNDR of an ADC is influenced by many factors, including the [resolution](https://en.wikipedia.org/wiki/Audio_bit_depth "Audio bit depth"), linearity and accuracy (how well the quantization levels match the true analog signal), [aliasing](https://en.wikipedia.org/wiki/Aliasing "Aliasing") and [jitter](https://en.wikipedia.org/wiki/Jitter "Jitter"). The SNDR of an ADC is often summarized in terms of its [effective number of bits](https://en.wikipedia.org/wiki/Effective_number_of_bits "Effective number of bits") (ENOB), the number of bits of each measure it returns that are on average not [noise](https://en.wikipedia.org/wiki/Noise_\(signal_processing\) "Noise (signal processing)"). An ideal ADC has an ENOB equal to its resolution. ADCs are chosen to match the bandwidth and required SNDR of the signal to be digitized. If an ADC operates at a sampling rate greater than twice the bandwidth of the signal, then per the [Nyquist–Shannon sampling theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem "Nyquist–Shannon sampling theorem"), near-perfect reconstruction is possible. The presence of quantization error limits the SNDR of even an ideal ADC. However, if the SNDR of the ADC exceeds that of the input signal, then the effects of quantization error may be neglected, resulting in an essentially perfect digital representation of the [bandlimited](https://en.wikipedia.org/wiki/Bandlimited "Bandlimited") analog input signal.

### Resolution

![[~/×/8c463a03293fe39c5fd529a92d5cef93_MD5.png]]
> Fig. 1. An 8-level ADC coding scheme

**The resolution of the converter indicates the number of different, i.e. discrete, values** it can produce over the allowed range of analog input values. Thus a particular resolution determines the magnitude of the quantization error and therefore determines the maximum possible [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio "Signal-to-noise ratio") for an ideal ADC without the use of [oversampling](https://en.wikipedia.org/wiki/Oversampling "Oversampling"). The input samples are usually stored electronically in [binary](https://en.wikipedia.org/wiki/Binary_numeral_system "Binary numeral system") form within the ADC, so the resolution is usually expressed as the [audio bit depth](https://en.wikipedia.org/wiki/Audio_bit_depth "Audio bit depth"). In consequence, the number of discrete values available is usually a power of two. For example, an ADC with a resolution of 8 bits can encode an analog input to one in 256 different levels (2 <sup>8</sup> = 256). The values can represent the ranges from 0 to 255 (i.e. as unsigned integers) or from −128 to 127 (i.e. as signed integer), depending on the application.

Resolution can also be defined electrically, and expressed in [volts](https://en.wikipedia.org/wiki/Volt "Volt"). The change in voltage required to guarantee a change in the output code level is called the [least significant bit](https://en.wikipedia.org/wiki/Least_significant_bit "Least significant bit") (LSB) voltage. The resolution *Q* of the ADC is equal to the LSB voltage. The voltage resolution of an ADC is equal to its overall voltage measurement range divided by the number of intervals:

${\displaystyle Q={\dfrac {E_{\mathrm {FSR} }}{2^{M}}},}$

where *M* is the ADC's resolution in bits and *E* <sub>FSR</sub> is the full-scale voltage range (also called 'span'). *E* <sub>FSR</sub> is given by

${\displaystyle E_{\mathrm {FSR} }=V_{\mathrm {RefHi} }-V_{\mathrm {RefLow} },\,}$

where *V* <sub>RefHi</sub> and *V* <sub>RefLow</sub> are the upper and lower extremes, respectively, of the voltages that can be coded.

Normally, the number of voltage intervals is given by

${\displaystyle N=2^{M},\,}$

where *M* is the ADC's resolution in bits.[^2]

That is, one voltage interval is assigned in between two consecutive code levels.

Example:

- Coding scheme as in figure 1
- [Full scale](https://en.wikipedia.org/wiki/Full_scale "Full scale") measurement range = 0 to 1 volt
- ADC resolution is 3 bits: 2 <sup>3</sup> = 8 quantization levels (codes)
- ADC voltage resolution, *Q* = 1 V / 8 = 0.125 V.

In many cases, the useful resolution of a converter is limited by the [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio "Signal-to-noise ratio") (SNR) and other errors in the overall system expressed as an ENOB.

![[~/×/3af2b80d5de67e3e7e3e73bf3926e2d2_MD5.gif]]

Comparison of quantizing a sinusoid to 64 levels (6 bits) and 256 levels (8 bits). The additive noise created by 6-bit quantization is 12 dB greater than the noise created by 8-bit quantization. When the spectral distribution is flat, as in this example, the 12 dB difference manifests as a measurable difference in the noise floors.

#### Quantization error

![[~/×/9a203158e6cecbec3785fd71c5da5328_MD5.png]]

Analog to digital conversion as shown with fig. 1 and fig. 2

Quantization error is introduced by the [quantization](https://en.wikipedia.org/wiki/Quantization_\(signal_processing\) "Quantization (signal processing)") inherent in an ideal ADC. It is a rounding error between the analog input voltage to the ADC and the output digitized value. The error is nonlinear and signal-dependent. In an ideal ADC, where the quantization error is uniformly distributed between − 1 ⁄ 2 LSB and + 1 ⁄ 2 LSB, and the signal has a uniform distribution covering all quantization levels, the [signal-to-quantization-noise ratio](https://en.wikipedia.org/wiki/Signal-to-quantization-noise_ratio "Signal-to-quantization-noise ratio") (SQNR) is given by

${\displaystyle \mathrm {SQNR} =20\log _{10}(2^{Q})\approx 6.02\cdot Q\ \mathrm {dB} \,\!}$ [^3]

where Q is the number of quantization bits. For example, for a [16-bit](https://en.wikipedia.org/wiki/Audio_bit_depth "Audio bit depth") ADC, the quantization error is 96.3 dB below the maximum level.

Quantization error is distributed from DC to the [Nyquist frequency](https://en.wikipedia.org/wiki/Nyquist_frequency "Nyquist frequency"). Consequently, if part of the ADC's bandwidth is not used, as is the case with [oversampling](https://en.wikipedia.org/wiki/Oversampling "Oversampling"), some of the quantization error will occur [out-of-band](https://en.wikipedia.org/wiki/Out-of-band "Out-of-band"), effectively improving the SQNR for the bandwidth in use. In an oversampled system, [noise shaping](https://en.wikipedia.org/wiki/Noise_shaping "Noise shaping") can be used to further increase SQNR by forcing more quantization error out of band.

#### Dither

In ADCs, performance can usually be improved using [dither](https://en.wikipedia.org/wiki/Dither "Dither"). This is a very small amount of random noise (e.g. [white noise](https://en.wikipedia.org/wiki/White_noise "White noise")), which is added to the input before conversion. Its effect is to randomize the state of the LSB based on the signal. Rather than the signal simply getting cut off altogether at low levels, it extends the effective range of signals that the ADC can convert, at the expense of a slight increase in noise. Dither can only increase the resolution of a sampler. It cannot improve the linearity, and thus accuracy does not necessarily improve.

Quantization distortion in an audio signal of very low level with respect to the bit depth of the ADC is correlated with the signal and sounds distorted and unpleasant. With dithering, the distortion is transformed into noise. The undistorted signal may be recovered accurately by averaging over time. Dithering is also used in integrating systems such as [electricity meters](https://en.wikipedia.org/wiki/Electricity_meter "Electricity meter"). Since the values are added together, the dithering produces results that are more exact than the LSB of the analog-to-digital converter.

Dither is often applied when quantizing photographic images to a fewer number of bits per pixel—the image becomes noisier but to the eye looks far more realistic than the quantized image, which otherwise becomes [banded](https://en.wikipedia.org/wiki/Colour_banding "Colour banding"). This analogous process may help to visualize the effect of dither on an analog audio signal that is converted to digital.

### Accuracy

An ADC has several sources of errors. [Quantization](https://en.wikipedia.org/wiki/Quantization_\(signal_processing\) "Quantization (signal processing)") error and (assuming the ADC is intended to be linear) non- [linearity](https://en.wikipedia.org/wiki/Linearity "Linearity") are intrinsic to any analog-to-digital conversion. These errors are measured in a unit called the [least significant bit](https://en.wikipedia.org/wiki/Least_significant_bit "Least significant bit") (LSB). In the above example of an eight-bit ADC, an error of one LSB is 1 ⁄ 256 of the full signal range, or about 0.4%.

#### Nonlinearity

All ADCs suffer from nonlinearity errors caused by their physical imperfections, causing their output to deviate from a linear function (or some other function, in the case of a deliberately nonlinear ADC) of their input. These errors can sometimes be mitigated by [calibration](https://en.wikipedia.org/wiki/Calibration "Calibration"), or prevented by testing. Important parameters for linearity are [integral nonlinearity](https://en.wikipedia.org/wiki/Integral_nonlinearity "Integral nonlinearity") and [differential nonlinearity](https://en.wikipedia.org/wiki/Differential_nonlinearity "Differential nonlinearity"). These nonlinearities introduce distortion that can reduce the [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio "Signal-to-noise ratio") performance of the ADC and thus reduce its effective resolution.

### Jitter

When digitizing a sine wave ${\displaystyle x(t)=A\sin {(2\pi f_{0}t)}}$ , the use of a non-ideal sampling clock will result in some uncertainty in when samples are recorded. Provided that the actual sampling time uncertainty due to clock [jitter](https://en.wikipedia.org/wiki/Jitter "Jitter") is ${\displaystyle \Delta t}$ , the error caused by this phenomenon can be estimated as ${\displaystyle E_{ap}\leq |x'(t)\Delta t|\leq 2A\pi f_{0}\Delta t}$ . This will result in additional recorded noise that will reduce the [effective number of bits](https://en.wikipedia.org/wiki/Effective_number_of_bits "Effective number of bits") (ENOB) below that predicted by [quantization error](https://en.wikipedia.org/wiki/Quantization_error "Quantization error") alone. The error is zero for DC, small at low frequencies, but significant with signals of high amplitude and high frequency. The effect of jitter on performance can be compared to quantization error: ${\displaystyle \Delta t<{\frac {1}{2^{q}\pi f_{0}}}}$ , where q is the number of ADC bits.

<table><tbody><tr><th rowspan="2">Output size<br>(bits)</th><th colspan="7">Signal Frequency</th></tr><tr><th>1 Hz</th><th>1 kHz</th><th>10 kHz</th><th>1 MHz</th><th>10 MHz</th><th>100 MHz</th><th>1 GHz</th></tr><tr><td>8</td><td>1,243 μs</td><td>1.24 μs</td><td>124 ns</td><td>1.24 ns</td><td>124 ps</td><td>12.4 ps</td><td>1.24 ps</td></tr><tr><td>10</td><td>311 μs</td><td>311 ns</td><td>31.1 ns</td><td>311 ps</td><td>31.1 ps</td><td>3.11 ps</td><td>0.31 ps</td></tr><tr><td>12</td><td>77.7 μs</td><td>77.7 ns</td><td>7.77 ns</td><td>77.7 ps</td><td>7.77 ps</td><td>0.78 ps</td><td>0.08 ps (77.7 fs)</td></tr><tr><td>14</td><td>19.4 μs</td><td>19.4 ns</td><td>1.94 ns</td><td>19.4 ps</td><td>1.94 ps</td><td>0.19 ps</td><td>0.02 ps (19.4 fs)</td></tr><tr><td>16</td><td>4.86 μs</td><td>4.86 ns</td><td>486 ps</td><td>4.86 ps</td><td>0.49 ps</td><td>0.05 ps (48.5 fs)</td><td>–</td></tr><tr><td>18</td><td>1.21 μs</td><td>1.21 ns</td><td>121 ps</td><td>1.21 ps</td><td>0.12 ps</td><td>–</td><td>–</td></tr><tr><td>20</td><td>304 ns</td><td>304 ps</td><td>30.4 ps</td><td>0.30 ps (303.56 fs)</td><td>0.03 ps (30.3 fs)</td><td>–</td><td>–</td></tr><tr><td>24</td><td>18.9 ns</td><td>18.9 ps</td><td>1.89 ps</td><td>0.019 ps (18.9 fs)</td><td>-</td><td>–</td><td>–</td></tr></tbody></table>

Clock jitter is caused by [phase noise](https://en.wikipedia.org/wiki/Phase_noise "Phase noise").[^4] [^5] The resolution of ADCs with a [digitization](https://en.wikipedia.org/wiki/Digitization "Digitization") bandwidth between 1 MHz and 1 GHz is limited by jitter.[^6] For lower bandwidth conversions such as when sampling audio signals at 44.1 kHz, clock jitter has a less significant impact on performance.[^7]

### Sampling rate

An analog signal is [continuous](https://en.wikipedia.org/wiki/Continuous_function "Continuous function") in [time](https://en.wikipedia.org/wiki/Time "Time") and it is necessary to convert this to a flow of digital values. It is therefore required to define the rate at which new digital values are sampled from the analog signal. The rate of new values is called the *sampling rate* or *[sampling frequency](https://en.wikipedia.org/wiki/Sampling_frequency "Sampling frequency")* of the converter. A continuously varying bandlimited signal can be [sampled](https://en.wikipedia.org/wiki/Sampling_\(signal_processing\) "Sampling (signal processing)") and then the original signal can be reproduced from the discrete-time values by a [reconstruction filter](https://en.wikipedia.org/wiki/Reconstruction_filter "Reconstruction filter"). The Nyquist–Shannon sampling theorem implies that a faithful reproduction of the original signal is only possible if the sampling rate is higher than twice the highest frequency of the signal.

Since a practical ADC cannot make an instantaneous conversion, the input value must necessarily be held constant during the time that the converter performs a conversion (called the *conversion time*). An input circuit called a [sample and hold](https://en.wikipedia.org/wiki/Sample_and_hold "Sample and hold") performs this task—in most cases by using a [capacitor](https://en.wikipedia.org/wiki/Capacitor "Capacitor") to store the analog voltage at the input, and using an electronic switch or gate to disconnect the capacitor from the input. Many ADC [integrated circuits](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") include the sample and hold subsystem internally.

#### Aliasing

An ADC works by sampling the value of the input at discrete intervals in time. Provided that the input is sampled above the [Nyquist rate](https://en.wikipedia.org/wiki/Nyquist_rate "Nyquist rate"), defined as twice the highest frequency of interest, then all frequencies in the signal can be reconstructed. If frequencies above half the Nyquist rate are sampled, they are incorrectly detected as lower frequencies, a process referred to as aliasing. Aliasing occurs because instantaneously sampling a function at two or fewer times per cycle results in missed cycles, and therefore the appearance of an incorrectly lower frequency. For example, a 2 kHz sine wave being sampled at 1.5 kHz would be reconstructed as a 500 Hz sine wave.

To avoid aliasing, the input to an ADC must be [low-pass filtered](https://en.wikipedia.org/wiki/Low-pass_filter "Low-pass filter") to remove frequencies above half the sampling rate. This filter is called an *[anti-aliasing filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter "Anti-aliasing filter")*, and is essential for a practical ADC system that is applied to analog signals with higher frequency content. In applications where protection against aliasing is essential, oversampling may be used to greatly reduce or even eliminate it.

Although aliasing in most systems is unwanted, it can be exploited to provide simultaneous down-mixing of a band-limited high-frequency signal (see [undersampling](https://en.wikipedia.org/wiki/Undersampling "Undersampling") and [frequency mixer](https://en.wikipedia.org/wiki/Frequency_mixer "Frequency mixer")). The alias is effectively the lower [heterodyne](https://en.wikipedia.org/wiki/Heterodyne "Heterodyne") of the signal frequency and sampling frequency.[^8]

#### Oversampling

For economy, signals are often sampled at the minimum rate required with the result that the quantization error introduced is [white noise](https://en.wikipedia.org/wiki/White_noise "White noise") spread over the whole [passband](https://en.wikipedia.org/wiki/Passband "Passband") of the converter. If a signal is sampled at a rate much higher than the [Nyquist rate](https://en.wikipedia.org/wiki/Nyquist_rate "Nyquist rate") and then [digitally filtered](https://en.wikipedia.org/wiki/Digital_filter "Digital filter") to limit it to the signal bandwidth produces the following advantages:

- Oversampling can make it easier to realize analog anti-aliasing filters
- Improved [audio bit depth](https://en.wikipedia.org/wiki/Audio_bit_depth "Audio bit depth")
- Reduced noise, especially when [noise shaping](https://en.wikipedia.org/wiki/Noise_shaping "Noise shaping") is employed in addition to oversampling.

Oversampling is typically used in audio frequency ADCs where the required sampling rate (typically 44.1 or 48 kHz) is very low compared to the clock speed of typical transistor circuits (>1 MHz). In this case, the performance of the ADC can be greatly increased at little or no cost. Furthermore, as any aliased signals are also typically out of band, aliasing can often be eliminated using very low cost filters.

The speed of an ADC varies by type. The [Wilkinson ADC](https://en.wikipedia.org/wiki/Wilkinson_ADC "Wilkinson ADC") is limited by the clock rate which is processable by current digital circuits. For a [successive-approximation ADC](https://en.wikipedia.org/wiki/Successive-approximation_ADC "Successive-approximation ADC"), the conversion time scales with the logarithm of the resolution, i.e. the number of bits. [Flash ADCs](https://en.wikipedia.org/wiki/Flash_ADC "Flash ADC") are certainly the fastest type of the three; The conversion is basically performed in a single parallel step.

There is a potential tradeoff between speed and precision. Flash ADCs have drifts and uncertainties associated with the comparator levels results in poor linearity. To a lesser extent, poor linearity can also be an issue for successive-approximation ADCs. Here, nonlinearity arises from accumulating errors from the subtraction processes. Wilkinson ADCs have the best linearity of the three.[^9] [^10]

The sliding scale or randomizing method can be employed to greatly improve the linearity of any type of ADC, but especially flash and successive approximation types. For any ADC the mapping from input voltage to digital output value is not exactly a [floor](https://en.wikipedia.org/wiki/Floor_function "Floor function") or [ceiling function](https://en.wikipedia.org/wiki/Ceiling_function "Ceiling function") as it should be. Under normal conditions, a pulse of a particular amplitude is always converted to the same digital value. The problem lies in that the ranges of analog values for the digitized values are not all of the same widths, and the [differential linearity](https://en.wikipedia.org/wiki/Differential_linearity "Differential linearity") decreases proportionally with the divergence from the average width. The sliding scale principle uses an averaging effect to overcome this phenomenon. A random, but known analog voltage is added to the sampled input voltage. It is then converted to digital form, and the equivalent digital amount is subtracted, thus restoring it to its original value. The advantage is that the conversion has taken place at a random point. The statistical distribution of the final levels is decided by a weighted average over a region of the range of the ADC. This in turn desensitizes it to the width of any specific level.[^11] [^12]

## Types

These are several common ways of implementing an electronic ADC.

[Resistor-capacitor (RC) circuits](https://en.wikipedia.org/wiki/RC_circuit "RC circuit") have a known voltage charging and discharging curve that can be used to solve for an unknown analog value.

#### Wilkinson

The **Wilkinson ADC** was designed by [Denys Wilkinson](https://en.wikipedia.org/wiki/Denys_Wilkinson "Denys Wilkinson") in 1950. The Wilkinson ADC is based on the comparison of an input voltage with that produced by a charging capacitor. The capacitor is allowed to charge until a comparator determines it matches the input voltage. Then, the capacitor is discharged linearly by using a constant [current source](https://en.wikipedia.org/wiki/Current_source "Current source"). The time required to discharge the capacitor is proportional to the amplitude of the input voltage. While the capacitor is discharging, pulses from a high-frequency oscillator clock are counted by a register. The number of clock pulses recorded in the register is also proportional to the input voltage.[^13] [^14]

If the analog value to measure is represented by a resistance or capacitance, then by including that element in an [RC circuit](https://en.wikipedia.org/wiki/RC_circuit "RC circuit") (with other resistances or capacitances fixed) and measuring the time to charge the capacitance from a known starting voltage to another known ending voltage through the resistance from a known voltage supply, the value of the unknown resistance or capacitance can be determined using the capacitor charging equation:

$$
{\displaystyle V_{\text{capacitor}}(t)=V_{\text{supply}}\left(1-e^{-{\frac {t}{RC}}}\right)}
$$

and solving for the unknown resistance or capacitance using those starting and ending datapoints. This is similar but contrasts to the Wilkinson ADC which measures an unknown voltage with a known resistance and capacitance, by instead measuring an unknown resistance or capacitance with a known voltage.

For example, the positive (and/or negative) pulse width from a [555 Timer IC in monostable or astable mode](https://en.wikipedia.org/wiki/555_timer_IC#Modes "555 timer IC") represents the time it takes to charge (and/or discharge) its capacitor from 1 ⁄ 3 *V* <sub>supply</sub> to 2 ⁄ 3 *V* <sub>supply</sub>. By sending this pulse into a microcontroller with an accurate clock, the duration of the pulse can be measured and converted using the capacitor charging equation to produce the value of the unknown resistance or capacitance.

Larger resistances and capacitances will take a longer time to measure than smaller one. And the accuracy is limited by the accuracy of the microcontroller clock and the amount of time available to measure the value, which potentially might even change during measurement or be affected by external [parasitics](https://en.wikipedia.org/wiki/Parasitic_element_\(electrical_networks\) "Parasitic element (electrical networks)").

### Flash ADC

A flash ADC, also known as a parallel ADC,[^15] employs a bank of [voltage comparators](https://en.wikipedia.org/wiki/Voltage_comparator "Voltage comparator") sampling the input signal in parallel, each with a different voltage threshold. The circuit consists of a resistive divider network, a set of voltage comparators and a priority encoder. Each node of the resistive divider provides a voltage threshold for one comparator. The comparator outputs are applied to a [priority encoder](https://en.wikipedia.org/wiki/Priority_encoder "Priority encoder"), which generates a binary number proportional to the input voltage.

Flash ADCs have a large [die](https://en.wikipedia.org/wiki/Die_\(integrated_circuit\) "Die (integrated circuit)") size and high power dissipation. They are used in a variety of applications, including [video](https://en.wikipedia.org/wiki/Video "Video"), [wideband communications](https://en.wikipedia.org/wiki/Wideband_communications "Wideband communications"), and for digitizing other fast signals.

The circuit has the advantage of high speed as the conversion takes place simultaneously rather than sequentially. Typical conversion time is 100 ns or less. Conversion time is limited only by the speed of the comparator and of the priority encoder. This type of ADC has the disadvantage that for each additional output bit, the number of comparators required almost doubles and priority encoder becomes more complex.

### Successive approximation

A [successive-approximation ADC](https://en.wikipedia.org/wiki/Successive-approximation_ADC "Successive-approximation ADC") uses a comparator and a [binary search](https://en.wikipedia.org/wiki/Binary_search "Binary search") to successively narrow a range that contains the input voltage. At each successive step, the converter compares the input voltage to the output of an internal [digital-to-analog converter](https://en.wikipedia.org/wiki/Digital-to-analog_converter "Digital-to-analog converter") (DAC) which initially represents the midpoint of the allowed input voltage range. At each step in this process, the approximation is stored in a successive approximation register (SAR) and the output of the digital-to-analog converter is updated for a comparison over a narrower range.

### Ramp-compare

A ramp-compare ADC produces a [saw-tooth signal](https://en.wikipedia.org/wiki/Sawtooth_wave "Sawtooth wave") that ramps up or down then quickly returns to zero.[^16] When the ramp starts, a timer starts counting. When the ramp voltage matches the input, a comparator fires, and the timer's value is recorded. Timed ramp converters can be implemented economically,[^1] however, the ramp time may be sensitive to temperature because the circuit generating the ramp is often a simple analog [integrator](https://en.wikipedia.org/wiki/Integrator "Integrator"). A more accurate converter uses a clocked counter driving a DAC. A special advantage of the ramp-compare system is that converting a second signal just requires another comparator and another register to store the timer value. To reduce sensitivity to input changes during conversion, a [sample and hold](https://en.wikipedia.org/wiki/Sample_and_hold "Sample and hold") can charge a capacitor with the instantaneous input voltage and the converter can time the time required to discharge with a [constant current](https://en.wikipedia.org/wiki/Constant_current "Constant current").

### Integrating

An **[integrating ADC](https://en.wikipedia.org/wiki/Integrating_ADC "Integrating ADC")** (also **dual-slope** or **multi-slope** ADC) applies the unknown input voltage to the input of an [integrator](https://en.wikipedia.org/wiki/Operational_amplifier_applications#Inverting_integrator "Operational amplifier applications") and allows the voltage to ramp for a fixed time period (the run-up period). Then a known reference voltage of opposite polarity is applied to the integrator and is allowed to ramp until the integrator output returns to zero (the run-down period). The input voltage is computed as a function of the reference voltage, the constant run-up time period, and the measured run-down time period. The run-down time measurement is usually made in units of the converter's clock, so longer integration times allow for higher resolutions. Likewise, the speed of the converter can be improved by sacrificing resolution. Converters of this type (or variations on the concept) are used in most [digital voltmeters](https://en.wikipedia.org/wiki/Digital_voltmeter "Digital voltmeter") for their linearity and flexibility.

Charge balancing ADC

The principle of charge balancing ADC is to first convert the input signal to a frequency using a [voltage-to-frequency converter](https://en.wikipedia.org/wiki/Voltage-to-frequency_converter "Voltage-to-frequency converter"). This frequency is then measured by a counter and converted to an output code proportional to the analog input. The main advantage of these converters is that it is possible to transmit frequency even in a noisy environment or in isolated form. However, the limitation of this circuit is that the output of the voltage-to-frequency converter depends upon an RC product whose value cannot be accurately maintained over temperature and time.

Dual-slope ADC

The analog part of the circuit consists of a high input impedance buffer, precision integrator and a voltage comparator. The converter first integrates the analog input signal for a fixed duration and then it integrates an internal reference voltage of opposite polarity until the integrator output is zero. The main disadvantage of this circuit is the long duration time. They are particularly suitable for accurate measurement of slowly varying signals such as [thermocouples](https://en.wikipedia.org/wiki/Thermocouple "Thermocouple") and [weighing scales](https://en.wikipedia.org/wiki/Weighing_scale "Weighing scale").

### Delta-encoded

A *delta-encoded* or *counter-ramp* ADC has an up-down [counter](https://en.wikipedia.org/wiki/Counter_\(digital\) "Counter (digital)") that feeds a DAC. The input signal and the DAC both go to a comparator. The comparator controls the counter. The circuit uses negative [feedback](https://en.wikipedia.org/wiki/Feedback "Feedback") from the comparator to adjust the counter until the DAC's output matches the input signal and number is read from the counter. Delta converters have very wide ranges and high resolution, but the conversion time is dependent on the input signal behavior, though it will always have a guaranteed worst-case. Delta converters are often very good choices to read real-world signals as most signals from physical systems do not change abruptly. Some converters combine the delta and successive approximation approaches; this works especially well when high frequency components of the input signal are known to be small in magnitude.

### Pipelined

A *pipelined ADC* (also called *subranging quantizer*) uses two or more conversion steps. First, a coarse conversion is done. In a second step, the difference to the input signal is determined with a DAC. This difference is then converted more precisely, and the results are combined in the last step. This can be considered a refinement of the successive-approximation ADC wherein the feedback reference signal consists of the interim conversion of a whole range of bits (for example, four bits) rather than just the next-most-significant bit. By combining the merits of the successive approximation and flash ADCs this type is fast, has a high resolution, and can be implemented efficiently.

### Delta-sigma

A **delta-sigma ADC** (also known as a **sigma-delta ADC**) is based on a [negative feedback](https://en.wikipedia.org/wiki/Negative_feedback "Negative feedback") loop with an analog filter and low resolution (often 1 bit) but high [sampling rate](https://en.wikipedia.org/wiki/Sampling_rate "Sampling rate") ADC and DAC. The feedback loop continuously corrects accumulated quantization errors and performs [noise shaping](https://en.wikipedia.org/wiki/Noise_shaping "Noise shaping"): quantization noise is reduced in the low frequencies of interest, but is increased in higher frequencies. Those higher frequencies may then be removed by a [downsampling](https://en.wikipedia.org/wiki/Downsampling "Downsampling") [digital filter](https://en.wikipedia.org/wiki/Digital_filter "Digital filter"), which also converts the data stream from that high sampling rate with low [bit depth](https://en.wikipedia.org/wiki/Audio_bit_depth "Audio bit depth") to a lower rate with higher bit depth.

### Time-interleaved

A [time-interleaved ADC](https://en.wikipedia.org/wiki/Time-interleaved_ADC "Time-interleaved ADC") uses M parallel ADCs where each ADC samples data every M:th cycle of the effective sample clock. The result is that the sample rate is increased M times compared to what each individual ADC can manage. In practice, the individual differences between the M ADCs degrade the overall performance reducing the [spurious-free dynamic range](https://en.wikipedia.org/wiki/Spurious-free_dynamic_range "Spurious-free dynamic range") (SFDR).[^18] However, techniques exist to correct for these time-interleaving mismatch errors.[^19]

An ADC with an intermediate FM stage first uses a [voltage-to-frequency converter](https://en.wikipedia.org/wiki/Voltage-to-frequency_converter "Voltage-to-frequency converter") to produce an oscillating signal with a frequency proportional to the voltage of the input signal, and then uses a [frequency counter](https://en.wikipedia.org/wiki/Frequency_counter "Frequency counter") to convert that frequency into a digital count proportional to the desired signal voltage. Longer integration times allow for higher resolutions. Likewise, the speed of the converter can be improved by sacrificing resolution. The two parts of the ADC may be widely separated, with the frequency signal passed through an [opto-isolator](https://en.wikipedia.org/wiki/Opto-isolator "Opto-isolator") or transmitted wirelessly. Some such ADCs use sine wave or square wave [frequency modulation](https://en.wikipedia.org/wiki/Frequency_modulation "Frequency modulation"); others use [pulse-frequency modulation](https://en.wikipedia.org/wiki/Pulse-frequency_modulation "Pulse-frequency modulation"). Such ADCs were once the most popular way to show a digital display of the status of a remote analog sensor.[^20] [^21] [^22] [^23] [^24]

### Time-stretch

A [time-stretch analog-to-digital converter](https://en.wikipedia.org/wiki/Time-stretch_analog-to-digital_converter "Time-stretch analog-to-digital converter") (TS-ADC) digitizes a very wide bandwidth analog signal, that cannot be digitized by a conventional electronic ADC, by time-stretching the signal prior to digitization. It commonly uses a [photonic](https://en.wikipedia.org/wiki/Photonic "Photonic") [preprocessor](https://en.wikipedia.org/wiki/Preprocessor "Preprocessor") to time-stretch the signal, which effectively slows the signal down in time and compresses its bandwidth. As a result, an electronic ADC, that would have been too slow to capture the original signal, can now capture this slowed-down signal. For continuous capture of the signal, the front end also divides the signal into multiple segments in addition to time-stretching. Each segment is individually digitized by a separate electronic ADC. Finally, a [digital signal processor](https://en.wikipedia.org/wiki/Digital_signal_processor "Digital signal processor") rearranges the samples and removes any distortions added by the preprocessor to yield the binary data that is the digital representation of the original analog signal.

Although the term ADC is usually associated with measurement of an analog voltage, some partially-electronic devices that convert some measurable physical analog quantity into a digital number can also be considered ADCs, for instance:

- [Rotary encoders](https://en.wikipedia.org/wiki/Rotary_encoder "Rotary encoder") convert from an analog physical quantity that mechanically produces an amount of [rotation](https://en.wikipedia.org/wiki/Rotation_around_a_fixed_axis "Rotation around a fixed axis") into a stream of digital [Gray code](https://en.wikipedia.org/wiki/Gray_code "Gray code") that a [microcontroller](https://en.wikipedia.org/wiki/Microcontroller "Microcontroller") can digitally interpret to derive the direction of rotation, angular position, and rotational speed.[^25]
- [Capacitive sensing](https://en.wikipedia.org/wiki/Capacitive_sensing "Capacitive sensing") converts from the analog physical quantity of a [capacitance](https://en.wikipedia.org/wiki/Capacitance "Capacitance"). That capacitance could be a [proxy](https://en.wikipedia.org/wiki/Proxy_\(statistics\) "Proxy (statistics)") for some other physical quantity, such as the distance some metal object is from a metal sensing plate, or the amount of water in a tank, or the [permittivity](https://en.wikipedia.org/wiki/Permittivity "Permittivity") of a [dielectric](https://en.wikipedia.org/wiki/Dielectric "Dielectric") material.
	- Capacitive-to-digital (CDC) converters determine capacitance by applying a known excitation to a plate of a [capacitor](https://en.wikipedia.org/wiki/Capacitor "Capacitor") and measuring its charge.[^26]
- [Digital calipers](https://en.wikipedia.org/wiki/Digital_calipers "Digital calipers") convert from the analog physical quantity of an amount of displacement between two sliding rulers.
- Inductive-to-digital converters measure a change of [inductance](https://en.wikipedia.org/wiki/Inductance "Inductance") by a conductive target moving in an [inductor](https://en.wikipedia.org/wiki/Inductor "Inductor") 's [AC](https://en.wikipedia.org/wiki/Alternating_current "Alternating current") [magnetic field](https://en.wikipedia.org/wiki/Magnetic_field "Magnetic field").[^27]
- [Time-to-digital converters](https://en.wikipedia.org/wiki/Time-to-digital_converter "Time-to-digital converter") recognize events and provide a digital representation of the analog [time](https://en.wikipedia.org/wiki/Time "Time") they occurred.
	- [Time of flight](https://en.wikipedia.org/wiki/Time_of_flight "Time of flight") measurements for instance can convert from some analog quantity that affects a [propagation delay](https://en.wikipedia.org/wiki/Propagation_delay "Propagation delay") for an event.
- [Sensors](https://en.wikipedia.org/wiki/Sensor "Sensor") in general that don't directly produce a voltage may indirectly produce a voltage or through other ways be converted into a digital value.
	- Resistive output (e.g. from a [potentiometer](https://en.wikipedia.org/wiki/Potentiometer "Potentiometer") or a [force-sensing resistor](https://en.wikipedia.org/wiki/Force-sensing_resistor "Force-sensing resistor")) can be made into a voltage by sending a known current through it, or can be made into a [RC charging time](https://en.wikipedia.org/wiki/RC_time_constant "RC time constant") measurement, to produce a digital result.

## Commercial

In many cases, the most expensive part of an integrated circuit is the pins, because they make the package larger, and each pin has to be connected to the integrated circuit's silicon. To save pins, it is common for ADCs to send their data one bit at a time over a [serial interface](https://en.wikipedia.org/wiki/Serial_interface "Serial interface") to the computer, with each bit coming out when a [clock signal](https://en.wikipedia.org/wiki/Clock_signal "Clock signal") changes state. This saves quite a few pins on the ADC package, and in many cases, does not make the overall design any more complex.

Commercial ADCs often have several inputs that feed the same converter, usually through an analog [multiplexer](https://en.wikipedia.org/wiki/Multiplexer "Multiplexer"). Different models of ADC may include [sample and hold](https://en.wikipedia.org/wiki/Sample_and_hold "Sample and hold") circuits, instrumentation [amplifiers](https://en.wikipedia.org/wiki/Amplifier "Amplifier") or [differential](https://en.wikipedia.org/wiki/Differential_signalling "Differential signalling") inputs, where the quantity measured is the difference between two inputs.

## Applications

### Music recording

Analog-to-digital converters are integral to modern music reproduction technology and [digital audio workstation](https://en.wikipedia.org/wiki/Digital_audio_workstation "Digital audio workstation") -based [sound recording](https://en.wikipedia.org/wiki/Sound_recording "Sound recording"). Music may be produced on computers using an analog recording and therefore analog-to-digital converters are needed to create the [pulse-code modulation](https://en.wikipedia.org/wiki/Pulse-code_modulation "Pulse-code modulation") (PCM) data streams that go onto [compact discs](https://en.wikipedia.org/wiki/Compact_disc "Compact disc") and digital music files. The current crop of analog-to-digital converters utilized in music can sample at rates up to 192 [kilohertz](https://en.wikipedia.org/wiki/Kilohertz "Kilohertz"). Many recording studios record in 24-bit 96 kHz pulse-code modulation (PCM) format and then [downsample](https://en.wikipedia.org/wiki/Downsample "Downsample") and dither the signal for [Compact Disc Digital Audio](https://en.wikipedia.org/wiki/Compact_Disc_Digital_Audio "Compact Disc Digital Audio") production (44.1 kHz) or to 48 kHz for radio and television broadcast applications.

ADCs are required in [digital signal processing](https://en.wikipedia.org/wiki/Digital_signal_processing "Digital signal processing") systems that process, store, or transport virtually any analog signal in digital form. [TV tuner cards](https://en.wikipedia.org/wiki/TV_tuner_card "TV tuner card"), for example, use fast video analog-to-digital converters. Slow on-chip 8-, 10-, 12-, or 16-bit analog-to-digital converters are common in [microcontrollers](https://en.wikipedia.org/wiki/Microcontroller "Microcontroller"). [Digital storage oscilloscopes](https://en.wikipedia.org/wiki/Digital_storage_oscilloscope "Digital storage oscilloscope") need very fast analog-to-digital converters, also crucial for [software-defined radio](https://en.wikipedia.org/wiki/Software-defined_radio "Software-defined radio") and their new applications.

### Scientific instruments

[Digital imaging](https://en.wikipedia.org/wiki/Digital_imaging "Digital imaging") systems commonly use analog-to-digital converters for digitizing [pixels](https://en.wikipedia.org/wiki/Pixel "Pixel"). Some [radar](https://en.wikipedia.org/wiki/Radar "Radar") systems use analog-to-digital converters to convert [signal strength](https://en.wikipedia.org/wiki/Signal_strength "Signal strength") to digital values for subsequent [signal processing](https://en.wikipedia.org/wiki/Signal_processing "Signal processing"). Many other in situ and [remote sensing](https://en.wikipedia.org/wiki/Remote_sensing "Remote sensing") systems commonly use analogous technology.

Many [sensors](https://en.wikipedia.org/wiki/Sensor "Sensor") in scientific instruments produce an analog signal; [temperature](https://en.wikipedia.org/wiki/Temperature "Temperature"), [pressure](https://en.wikipedia.org/wiki/Pressure "Pressure"), [pH](https://en.wikipedia.org/wiki/PH "PH"), [light intensity](https://en.wikipedia.org/wiki/Candela "Candela") etc. All these signals can be amplified and fed to an ADC to produce a digital representation.

### Displays

[Flat-panel displays](https://en.wikipedia.org/wiki/Flat-panel_display "Flat-panel display") are inherently digital and need an ADC to process an analog signal such as [composite](https://en.wikipedia.org/wiki/Composite_video "Composite video") or [VGA](https://en.wikipedia.org/wiki/VGA "VGA").

## Electrical symbol

![[~/×/b140311c9c8be319edf320441aa3ee9d_MD5.png]]

## Testing

Testing an analog-to-digital converter requires an analog input source and [hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") to send control signals and capture digital data output. Some ADCs also require an accurate source of reference signal.

The key parameters to test an ADC are:

1. DC offset error
2. DC gain error
3. [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio "Signal-to-noise ratio") (SNR)
4. [Total harmonic distortion](https://en.wikipedia.org/wiki/Total_harmonic_distortion "Total harmonic distortion") (THD)
5. [Integral nonlinearity](https://en.wikipedia.org/wiki/Integral_nonlinearity "Integral nonlinearity") (INL)
6. [Differential nonlinearity](https://en.wikipedia.org/wiki/Differential_nonlinearity "Differential nonlinearity") (DNL)
7. Spurious free dynamic range
8. Power dissipation

## See also

- [Adaptive predictive coding](https://en.wikipedia.org/wiki/Adaptive_predictive_coding "Adaptive predictive coding"), a type of ADC in which the value of the signal is predicted by a linear function
- [Audio codec](https://en.wikipedia.org/wiki/Audio_codec "Audio codec")
- [Beta encoder](https://en.wikipedia.org/wiki/Beta_encoder "Beta encoder")
- [Integral linearity](https://en.wikipedia.org/wiki/Integral_linearity "Integral linearity")
- [Modem](https://en.wikipedia.org/wiki/Modem "Modem")

## Notes

## References

## Further reading

- Allen, Phillip E.; Holberg, Douglas R. (2002). *CMOS Analog Circuit Design*. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-19-511644-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-19-511644-1 "Special:BookSources/978-0-19-511644-1").
- Fraden, Jacob (2010). *Handbook of Modern Sensors: Physics, Designs, and Applications*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1441964656](https://en.wikipedia.org/wiki/Special:BookSources/978-1441964656 "Special:BookSources/978-1441964656").
- Kester, Walt, ed. (2005). [*The Data Conversion Handbook*](http://www.analog.com/library/analogDialogue/archives/39-06/data_conversion_handbook.html). Elsevier: Newnes. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7506-7841-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7506-7841-4 "Special:BookSources/978-0-7506-7841-4").`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: publisher location ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_publisher_location "Category:CS1 maint: publisher location"))
- Johns, David; Martin, Ken (1997). *Analog Integrated Circuit Design*. Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-14448-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-14448-9 "Special:BookSources/978-0-471-14448-9").
- Liu, Mingliang (2006). *Demystifying Switched-Capacitor Circuits*. Newnes. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7506-7907-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7506-7907-7 "Special:BookSources/978-0-7506-7907-7").
- Norsworthy, Steven R.; Schreier, Richard; Temes, Gabor C. (1997). *Delta-Sigma Data Converters*. IEEE Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7803-1045-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7803-1045-2 "Special:BookSources/978-0-7803-1045-2").
- [Razavi, Behzad](https://en.wikipedia.org/wiki/Behzad_Razavi "Behzad Razavi") (1995). *Principles of Data Conversion System Design*. New York, NY: IEEE Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7803-1093-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7803-1093-3 "Special:BookSources/978-0-7803-1093-3").
- Ndjountche, Tertulien (May 24, 2011). *CMOS Analog Integrated Circuits: High-Speed and Power-Efficient Design*. Boca Raton, FL: CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4398-5491-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4398-5491-4 "Special:BookSources/978-1-4398-5491-4").
- Staller, Len (February 24, 2005). ["Understanding analog to digital converter specifications"](https://www.embedded.com/design/configurable-systems/4025078/Understanding-analog-to-digital-converter-specifications). *Embedded Systems Design*.
- Walden, R. H. (1999). "Analog-to-digital converter survey and analysis". *IEEE Journal on Selected Areas in Communications*. **17** (4): 539– 550. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.352.1881](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.352.1881). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/49.761034](https://doi.org/10.1109%2F49.761034).

## External links

- [An Introduction to Delta Sigma Converters](http://www.beis.de/Elektronik/DeltaSigma/DeltaSigma.html) A very nice overview of Delta-Sigma converter theory.
- [Digital Dynamic Analysis of A/D Conversion Systems through Evaluation Software based on FFT/DFT Analysis](http://www.ieee.li/pdf/adc_evaluation_rf_expo_east_1987.pdf) RF Expo East, 1987
- [Which ADC Architecture Is Right for Your Application?](http://www.analog.com/library/analogDialogue/archives/39-06/architecture.html) article by Walt Kester
- [ADC and DAC Glossary](https://web.archive.org/web/20091124061906/http://www.maxim-ic.com/appnotes.cfm/an_pk/641/CMP/ELK-11) at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") (archived 2009-11-24) Defines commonly used technical terms
- [Introduction to ADC in AVR](http://www.robotplatform.com/knowledge/ADC/adc_tutorial.html) – Analog to digital conversion with Atmel microcontrollers
- [Signal processing and system aspects of time-interleaved ADCs](https://web.archive.org/web/20120313163132/http://userver.ftw.at/~vogel/TIADC.html)
- [MATLAB Simulink model of a simple ramp ADC](http://www.mathworks.com/matlabcentral/fileexchange/55912-adc)
- ["Principles of Data Acquisition and Conversion"](https://www.ti.com/lit/an/sbaa051a/sbaa051a.pdf?ts=1730260871482&ref_url=https%253A%252F%252Fwww.google.com%252F) (PDF). *ti.com*. Texas Instruments. April 2015 \[January 1994\]. Retrieved October 29, 2024.

[^1]: [^17]

[^2]: ["Principles of Data Acquisition and Conversion"](http://www.ti.com/lit/an/sbaa051a/sbaa051a.pdf) (PDF). Texas Instruments. April 2015. [Archived](https://ghostarchive.org/archive/20221009/http://www.ti.com/lit/an/sbaa051a/sbaa051a.pdf) (PDF) from the original on October 9, 2022. Retrieved October 18, 2016.

[^3]: Lathi, B.P. (1998). *Modern Digital and Analog Communication Systems* (3rd ed.). Oxford University Press.

[^4]: ["Maxim App 800: Design a Low-Jitter Clock for High-Speed Data Converters"](http://www.maxim-ic.com/appnotes.cfm/an_pk/800/), *maxim-ic.com*, July 17, 2002

[^5]: ["Jitter effects on Analog to Digital and Digital to Analog Converters"](http://www.thewelltemperedcomputer.com/Lib/Troisi.pdf) (PDF). Retrieved August 19, 2012.

[^6]: Löhning, Michael; Fettweis, Gerhard (2007). "The effects of aperture jitter and clock jitter in wideband ADCs". *Computer Standards & Interfaces Archive*. **29** (1): 11– 18. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.3.9217](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.3.9217). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/j.csi.2005.12.005](https://doi.org/10.1016%2Fj.csi.2005.12.005).

[^7]: Redmayne, Derek; Steer, Alison (December 8, 2008), ["Understanding the effect of clock jitter on high-speed ADCs"](http://www.eetimes.com/design/automotive-design/4010074/Understanding-the-effect-of-clock-jitter-on-high-speed-ADCs-Part-1-of-2-), *eetimes.com*

[^8]: ["RF-Sampling and GSPS ADCs – Breakthrough ADCs Revolutionize Radio Architectures"](http://www.ti.com/lit/sg/snwt001/snwt001.pdf) (PDF). Texas Instruments. [Archived](https://ghostarchive.org/archive/20221009/http://www.ti.com/lit/sg/snwt001/snwt001.pdf) (PDF) from the original on October 9, 2022. Retrieved November 4, 2013.

[^9]: [Knoll (1989](https://en.wikipedia.org/wiki/#CITEREFKnoll1989), pp. 664–665)

[^10]: [Nicholson (1974](https://en.wikipedia.org/wiki/#CITEREFNicholson1974), pp. 313–315)

[^11]: [Knoll (1989](https://en.wikipedia.org/wiki/#CITEREFKnoll1989), pp. 665–666)

[^12]: [Nicholson (1974](https://en.wikipedia.org/wiki/#CITEREFNicholson1974), pp. 315–316)

[^13]: [Knoll (1989](https://en.wikipedia.org/wiki/#CITEREFKnoll1989), pp. 663–664)

[^14]: [Nicholson (1974](https://en.wikipedia.org/wiki/#CITEREFNicholson1974), pp. 309–310)

[^15]: Pelgrom, Marcel. *Analog-to-Digital Conversion*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780792396834](https://en.wikipedia.org/wiki/Special:BookSources/9780792396834 "Special:BookSources/9780792396834").

[^16]: Couch - 2001 - Digital and analog communication systems - Prentice Hall - New Jersey, USA

[^17]: ["Atmel Application Note AVR400: Low Cost A/D Converter"](http://www.atmel.com/dyn/resources/prod_documents/doc0942.pdf) (PDF). *atmel.com*. [Archived](https://ghostarchive.org/archive/20221009/http://www.atmel.com/dyn/resources/prod_documents/doc0942.pdf) (PDF) from the original on October 9, 2022.

[^18]: Vogel, Christian (2005). "The Impact of Combined Channel Mismatch Effects in Time-interleaved ADCs". *IEEE Transactions on Instrumentation and Measurement*. **55** (1): 415– 427. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[2005ITIM...54..415V](https://ui.adsabs.harvard.edu/abs/2005ITIM...54..415V). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.212.7539](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.212.7539). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TIM.2004.834046](https://doi.org/10.1109%2FTIM.2004.834046). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [15038020](https://api.semanticscholar.org/CorpusID:15038020).

[^19]: Gabriele Manganaro; David H. Robertson (July 2015), [*Interleaving ADCs: Unraveling the Mysteries*](https://www.analog.com/en/analog-dialogue/articles/interleaving-adcs.html), [Analog Devices](https://en.wikipedia.org/wiki/Analog_Devices "Analog Devices"), retrieved October 7, 2021

[^20]: [Analog Devices MT-028 Tutorial: "Voltage-to-Frequency Converters"](http://www.analog.com/static/imported-files/tutorials/MT-028.pdf) by Walt Kester and James Bryant 2009, apparently adapted from Kester, Walter Allan (2005) [*Data conversion handbook*](https://books.google.com/books?id=0aeBS6SgtR4C&pg=RA2-PA274), Newnes, p. 274, [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0750678410](https://en.wikipedia.org/wiki/Special:BookSources/0750678410 "Special:BookSources/0750678410").

[^21]: [Microchip AN795 "Voltage to Frequency / Frequency to Voltage Converter"](http://ww1.microchip.com/downloads/en/AppNotes/00795a.pdf) p. 4: "13-bit A/D converter"

[^22]: Carr, Joseph J. (1996) [*Elements of electronic instrumentation and measurement*](https://books.google.com/books?id=1yBTAAAAMAAJ), Prentice Hall, p. 402, [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0133416860](https://en.wikipedia.org/wiki/Special:BookSources/0133416860 "Special:BookSources/0133416860").

[^23]: ["Voltage-to-Frequency Analog-to-Digital Converters"](http://www.globalspec.com/reference/3127/Voltage-to-Frequency-Analog-to-Digital-Converters). globalspec.com

[^24]: Pease, Robert A. (1991) [*Troubleshooting Analog Circuits*](https://books.google.com/books?id=3kY4-HYLqh0C&pg=PA130), Newnes, p. 130, [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0750694998](https://en.wikipedia.org/wiki/Special:BookSources/0750694998 "Special:BookSources/0750694998").

[^25]: ["How to Use Rotary Encoders to Quickly Convert Mechanical Rotation into Digital Signals"](https://www.techbriefs.com/component/content/article/tb/supplements/md/features/articles/35291). *Techbriefs*. October 1, 2019. Retrieved October 9, 2023.

[^26]: Jia, Ning (May 1, 2012). ["ADI Capacitance-to-Digital Converter Technology in Healthcare Applications"](https://www.analog.com/en/analog-dialogue/articles/capacitance-to-digital-converter-technology-healthcare.html). *[Analog Dialogue](https://en.wikipedia.org/wiki/Analog_Dialogue "Analog Dialogue")*. [Archived](https://web.archive.org/web/20230707111410/https://www.analog.com/en/analog-dialogue/articles/capacitance-to-digital-converter-technology-healthcare.html) from the original on July 7, 2023. Retrieved October 9, 2023.

[^27]: Kasemsadeh, Ben (July 31, 2015). ["How To Sense Lateral Movement Using An Inductance-to-Digital Converter"](https://www.fierceelectronics.com/components/how-to-sense-lateral-movement-using-inductance-to-digital-converter). *Fierce Electronics*. [Archived](https://web.archive.org/web/20231009202429/https://www.fierceelectronics.com/components/how-to-sense-lateral-movement-using-inductance-to-digital-converter) from the original on October 9, 2023. Retrieved October 9, 2023.