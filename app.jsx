const { useState, useEffect, useRef } = React;

// Use Intersection Observer for animations
const useIntersectionObserver = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.fade-in-up');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => hiddenElements.forEach((el) => observer.unobserve(el));
    }, []);
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="nav-logo">PORTFOLIO</a>
            <div className="nav-links">
                <a href="#hero">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="section-container hero">
            <div className="fade-in-up">
                <div className="hero-greeting">HELLO, I'M</div>
                <h1 className="hero-title">
                    Creative Developer <br />
                    <span className="gradient-text">& AI Innovator</span>
                </h1>
                <p className="hero-subtitle">
                    자바 풀스택 950시간과 RPA+AI 자동화 심화 348시간 과정을 수료한 IT 개발자입니다. 
                    효율적인 백엔드 시스템부터 세련된 프론트엔드 UI, 그리고 혁신적인 AI 자동화까지 
                    경계 없는 문제 해결을 지향합니다.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View Portfolio</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            icon: "bx bx-code-alt",
            title: "Frontend Development",
            desc: "직관적이고 매끄러운 사용자 경험을 제공하는 모던 웹 UI를 구현합니다.",
            tags: ["HTML5", "CSS3", "JavaScript", "React", "BootStrap5"]
        },
        {
            icon: "bx bx-server",
            title: "Backend & Database",
            desc: "안정적이고 확장 가능한 서버 아키텍처와 데이터베이스를 설계합니다.",
            tags: ["Java", "JSP/Servlet", "Spring", "Thymeleaf", "MySQL", "TiDB", "Python"]
        },
        {
            icon: "bx bx-cloud",
            title: "DevOps & Cloud",
            desc: "효율적인 배포 파이프라인과 클라우드 인프라를 구축 및 운영합니다.",
            tags: ["AWS EC2", "RDS", "S3", "Render", "Git & GitHub", "DevOps"]
        },
        {
            icon: "bx bx-bot",
            title: "AI & Automation",
            desc: "반복 업무를 자동화하고 생성형 AI를 활용하여 비즈니스 가치를 창출합니다.",
            tags: ["RPA", "MLOps", "Generative AI"]
        }
    ];

    return (
        <section id="skills" className="section-container">
            <h2 className="section-title fade-in-up">My <span>Expertise</span></h2>
            <div className="skills-grid">
                {skillCategories.map((skill, index) => (
                    <div className="skill-card fade-in-up" style={{transitionDelay: `${index * 100}ms`}} key={index}>
                        <i className={`${skill.icon} skill-icon`}></i>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                        <div className="skill-tags">
                            {skill.tags.map((tag, tIndex) => (
                                <span className="tag" key={tIndex}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Projects = () => {
    const projectList = [
        {
            title: "Subway Routing App",
            desc: "최적 경로 및 실시간 열차 정보를 제공하는 지하철 길찾기 애플리케이션입니다. 직관적인 UI와 빠른 응답성을 자랑합니다.",
            image: "./images/subway.png",
            link: "https://subwaykr.onrender.com"
        },
        {
            title: "MovieFlow Streaming",
            desc: "최신 영화 정보 및 스트리밍 서비스를 제공하는 플랫폼입니다. 다크 테마 기반의 시네마틱한 사용자 경험을 제공합니다.",
            image: "./images/movie.png",
            link: "https://movieflowkr.onrender.com"
        },
        {
            title: "Recipe Master",
            desc: "다양한 요리 레시피를 검색하고 공유할 수 있는 커뮤니티 앱입니다. 사용자가 쉽게 요리 과정을 따라할 수 있도록 설계되었습니다.",
            image: "./images/recipe.png",
            link: "https://recipekr.onrender.com"
        }
    ];

    // NOTE: Image URLs are currently pointing to the locally generated artifacts.
    // For Netlify deployment, you should place these images in your repository folder
    // and use relative paths like './images/subway_portfolio.png'.

    return (
        <section id="projects" className="section-container">
            <h2 className="section-title fade-in-up">Featured <span>Work</span></h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card fade-in-up" style={{transitionDelay: `${index * 100}ms`}} key={index}>
                        <div className="project-img-container">
                            <img src={project.image} alt={project.title} className="project-img" />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                Live Demo <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Contact = () => {
    const [status, setStatus] = useState(null); // 'success', 'error', 'sending'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const formData = new FormData(form);

        // Web3Forms Public Access Key (테스트용 키 혹은 실제 키 교체 필요)
        formData.append("access_key", "08e0608d-ac1a-41d3-a8a0-63d4fc260f9e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                form.reset();
            } else {
                console.log("Error", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch error", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-container">
            <h2 className="section-title fade-in-up">Let's <span>Connect</span></h2>
            <div className="contact-container">
                <div className="contact-info fade-in-up">
                    <h3>Get In Touch</h3>
                    <p>새로운 프로젝트, 협업 제안 또는 궁금한 점이 있으시다면 언제든 연락주세요. 메일 확인 후 최대한 빠르게 답변드리겠습니다.</p>
                    
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className='bx bx-phone'></i>
                        </div>
                        <div className="contact-item-details">
                            <h4>Phone</h4>
                            <span>010-0000-0000</span>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <div className="contact-item-details">
                            <h4>Email</h4>
                            <span>your.email@example.com</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper fade-in-up" style={{transitionDelay: '200ms'}}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" className="form-control" required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Contact Info (Email or Phone)</label>
                            <input type="text" id="email" name="contact_info" className="form-control" required placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="form-control" required placeholder="Hello, I'd like to talk about..."></textarea>
                        </div>
                        
                        {/* Honeypot Spam Protection */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <i className='bx bx-send'></i>
                        </button>

                        {status === 'success' && (
                            <div className="form-status success">메시지가 성공적으로 전송되었습니다!</div>
                        )}
                        {status === 'error' && (
                            <div className="form-status error">전송에 실패했습니다. 다시 시도해주세요.</div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer>
        <p>&copy; {new Date().getFullYear()} IT Developer Portfolio. All rights reserved.</p>
    </footer>
);

const App = () => {
    useIntersectionObserver();

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
