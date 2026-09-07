/* Static export serves local reference artwork at its original dimensions. */
/* oxlint-disable next/no-img-element */
'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
const base = 'https://spade.com';
const caseLinks = [
  ['Risk & Authorization', '/use-case/risk-authorization/'],
  ['Rewards & Attribution', '/use-case/rewards-and-attribution/'],
  ['Analytics & AI', '/use-case/analytics-and-ai/'],
  ['User Experience', '/use-case/user-experience/'],
];
const industries = [
  ['Fintechs', '/industry/fintechs/'],
  ['Banks', '/industry/banks/'],
  ['AI', '/industry/ai/'],
  ['Ecosystem Partners', '/industry/ecosystem-partners/'],
];
const company = [
  ['About', '/about/'],
  ['Careers', '/careers/'],
  ['Security', '/security/'],
  ['Resources', '/resources/'],
];
export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="Spade home">
        SPADE’
      </Link>
      <nav aria-label="Main navigation">
        <Menu title="Solutions" items={[...caseLinks, ...industries]} />
        <a href={base + '/customers/'}>Customers</a>
        <Menu title="Company" items={company} />
        <a href="https://docs.spade.com/">Docs</a>
      </nav>
      <div className="header-actions">
        <a className="button subtle" href={base + '/contact/'}>
          Contact sales
        </a>
        <span className="mobile-menu">
          <Menu
            title="Menu"
            items={[...caseLinks, ...company, ['Customers', '/customers/']]}
          />
        </span>
      </div>
    </header>
  );
}
function Menu({ title, items }: { title: string; items: string[][] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="nav-trigger">
        {title} ▾
      </DropdownMenuTrigger>
      <DropdownMenuContent className="nav-popup" sideOffset={24}>
        {items.map(([name, href]) => (
          <DropdownMenuItem
            key={name}
            render={<a href={base + href} aria-label={name} />}
          >
            {name}
            <span aria-hidden>↗</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function Art({
  name,
  alt = '',
  className = '',
}: {
  name: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={'/assets/' + name}
      alt={alt}
      loading="lazy"
    />
  );
}
function More({
  href,
  children = 'Learn more',
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a className="more" href={base + href}>
      <span aria-hidden>▸ </span>
      {children}
    </a>
  );
}
const benefits = [
  {
    title: 'Reduce false declines',
    text: 'Differentiate real customers from fraud with verified merchant and location data.',
    art: 'reduce-false-declines.svg',
  },
  {
    title: 'Enrich data in real time',
    text: 'Process every transaction in under 50 milliseconds to keep pace with your authorization flow.',
    metric: '<50',
    unit: 'MILLISECONDS',
  },
  {
    title: 'Prevent fraud proactively',
    text: 'Detect anomalies instantly, before bad actors complete a transaction.',
    art: 'prevent-fraud-proactively.svg',
  },
  {
    title: 'Integrate seamlessly',
    text: 'Connect via API for zero-friction deployment across your existing risk systems.',
    metric: '{ API }',
    unit: 'ONE CONNECTION. COMPLETE CONTEXT.',
  },
];
const quotes = [
  {
    logo: 'mercury.svg',
    name: 'Mercury',
    text: 'When we can correctly identify the type of spend that’s happening at a company, we can set up rules to automatically categorize those transactions. This alone can save hours for our customers each month',
    person: 'Anish Bhayani, Engineering Manager',
    stat: '>99%',
    detail:
      'enrichment accuracy results in verified categorization for Mercury’s 200,000+ customers',
    theme: 'sand',
  },
  {
    logo: 'sardine-logo-dark.svg',
    name: 'Sardine',
    text: "We make Spade's merchant data available across our rules engine and machine learning models so our customers can use it to stop more fraud and reduce disputes. Clearer merchant context means fewer false positives on legitimate transactions and better protection against actual risk.",
    person: 'Soups Ranjan, Co-Founder and CEO',
    stat: '>99%',
    detail:
      'enrichment accuracy enables Sardine’s fraud models to provide better protection against actual risk',
    theme: 'sage',
  },
  {
    logo: 'coast-white.png',
    name: 'Coast',
    text: "We needed real-time controls that didn't create false declines. Spade's merchant and location data lets us approve legitimate fuel purchases while blocking misuse, and helps save our customers tens of thousands of dollars.",
    person: 'Daniel Simon, Co-founder and CEO',
    stat: '$30,000',
    detail:
      'in average annual savings reported by Coast customers with fleets of 10+ vehicles',
    theme: 'forest',
  },
];
const paths = [
  {
    value: 'data',
    title: (
      <>
        Real-time enrichment.
        <br />
        <em>Full control.</em>
      </>
    ),
    label: 'Using Spade Data',
    steps: [
      [
        'Capture live transaction data',
        'Your authorization stream connects directly to Spade’s API in real time.',
      ],
      [
        'Add structure and context',
        'Merchant descriptors are standardized and matched with verified metadata.',
      ],
      [
        'Return enriched insights',
        'Data is returned instantly to your risk or decisioning systems.',
      ],
      [
        'Manage logic internally',
        'Your team applies fraud rules, thresholds, or models using the enriched feed.',
      ],
    ],
  },
  {
    value: 'agent',
    title: (
      <>
        Automated risk intelligence.
        <br />
        <em>Scaled effortlessly.</em>
      </>
    ),
    label: 'Using our intelligence platform',
    steps: [
      [
        'Share your decision rules',
        'Connect your risk logic or fraud parameters to Spade’s Risk Agent.',
      ],
      [
        'Verify every transaction',
        'The Agent enriches and evaluates transactions against verified merchant and geolocation data in real time.',
      ],
      [
        'Automate decisions',
        'Authorizations are scored and routed automatically, reducing manual intervention and latency.',
      ],
      [
        'Learn and adapt',
        'The Agent continuously refines performance based on outcomes across the Spade network.',
      ],
    ],
  },
];
export function Sections() {
  const cards = useRef<HTMLDivElement>(null);
  const [quote, setQuote] = useState(0);
  const [path, setPath] = useState('data');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const q = quotes[quote];
  return (
    <>
      <section className="trust">
        <div className="wrap">
          <p>
            Enriching billions of transactions for category-defining fintechs &
            Fortune 500 banks every month
          </p>
          <div className="ticker">
            <div>
              {[0, 1].map((i) => (
                <div className="ticker-group" key={i} aria-hidden={i === 1}>
                  {[
                    'Support for vendor-locked cards',
                    'Power agentic commerce',
                    'Reduce false declines',
                    'Drive down fraud losses',
                  ].map((t) => (
                    <span key={t}>✳ {t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="logo-row wrap">
          {[
            ['fis-grey-1.png', 'FIS'],
            ['citizens-grey.png', 'Citizens'],
            ['cashapppay-grey-e1772810492676.png', 'Cash App Pay'],
            ['bilt-grey.png', 'Bilt'],
            ['mercury.svg', 'Mercury'],
          ].map(([name, alt]) => (
            <Art key={name} name={name} alt={alt} />
          ))}
        </div>
      </section>
      <section className="statement wrap">
        <h2>
          When issuer systems rely on unenriched data, every transaction becomes
          harder to trust — leading to false declines, preventable fraud, and
          challenges delivering <span>vendor-locked card experiences.</span>
        </h2>
      </section>
      <section className="benefits wrap" id="benefits">
        <div className="section-head">
          <h2>The intelligence layer beneath every authorization</h2>
          <p>
            Spade enriches transaction data in real time, adding verified
            merchant and location context so issuers can make confident
            authorization decisions — faster and with fewer errors.
          </p>
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Previous benefit"
            onClick={() =>
              cards.current?.scrollBy({ left: -420, behavior: 'smooth' })
            }
          >
            ←
          </button>
          <button
            aria-label="Next benefit"
            onClick={() =>
              cards.current?.scrollBy({ left: 420, behavior: 'smooth' })
            }
          >
            →
          </button>
        </div>
        <div
          className="benefit-track"
          ref={cards}
          aria-label="Authorization benefits"
        >
          {benefits.map((b, i) => (
            <article className={'benefit-card benefit-' + i} key={b.title}>
              <div className="benefit-art">
                {b.art ? (
                  <Art name={b.art} />
                ) : (
                  <div className="metric-art">
                    <strong>{b.metric}</strong>
                    <small>{b.unit}</small>
                  </div>
                )}
              </div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="testimonials wrap" aria-label="Customer testimonials">
        <article className={'quote cut ' + q.theme} aria-live="polite">
          <div className="quote-copy">
            <Art name={q.logo} alt={q.name} />
            <blockquote>“{q.text}”</blockquote>
            <p className="mono">{q.person}</p>
          </div>
          <div className="quote-stat">
            <p className="mono">{q.detail}</p>
            <strong>{q.stat}</strong>
          </div>
        </article>
        <div className="quote-controls">
          <div className="dots">
            {quotes.map((item, i) => (
              <button
                key={item.name}
                aria-label={'Show ' + item.name + ' testimonial'}
                aria-pressed={i === quote}
                onClick={() => setQuote(i)}
              />
            ))}
          </div>
          <div className="carousel-controls">
            <button
              aria-label="Previous testimonial"
              onClick={() => setQuote((quote + 2) % 3)}
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setQuote((quote + 1) % 3)}
            >
              →
            </button>
          </div>
        </div>
      </section>
      <section className="statement platform-intro wrap">
        <p className="eyebrow">Two paths. One intelligence platform.</p>
        <h2>
          Whether you’re enriching data directly or deploying Spade’s Agent to
          automate real-time decisioning, every authorization benefits from
          verified merchant intelligence.
        </h2>
      </section>
      <section className="workflows wrap cut" id="workflows">
        <h2>{paths.find((p) => p.value === path)?.title}</h2>
        <Tabs value={path} onValueChange={(v) => setPath(String(v))}>
          <TabsList
            className="workflow-tabs"
            aria-label="Choose authorization workflow"
          >
            {paths.map((p) => (
              <TabsTrigger key={p.value} value={p.value}>
                {p.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {paths.map((p) => (
            <TabsContent key={p.value} value={p.value}>
              <div
                className="flow-diagram"
                aria-label={
                  p.value === 'data'
                    ? 'Transaction data flows through Spade into enriched insights'
                    : 'Decision rules flow through Spade into automated decisions'
                }
              >
                <div className="flow-node">
                  <span className="mono">
                    {p.value === 'data'
                      ? 'Raw transaction'
                      : 'Your decision rules'}
                  </span>
                  <code>
                    {p.value === 'data'
                      ? 'SQ *BLUE BOTTLE #042'
                      : 'merchant.verified = true'}
                    <br />
                    {p.value === 'data'
                      ? 'POS 09/07 · 8.50 USD'
                      : 'risk.threshold < 0.05'}
                  </code>
                </div>
                <span className="flow-arrow" aria-hidden>
                  →
                </span>
                <div className="flow-brand">
                  SPADE’<small>Intelligence layer</small>
                </div>
                <span className="flow-arrow" aria-hidden>
                  →
                </span>
                <div className="flow-node enriched">
                  <span className="mono">
                    {p.value === 'data'
                      ? 'Enriched transaction'
                      : 'Authorization decision'}
                  </span>
                  <code>
                    {p.value === 'data' ? 'Blue Bottle Coffee' : '✓ Approved'}
                    <br />
                    {p.value === 'data'
                      ? 'Coffee shop · Palo Alto'
                      : 'Verified merchant · Low risk'}
                  </code>
                </div>
              </div>
              <div className="steps">
                {p.steps.map(([title, text], i) => (
                  <article key={title}>
                    <span className="step-number">0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <section className="agentic wrap">
        <div className="agentic-art">
          {[1, 2, 3].map((i) => (
            <Art key={i} name={'risk-auth-scroll-graphic-' + i + '.svg'} />
          ))}
        </div>
        <div>
          <h2>Agentic commerce starts with structured intelligence</h2>
          <p>
            Before AI agents can act, they need trusted data. Spade provides the
            structured merchant and location intelligence required for
            autonomous risk decisioning — powering the next generation of
            adaptive, agentic commerce.
          </p>
        </div>
      </section>
      <section className="industries" id="industries">
        <div className="wrap industry-grid">
          <div>
            <p className="eyebrow">Industries</p>
            <h2>Built for every layer of modern finance</h2>
          </div>
          <article className="industry-card cut">
            <p className="mono">[Fintechs]</p>
            <h3>Infrastructure for innovation</h3>
            <p>
              Power new products, rewards, and AI capabilities with a data
              foundation that scales.
            </p>
            <More href="/industry/fintechs/" />
            <Art name="padlock-cta.png" />
          </article>
          <article className="industry-card sea cut">
            <p className="mono">[Banks]</p>
            <h3>Clarity at enterprise scale</h3>
            <p>
              Unify authorization, analytics, and AI on one trusted platform.
            </p>
            <More href="/industry/banks/" />
            <Art name="coin-cta.png" />
          </article>
        </div>
      </section>
      <section className="cases wrap">
        <div className="section-head">
          <h2>Trusted by customers processing $100B+ in payments each year</h2>
          <More href="/customers/">See all case studies</More>
        </div>
        <div className="case-grid">
          <a className="case" href={base + '/customers/mercury/'}>
            <div className="case-image mercury">
              <Art name="mercury-1.svg" alt="Mercury" />
            </div>
            <p className="mono">[Fintechs]</p>
            <h3>
              How Mercury Scaled Financial Workflows with Transaction Enrichment
            </h3>
            <span className="more">▸ Read more</span>
          </a>
          <a className="case" href={base + '/customers/sardine/'}>
            <div className="case-image sardine">
              <Art name="Relay-Placeholder-Thumbnail.jpg" />
              <Art
                className="case-logo"
                name="sardine-logo-white.svg"
                alt="Sardine"
              />
            </div>
            <p className="mono">[Fintechs]</p>
            <h3>
              How Sardine Uses Transaction Intelligence to Improve Real-Time
              Fraud Decisions
            </h3>
            <span className="more">▸ Read more</span>
          </a>
        </div>
      </section>
      <section className="related wrap">
        <h2>Why stop at risk and authorization</h2>
        <div className="related-grid">
          {[
            {
              name: 'Rewards & Attribution',
              title: 'Connect every purchase to the right reward',
              image: 'rewards-illustration-2.png',
              icon: 'heart-icon.svg',
              url: '/use-case/rewards-and-attribution/',
            },
            {
              name: 'Analytics & AI',
              title: 'Feed cleaner data into every model',
              image: 'analytics-illustration.png',
              icon: 'analytics-icon.svg',
              url: '/use-case/analytics-and-ai/',
            },
            {
              name: 'User Experience',
              title: 'Turn transaction data into customer clarity',
              image: 'user-exp-illustration.png',
              icon: 'user-icon.svg',
              url: '/use-case/user-experience/',
            },
          ].map((r) => (
            <a className="related-card" href={base + r.url} key={r.name}>
              <div className="related-art">
                <Art name={r.image} />
              </div>
              <p className="eyebrow">
                <Art name={r.icon} />
                {r.name}
              </p>
              <h3>{r.title}</h3>
              <span className="more">▸ Learn more</span>
            </a>
          ))}
        </div>
      </section>
      <footer>
        <section className="closing">
          <Art name="coin.png" className="coin-one" />
          <h2>
            Add intelligence to{' '}
            <em>
              every
              <br className="desktop-break" /> layer
            </em>{' '}
            of your data
          </h2>
          <a className="button" href={base + '/contact/'}>
            Contact sales
          </a>
          <Art name="coin.png" className="coin-two" />
        </section>
        <div className="footer-grid wrap">
          {[
            ['Use Cases', caseLinks],
            ['Industries', industries],
            ['Company', company],
          ].map(([title, items]) => (
            <div key={String(title)}>
              <h3 className="mono">{String(title)}</h3>
              {(items as string[][]).map(([name, href]) => (
                <a href={base + href} key={name}>
                  {name}
                </a>
              ))}
            </div>
          ))}
          <div className="newsletter">
            <p>Sign up to our newsletter</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletter(true);
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setNewsletter(false);
                }}
              />
              <button aria-label="Subscribe to newsletter" type="submit">
                →
              </button>
            </form>
            {newsletter && (
              <output className="form-note">
                This is a demo. Visit <a href={base + '/contact/'}>Spade</a> to
                subscribe; your email has not been sent.
              </output>
            )}
            <p className="social">
              Social{' '}
              <a
                href="https://www.linkedin.com/company/spadedata/"
                aria-label="Spade on LinkedIn"
              >
                in ↗
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom wrap">
          <span>© Spade 2026</span>
          <div>
            {[
              ['Terms of Service', 'terms'],
              ['Privacy Policy', 'privacy'],
              ['MSA', 'msa'],
              ['SLA', 'sla'],
            ].map(([n, u]) => (
              <a key={u} href={base + '/' + u + '/'}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-brand wrap" aria-hidden>
          SPADE’
        </div>
      </footer>
    </>
  );
}
