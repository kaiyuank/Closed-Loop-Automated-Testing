# Closed-Loop Automated Testing for Analog ICs

**ESE 4970 Capstone Design · Fall 2026**  
**Washington University in St. Louis**

**Team:** Sam Kang · Alson Yau · Simon He  
**Project advisor:** Professor Shantanu Chakrabartty

[Project website](https://kaiyuank.github.io/Closed-Loop-Automated-Testing/) · [Source repository](https://github.com/kaiyuank/Closed-Loop-Automated-Testing) · [Underlying RCN Test Station](https://aimlab-wustl.github.io/RCNteststation/)

## Overview

This capstone project develops a reusable **automated and closed-loop testing framework for analog integrated circuits**. It combines programmable measurement hardware, external laboratory instruments, embedded control, and Python-based characterization routines to reduce manual setup and improve measurement repeatability.

The primary demonstration uses operational amplifiers, with an architecture intended to support future post-tapeout analog and mixed-signal IC testing. In addition to conventional DC, AC, transient, power-supply rejection ratio (PSRR), and noise measurements, the project investigates **measurement-driven test planning** and **adaptive frequency selection**.

## Project objectives

- **Automated characterization:** Run reusable measurement routines, acquire raw data, extract specifications, and generate standardized plots and summaries.
- **Closed-loop test planning:** Use results from earlier tests to select subsequent bias points, input amplitudes, frequency ranges, and acquisition settings while respecting safety limits.
- **Adaptive AC analysis:** Apply Gaussian-process-based Bayesian optimization to select informative measurement frequencies instead of relying exclusively on dense fixed sweeps.
- **Reproducibility:** Preserve measurement conditions, instrument settings, calibration details, and datasets for comparison and future reuse.

## System architecture

The project builds on a modular instrument platform composed of:

| Component | Role |
| --- | --- |
| **DAC80508 outputs** | 40 programmable, 16-bit DC bias/control channels (0–5 V) |
| **ADS131A04 converters** | Eight differential, 24-bit precision ADC channels across two devices |
| **STM32H743** | Embedded control, USB communication, and fast transient acquisition |
| **Current-measurement front end** | Switchable transimpedance measurement paths |
| **NI USB-6212 and external instruments** | Additional stimulus, acquisition, calibration, and reference measurements |
| **Python software** | Instrument control, automated experiments, data analysis, and adaptive test planning |

An external function generator and oscilloscope can be integrated when AC stimulus or waveform measurement exceeds the practical capabilities of the custom board. Available hardware paths depend on the specific experiment and device under test (DUT).

## Measurement workflows

| Workflow | Scope | Status |
| --- | --- | --- |
| DC characterization | Transfer curves, gain, offset, linearity, output swing | Implemented |
| DC PSRR and related op-amp tests | Supply sensitivity, common-mode range, input bias | Existing test routines |
| Transient characterization | Step response, slew rate, overshoot, settling | Existing test routine |
| Adaptive AC characterization | Gain, phase, −3 dB bandwidth, optimized frequency selection | Implemented |
| Frequency-dependent PSRR | AC supply-disturbance characterization | Under development / validation |
| Noise characterization | Noise capture and spectral-density analysis | Under development |
| Integrated closed-loop sequence | Automatically choose later test settings using earlier results | Under development |

*Status describes the current capstone demonstration and may evolve as testing and validation continue. The presence of a measurement script does not by itself imply that every DUT or hardware configuration has been validated.*

### Adaptive AC demonstration

A demonstrated adaptive AC sweep used **38 physical measurements**, compared with **100** in a matched dense sweep. Acquisition time decreased from **43.75 s to 17.11 s**. The measured −3 dB bandwidths were **74.925 kHz** (dense) and **75.020 kHz** (adaptive), a **0.127%** difference in this experiment.

The adaptive measurement loop selects a frequency, measures the DUT response, updates the model, and selects the next frequency. This is a demonstrated adaptive sub-workflow; the broader sequential DC-to-AC-to-transient closed-loop system is a separate integration objective.

See the [Adaptive AC Analysis documentation](https://kaiyuank.github.io/Closed-Loop-Automated-Testing/docs/automation/adaptive-ac) for methodology, figures, and the full comparison.

## Repository and documentation

This repository includes the test-station hardware and software foundation along with capstone-specific automation and documentation. Key locations include:

- `website/test-station/` — Docusaurus project website and documentation.
- `firmware/test_station_fw/` — STM32 firmware project.
- `python/` — Python instrument drivers, measurement routines, and analysis utilities.
- Hardware design files and verification documentation — see the [PCB Design documentation](https://kaiyuank.github.io/Closed-Loop-Automated-Testing/pcb/overview).

For setup instructions, see the [Hardware Setup](https://kaiyuank.github.io/Closed-Loop-Automated-Testing/docs/getting-started/hardware-setup) and [Software Setup](https://kaiyuank.github.io/Closed-Loop-Automated-Testing/docs/getting-started/software-setup) pages.

## Relationship to the RCN Test Station

**This capstone builds upon the [Automated Analog and Neuromorphic Integrated Circuits Test Station](https://aimlab-wustl.github.io/RCNteststation/), independently developed by Kaiyuan (Sam) Kang at AIMLAB, Washington University in St. Louis.** Sam developed the original platform’s hardware, firmware, measurement software, and documentation. The three-member capstone project builds on that existing work to develop integrated characterization workflows, measurement-driven test planning, and adaptive testing.

- **Original platform:** https://aimlab-wustl.github.io/RCNteststation/
- **Original source repository:** https://github.com/aimlab-wustl/RCNteststation

The original RCN Test Station work has been supported in part by NSF Research Coordination Network award **2332166**. This acknowledgment refers to the underlying research platform and does not imply separate NSF sponsorship of the ESE 4970 capstone project.

## Credits and acknowledgments

**Capstone team:** Sam Kang, Alson Yau, Simon He  
**Faculty advisor:** Professor Shantanu Chakrabartty  
**Institution:** Department of Electrical and Systems Engineering, Washington University in St. Louis  
**Original RCN Test Station developer:** Kaiyuan (Sam) Kang

The capstone builds on the RCN Test Station independently developed by Sam Kang. AIMLAB and the NSF Research Coordination Network are acknowledged for supporting the underlying research platform.

## License and usage

Reused RCN Test Station material retains its original attribution and applicable license notices. The original project identifies its materials as licensed under **Creative Commons Attribution–NonCommercial 4.0 International (CC BY-NC 4.0)**. See the repository's `LICENSE` and individual source-file headers for applicable terms. This project is intended for research, education, and noncommercial development.

**Safety note:** Verify DUT supply limits, current limits, wiring, and instrument configurations before running automated experiments. Not all measurement paths have the same voltage, current, noise, or bandwidth limits.
