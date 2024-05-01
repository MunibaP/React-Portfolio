import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        setFormStatus('Form Submitted successfully!');
        setFormData({ name: "", email: "", message: "" });
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="Contact" style={{ backgroundColor: '#f8f9fa' }}>
            <Container style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
                <Row>
                    <Col md={6}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '50px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', color: '#0d6efd' }}>Get in Touch</h1>
                        <p style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '18px' }}>Please don&apos;t  hesitate to contact me using the form, I genuinely welcome your message. Should you have any specific inquiries or comments, feel free to reach me directly via email. </p>
                    </Col>

                    <Col md={6}>
                        <div style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '10px', backgroundColor: '#f8f9fa'}}>
                            <h2 style={{ marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', color: '#3c91e6', fontWeight: 'bold' }}>Contact Me</h2>
                            <Form onSubmit={onSubmit}>
                                <Form.Group>
                                    <Form.Control type="text" name="name" placeholder="Full Name" value={formData.name} onChange={onChange} style={{ marginBottom: '1rem' }} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} style={{ marginBottom: '1rem' }} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="textarea" rows={3} placeholder="Message" name="message" value={formData.message} onChange={onChange} style={{ marginBottom: '1rem' }} />
                                </Form.Group>
                                <button className="btn send-button" type="submit" 
                                    style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)', fontWeight: 'bold' }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#143578'} 
                                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                                    >{formStatus}
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
