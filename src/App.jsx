import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Server,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
  HardDrive,
  Network,
  Users,
} from 'lucide-react';

const BRAND = {
  company: "Jaycob's Innovation",
  phone: '08147949915',
  whatsappNumber: '2348147949915',
  email: 'info@jaycobsinnovation.com',
  address: '7 Agudama Street, D-line, Port Harcourt, Rivers, Nigeria',
  hours: 'Mon - Sat | 8:00 AM - 6:00 PM',
  green: '#39B966',
  navy: '#25324D',
  dark: '#0F172A',
};

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'industries', label: 'Industries' },
  { key: 'process', label: 'Process' },
  { key: 'contact', label: 'Contact' },
];

const services = [
  {
    icon: Wrench,
    title: 'Laptop & Desktop Repairs',
    description:
      'Diagnostics, motherboard repairs, screen replacement, keyboard replacement, SSD upgrades, and complete system restoration.',
    points: ['Advanced diagnostics', 'Genuine parts replacement', 'Hardware & software support'],
  },
  {
    icon: Server,
    title: 'Server Installation & Maintenance',
    description:
      'Rack and stack, firmware upgrades, operating system setup, performance checks, and preventive maintenance for critical systems.',
    points: ['Rack & stack deployment', 'Windows Server setup', 'Maintenance scheduling'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise IT Support',
    description:
      'Structured support for business environments requiring regular maintenance, monitoring, troubleshooting, and uptime-focused service.',
    points: ['Onsite support', 'Routine checks', 'Business continuity focus'],
  },
  {
    icon: HardDrive,
    title: 'OEM Parts Sourcing',
    description:
      'Reliable sourcing of genuine replacement parts for Dell, Lenovo, Apple, and other supported brands.',
    points: ['Original parts support', 'Clear approval process', 'Professional replacement handling'],
  },
  {
    icon: Network,
    title: 'Storage & Infrastructure Support',
    description:
      'Support for enterprise storage environments, networked systems, and infrastructure components used in modern operations.',
    points: ['Infrastructure troubleshooting', 'Storage-related support', 'Deployment assistance'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Onsite, Carry-In & Office Service',
    description:
      'Flexible service delivery that allows customers to choose the most convenient support model for their environment.',
    points: ['Carry-in repairs', 'Office visits', 'Onsite field support'],
  },
];

const industries = [
  'Corporate Offices',
  'Industrial Facilities',
  'Schools & Training Centers',
  'Remote Professionals',
  'SMEs & Startups',
  'Hospitality & Front Office Operations',
];

const process = [
  {
    step: '01',
    title: 'Request Service',
    text: 'Contact us with your device issue, maintenance need, or enterprise support request.',
  },
  {
    step: '02',
    title: 'Diagnosis & Assessment',
    text: 'We inspect the issue, identify the fault, and provide a clear recommendation or quotation.',
  },
  {
    step: '03',
    title: 'Approval & Parts',
    text: 'Once approved, we proceed with repair, parts sourcing, maintenance action, or deployment.',
  },
  {
    step: '04',
    title: 'Repair, Test & Delivery',
    text: 'We complete the work, run checks, and return the system ready for use.',
  },
];

const faqs = [
  {
    q: 'Do you support businesses on a recurring basis?',
    a: 'Yes. We can structure ongoing support for organizations that need regular maintenance, monitoring, and responsive technical assistance.',
  },
  {
    q: 'Do you use genuine replacement parts?',
    a: 'Yes. Our workflow is built around proper diagnosis and genuine OEM parts sourcing where required and available.',
  },
  {
    q: 'Can customers bring devices to your office?',
    a: 'Yes. We support carry-in service, office visits, and onsite support depending on the job type.',
  },
  {
    q: 'What kind of systems do you handle?',
    a: 'We support laptops, desktops, servers, enterprise equipment, storage-related environments, and business-critical technology systems.',
  },
];

function PageWrapper({ children }) {
  return <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>;
}

function LogoBlock({ large = false }) {
  return (
    <div className={`flex items-center gap-3 ${large ? 'gap-5' : ''}`}>
      <img
        src="/logo.png"
        alt="Jaycob's Innovation logo"
        className={`${large ? 'h-16 w-auto md:h-20' : 'h-10 w-auto'} rounded-xl bg-white/90 p-1`}
      />
      <div>
        <p className={`${large ? 'text-2xl md:text-3xl' : 'text-sm'} font-semibold tracking-wide text-white`}>
          {BRAND.company}
        </p>
        <p className={`${large ? 'text-sm' : 'text-xs'} text-slate-300`}>
          Enterprise IT & Technology Services
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-green)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const goTo = (key) => {
    setCurrentPage(key);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--brand-navy)]/90 backdrop-blur-xl">
      <PageWrapper>
        <div className="flex h-20 items-center justify-between gap-4">
          <button onClick={() => goTo('home')} className="text-left">
            <LogoBlock />
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const active = currentPage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => goTo(item.key)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active ? 'bg-[var(--brand-green)] text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => goTo('contact')}
              className="rounded-2xl bg-[var(--brand-green)] px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Book a Service
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/10 p-3 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="space-y-2 border-t border-white/10 py-4 lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => goTo(item.key)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </PageWrapper>
    </header>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,var(--brand-navy)_0%,var(--brand-dark)_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,185,102,0.22),transparent_24%),radial-gradient(circle_at_left,rgba(37,50,77,0.32),transparent_26%)]" />
        <PageWrapper>
          <div className="relative grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/15 px-4 py-2 text-sm text-green-100">
                Reliable Technology Support for Businesses & Professionals
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional IT support, repairs, and enterprise technology services.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {BRAND.company} helps organizations and professionals keep systems running through structured maintenance,
                responsive support, server services, and genuine parts replacement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="rounded-2xl bg-[var(--brand-green)] px-6 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Book a Service
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Explore Services
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {['Certified engineers', 'Onsite & carry-in options', 'OEM parts support', 'Clear service workflow'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-[var(--brand-green)]/25 bg-[var(--brand-navy)]/70 p-6">
                    <LogoBlock large />
                    <p className="mt-5 text-sm leading-7 text-slate-200">
                      Built for organizations that require dependable systems, scheduled maintenance, fast repair handling,
                      and professional communication.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-[var(--brand-navy)]/70 p-5">
                      <p className="text-3xl font-semibold text-white">2–3 days</p>
                      <p className="mt-2 text-sm text-slate-300">Typical diagnosis turnaround</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-[var(--brand-navy)]/70 p-5">
                      <p className="text-3xl font-semibold text-white">Flexible</p>
                      <p className="mt-2 text-sm text-slate-300">Onsite, office, or carry-in support</p>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[var(--brand-navy)]/70 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-green)]">Support areas</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {['Repairs & diagnostics', 'Enterprise support', 'Server maintenance', 'OEM parts replacement'].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </PageWrapper>
      </section>

      <section className="py-20">
        <PageWrapper>
          <SectionTitle
            eyebrow="Featured Services"
            title="Solutions designed for business-critical technology"
            description="A strong company website should make your value clear immediately and direct visitors into the right next step."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)]"
                  >
                    Learn more <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </PageWrapper>
      </section>
    </>
  );
}

function AboutPage({ setCurrentPage }) {
  return (
    <section className="py-20">
      <PageWrapper>
        <SectionTitle
          eyebrow="About Us"
          title="A professional technology company focused on service quality"
          description="This page positions your business with credibility for both enterprise and everyday clients."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">Who we are</h3>
            <p className="mt-5 leading-8 text-slate-300">
              {BRAND.company} is a technology service company built to deliver dependable IT support, repair services,
              maintenance handling, enterprise response, and structured field service. We combine technical competence with a
              professional customer experience.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Our goal is to help clients reduce downtime, extend device lifespan, maintain operational stability, and access
              trusted support when technology issues occur.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Professional repair process',
                'Clear diagnosis and approval workflow',
                'Structured support communication',
                'Business-focused service delivery',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[var(--brand-navy)]/55 px-4 py-4 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/10 p-8">
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="mt-4 leading-8 text-slate-100">
                To provide reliable, responsive, and professional technology support that helps individuals and organizations work without interruption.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="mt-4 leading-8 text-slate-300">
                To become a trusted technology service brand known for quality repairs, structured enterprise support, and long-term client value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Need dependable technology support?</h3>
              <p className="mt-3 text-slate-300">We are ready to support homes, offices, and enterprise environments with professional service delivery.</p>
            </div>
            <button
              onClick={() => setCurrentPage('contact')}
              className="rounded-2xl bg-[var(--brand-green)] px-5 py-3 text-sm font-medium text-white"
            >
              Contact us today
            </button>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="py-20">
      <PageWrapper>
        <SectionTitle
          eyebrow="Services"
          title="A full services page built for client confidence"
          description="This section gives your visitors enough detail to understand what you do without overwhelming them."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <div className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-green)]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
}

function IndustriesPage() {
  return (
    <section className="py-20">
      <PageWrapper>
        <SectionTitle
          eyebrow="Industries"
          title="Built for different operating environments"
          description="A dedicated industries page helps business visitors quickly see if you understand their environment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <Users className="h-8 w-8 text-[var(--brand-green)]" />
              <h3 className="mt-5 text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We structure service delivery to suit the support, response, uptime, and communication needs of this environment.
              </p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="py-20">
      <PageWrapper>
        <SectionTitle
          eyebrow="Process"
          title="Show customers how your workflow works"
          description="This page makes the service journey transparent and increases trust before a customer reaches out."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {process.map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-medium tracking-[0.25em] text-[var(--brand-green)]">STEP {item.step}</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[var(--brand-navy)]/50 p-8">
          <h3 className="text-2xl font-semibold text-white">Typical workflow examples</h3>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              'Customer Walk-in → Register → Diagnosis → Quote → Approval → Repair → Test → Pickup',
              'Enterprise Request → Assessment → Schedule Visit → Maintenance/Repair → Report Closure',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

function ContactPage() {
  const whatsappText = encodeURIComponent(`Hello, I would like to book a service with ${BRAND.company}.`);
  const whatsappLink = `https://wa.me/${BRAND.whatsappNumber}?text=${whatsappText}`;

  return (
    <section className="py-20">
      <PageWrapper>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s talk about your service request"
          description="Visitors can contact you by phone, WhatsApp, or by using the form below."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/10 to-[var(--brand-navy)] p-8">
            <h3 className="text-2xl font-semibold text-white">Send a service request</h3>
            <form
              className="mt-6 grid gap-4 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappLink, '_blank');
              }}
            >
              <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Full Name" />
              <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Email Address" />
              <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Phone Number" />
              <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Device Type / Business Need" />
              <textarea className="min-h-[150px] rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 md:col-span-2" placeholder="Describe your request" />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--brand-green)] px-6 py-3 font-medium text-white md:col-span-2">
                Submit to WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Phone', value: BRAND.phone },
              { icon: Mail, title: 'Email', value: BRAND.email },
              { icon: MapPin, title: 'Office Address', value: BRAND.address },
              { icon: Clock, title: 'Working Hours', value: BRAND.hours },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-green)]">{item.title}</p>
                      <p className="mt-1 text-slate-200">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold text-white">Frequently asked questions</h3>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-[var(--brand-navy)]/55 p-5">
                <h4 className="text-lg font-medium text-white">{item.q}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="border-t border-white/10 bg-[var(--brand-navy)]">
      <PageWrapper>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoBlock />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Professional IT support, repairs, enterprise services, and technology maintenance for modern organizations.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-green)]">Pages</p>
            <div className="mt-4 space-y-3">
              {navItems.map((item) => (
                <button key={item.key} onClick={() => setCurrentPage(item.key)} className="block text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-green)]">Services</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Enterprise support</p>
              <p>Server maintenance</p>
              <p>Device repairs</p>
              <p>OEM parts replacement</p>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-green)]">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>{BRAND.email}</p>
              <p>{BRAND.phone}</p>
              <p>{BRAND.address}</p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </footer>
  );
}

export default function JaycobsInnovationWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'process':
        return <ProcessPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);

  return (
    <div
      className="min-h-screen bg-[var(--brand-dark)] text-white"
      style={{
        ['--brand-green']: BRAND.green,
        ['--brand-navy']: BRAND.navy,
        ['--brand-dark']: BRAND.dark,
      }}
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{pageContent}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}