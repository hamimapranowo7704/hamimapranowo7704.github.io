import { useEffect, useState } from 'react'

const stats = [
  { label: 'Projects', count: 50 },
  { label: 'Years Exp', count: 3 },
  { label: 'Tech Stack', count: 20 },
]

const skillCards = [
  {
    icon: 'fa-brain',
    title: 'Artificial Intelligence',
    description: 'Machine Learning, Deep Learning, NLP, and LLMs. Building intelligent systems that learn and adapt.',
    tags: ['Python', 'TensorFlow', 'PyTorch'],
  },
  {
    icon: 'fa-video',
    title: 'Video Coding',
    description: 'Video processing, compression, and streaming. Working with codecs and multimedia technologies.',
    tags: ['FFmpeg', 'H.264/H.265', 'WebRTC'],
  },
  {
    icon: 'fa-plug',
    title: 'MCP',
    description: 'Model Context Protocol development. Building integrations and tools for AI-powered workflows.',
    tags: ['Integrations', 'Tools', 'APIs'],
  },
  {
    icon: 'fa-eye',
    title: 'Computer Vision',
    description: 'Image processing, object detection, and recognition. Extracting insights from visual data.',
    tags: ['OpenCV', 'YOLO', 'Detection'],
  },
  {
    icon: 'fa-server',
    title: 'Backend Development',
    description: 'Robust and scalable backend systems. APIs, databases, and server-side logic.',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    icon: 'fa-cloud',
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, containerization, and cloud deployment strategies.',
    tags: ['Docker', 'AWS', 'GitHub Actions'],
  },
]

const projects = [
  {
    icon: 'fa-robot',
    title: 'AI Assistant Bot',
    description: 'An intelligent chatbot powered by LLMs with context awareness and multi-turn conversations.',
    tech: ['Python', 'LLM', 'FastAPI'],
  },
  {
    icon: 'fa-camera-retro',
    title: 'Real-time Object Detection',
    description: 'Computer vision system for detecting and tracking objects in real-time video streams.',
    tech: ['OpenCV', 'YOLO', 'Python'],
  },
  {
    icon: 'fa-film',
    title: 'Video Processing Pipeline',
    description: 'Automated video compression and streaming solution with custom codec implementations.',
    tech: ['FFmpeg', 'GStreamer', 'C++'],
  },
  {
    icon: 'fa-plug-circle-check',
    title: 'MCP Tool Integration',
    description: 'Model Context Protocol server with custom tools for enhanced AI capabilities.',
    tech: ['MCP', 'TypeScript', 'Node.js'],
  },
]

function StatNumber({ count }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    const duration = 1000
    const stepTime = 20
    const stepValue = Math.max(1, Math.ceil((count * stepTime) / duration))

    const timer = setInterval(() => {
      current += stepValue
      if (current >= count) {
        setValue(count)
        clearInterval(timer)
        return
      }
      setValue(current)
    }, stepTime)

    return () => clearInterval(timer)
  }, [count])

  return <span className="stat-number">{value}</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const onSubmit = (event) => {
    event.preventDefault()
    alert('Thanks! Your message has been sent.')
    event.currentTarget.reset()
  }

  return (
    <>
      <div className="background-animation"></div>

      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <i className="fas fa-code"></i>
            <span>DevProfile</span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">🚀 Available for Work</span>
          </div>
          <div className="hero-heading-row">
            <h1 className="hero-title">
              Hello, I&apos;m a <span className="gradient-text">Developer</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            AI Engineer • Computer Vision • Backend Developer
          </p>
          <p className="hero-description">
            Building practical AI products and scalable backend systems focused on automation, video processing, and intelligent workflows.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <h3>Current Focus</h3>
            <ul>
              <li>Building AI-powered backend services</li>
              <li>Computer vision pipelines for real-time apps</li>
              <li>MCP tools for developer productivity</li>
              <li>Video coding and media optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I&apos;m a passionate developer with a deep interest in cutting-edge technologies.
                My journey in tech has led me to explore various domains, from artificial intelligence
                to computer vision and backend development.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and create
                meaningful impact. Currently focused on building systems that leverage AI and
                computer vision to automate and enhance processes.
              </p>
              <div className="stats">
                {stats.map((item) => (
                  <div className="stat-item" key={item.label}>
                    <StatNumber count={item.count} />
                    <span className="stat-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <div className="profile-card">
                <div className="profile-icon">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="profile-info">
                  <h3>Full Stack Developer</h3>
                  <p>AI &amp; Computer Vision Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="skills-grid">
            {skillCards.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">
                  <i className={`fas ${skill.icon}`}></i>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-image">
                  <div className="project-icon">
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link"><i className="fab fa-github"></i> Code</a>
                    <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>Interested in collaborating or have a project in mind? Feel free to reach out!</p>
              <div className="contact-links">
                <div className="contact-link"><i className="fas fa-envelope"></i><span>email@example.com</span></div>
                <div className="contact-link"><i className="fab fa-github"></i><span>github.com/username</span></div>
                <div className="contact-link"><i className="fab fa-linkedin"></i><span>linkedin.com/in/username</span></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
              <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
              <div className="form-group"><textarea placeholder="Your Message" rows="5" required></textarea></div>
              <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 DevProfile. Built with <i className="fas fa-heart"></i> and <i className="fas fa-code"></i></p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
