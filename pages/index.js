import Head from 'next/head';
import { useEffect, useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/972545772156?text=Hi%20Lior%2C%20I%27d%20like%20a%20quote%20for%20the%20Telegram%20football%20bot';

export default function Landing() {
  const heroRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx;
    let gsapRef;
    let cleanupMouse;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap/dist/gsap'),
        import('gsap/dist/ScrollTrigger')
      ]);
      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.badge', { y: 20, opacity: 0, duration: 0.5 })
          .from('h1', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
          .from('.subtitle', { y: 24, opacity: 0, duration: 0.6 }, '-=0.3')
          .from('.cta-row a', { y: 16, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.25');

        const featureCards = gsap.utils.toArray('.feature');
        featureCards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 28,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 80%' }
          });
        });

        const stepCards = gsap.utils.toArray('.step');
        gsap.from(stepCards, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.how', start: 'top 75%' }
        });

        const socialCards = gsap.utils.toArray('.card');
        gsap.from(socialCards, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.social', start: 'top 75%' }
        });

        const qaCards = gsap.utils.toArray('.qa');
        gsap.from(qaCards, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.faq', start: 'top 80%' }
        });
      }, pageRef);

      const heroEl = heroRef.current;
      const glowEl = heroEl?.querySelector?.('.glow');
      const handleMouse = (e) => {
        const rect = heroEl.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        gsapRef.to(glowEl, { x: relX * 60, y: relY * 40, duration: 0.6, ease: 'power2.out' });
      };
      heroEl?.addEventListener('mousemove', handleMouse);
      cleanupMouse = () => heroEl?.removeEventListener('mousemove', handleMouse);

      const { annotate } = await import('rough-notation');
      const smartSpan = heroEl?.querySelector?.('.hl');
      if (smartSpan) {
        const a = annotate(smartSpan, { type: 'underline', color: '#9fc6ff', strokeWidth: 3, padding: 2, iterations: 2, multiline: false });
        a.show();
      }
    })();

    return () => {
      cleanupMouse?.();
      ctx?.revert();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Telegram Football Betting Bot — Live Predictions & Results</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Automate live predictions, mid‑game status, and daily results with visuals and inline CTAs — fully adaptable to your brand." />
        <meta property="og:title" content="Telegram Football Betting Bot — Live Predictions & Results" />
        <meta property="og:description" content="Automate live predictions, mid‑game status, and daily results with visuals and inline CTAs — fully adaptable to your brand." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="site-header">
        <div className="container">
          <div className="brand">GoalPulse</div>
          <nav className="nav">
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="cta small" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Get a Quote</a>
        </div>
      </header>

      <main className="page" ref={pageRef}>
        <section className="hero" ref={heroRef}>
          <div className="hero-inner">
            <span className="badge">All‑in‑One Automation</span>
            <h1>Your <span className="hl">Smart</span> Telegram Football Betting Assistant</h1>
            <p className="subtitle">
              Built-for-you Telegram automation. Live predictions, momentum updates around 60', and daily results — tailored to your brand, workflows, and business goals.
            </p>
            <div className="cta-row">
              <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Get a Quote on WhatsApp
              </a>
              <a className="link" href="#how-it-works">How it works →</a>
            </div>
          </div>
          <div className="glow" aria-hidden />
        </section>

        <section className="features" id="benefits">
          <h2>Benefits that move the needle</h2>
          <p className="lead">Ship consistent, on‑brand content that converts — without adding headcount.</p>
          <div className="grid">
            <Feature title="Tailored development" desc="Built to your workflows, brand, and integrations — not a one‑size‑fits‑all tool." />
            <Feature title="More clicks, less effort" desc="Action‑oriented posts with clear CTAs. Expect higher CTRs on key moments." />
            <Feature title="Real‑time momentum" desc="Timed live status around 60' drives return visits when it matters most." />
            <Feature title="Daily proof of value" desc="End‑of‑day results recap — clean, shareable, and brandable." />
            <Feature title="Zero babysitting" desc="Kickoff‑aware scheduling. No manual triggers. Just outcomes." />
            <Feature title="Frictionless conversion" desc="Inline buttons and coupons routed to the exact next action." />
            <Feature title="Built‑in controls" desc="Cooldowns, rate limits, manual overrides, and click tracking." />
          </div>
        </section>

        <section className="how" id="how-it-works">
          <h2>How it works</h2>
          <div className="steps">
            <Step n="01" title="Discovery & Requirements" desc="We map your goals, content style, channels, and integrations." />
            <Step n="02" title="Design & Implementation" desc="We design flows and visuals, then build the bot to your spec." />
            <Step n="03" title="Launch & Optimize" desc="Ship, measure, and iterate for engagement and conversions." />
          </div>
          <div className="outcomes">
            <div className="metric"><span className="num">2–3x</span><span> more in‑match clicks</span></div>
            <div className="metric"><span className="num">0</span><span> manual posts required</span></div>
          </div>
        </section>

        <section className="social" id="use-cases">
          <h2>Use cases that deliver</h2>
          <p className="lead">Short, visual, and action‑oriented content — optimized for Telegram consumption.</p>
          <div className="cards">
            <Card title="Pre‑match hooks" desc="Tease angles and odds to prime users for kickoff." />
            <Card title="In‑play nudges" desc="Capitalize on momentum shifts around the 60' window." />
            <Card title="Post‑match recap" desc="Highlight results, wins, and next actions to retain attention." />
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <h2>What teams say</h2>
          <div className="quotes">
            <blockquote className="testimonial">
              <p>“Our engagement during match hours more than doubled. The 60' updates are a conversion magnet.”</p>
              <cite>Head of Growth, Betting Media Group</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>“Delivered as a custom build to our spec. It runs on‑brand and drives consistent clicks.”</p>
              <cite>Operations Lead, Football Community</cite>
            </blockquote>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>FAQ</h2>
          <div className="qa-grid">
            <QA q="Does it require manual posting?" a="No. Everything is automated. Manual endpoints exist for special cases." />
            <QA q="Can I customize buttons and coupons?" a="Yes. Update without code changes." />
            <QA q="How live is it?" a="Near‑real‑time checks with a designed 60’ hype window." />
            <QA q="Does it support multiple channels?" a="Yes. Configure per channel with independent schedules and CTAs." />
            <QA q="What about branding?" a="All visuals and tone can be adapted to your brand guidelines." />
            <QA q="How do we get started?" a="Click the WhatsApp button below and we’ll tailor a plan to your needs." />
          </div>
          <div className="cta-row center">
            <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Get a Quote on WhatsApp
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div className="brand">GoalPulse</div>
              <div className="muted">Telegram Football Betting Bot</div>
            </div>
            <div className="footer-cta">
              <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
          <span className="copy">© {new Date().getFullYear()} GoalPulse. All rights reserved.</span>
        </footer>
      </main>

      <a className="whatsapp-fab" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a>

       <style jsx>{`
        :global(html, body, #__next) { height: 100%; background: #070a12; color: #e7ecf2; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
        .site-header { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(8px); background: rgba(7,10,18,.6); border-bottom: 1px solid rgba(255,255,255,.06); }
        .site-header .container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 20px; }
        .brand { font-weight: 900; letter-spacing: .02em; }
        .nav { display: none; gap: 18px; align-items: center; }
        .nav a { color: #bcd7ff; text-decoration: none; font-size: 14px; }
        @media (min-width: 900px) { .nav { display: flex; } }
        .cta.small { padding: 10px 14px; border-radius: 10px; background: linear-gradient(135deg, #6aa6ff, #3c86ff); color: #0b0f1a; font-weight: 800; text-decoration: none; }

        .page { display: flex; flex-direction: column; gap: 96px; }
        .hero { position: relative; padding: 140px 24px 100px; text-align: center; overflow: hidden; background: radial-gradient(1200px 600px at 50% -20%, rgba(64,142,255,.22), transparent 60%); }
        .glow { position: absolute; inset: -20%; background: radial-gradient(900px 500px at 70% 10%, rgba(255,102,153,.18), transparent 60%); pointer-events: none; will-change: transform; }
        .hero-inner { max-width: 1000px; margin: 0 auto; position: relative; z-index: 1; }
        .badge { display: inline-block; margin-bottom: 18px; padding: 7px 12px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #9fc6ff; background: rgba(64,142,255,.12); border: 1px solid rgba(64,142,255,.35); border-radius: 999px; backdrop-filter: blur(2px); }
        h1 { font-size: clamp(34px, 6.2vw, 64px); line-height: 1.08; margin: 0 0 16px; }
        .subtitle { font-size: clamp(16px, 2.4vw, 20px); opacity: .9; margin: 0 auto 30px; max-width: 820px; }
        .cta-row { display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap; }
        .cta { background: linear-gradient(135deg, #6aa6ff, #3c86ff); color: #0b0f1a; padding: 14px 22px; border-radius: 12px; font-weight: 800; text-decoration: none; box-shadow: 0 10px 30px rgba(60,134,255,.35); transform: translateZ(0); }
        .cta:hover { filter: brightness(1.06); transform: translateY(-1px); }
        .link { color: #9fc6ff; text-decoration: none; }
        .link:hover { text-decoration: underline; }
        .features, .how, .social, .faq, .testimonials { padding: 0 24px; }
        .features h2, .how h2, .social h2, .faq h2, .testimonials h2 { text-align: center; font-size: clamp(24px, 4.5vw, 36px); margin: 0 0 12px; }
        .lead { text-align: center; opacity: .85; margin: 0 auto 28px; max-width: 680px; }
        .grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 16px; max-width: 1100px; margin: 0 auto; }
        @media (min-width: 720px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .feature { background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.04)); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 20px; min-height: 150px; transition: transform .25s ease, box-shadow .25s ease; }
        .feature:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,.25); }
        .feature h3 { margin: 4px 0 8px; font-size: 18px; }
        .feature p { margin: 0; opacity: .9; }
        .steps { display: grid; gap: 16px; max-width: 1100px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .steps { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .step { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 22px; }
        .step .n { font-weight: 800; color: #9fc6ff; letter-spacing: .1em; font-size: 12px; }
        .step h3 { margin: 8px 0 8px; }
        .step p { margin: 0; opacity: .9; }
        .outcomes { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 12px; max-width: 900px; margin: 24px auto 0; }
        @media (min-width: 720px) { .outcomes { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .metric { display: flex; gap: 10px; align-items: baseline; justify-content: center; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 16px; }
        .metric .num { font-size: 22px; font-weight: 900; color: #bcd7ff; }
        .cards { display: grid; gap: 16px; max-width: 1100px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 22px; transition: transform .25s ease, box-shadow .25s ease; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,.25); }
        .card h3 { margin: 8px 0 8px; }
        .card p { margin: 0; opacity: .9; }
        .testimonials .quotes { display: grid; gap: 16px; max-width: 1000px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .testimonials .quotes { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .testimonial { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 22px; }
        .testimonial p { margin: 0 0 8px; }
        .testimonial cite { opacity: .8; font-style: normal; font-size: 14px; }
        .qa-grid { display: grid; gap: 16px; max-width: 1000px; margin: 0 auto 12px; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .qa-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .qa { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 18px; }
        .qa .q { font-weight: 700; margin-bottom: 6px; }
        .qa .a { opacity: .9; }
        .footer { text-align: center; padding: 40px 24px 60px; opacity: .9; font-size: 14px; border-top: 1px solid rgba(255,255,255,.06); }
        .footer-inner { max-width: 1100px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .muted { opacity: .7; font-size: 12px; }
        .copy { display: block; opacity: .6; margin-top: 6px; }

        .whatsapp-fab { position: fixed; right: 16px; bottom: 16px; width: 52px; height: 52px; display: grid; place-items: center; font-weight: 900; background: linear-gradient(135deg, #25D366, #1ebe57); color: #0b0f1a; border-radius: 999px; text-decoration: none; box-shadow: 0 10px 30px rgba(37,211,102,.35); z-index: 50; }
      `}</style>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{desc}</p>
      <style jsx>{`
        .feature { display: flex; flex-direction: column; gap: 6px; }
      `}</style>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="step">
      <div className="n">STEP {n}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function QA({ q, a }) {
  return (
    <div className="qa">
      <div className="q">{q}</div>
      <div className="a">{a}</div>
    </div>
  );
}

