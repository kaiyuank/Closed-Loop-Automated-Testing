/*
 * Closed-Loop Automated Testing for Analog ICs — ESE 4970 Capstone, Fall 2026
 * Capstone team: Sam Kang, Alson Yau, Simon He
 * Faculty advisor: Professor Shantanu Chakrabartty
 *
 * Based on the RCN Test Station independently developed by Kaiyuan (Sam) Kang
 * at AIMLAB, Washington University in St. Louis:
 * https://github.com/aimlab-wustl/RCNteststation
 *
 * Reused material retains its original CC BY-NC 4.0 attribution and license.
 * See the repository's LICENSE file for applicable terms and disclaimers.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const focusAreas = [
  {
    number: '01',
    title: 'Automated characterization',
    description:
      'Reusable Python routines coordinate instruments and acquire DC, AC, transient, and PSRR measurements. Noise characterization is being developed.',
    link: '/docs/measurements/measurements-overview',
    linkText: 'Measurement workflows',
  },
  {
    number: '02',
    title: 'Closed-loop test planning',
    description:
      'The integrated sequence under development uses earlier measurements to select subsequent bias, stimulus, frequency, and acquisition settings.',
    link: '/docs/automation/automation-overview',
    linkText: 'Automation overview',
  },
  {
    number: '03',
    title: 'Adaptive AC analysis',
    description:
      'An implemented Gaussian-process-based sweep selects frequencies iteratively to estimate amplifier gain, phase, and bandwidth efficiently.',
    link: '/docs/automation/adaptive-ac',
    linkText: 'Adaptive AC demonstration',
  },
];

const resultMetrics = [
  { value: '38 vs 100', label: 'adaptive vs dense frequency points' },
  { value: '60.9%', label: 'less acquisition time in this demonstration' },
  { value: '0.127%', label: 'difference in extracted −3 dB bandwidth' },
];

const platformSpecs = [
  { value: '40', label: '16-bit DAC outputs' },
  { value: '8', label: '24-bit differential ADC inputs' },
  { value: '3.2 MSPS', label: 'STM32 transient capture' },
];

export default function Home() {
  const boardPhoto = useBaseUrl('/img/teststation_back.jpg');
  const bodePlot = useBaseUrl('/img/adaptive-ac/dense_vs_adaptive_bode.png');
  const systemDiagram = useBaseUrl('/img/system-block-diagram.svg');

  return (
    <Layout
      title="Home"
      description="ESE 4970 Capstone: Closed-Loop Automated Testing for Analog ICs — automated measurements, adaptive AC analysis, and programmable hardware."
    >
      <main className={styles.main}>
        {/* The photo returns to the opening screen, alongside the project identity. */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>ESE 4970 CAPSTONE DESIGN · FALL 2026</p>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleMain}>
                    Closed-Loop Automated Testing
                  </span>
                  <span className={styles.heroTitleSub}>
                    for Analog Integrated Circuits
                  </span>
                </h1>
                <p className={styles.heroDescription}>
                  An automated measurement framework for analog integrated circuits,
                  combining programmable hardware, external instruments, and adaptive
                  test planning in a reproducible Python workflow.
                </p>
                <p className={styles.teamNames}>Sam Kang · Alson Yau · Simon He</p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} to="/docs/automation/adaptive-ac">
                    View adaptive AC results <span aria-hidden="true">→</span>
                  </Link>
                  <Link className={styles.secondaryButton} to="/docs/intro">
                    Documentation
                  </Link>
                </div>
                <p className={styles.foundationNote}>
                  Based on the{' '}
                  <a
                    href="https://aimlab-wustl.github.io/RCNteststation/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RCN Test Station
                  </a>
                  , independently developed by Kaiyuan (Sam) Kang at AIMLAB.
                </p>
              </div>

              <figure className={styles.heroFigure}>
                <div className={styles.heroImageFrame}>
                  <img
                    src={boardPhoto}
                    alt="Assembled RCN Test Station PCB used as the capstone measurement platform"
                    className={styles.heroImage}
                  />
                </div>
                <figcaption>
                  Assembled test-station hardware · Foundation for the capstone
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.section} id="capabilities">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>What the project does</p>
              <h2>From measurements to informed test decisions</h2>
              <p>
                The capstone focuses on the software and measurement process built
                around the existing hardware platform.
              </p>
            </div>
            <div className={styles.focusGrid}>
              {focusAreas.map((item) => (
                <article className={styles.focusCard} key={item.number}>
                  <span className={styles.cardNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to={item.link} className={styles.textLink}>
                    {item.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionMuted} id="adaptive-results">
          <div className={styles.container}>
            <div className={styles.resultGrid}>
              <div className={styles.resultContent}>
                <p className={styles.kicker}>Demonstrated result</p>
                <h2>Adaptive AC measurements</h2>
                <p>
                  A Gaussian-process-based sweep chooses new test frequencies
                  from earlier measurements instead of sampling a fixed dense grid.
                  In the documented amplifier example, the adaptive result closely
                  matches the dense-sweep bandwidth estimate.
                </p>
                <div className={styles.metricGrid}>
                  {resultMetrics.map((metric) => (
                    <div className={styles.metric} key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/docs/automation/adaptive-ac" className={styles.textLink}>
                  Read the comparison and methodology <span aria-hidden="true">→</span>
                </Link>
              </div>
              <figure className={styles.plotFigure}>
                <img
                  src={bodePlot}
                  alt="Dense and adaptive AC sweep comparison of gain, phase, and bandwidth"
                  loading="lazy"
                />
                <figcaption>Adaptive and dense-sweep results for the same amplifier.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.section} id="platform">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>Underlying measurement platform</p>
              <h2>Programmable hardware, unified Python control</h2>
              <p>
                The RCN Test Station provides the DAC, ADC, STM32, and DUT interfaces.
                The capstone integrates this platform with laboratory instruments
                for repeatable analog IC measurements.
              </p>
            </div>
            <div className={styles.specGrid}>
              {platformSpecs.map((spec) => (
                <div className={styles.spec} key={spec.label}>
                  <strong>{spec.value}</strong>
                  <span>{spec.label}</span>
                </div>
              ))}
            </div>
            <figure className={styles.diagramFigure}>
              <img
                src={systemDiagram}
                alt="RCN Test Station architecture including NI USB-6212, STM32H743, DAC, ADC, and DUT connections"
                loading="lazy"
              />
              <figcaption>
                Hardware architecture ·{' '}
                <Link to="/docs/subsystems/subsystems-overview">
                  Explore subsystems →
                </Link>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.container}>
            <div className={styles.closingInner}>
              <div>
                <h2>Explore the project</h2>
                <p>Measurement workflows, adaptive testing results, and hardware documentation.</p>
              </div>
              <div className={styles.closingActions}>
                <Link className={styles.primaryButton} to="/docs/measurements/measurements-overview">
                  View documentation
                </Link>
                <a
                  className={styles.secondaryButton}
                  href="https://github.com/kaiyuank/Closed-Loop-Automated-Testing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.credits}>
          <div className={styles.container}>
            <p>
              <strong>Capstone team:</strong> Sam Kang · Alson Yau · Simon He{' '}
              <span className={styles.creditDivider}>|</span>{' '}
              <strong>Advisor:</strong> Professor Shantanu Chakrabartty
            </p>
            <p>
              <strong>Original platform:</strong>{' '}
              <a
                href="https://github.com/aimlab-wustl/RCNteststation"
                target="_blank"
                rel="noopener noreferrer"
              >
                RCN Test Station
              </a>
              , independently developed by Kaiyuan (Sam) Kang at AIMLAB,
              Washington University in St. Louis. The original research platform
              was supported in part by NSF RCN grant 2332166.
            </p>
            <p>
              Reused source and documentation retain the original{' '}
              <a
                href="https://github.com/aimlab-wustl/RCNteststation/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-NC 4.0 license
              </a>
              {' '}and attribution notices.
            </p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
