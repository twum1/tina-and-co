import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

const services = [
  { icon: "bi-lightning-charge-fill", title: "Electrical Engineering", text: "Design, installation, testing and commissioning of reliable electrical systems for commercial, industrial and residential projects." },
  { icon: "bi-sun-fill", title: "Solar & Renewable Energy", text: "Solar PV, hybrid power and energy-efficiency solutions designed around your site, load profile and long-term goals." },
  { icon: "bi-buildings-fill", title: "Commercial Projects", text: "End-to-end electrical solutions for offices, hotels, retail spaces, schools, hospitals and large developments." },
  { icon: "bi-cpu-fill", title: "Automation & Controls", text: "Smart control, monitoring and automation solutions that improve reliability, visibility and operational efficiency." },
  { icon: "bi-gear-wide-connected", title: "Industrial Power", text: "Power distribution, machinery connections, protection systems and maintenance support for industrial environments." },
  { icon: "bi-shield-check", title: "Testing & Maintenance", text: "Preventive maintenance, electrical inspections, fault finding and compliance-focused testing to protect your assets." }
];

const projects = [
  { number: "01", title: "Commercial Power Upgrade", category: "Commercial • Accra", result: "Improved power reliability and distribution capacity" },
  { number: "02", title: "Solar Energy Installation", category: "Renewable Energy • Ghana", result: "Reduced dependence on grid power with a hybrid solar system" },
  { number: "03", title: "Industrial Control System", category: "Industrial • Tema", result: "Smarter monitoring and improved operational control" }
];

const team = [
  { initials: "AK", name: "Eng. [Founder Name]", role: "Founder & Lead Electrical Engineer", text: "Electrical engineering professional focused on practical, safe and commercially valuable solutions." },
  { initials: "ME", name: "Eng. [Team Member]", role: "Power Systems Engineer", text: "Specialist in electrical design, distribution systems and project delivery." },
  { initials: "PM", name: "[Team Member]", role: "Projects & Operations", text: "Coordinates clients, suppliers and project teams to keep delivery on track." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    e.currentTarget.reset();
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <span><i className="bi bi-geo-alt-fill me-2"></i>Ghana · Serving clients across Africa & beyond</span>
          <span className="d-none d-md-inline"><i className="bi bi-envelope me-2"></i>hello@electraengineering.com</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg main-nav sticky-top">
        <div className="container">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark"><i className="bi bi-lightning-charge-fill"></i></span>
            <span><strong>ELECTRA</strong><small>ENGINEERING GROUP</small></span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            {["about","services","projects","team","contact"].map(x => (
              <button key={x} onClick={() => go(x)}>{x === "about" ? "About" : x[0].toUpperCase()+x.slice(1)}</button>
            ))}
            <button className="nav-cta" onClick={() => go("quote")}>Request a Quote <i className="bi bi-arrow-up-right"></i></button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="container position-relative">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Female-led engineering. Global ambition.</div>
              <h1>Powering ideas.<br/><em>Engineering</em> possibilities.</h1>
              <p>Professional electrical engineering, energy and technical solutions delivered from Ghana to businesses across Africa and international markets.</p>
              <div className="hero-actions">
                <button className="btn-primary-custom" onClick={() => go("quote")}>Start a Project <i className="bi bi-arrow-right"></i></button>
                <button className="btn-link-custom" onClick={() => go("services")}>Explore our services <i className="bi bi-arrow-down"></i></button>
              </div>
              <div className="hero-trust">
                <div><strong>01</strong><span>Engineering-led<br/>delivery</span></div>
                <div><strong>02</strong><span>Safety & quality<br/>focused</span></div>
                <div><strong>03</strong><span>Ghana-based,<br/>globally ready</span></div>
              </div>
            </div>
          </div>
          <div className="hero-orb"><i className="bi bi-lightning-charge-fill"></i></div>
          <div className="scroll-cue"><span></span> Scroll to explore</div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <div className="section-kicker">01 / WHO WE ARE</div>
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2>Engineering expertise with a <span>different perspective.</span></h2>
                <p className="lead">We are a female-led electrical engineering team building dependable power and energy solutions for modern businesses.</p>
                <p>From project design through installation, commissioning and maintenance, we bring technical discipline, clear communication and commercial thinking to every engagement.</p>
                <p>Our ambition is simple: become a trusted engineering partner for organisations in Ghana and the wider international market.</p>
                <div className="stats">
                  <div><strong>Ghana</strong><span>Our home base</span></div>
                  <div><strong>Africa+</strong><span>Our opportunity</span></div>
                  <div><strong>24/7</strong><span>Project mindset</span></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="founder-card">
                  <div className="portrait-placeholder"><i className="bi bi-person-workspace"></i></div>
                  <div className="founder-overlay">
                    <span>FOUNDING PRINCIPLE</span>
                    <strong>Build it right.<br/>Build it to last.</strong>
                  </div>
                  <div className="corner-tag">ELECTRICAL<br/>ENGINEERING</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div><div className="section-kicker">02 / WHAT WE DO</div><h2>Solutions that keep<br/><span>business moving.</span></h2></div>
              <p>From a single electrical installation to a complex industrial project, our team combines engineering expertise with practical execution.</p>
            </div>
            <div className="service-grid">
              {services.map((s,i) => <article className="service-card" key={s.title}>
                <div className="service-number">0{i+1}</div>
                <div className="service-icon"><i className={`bi ${s.icon}`}></i></div>
                <h3>{s.title}</h3><p>{s.text}</p>
                <button onClick={() => go("quote")}>Discuss this service <i className="bi bi-arrow-up-right"></i></button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="impact-strip">
          <div className="container">
            <div><span className="impact-label">OUR PROMISE</span><strong>Safe systems. Smart engineering. Measurable value.</strong></div>
            <button onClick={() => go("quote")}>Work with us <i className="bi bi-arrow-right"></i></button>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-kicker">03 / SELECTED WORK</div>
            <div className="section-head">
              <h2>Projects built for<br/><span>real-world impact.</span></h2>
              <p>Replace these showcase projects with the team's actual portfolio, photos, locations and measurable outcomes before launch.</p>
            </div>
            <div className="project-list">
              {projects.map(p => <article className="project-card" key={p.number}>
                <div className="project-visual"><span>{p.number}</span><i className="bi bi-lightning-charge-fill"></i></div>
                <div className="project-info"><small>{p.category}</small><h3>{p.title}</h3><p>{p.result}</p><button onClick={() => go("quote")}>View project details <i className="bi bi-arrow-up-right"></i></button></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="why">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5"><div className="section-kicker">04 / WHY ELECTRA</div><h2>Technical enough for engineers. <span>Clear enough for business.</span></h2></div>
              <div className="col-lg-7">
                <div className="why-grid">
                  <div><i className="bi bi-patch-check"></i><h3>Quality-first</h3><p>We design around reliability, safety, maintainability and long-term performance.</p></div>
                  <div><i className="bi bi-globe2"></i><h3>International mindset</h3><p>Ghana-based capability with standards and communication suited to international clients.</p></div>
                  <div><i className="bi bi-people"></i><h3>Collaborative teams</h3><p>Engineers, technicians and project professionals working together around your objectives.</p></div>
                  <div><i className="bi bi-graph-up-arrow"></i><h3>Business value</h3><p>We consider cost, uptime, energy efficiency and operational impact—not just installation.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="section team">
          <div className="container">
            <div className="section-kicker">05 / OUR PEOPLE</div>
            <div className="section-head"><h2>A team built around<br/><span>technical excellence.</span></h2><p>Show clients the people behind the work. Add professional photographs, certifications and LinkedIn links here.</p></div>
            <div className="row g-4">
              {team.map(t => <div className="col-md-4" key={t.name}><article className="person-card"><div className="initials">{t.initials}</div><small>{t.role}</small><h3>{t.name}</h3><p>{t.text}</p><button><i className="bi bi-linkedin"></i> Professional profile</button></article></div>)}
            </div>
          </div>
        </section>

        <section id="quote" className="quote-section">
          <div className="container">
            <div className="quote-wrap">
              <div className="quote-intro">
                <div className="section-kicker">06 / START A CONVERSATION</div>
                <h2>Have a project<br/><span>in mind?</span></h2>
                <p>Tell us what you are building, upgrading or solving. Our team will review your requirements and get back to you.</p>
                <div className="contact-mini"><i className="bi bi-whatsapp"></i><div><small>QUICK RESPONSE</small><strong>WhatsApp our team</strong></div></div>
              </div>
              <form className="quote-form" onSubmit={submit}>
                <div className="row g-3">
                  <div className="col-md-6"><label>Your name</label><input required placeholder="Full name"/></div>
                  <div className="col-md-6"><label>Company</label><input placeholder="Company / organisation"/></div>
                  <div className="col-md-6"><label>Email</label><input required type="email" placeholder="you@company.com"/></div>
                  <div className="col-md-6"><label>Phone / WhatsApp</label><input placeholder="+233 ..."/></div>
                  <div className="col-12"><label>Project type</label><select required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}<option>Other / Consultancy</option></select></div>
                  <div className="col-12"><label>Tell us about the project</label><textarea required rows="4" placeholder="Location, scope, timeline and anything else we should know..."></textarea></div>
                  <div className="col-12 d-flex align-items-center gap-3"><button className="btn-primary-custom" type="submit">Send Enquiry <i className="bi bi-arrow-up-right"></i></button>{sent && <span className="success"><i className="bi bi-check-circle-fill"></i> Enquiry captured. Connect this form to your email/backend before launch.</span>}</div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6"><div className="section-kicker">07 / CONTACT</div><h2>Let's build something<br/><span>that works.</span></h2><p>Whether you are in Accra, Nairobi, London, Lagos or elsewhere, talk to us about your next electrical engineering or energy project.</p></div>
              <div className="col-lg-6 contact-details">
                <a href="mailto:hello@electraengineering.com"><small>EMAIL</small><strong>hello@electraengineering.com</strong><i className="bi bi-arrow-up-right"></i></a>
                <a href="https://wa.me/233000000000" target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>+233 XX XXX XXXX</strong><i className="bi bi-arrow-up-right"></i></a>
                <div><small>OFFICE</small><strong>Accra, Ghana</strong><i className="bi bi-geo-alt"></i></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container d-flex flex-column flex-md-row justify-content-between gap-3"><span>© {new Date().getFullYear()} Electra Engineering Group. All rights reserved.</span><span>Electrical Engineering · Energy · Automation</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
