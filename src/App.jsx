import './App.css'
import profilePhoto from './assets/profile.jpeg'
import swapskillImage from './assets/landingpage.png'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Laravel',
  'Desain UI',
  'Figma',
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

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Des<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Proyek</a>
          <a href="#contact">Kontak</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Mahasiswa Sistem Informasi</p>

          <h1>
            Hai, saya Des. <br />
            Seorang front-end developer yang menyukai desain.
          </h1>

          <p className="hero-description">
            Saya mahasiswa Sistem Informasi yang tertarik pada front-end
            development dan desain UI. Fokus saya adalah membuat tampilan web
            yang modern, rapi, responsif, dan nyaman digunakan.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              Lihat Proyek
            </a>
            <a href="#contact" className="btn secondary">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            <img
              src={profilePhoto}
              alt="Foto profil Des"
              className="profile-image"
            />
          </div>

          <h2>Front-End Developer</h2>
          <p>Berorientasi pada UI, teliti pada detail, dan terus berkembang.</p>

          <div className="card-stats">
            <div>
              <strong>1+</strong>
              <span>Proyek</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Skill</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-header">
          <p className="eyebrow">Tentang Saya</p>
          <h2>Developer yang peduli desain dan berpikir dari sudut pandang produk.</h2>
        </div>

        <div className="about-grid">
          <p>
            Saya memiliki minat yang kuat di bidang front-end dan desain
            antarmuka. Bagi saya, website yang baik bukan hanya terlihat
            menarik, tetapi juga harus jelas, mudah dipahami, dan nyaman saat
            digunakan.
          </p>

          <p>
            Saat membangun proyek, saya memperhatikan detail seperti layout,
            warna, tipografi, spacing, dan alur pengguna. Tujuan saya adalah
            terus berkembang menjadi developer yang mampu menjembatani desain
            dan teknologi.
          </p>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-header">
          <p className="eyebrow">Skill</p>
          <h2>Tools dan teknologi yang saya gunakan.</h2>
        </div>

        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-header">
          <p className="eyebrow">Proyek</p>
          <h2>Karya pilihan dan studi kasus.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrap">
                <img src={project.image} alt={`Tampilan ${project.title}`} />
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

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Kontak</p>
          <h2>Mari bangun sesuatu yang rapi dan bermanfaat.</h2>
          <p>
            Saya terbuka untuk kolaborasi, proyek kampus, freelance kecil, atau
            diskusi seputar front-end dan desain UI.
          </p>
        </div>

        <div className="contact-card">
          <a href="mailto:desxz48@gmail.com">desxz48@gmail.com</a>

          <a
            href="https://github.com/desta009-debug"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/dsstaa_ip"
            target="_blank"
            rel="noreferrer"
          >
            Instagram Saya
          </a>
        </div>
      </section>
    </main>
  )
}

export default App