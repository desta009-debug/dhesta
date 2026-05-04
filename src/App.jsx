import { useEffect, useRef, useState } from 'react'
import './App.css'
import profilePhoto from './assets/profile.jpeg'
import swapskillImage from './assets/landingpage.png'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Tailwind CSS', 'Laravel', 'Desain UI', 'Figma',
]

const projects = [
  {
    title: 'SwapSkill',
    category: 'Aplikasi Web Laravel',
    image: swapskillImage,
    description:
      'SwapSkill adalah aplikasi web pertukaran skill antar pengguna. Website ini memungkinkan pengguna membuat profil, menambahkan skill yang bisa diajarkan, memilih skill yang ingin dipelajari, serta menemukan potensi kecocokan berdasarkan kebutuhan skill masing-masing. Proyek ini memiliki fitur dashboard, manajemen profil, skill yang ditawarkan, skill yang ingin dipelajari, dan sistem pencocokan antar pengguna.',
    tech: ['Laravel', 'MySQL', 'Blade', 'CSS'],
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef(null)

  /* ── Navbar scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Scroll-reveal via IntersectionObserver ── */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) =>
      observerRef.current.observe(el)
    )
    return () => observerRef.current?.disconnect()
  }, [])

  /* ── Cursor glow ── */
  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    if (!glow) return
    const move = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Decorative layers */}
      <div className="grain" aria-hidden="true" />
      <div id="cursor-glow" aria-hidden="true" />

      <main className="portfolio">

        {/* ─── NAVBAR ─── */}
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
          <a href="#home" className="logo">Des<span>.</span></a>

          <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            {['about', 'skills', 'projects', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {id.charAt(0).toUpperCase() + id.slice(1).replace('about', 'Tentang').replace('contact', 'Kontak').replace('projects', 'Proyek').replace('skills', 'Skill')}
              </a>
            ))}
          </div>

          <button
            className={`menu-btn ${menuOpen ? 'menu-btn--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* ─── HERO ─── */}
        <section id="home" className="hero section">
          {/* Background grid lines */}
          <div className="hero-lines" aria-hidden="true">
            {[...Array(5)].map((_, i) => <div key={i} className="h-line" />)}
          </div>

          <div className="hero-content">
            <p className="eyebrow anim-in" style={{ '--d': '0s' }}>
              Mahasiswa Sistem Informasi
            </p>
            <h1 className="anim-in" style={{ '--d': '0.12s' }}>
              Hai, saya Dhesta.<br />
              <em>Front-end</em> developer<br />yang menyukai desain.
            </h1>
            <p className="hero-description anim-in" style={{ '--d': '0.28s' }}>
              Saya mahasiswa Sistem Informasi yang tertarik pada front-end
              development dan desain UI. Fokus saya adalah membuat tampilan web
              yang modern, rapi, responsif, dan nyaman digunakan.
            </p>
            <div className="hero-actions anim-in" style={{ '--d': '0.42s' }}>
              <a href="#projects" className="btn btn--primary">Lihat Proyek</a>
              <a href="#contact" className="btn btn--secondary">Hubungi Saya</a>
            </div>
          </div>

          <div className="hero-card anim-in" style={{ '--d': '0.32s' }}>
            {/* Full-width banner photo */}
            <div className="profile-banner">
              <img src={profilePhoto} alt="Foto profil Des" className="profile-image" />
              <div className="profile-banner-overlay" />
            </div>

            <div className="hero-card-body">
              <div className="status-badge">
                <span className="status-dot" />
                Available for work
              </div>

              <h2>Front-End Developer</h2>
              <p>Berorientasi pada UI, teliti pada detail, dan terus berkembang.</p>

              <div className="card-stats">
                <div><strong>1+</strong><span>Proyek</span></div>
                <div><strong>8</strong><span>Skill</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section about">
          <div className="section-header reveal">
            <p className="eyebrow">Tentang Saya</p>
            <h2>Developer yang peduli desain dan berpikir dari sudut pandang produk.</h2>
          </div>
          <div className="about-grid">
            <p className="reveal">
              Saya memiliki minat yang kuat di bidang front-end dan desain antarmuka.
              Bagi saya, website yang baik bukan hanya terlihat menarik, tetapi juga
              harus jelas, mudah dipahami, dan nyaman saat digunakan.
            </p>
            <p className="reveal" style={{ '--delay-reveal': '0.1s' }}>
              Saat membangun proyek, saya memperhatikan detail seperti layout, warna,
              tipografi, spacing, dan alur pengguna. Tujuan saya adalah terus berkembang
              menjadi developer yang mampu menjembatani desain dan teknologi.
            </p>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" className="section skills">
          <div className="section-header reveal">
            <p className="eyebrow">Skill</p>
            <h2>Tools dan teknologi yang saya gunakan.</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="skill-pill reveal"
                style={{ '--delay-reveal': `${i * 0.06}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="section projects">
          <div className="section-header reveal">
            <p className="eyebrow">Proyek</p>
            <h2>Salah satu karya pilihan yang pernah saya buat.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card reveal">
                <div className="project-image-wrap">
                  <img src={project.image} alt={`Tampilan ${project.title}`} />
                  <div className="project-overlay" />
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section contact">
          <div className="reveal">
            <p className="eyebrow">Kontak</p>
            <h2>Mari bangun sesuatu yang rapi dan bermanfaat.</h2>
            <p>
              Saya terbuka untuk kolaborasi, proyek kampus, freelance kecil,
              atau diskusi seputar front-end dan desain UI.
            </p>
          </div>
          <div className="contact-card reveal" style={{ '--delay-reveal': '0.1s' }}>
            <a href="mailto:desxz48@gmail.com">
              <span className="contact-label">Email</span>
              desxz48@gmail.com
            </a>
            <a href="https://github.com/desta009-debug" target="_blank" rel="noreferrer">
              <span className="contact-label">GitHub</span>
              desta009-debug
            </a>
            <a href="https://www.instagram.com/dsstaa_ip" target="_blank" rel="noreferrer">
              <span className="contact-label">Instagram</span>
              @dsstaa_ip
            </a>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="footer">
          <span>© 2026 Dhesta.</span>
          <span>— Front-End Developer &amp; UI Enthusiast</span>
        </footer>

      </main>
    </>
  )
}