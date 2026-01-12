import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(204,255,0,0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '50px',
                alignItems: 'center',
                width: '100%'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}
                    >
                        <span style={{
                            height: '2px',
                            width: '40px',
                            background: 'var(--primary-color)'
                        }}></span>
                        <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            textTransform: 'uppercase'
                        }}>
                            Welcome to my Portfolio!
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(4rem, 6vw, 7rem)',
                            fontWeight: 800,
                            lineHeight: 0.9,
                            marginBottom: '20px',
                            letterSpacing: '-0.04em'
                        }}
                    >
                        I'M <br />
                        <span className="gradient-text" style={{
                            WebkitTextStroke: '2px transparent'
                        }}>SIVA</span> <br />
                        KUMARAN
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            fontSize: '2rem',
                            marginBottom: '30px',
                            color: 'var(--text-secondary)',
                            fontWeight: 400
                        }}
                    >
                        Cloud & <span style={{ color: '#fff' }}>DevOps Engineer</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-primary">Projects</button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-outline">Contact</button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        style={{ display: 'flex', gap: '20px', marginTop: '50px' }}
                    >
                        {[
                            { Icon: FaGithub, url: 'https://github.com/shadyy24' },
                            { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/siva-kumaran-984984332/' },
                            { Icon: FaTwitter, url: '#' }
                        ].map(({ Icon, url }, index) => (
                            <a key={index} href={url} target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.5rem',
                                transition: 'color 0.3s'
                            }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary-color)'}
                                onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                <Icon />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        border: '2px solid var(--primary-color)',
                        borderRadius: '50%',
                        opacity: 0.2,
                        filter: 'blur(10px)'
                    }}></div>

                    <div style={{
                        width: '400px',
                        height: '500px',
                        borderRadius: '200px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '20px 20px 60px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, transparent 60%, var(--bg-color))',
                            zIndex: 2
                        }}></div>

                        <img
                            src={profilePic}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .container > div:first-child {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    h1 {
                        font-size: 3.5rem !important;
                    }
                }
            `}</style>
        </section >
    );
};

export default Hero;
