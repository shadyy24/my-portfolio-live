import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaCloud, FaGlobe, FaCogs, FaRocket, FaCode, FaBell, FaServer, FaChartLine } from 'react-icons/fa';

const projects = [
    {
        title: 'Static Website on AWS',
        description: 'Hosted a highly available static website using AWS S3, CloudFront for content delivery, and Route 53 for DNS management.',
        tags: ['AWS S3', 'CloudFront', 'Route 53', 'ACM'],
        visual: 'aws',
        github: '#',
        demo: '#'
    },
    {
        title: 'CI/CD Pipeline Automation',
        description: 'Implemented a complete CI/CD pipeline using Jenkins and GitHub Actions. Automated testing and deployment of a Node.js application.',
        tags: ['Jenkins', 'GitHub Actions', 'EC2', 'Docker'],
        visual: 'cicd',
        github: '#',
        demo: '#'
    },
    {
        title: 'Cloud Infrastructure Monitoring',
        description: 'Set up comprehensive monitoring and alerting for cloud resources using AWS CloudWatch. Configured dashboards for CPU and network metrics.',
        tags: ['CloudWatch', 'SNS', 'Lambda', 'Linux'],
        visual: 'monitoring',
        github: '#',
        demo: '#'
    }
];

const ProjectVisual = ({ type }) => {
    // Simplified visuals for performance and aesthetic
    const iconStyle = { fontSize: '4rem', color: 'var(--primary-color)', opacity: 0.8 };
    const containerStyle = {
        width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(circle at center, rgba(204,255,0,0.05), transparent)',
    };

    if (type === 'aws') return <div style={containerStyle}><FaAws style={iconStyle} /></div>;
    if (type === 'cicd') return <div style={containerStyle}><FaRocket style={iconStyle} /></div>;
    if (type === 'monitoring') return <div style={containerStyle}><FaChartLine style={iconStyle} /></div>;
    return null;
};


const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: '20px' }}>
                        SELECTED <span className="gradient-text">WORKS</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(10,10,10,0.6)'
                            }}
                        >
                            <div style={{
                                height: '220px',
                                background: 'rgba(0,0,0,0.3)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <ProjectVisual type={project.visual} />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    display: 'flex',
                                    gap: '10px'
                                }}>
                                    <a href={project.github} className="btn-icon">
                                        <FaGithub />
                                    </a>
                                    <a href={project.demo} className="btn-icon">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>

                            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '10px',
                                    color: '#fff',
                                    fontWeight: 700
                                }}>{project.title}</h3>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '20px',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    flex: 1
                                }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.75rem',
                                            padding: '6px 12px',
                                            background: 'rgba(204, 255, 0, 0.05)',
                                            border: '1px solid rgba(204, 255, 0, 0.2)',
                                            borderRadius: '100px',
                                            color: 'var(--primary-color)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .btn-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    alignItems: center;
                    justifyContent: center;
                    color: #fff;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .btn-icon:hover {
                    background: var(--primary-color);
                    color: #000;
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default Projects;
