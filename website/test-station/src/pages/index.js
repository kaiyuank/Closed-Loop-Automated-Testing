/*
 * Project: Automated Analog and Neuromorphic Integrated Circuits Test Station
 * Original platform author: Kaiyuan (Sam) Kang
 * Capstone adaptation: Sam Kang, Alson Yau, Simon He
 * Based on: https://github.com/aimlab-wustl/RCNteststation
 *
 * Licensing Terms: This program is licensed under the Creative Commons
 * Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).
 * You are free to share and adapt this program for noncommercial purposes,
 * provided that appropriate credit is given, a link to the license is provided,
 * and any modifications are indicated. Commercial use requires a separate
 * license from the copyright holder. See the LICENSE file for the complete
 * license terms.
 *
 * NO WARRANTY: BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO
 * WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
 * EXCEPT WHEN OTHERWISE STATED IN WRITING, THE COPYRIGHT HOLDERS AND/OR
 * OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND,
 * EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE
 * ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.
 * SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY
 * SERVICING, REPAIR, OR CORRECTION. IN NO EVENT, UNLESS REQUIRED BY
 * APPLICABLE LAW OR AGREED TO IN WRITING, WILL ANY COPYRIGHT HOLDER OR ANY
 * OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM BE LIABLE TO
 * YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL, OR
 * CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE
 * PROGRAM (INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA, DATA BEING
 * RENDERED INACCURATE, LOSSES SUSTAINED BY YOU OR THIRD PARTIES, OR A
 * FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH
 * HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGES.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const capstoneFocus = [
  {
    number: '01',
    title: 'Automated Characterization',
    text: 'Reusable Python routines coordinate instruments and extract DC, AC, transient, PSRR, and noise characteristics.',
    link: '/docs/measurements/measurements-overview',
    linkText: 'Explore measurements',
  },
  {
    number: '02',
    title: 'Closed-Loop Test Planning',
    text: 'The integrated workflow under development will use earlier measurements to select appropriate bias, stimulus, and acquisition settings.',
    link: '/docs/automation/automation-overview',
    linkText: 'Explore automation',
  },
  {
    number: '03',
    title: 'Adaptive AC Analysis',
    text: 'An implemented Gaussian-process-based sweep selects measurement frequencies and estimates amplifier bandwidth using fewer samples.',
    link: '/docs/automation/adaptive-ac',
    linkText: 'View adaptive AC results',
  },
];

const highlights = [
  {value: '40', label: 'programmable DAC outputs', detail: '16-bit · 0–5 V'},
  {value: '8', label: 'differential ADC inputs', detail: '24-bit · two ADS131A04s'},
  {value: '2', label: 'current measurement paths', detail: 'switchable TIA feedback'},
  {value: '3.2', label: 'MSPS transient capture', detail: 'STM32 internal ADC'},
];

const layers = [
  {
    number: '01', title: 'Board',
    text: 'A V3 motherboard connects programmable bias, voltage and current measurement, digital I/O, and a swappable DUT adapter.',
    link: '/docs/pcb-design/pcb-overview', linkText: 'Explore the hardware',
  },
  {
    number: '02', title: 'Firmware',
    text: 'The STM32 coordinates DAC control, precision ADC acquisition, and fast transient capture over USB CDC.',
    link: '/docs/subsystems/stm32/', linkText: 'Explore the STM32',
  },
  {
    number: '03', title: 'Python',
    text: 'Python drivers and test scripts set conditions, acquire data, and save repeatable measurements and plots.',
    link: '/docs/getting-started/software-setup', linkText: 'Explore the software',
  },
];

const results = [
  {
    type: 'Adaptive AC analysis', title: 'Fewer measurements, comparable bandwidth',
    text: '38 adaptive frequency points versus 100 in a dense sweep, with a 0.127% difference in estimated -3 dB bandwidth in the documented comparison.',
    link: '/docs/automation/adaptive-ac',
  },
  {
    type: 'DAC characterization', title: 'Programmable bias, measured',
    text: 'Static accuracy, reference selection, control paths, and output filter noise across the DAC80508 chain.',
    link: '/docs/subsystems/dac/characterization',
  },
  {
    type: 'ADC characterization', title: 'Precision acquisition, measured',
    text: 'Noise and sampling-rate tradeoffs, input filtering, and buffered versus unbuffered ADC inputs.',
    link: '/docs/subsystems/adc/characterization',
  },
];

const experiments = [
  {
    name: 'Op-amp Characterization',
    detail: 'DC gain, offset, common-mode range, DC PSRR, input bias current, and transient response.',
    link: '/docs/measurements/opamp/opamp-overview',
  },
  {
    name: 'Adaptive AC Sweep',
    detail: 'Gain, phase, and -3 dB bandwidth measured using Bayesian optimization and Gaussian-process modeling.',
    link: '/docs/automation/adaptive-ac',
  },
  {
    name: 'MOSFET Platform Example',
    detail: 'Existing test-station measurement workflows for transfer curves, output curves, and body diode behavior.',
    link: '/docs/measurements/mosfet/mosfet-overview',
  },
];

export default function Home() {
  const diagram = useBaseUrl('/img/system-block-diagram.svg');

  return (
    <Layout title="Home" description="Closed-loop automated testing for analog integrated circuits with Python instrument control and adaptive AC analysis">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              ESE 4970 CAPSTONE DESIGN · WASHU · FALL 2026
            </p>

            <h1 className={styles.heroTitle}>
              Closed-Loop Automated<br />Testing
            </h1>

            <p className={styles.heroSub}>
              A Python-based platform for automated and adaptive characterization
              of analog integrated circuits. The project combines programmable
              measurement hardware, external laboratory instruments, and
              closed-loop test planning for efficient, reproducible testing.
            </p>

            <p className={styles.heroSub}>
              Sam Kang · Alson Yau · Simon He
            </p>

            <p className={styles.heroSub}>
              Built upon the{' '}
              <a
                href="https://aimlab-wustl.github.io/RCNteststation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RCN Test Station
              </a>
              {' '}developed at AIMLAB, Washington University in St. Louis.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt} id="capstone-focus">
          <div className={styles.container}>
            <div className={styles.sectionHeadingCompact}>
              <p className={styles.kicker}>Capstone objectives</p>
              <h2>Automated measurements, closed-loop decisions, adaptive testing</h2>
            </div>
            <div className={styles.layerGrid}>
              {capstoneFocus.map((item) => (
                <article className={styles.layerCard} key={item.title}>
                  <span className={styles.layerNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.link}>{item.linkText} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-label="System capabilities">
          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <div className={styles.highlight} key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="architecture">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>System architecture</p>
                <h2>One platform, two control paths</h2>
              </div>
              <p>
                NI USB-6212 and STM32H743 control paths connect to the same DUT interface.
                The diagram shows how bias, digital signals, precision acquisition, and
                transient capture fit together.
              </p>
            </div>
            <figure className={styles.diagramCard}>
              <div className={styles.diagramScroll}>
                <img src={diagram} alt="System block diagram showing host control, NI USB-6212 and STM32 paths, DAC bias, ADC and TIA measurement, and the DUT interface" />
              </div>
              <figcaption>
                <span>V3 motherboard and DUT adapter signal paths</span>
                <Link to="/docs/subsystems/subsystems-overview">Read the system overview →</Link>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingCompact}>
              <p className={styles.kicker}>How it comes together</p>
              <h2>Built around the board, firmware, and Python</h2>
            </div>
            <div className={styles.layerGrid}>
              {layers.map((item) => (
                <article className={styles.layerCard} key={item.title}>
                  <span className={styles.layerNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.link}>{item.linkText} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>Measured performance</p>
                <h2>Adaptive measurement and hardware characterization</h2>
              </div>
              <p>Adaptive AC performance is compared against a dense sweep, while board-level DAC and ADC tests document the measurement platform and its limitations.</p>
            </div>
            <div className={styles.resultGrid}>
              {results.map((item) => (
                <Link className={styles.resultCard} to={item.link} key={item.type}>
                  <span className={styles.resultType}>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className={styles.cardArrow}>Read the results →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>Experiment workflows</p>
                <h2>From device connection to measurement</h2>
              </div>
              <p>Op-amp measurements and the adaptive AC demonstration form the capstone's main examples. Existing MOSFET workflows illustrate the underlying platform. Noise and full sequential closed-loop integration remain in development.</p>
            </div>
            <div className={styles.experimentGrid}>
              {experiments.map((item) => (
                <Link className={styles.experimentCard} to={item.link} key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <span>View measurements →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.container}>
            <h2>Explore the testing framework</h2>
            <p>See the adaptive AC demonstration, measurement workflows, and underlying open-source hardware platform.</p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/docs/automation/adaptive-ac">Adaptive AC results</Link>
              <a className={styles.secondaryAction} href="https://github.com/kaiyuank/Closed-Loop-Automated-Testing">View source on GitHub</a>
            </div>
          </div>
        </section>

        <section className={styles.projectCredits} aria-labelledby="project-credits-title">
          <div className={styles.container}>
            <h2 id="project-credits-title">Project credits</h2>
            <p><strong>Capstone team:</strong> Sam Kang · Alson Yau · Simon He</p>
            <p><strong>Faculty advisor:</strong> Professor Shantanu Chakrabartty, Washington University in St. Louis.</p>
            <p>
              <strong>Underlying platform:</strong> This capstone builds upon the{' '}
              <a href="https://aimlab-wustl.github.io/RCNteststation/" target="_blank" rel="noopener noreferrer">
                RCN Test Station
              </a>
              {' '}developed at AIMLAB, with the original platform work led by Kaiyuan (Sam) Kang.
            </p>
            <p>The original RCN Test Station project was supported in part by NSF Research Coordination Network grant 2332166.</p>
            <p>
              Reused source and documentation retain the original{' '}
              <a href="https://github.com/aimlab-wustl/RCNteststation/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                CC BY-NC 4.0 license
              </a>
              {' '}and attribution notices.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
