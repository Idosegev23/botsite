import Head from 'next/head';
import { useEffect, useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/972545772156?text=Hi%20Lior%2C%20I%27d%20like%20a%20quote%20for%20a%20custom%20Telegram%20football%20bot';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

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
        tl.from('.badge', { y: 20, duration: 0.5 })
          .from('h1', { y: 30, duration: 0.6 }, '-=0.2')
          .from('.subtitle', { y: 24, duration: 0.6 }, '-=0.3')
          .from('.cta-row a', { y: 16, stagger: 0.08, duration: 0.5 }, '-=0.25');

        const featureCards = gsap.utils.toArray('.feature');
        featureCards.forEach((card) => {
          gsap.from(card, {
            y: 28,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 80%' }
          });
        });

        const stepCards = gsap.utils.toArray('.step');
        gsap.from(stepCards, {
          y: 28,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.how', start: 'top 75%' }
        });

        const socialCards = gsap.utils.toArray('.card');
        gsap.from(socialCards, {
          y: 28,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.social', start: 'top 75%' }
        });

        const qaCards = gsap.utils.toArray('.qa');
        gsap.from(qaCards, {
          y: 24,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.faq', start: 'top 80%' }
        });

        // Animate stacked cards on scroll
        const stackedCards = gsap.utils.toArray('.screenshot-card');
        gsap.from(stackedCards, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stacked-cards', start: 'top 75%' }
        });
      }, pageRef);

      // Removed glow element interaction since it's no longer used

      const { annotate } = await import('rough-notation');
      const heroEl = heroRef.current;
      const smartSpan = heroEl?.querySelector?.('.hl');
      if (smartSpan) {
        const a = annotate(smartSpan, { type: 'underline', color: '#9fc6ff', strokeWidth: 3, padding: 2, iterations: 2, multiline: false });
        a.show();
      }


    })();

    return () => {
      ctx?.revert();
    };
  }, []);
  return (
    <>
      <Head>
        <title>GoalPulse — Custom Telegram Football Bot: Live Predictions & Results</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Custom-built Telegram football automation. Live predictions, 60‑minute momentum updates, and daily results — tailored to your brand and workflows." />
        <meta property="og:title" content="GoalPulse — Custom Telegram Football Bot" />
        <meta property="og:description" content="Live predictions, momentum updates, and daily results — built to your spec, brand, and goals." />
        {SITE_URL ? <link rel="canonical" href={SITE_URL} /> : null}
        {SITE_URL ? <meta property="og:url" content={SITE_URL} /> : null}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GoalPulse — Custom Telegram Football Bot" />
        <meta name="twitter:description" content="Live predictions, momentum updates, and daily results — built to your spec, brand, and goals." />
        <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GoalPulse',
              url: SITE_URL || undefined,
              sameAs: [WHATSAPP_URL]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Custom Telegram Football Bot Development',
              provider: { '@type': 'Organization', name: 'GoalPulse' },
              areaServed: 'Worldwide',
              availableChannel: { '@type': 'ServiceChannel', serviceUrl: WHATSAPP_URL }
            })
          }}
        />
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
          <div className="hero-content">
            <div className="hero-text">
              <span className="badge">AI-Powered Content Creation</span>
              <h1><span className="hl">Smart</span> Football Bot</h1>
              <p className="subtitle">AI creates predictions, news & results automatically for your Telegram.</p>
            <div className="cta-row">
                <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Get a Quote on WhatsApp
              </a>
              <a className="link" href="#how-it-works">How it works →</a>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/hero.webp" 
                alt="Person using football bot on phone with AI-generated predictions and content"
                className="hero-img"
              />
            </div>
          </div>

        </section>

        <section className="features" id="benefits">
          <h2>What You Get</h2>
          <p className="lead">Automated football content that engages your audience 24/7.</p>
          <div className="grid">
            <Feature title="Live Predictions" desc="AI creates match predictions with analysis before every game." />
            <Feature title="Breaking News" desc="Instant alerts when important football news breaks." />
            <Feature title="Match Updates" desc="Real-time commentary and key moments during games." />
            <Feature title="Daily Summaries" desc="End-of-day recaps with results and highlights." />
          </div>
          <div className="demo-preview">
            <div className="stacked-cards">
              <div className="card-stack">
                <div className="screenshot-card card-3">
                  <img src="/scr3.webp" alt="Match Updates - Live commentary and key moments during games" />
                </div>
                <div className="screenshot-card card-2">
                  <img src="/scr2.webp" alt="Breaking News Alerts - Real-time football news updates" />
                </div>
                <div className="screenshot-card card-1">
                  <img src="/scr1.webp" alt="AI Football Predictions - Live match predictions with detailed analysis" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <h2>Simple, Transparent Pricing</h2>
          <div className="pricing-card">
            <div className="price-header">
              <h3>AI Content Engine</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">199</span>
                <span className="period">/month</span>
              </div>
              <div className="no-setup">No Setup Fees • Cancel Anytime</div>
            </div>
            <div className="features-list">
              <div className="feature-item">✓ Unlimited content</div>
              <div className="feature-item">✓ Live predictions</div>
              <div className="feature-item">✓ Breaking news</div>
              <div className="feature-item">✓ Match summaries</div>
              <div className="feature-item">✓ Custom branding</div>
              <div className="feature-item">✓ 24/7 support</div>
            </div>
            <div className="cta-row">
              <a className="cta large" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Start Your AI Bot Today
              </a>
            </div>
          </div>
        </section>

        <section className="how" id="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <Step n="01" title="Setup" desc="We configure the AI for your brand and audience." />
            <Step n="02" title="Generate" desc="AI creates content automatically 24/7." />
            <Step n="03" title="Engage" desc="Your audience gets fresh content daily." />
          </div>

        </section>

        <section className="social" id="use-cases">
          <h2>AI Content Types We Generate</h2>
          <p className="lead">From breaking news to promotional campaigns — our AI creates every type of football content your audience craves.</p>
          <div className="cards">
            <Card title="🔥 Breaking News" desc="AI scans sources and generates instant breaking news alerts with engaging headlines and context." />
            <Card title="🎯 Live Predictions" desc="AI analyzes data to create compelling pre-match predictions with reasoning and confidence levels." />
            <Card title="📊 Match Analysis" desc="Deep AI-powered analysis of tactics, player performance, and key moments during and after matches." />
            <Card title="📈 Live Updates" desc="Real-time AI commentary on match events, momentum shifts, and critical moments as they happen." />
            <Card title="🏆 Results & Summaries" desc="AI-generated match results with highlights, statistics, and impact on league standings." />
            <Card title="💰 Promotional Content" desc="Smart AI campaigns for betting offers, exclusive deals, and time-sensitive promotions." />
          </div>

        </section>

        <section className="testimonials" id="testimonials">
          <h2>What AI-Powered Teams Say</h2>
          <div className="quotes">
            <blockquote className="testimonial">
              <p>"The AI content quality is incredible. Our engagement tripled and we're posting 10x more content with zero extra work."</p>
              <cite>Head of Growth, Betting Media Group</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"AI generates content that sounds exactly like our brand voice. Followers can't tell it's automated — that's the magic."</p>
              <cite>Operations Lead, Football Community</cite>
            </blockquote>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>FAQ</h2>
          <div className="qa-grid">
            <QA q="How does the AI create content?" a="Our AI analyzes live data, news sources, and your brand guidelines to generate human-like content automatically." />
            <QA q="Can I customize the AI's writing style?" a="Yes. We train the AI on your specific tone, terminology, and brand voice during setup." />
            <QA q="What types of content does AI generate?" a="News, predictions, analysis, live updates, match results, daily summaries, and promotional campaigns." />
            <QA q="Is there a setup fee?" a="No setup fees. Just $199/month for unlimited AI-generated content with cancel anytime flexibility." />
            <QA q="How fast does the AI create content?" a="Real-time generation. Breaking news and live updates are posted within seconds of events happening." />
            <QA q="Can the AI handle multiple channels?" a="Yes. One AI system can power content across multiple Telegram channels with different styles." />
          </div>
          <div className="cta-row center">
            <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Start Your AI Content Engine
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

      <a className="whatsapp-fab" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">Chat</a>

      <style jsx>{`
        :global(html, body, #__next) { 
          height: 100%; 
          background: #0a0e1a; 
          color: #ffffff; 
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; 
          font-size: 16px;
          line-height: 1.6;
        }
        :global(*, *::before, *::after) { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }
        :global(p, span, div) { 
          color: #ffffff; 
        }
        .site-header { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(12px); background: rgba(7,10,18,.8); border-bottom: 1px solid rgba(255,255,255,.1); box-shadow: 0 4px 20px rgba(0,0,0,.3); }
        .site-header .container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 20px; }
        .brand { font-weight: 900; letter-spacing: .02em; background: linear-gradient(135deg, #00d4ff, #ff6b6b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .nav { display: none; gap: 18px; align-items: center; }
        .nav a { color: #bcd7ff; text-decoration: none; font-size: 14px; transition: color .2s; }
        .nav a:hover { color: #00d4ff; }
        @media (min-width: 900px) { .nav { display: flex; } }
        .cta.small { padding: 10px 14px; border-radius: 10px; background: linear-gradient(135deg, #00d4ff, #3c86ff); color: #0b0f1a; font-weight: 800; text-decoration: none; transition: all .2s; }
        .cta.small:hover { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(0,212,255,.4); }

        .page { display: flex; flex-direction: column; gap: 40px; }
        @media (min-width: 768px) { .page { gap: 120px; } }
        .hero { 
          position: relative; 
          padding: 80px 16px 60px; 
          overflow: hidden; 
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%);
        }
        @media (min-width: 768px) { 
          .hero { 
            padding: 120px 24px; 
            background: radial-gradient(1400px 700px at 50% -20%, rgba(0,212,255,.15), transparent 60%), radial-gradient(800px 400px at 80% 60%, rgba(255,107,107,.1), transparent 70%);
          } 
        }
        .hero-content { 
          max-width: 1200px; 
          margin: 0 auto; 
          display: flex; 
          flex-direction: column; 
          gap: 24px; 
          align-items: center; 
          position: relative; 
          z-index: 10; 
        }
        @media (min-width: 768px) { 
          .hero-content { 
            flex-direction: row; 
            gap: 50px; 
            align-items: center; 
          } 
        }
        .hero-text { 
          text-align: center; 
          flex: 1; 
          order: 2;
        }
        @media (min-width: 768px) { 
          .hero-text { 
            text-align: left; 
            order: 1;
          } 
        }
        .hero-image { 
          flex: 0 0 auto; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          order: 1;
        }
        @media (min-width: 768px) { 
          .hero-image { 
            order: 2;
          } 
        }
        .hero-img { 
          width: 200px; 
          height: 160px; 
          border-radius: 12px; 
          position: relative; 
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,212,255,.3);
          object-fit: cover;
          object-position: center;
        }
        @media (min-width: 768px) { 
          .hero-img { 
            width: 350px; 
            height: 280px; 
          } 
        }





        .badge { display: inline-block; margin-bottom: 18px; padding: 8px 16px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #00d4ff; background: linear-gradient(135deg, rgba(0,212,255,.15), rgba(60,134,255,.15)); border: 1px solid rgba(0,212,255,.4); border-radius: 999px; backdrop-filter: blur(4px); }
        h1 { 
          font-size: clamp(32px, 8vw, 72px); 
          line-height: 1.2; 
          margin: 0 0 20px; 
          background: linear-gradient(135deg, #ffffff, #00d4ff); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text; 
        }
        .subtitle { 
          font-size: clamp(18px, 4vw, 24px); 
          color: #ffffff; 
          margin: 0 auto 30px; 
          max-width: 100%; 
          line-height: 1.4; 
        }
        @media (min-width: 768px) { 
          .subtitle { 
            margin: 0 0 35px; 
            max-width: 600px;
          } 
        }

        .cta-row { 
          display: flex; 
          gap: 16px; 
          justify-content: center; 
          align-items: center; 
          flex-wrap: wrap; 
        }
        @media (min-width: 768px) { 
          .cta-row { 
            justify-content: flex-start; 
            gap: 20px;
          } 
        }
        .cta { background: linear-gradient(135deg, #00d4ff, #3c86ff, #ff6b6b); color: #0b0f1a; padding: 16px 28px; border-radius: 14px; font-weight: 900; text-decoration: none; box-shadow: 0 12px 35px rgba(0,212,255,.4); transform: translateZ(0); transition: all .3s; position: relative; overflow: hidden; }
        .cta::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent); transition: left .6s; }
        .cta:hover::before { left: 100%; }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 16px 45px rgba(0,212,255,.5); }
        .cta.large { padding: 18px 32px; font-size: 18px; }
        .link { color: #00d4ff; text-decoration: none; transition: all .2s; }
        .link:hover { text-decoration: underline; color: #ffffff; }
        
        .image-placeholder { 
          background: linear-gradient(135deg, rgba(0,212,255,.15), rgba(60,134,255,.1)); 
          border: 2px dashed rgba(0,212,255,.4); 
          border-radius: 12px; 
          padding: 40px 20px; 
          text-align: center; 
          color: #00d4ff; 
          font-weight: 600; 
          min-height: 120px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: all .3s;
        }
        .image-placeholder:hover { 
          border-color: rgba(0,212,255,.7); 
          background: linear-gradient(135deg, rgba(0,212,255,.25), rgba(60,134,255,.2)); 
          transform: translateY(-2px);
        }
        
        .arrow { 
          font-size: 24px; 
          color: #00d4ff; 
          font-weight: 900; 
          animation: pulse 2s infinite;
          text-shadow: 0 0 10px rgba(0,212,255,.5);
        }
        .arrow.animated { animation: bounce 1.5s infinite; }
        .arrow.pulse { animation: glow 1.8s infinite; }
        
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes bounce { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
        @keyframes glow { 0%, 100% { text-shadow: 0 0 10px rgba(0,212,255,.5); } 50% { text-shadow: 0 0 20px rgba(0,212,255,1), 0 0 30px rgba(255,107,107,.5); } }
        
        .features, .how, .social, .faq, .testimonials, .pricing { padding: 0 16px; }
        @media (min-width: 768px) { .features, .how, .social, .faq, .testimonials, .pricing { padding: 0 24px; } }
        .features h2, .how h2, .social h2, .faq h2, .testimonials h2, .pricing h2 { 
          text-align: center; 
          font-size: clamp(24px, 6vw, 42px); 
          margin: 0 0 12px; 
          background: linear-gradient(135deg, #ffffff, #00d4ff); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text; 
          line-height: 1.2;
        }
        .lead { 
          text-align: center; 
          color: #ffffff; 
          margin: 0 auto 24px; 
          max-width: 100%; 
          font-size: clamp(16px, 4vw, 20px); 
          line-height: 1.5; 
        }
        @media (min-width: 768px) { 
          .lead { 
            margin: 0 auto 32px; 
            max-width: 800px; 
            font-size: 18px;
          } 
        }
        .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; max-width: 1200px; margin: 0 auto; }
        @media (min-width: 768px) { .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; } }
        .feature { 
          background: linear-gradient(135deg, rgba(0,212,255,.08), rgba(60,134,255,.06)); 
          border: 1px solid rgba(0,212,255,.2); 
          border-radius: 16px; 
          padding: 24px; 
          min-height: 160px; 
          transition: all .3s ease; 
          position: relative;
          overflow: hidden;
        }
        .feature::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #ff6b6b);
        }
        .feature:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 20px 40px rgba(0,212,255,.2); 
          border-color: rgba(0,212,255,.4);
          background: linear-gradient(135deg, rgba(0,212,255,.12), rgba(60,134,255,.1)); 
        }
        .feature h3 { margin: 4px 0 12px; font-size: 19px; color: #00d4ff; font-weight: 700; }
        .feature p { margin: 0; color: #ffffff; line-height: 1.5; }
        
        .demo-preview { 
          margin: 40px auto 0; 
          max-width: 900px; 
          text-align: center;
        }
        .demo-img { 
          width: 100%; 
          height: 250px; 
          background: linear-gradient(135deg, rgba(0,212,255,.25), rgba(60,134,255,.2), rgba(0,0,0,.3)); 
          border: 3px dashed rgba(0,212,255,.8); 
          border-radius: 16px; 
          position: relative; 
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 900;
          text-align: center;
          font-size: 20px;
          line-height: 1.2;
          box-shadow: 0 12px 35px rgba(0,212,255,.3);
          backdrop-filter: blur(10px);
        }

        .demo-img span {
          position: relative;
          z-index: 5;
          text-shadow: 0 2px 12px rgba(0,0,0,.8), 0 0 20px rgba(0,212,255,.5);
          background: rgba(0,0,0,.6);
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid rgba(0,212,255,.5);
          backdrop-filter: blur(4px);
          color: #ffffff !important;
          font-weight: 900 !important;
        }
        @media (min-width: 768px) { .demo-img { height: 300px; } }
        
        /* Fan Cards Styles */
        .stacked-cards { 
          width: 100%; 
          max-width: 600px; 
          margin: 0 auto; 
          position: relative; 
        }
        
        .card-stack { 
          position: relative; 
          width: 100%; 
          height: 350px; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
        }
        
        .screenshot-card { 
          position: absolute; 
          width: 220px; 
          height: 300px; 
          border-radius: 16px; 
          overflow: hidden; 
          box-shadow: 0 15px 35px rgba(0,212,255,.3); 
          transition: all 0.4s ease; 
          transform-origin: bottom center; 
        }
        
        .screenshot-card img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          object-position: center; 
        }
        
        .card-1 { 
          z-index: 3; 
          transform: rotate(15deg) translateX(80px); 
          box-shadow: 0 20px 40px rgba(0,212,255,.4); 
        }
        
        .card-2 { 
          z-index: 2; 
          transform: rotate(0deg); 
          box-shadow: 0 18px 36px rgba(60,134,255,.35); 
        }
        
        .card-3 { 
          z-index: 1; 
          transform: rotate(-15deg) translateX(-80px); 
          box-shadow: 0 15px 30px rgba(255,107,107,.3); 
        }
        
        .card-stack:hover .card-1 { 
          transform: rotate(20deg) translateX(100px) scale(1.05); 
        }
        
        .card-stack:hover .card-2 { 
          transform: rotate(0deg) scale(1.08); 
        }
        
        .card-stack:hover .card-3 { 
          transform: rotate(-20deg) translateX(-100px) scale(1.05); 
        }
        
        @media (min-width: 768px) { 
          .card-stack { height: 400px; } 
          .screenshot-card { width: 260px; height: 340px; } 
          .card-1 { transform: rotate(18deg) translateX(120px); }
          .card-3 { transform: rotate(-18deg) translateX(-120px); }
          .card-stack:hover .card-1 { transform: rotate(25deg) translateX(140px) scale(1.05); }
          .card-stack:hover .card-3 { transform: rotate(-25deg) translateX(-140px) scale(1.05); }
        }
        
        
        .pricing { background: linear-gradient(135deg, rgba(0,212,255,.05), rgba(255,107,107,.05)); border-radius: 20px; margin: 0 24px; }
        .pricing-card { 
          max-width: 500px; 
          margin: 0 auto; 
          background: linear-gradient(135deg, rgba(0,212,255,.1), rgba(60,134,255,.08)); 
          border: 2px solid rgba(0,212,255,.3); 
          border-radius: 20px; 
          padding: 40px; 
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #3c86ff, #ff6b6b);
        }
        .price-header h3 { font-size: 24px; margin: 0 0 16px; color: #00d4ff; }
        .price { display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: 16px 0; }
        .price .currency { font-size: 24px; color: #00d4ff; }
        .price .amount { font-size: 48px; font-weight: 900; color: #ffffff; }
        .price .period { font-size: 18px; color: #bcd7ff; }
        .no-setup { color: #00d4ff; font-weight: 600; margin: 8px 0 24px; }
        .features-list { text-align: left; margin: 24px 0; }
        .feature-item { padding: 8px 0; color: #ffffff !important; display: flex; align-items: center; gap: 8px; }
        .feature-item::before { content: '✓'; color: #00d4ff; font-weight: bold; }
        .steps { display: grid; gap: 20px; max-width: 1200px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .steps { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .step { 
          background: linear-gradient(135deg, rgba(0,212,255,.08), rgba(60,134,255,.06)); 
          border: 1px solid rgba(0,212,255,.2); 
          border-radius: 16px; 
          padding: 28px; 
          transition: all .3s ease;
          position: relative;
        }
        .step:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,212,255,.15);
          border-color: rgba(0,212,255,.4);
        }
        .step .n { font-weight: 900; color: #00d4ff; letter-spacing: .1em; font-size: 14px; }
        .step h3 { margin: 12px 0 8px; color: #ffffff; font-size: 20px; }
        .step p { margin: 0; color: #ffffff; line-height: 1.5; }
        .outcomes { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 12px; max-width: 900px; margin: 24px auto 0; }
        @media (min-width: 720px) { .outcomes { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .metric { display: flex; gap: 10px; align-items: baseline; justify-content: center; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 16px; }
        .metric .num { font-size: 22px; font-weight: 900; color: #bcd7ff; }
        .cards { display: grid; gap: 20px; max-width: 1200px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .card { 
          background: linear-gradient(135deg, rgba(0,212,255,.08), rgba(60,134,255,.06)); 
          border: 1px solid rgba(0,212,255,.2); 
          border-radius: 16px; 
          padding: 26px; 
          transition: all .3s ease; 
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #ff6b6b);
        }
        .card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 20px 40px rgba(0,212,255,.2); 
          border-color: rgba(0,212,255,.4);
          background: linear-gradient(135deg, rgba(0,212,255,.12), rgba(60,134,255,.1)); 
        }
        .card h3 { margin: 8px 0 12px; color: #ffffff; font-size: 18px; font-weight: 700; }
        .card p { margin: 0; color: #ffffff; line-height: 1.5; }
        .testimonials .quotes { display: grid; gap: 20px; max-width: 1000px; margin: 0 auto; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 900px) { .testimonials .quotes { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .testimonial { 
          background: linear-gradient(135deg, rgba(0,212,255,.08), rgba(60,134,255,.06)); 
          border: 1px solid rgba(0,212,255,.2); 
          border-radius: 16px; 
          padding: 28px; 
          transition: all .3s ease;
          position: relative;
        }
        .testimonial:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,212,255,.15);
          border-color: rgba(0,212,255,.4);
        }
        .testimonial p { margin: 0 0 12px; font-size: 16px; line-height: 1.6; color: #ffffff !important; }
        .testimonial cite { font-style: normal; font-size: 14px; color: #00d4ff; font-weight: 600; }
        
        .qa-grid { display: grid; gap: 20px; max-width: 1200px; margin: 0 auto 20px; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .qa-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .qa-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .qa { 
          background: linear-gradient(135deg, rgba(0,212,255,.08), rgba(60,134,255,.06)); 
          border: 1px solid rgba(0,212,255,.2); 
          border-radius: 16px; 
          padding: 24px; 
          transition: all .3s ease;
        }
        .qa:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,212,255,.15);
          border-color: rgba(0,212,255,.4);
        }
        .qa .q { font-weight: 700; margin-bottom: 8px; color: #00d4ff; }
        .qa .a { color: #ffffff; line-height: 1.5; }
        
        .footer { 
          text-align: center; 
          padding: 60px 24px 80px; 
          font-size: 14px; 
          border-top: 1px solid rgba(0,212,255,.2); 
          background: linear-gradient(135deg, rgba(0,212,255,.03), rgba(60,134,255,.02));
        }
        .footer-inner { max-width: 1100px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .muted { font-size: 12px; color: #bcd7ff; }
        .copy { display: block; margin-top: 8px; color: #8bb3e8; }

        .whatsapp-fab { 
          position: fixed; 
          right: 20px; 
          bottom: 20px; 
          width: 60px; 
          height: 60px; 
          display: grid; 
          place-items: center; 
          font-weight: 900; 
          background: linear-gradient(135deg, #25D366, #1ebe57); 
          color: #ffffff; 
          border-radius: 999px; 
          text-decoration: none; 
          box-shadow: 0 12px 35px rgba(37,211,102,.4); 
          z-index: 50; 
          transition: all .3s ease;
          animation: float 3s ease-in-out infinite;
        }
        .whatsapp-fab:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 16px 45px rgba(37,211,102,.5);
        }
        
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
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

