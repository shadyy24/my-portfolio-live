import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        const data = new FormData();
        data.append('access_key', '7580e393-85a9-4713-badb-6e31a9a6dcd9');
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data
            });

            const res = await response.json();

            if (res.success) {
                setResult({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResult({ type: 'error', message: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setResult({ type: 'error', message: 'Connection error. Please check your internet.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '18px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.03)',
        color: 'white',
        outline: 'none',
        fontSize: '1rem',
        transition: 'all 0.3s ease'
    };

    const focusStyle = (e) => {
        e.target.style.borderColor = 'var(--primary-color)';
        e.target.style.background = 'rgba(255,255,255,0.05)';
        e.target.style.boxShadow = '0 0 15px rgba(204, 255, 0, 0.1)';
    }

    const blurStyle = (e) => {
        e.target.style.borderColor = 'rgba(255,255,255,0.05)';
        e.target.style.background = 'rgba(255,255,255,0.03)';
        e.target.style.boxShadow = 'none';
    }

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1 }}>
                        GET IN <span className="gradient-text">TOUCH</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 700 }}>Let's Collaborate</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I'm open to freelance opportunities or full-time roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '16px',
                                    background: 'rgba(204, 255, 0, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--primary-color)', fontSize: '1.5rem',
                                    border: '1px solid rgba(204, 255, 0, 0.2)'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>sivakumaran2417@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '16px',
                                    background: 'rgba(204, 255, 0, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--primary-color)', fontSize: '1.5rem',
                                    border: '1px solid rgba(204, 255, 0, 0.2)'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>India</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                            {[
                                { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/siva-kumaran-984984332/' },
                                { Icon: FaGithub, url: 'https://github.com/shadyy24' },
                                { Icon: FaTwitter, url: '#' }
                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', color: '#fff',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-color)';
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.color = '#fff';
                                    }}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '40px', background: 'rgba(10,10,15,0.6)' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your message"
                                    style={{ ...inputStyle, resize: 'none' }}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{
                                    marginTop: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    padding: '18px'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                            </button>

                            {result && (
                                <div style={{
                                    marginTop: '15px',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    background: result.type === 'success' ? 'rgba(204, 255, 0, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    color: result.type === 'success' ? 'var(--primary-color)' : '#ef4444',
                                    textAlign: 'center',
                                    border: `1px solid ${result.type === 'success' ? 'rgba(204, 255, 0, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                                }}>
                                    {result.message}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
