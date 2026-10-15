---
id: automation-overview
title: Automated & Adaptive Testing
sidebar_label: Automation & Adaptive Testing
sidebar_position: 1
---

# Automated & Adaptive Testing

## Overview

The ESE 4970 capstone project develops a reusable, Python-based testing framework for analog integrated circuits. It combines a programmable measurement platform, external laboratory instruments, and automated data analysis to characterize device performance with less manual intervention.

This work builds on the [RCN Test Station](https://aimlab-wustl.github.io/RCNteststation/) developed at AIMLAB, Washington University in St. Louis.

## Automated Characterization

The intended measurement workflow includes DC transfer characteristics, small-signal AC frequency response, transient response, power-supply rejection ratio (PSRR), and noise. Reusable instrument drivers and analysis functions are designed to simplify testing across devices under test (DUTs). Individual functions are validated before integration into the complete test sequence.

## Closed-Loop Test Planning

In the full sequence, results from earlier measurements guide later settings. For example, the usable linear region identified by a DC sweep can inform the AC input amplitude and bias point; measured bandwidth can inform subsequent frequency ranges and acquisition settings. Safety limits and result validation are included in the workflow design.

The integrated multi-test closed-loop sequence is under development. It is distinct from the adaptive frequency-selection loop described below, which has been demonstrated.

## Adaptive AC Analysis

An adaptive AC analysis pipeline uses Gaussian-process-based Bayesian optimization with Ax to select measurement frequencies. After initial measurements, the algorithm proposes additional points based on the observed frequency response and its predicted uncertainty, concentrating measurement effort near features such as the -3 dB cutoff.

In a demonstrated comparison over 100 Hz to 1 MHz, the adaptive sweep used **38 physical measurements** instead of **100** for the dense sweep. Acquisition time decreased from **43.75 s to 17.11 s**, while estimated -3 dB bandwidth was **75.020 kHz** versus **74.925 kHz** for the dense reference.

See [Adaptive AC Analysis](./adaptive-ac) for plots, the measurement procedure, and the detailed comparison.

## Development Status

| Capability | Status |
| --- | --- |
| DC characterization functions | Existing implementation |
| Transient characterization functions | Existing implementation |
| DC PSRR | Existing implementation |
| Adaptive AC frequency sweep | Demonstrated |
| AC PSRR and noise workflows | In development / validation |
| Integrated multi-test closed-loop sequence | In development |

The repository and documentation will be updated as additional routines are integrated and validated.
