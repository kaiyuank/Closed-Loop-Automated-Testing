---
id: intro
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
---

# Closed-Loop Automated Testing for Analog ICs

**ESE 4970 Capstone Design · Fall 2026**  
**Washington University in St. Louis**  
**Team:** Sam Kang · Alson Yau · Simon He  
**Faculty advisor:** Professor Shantanu Chakrabartty

## Project overview

Characterizing analog integrated circuits typically involves multiple instruments and separate procedures for DC, AC, transient, power-supply rejection, and noise measurements. Reconfiguring equipment and interpreting results manually can be time-consuming, particularly when testing different devices or research prototypes.

This capstone project develops a **reusable, Python-based framework for automated and closed-loop analog IC characterization**. It combines a programmable test-station platform with external laboratory instruments, standardized measurement routines, and adaptive test planning. Commercial operational amplifiers serve as the main demonstration devices, with the goal of extending the workflow to post-tapeout analog ICs.

## What the project does

- **Automated measurements:** Coordinate instrument settings, acquire data, extract specifications, and save results for DC, AC, transient, and other analog characterization procedures.
- **Closed-loop test planning:** Use earlier measurements to guide later bias, signal-amplitude, frequency-range, and acquisition choices. Integration of the complete sequential workflow is ongoing.
- **Adaptive AC analysis:** Apply Gaussian-process-based Bayesian optimization to select informative test frequencies while estimating amplifier gain, phase, and −3 dB bandwidth.

### Adaptive AC demonstration

In one documented amplifier comparison, the adaptive AC routine used **38 frequency points instead of 100**. Acquisition time decreased from **43.75 s to 17.11 s**, and the two methods' −3 dB bandwidth estimates differed by **0.127%**. These figures describe this specific demonstration, not a guaranteed improvement for every device.

See [Adaptive AC Analysis](./automation/adaptive-ac) for the method, plots, and comparison results.

## Measurement platform

The framework uses a programmable hardware platform with **40 channels of 16-bit DAC output**, **eight differential 24-bit ADC inputs**, STM32H743-based control and transient capture, and current-measurement circuits. External instruments—including an NI USB-6212, function generator, oscilloscope, and precision measurement equipment—provide additional control, stimulus, acquisition, and verification paths when appropriate.

The hardware, firmware, and Python interfaces are documented separately so that measurement workflows can be reused or extended without redesigning the entire platform.

## Documentation

- [Hardware and software setup](./getting-started/hardware-setup)
- [Software setup](./getting-started/software-setup)
- [System and subsystem overview](./subsystems/subsystems-overview)
- [PCB design](./pcb-design/pcb-overview)
- [Measurement workflows](./measurements/measurements-overview)
- [Automation overview](./automation/automation-overview)
- [Adaptive AC analysis](./automation/adaptive-ac)

## Original platform and credits

This capstone builds upon the **[RCN Test Station](https://aimlab-wustl.github.io/RCNteststation/)**, **independently developed by Kaiyuan (Sam) Kang** at AIMLAB, Washington University in St. Louis. Sam developed the original hardware, firmware, measurement software, and documentation. The three-person capstone team builds on that foundation to develop and integrate automated and adaptive testing workflows.

The underlying RCN Test Station research was supported in part by **NSF Research Coordination Network grant 2332166**. Reused materials retain the original attribution and applicable [CC BY-NC 4.0 license](https://github.com/aimlab-wustl/RCNteststation/blob/main/LICENSE).

**Source repositories:** [Capstone project](https://github.com/kaiyuank/Closed-Loop-Automated-Testing) · [Original RCN Test Station](https://github.com/aimlab-wustl/RCNteststation)
