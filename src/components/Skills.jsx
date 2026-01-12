import { motion } from 'framer-motion';
import { FaAws, FaLinux, FaDocker, FaJenkins, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGithubactions, SiGnubash } from 'react-icons/si';

const skills = [
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
    { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939' },
    { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '60px', textAlign: 'left' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1 }}>
                        TECHNICAL <span className="gradient-text">ARSENAL</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, borderColor: skill.color, boxShadow: `0 0 20px ${skill.color}40` }}
                            className="glass"
                            style={{
                                padding: '25px 15px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                cursor: 'default',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(5,5,5,0.4)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', color: skill.color, filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}>
                                {skill.icon}
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#e5e7eb' }}>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
