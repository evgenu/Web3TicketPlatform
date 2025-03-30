import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import contactStyles from '../styles/Contacts.module.css';

// Define a type for the form data
type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

const Contacts: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }).catch(err => console.error('Failed to copy:', err));
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('service_j6wfihv', 'template_ssgbp0v', formData as Record<string, unknown>, 'gAxHctz8kA_3amp8a')
      .then((result: { text: string }) => {
        alert('Your inquiry has been submitted!');
        console.log(result.text);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error: { text: string }) => {
        console.error('Failed to send email:', error.text);
      });
  };

  const teamMembers: TeamMember[] = [
    { name: "Valeri Mirchevski", email: "valeris_mir@abv.bg", phone: "+359889863939" },
    { name: "Rumen Kalchev", email: "hubavo-vino-ood@abv.bg", phone: "+359889862345" },
    { name: "Ivan Andonov", email: "bai-ivan@abv.bg", phone: "+359889861278" },
    { name: "Georgi Stoev", email: "bat-giorgi@abv.bg", phone: "+359889868563" },
    { name: "Evgeni Atanasov", email: "harley-maniac@abv.bg", phone: "+359889863345" }
  ];

  return (
    <div className={contactStyles["contact-container"]}>
      <h1>Got questions? Contact Us 📞✨</h1>
      <p>Have questions or need assistance? Our team is here to help!</p>

      <div className={contactStyles["team"]}>
        {teamMembers.map((member, index) => (
          <div key={index} className={contactStyles["team-member"]}>
            <img className={contactStyles["team-member-image"]} src="https://placehold.co/150x150" alt="Profile" />
            <h3>{member.name}</h3>
            <p>
              Email:
              <button className={contactStyles["copy-btn"]} onClick={() => copyToClipboard(member.email)}>
                {member.email}
              </button>
            </p>
            <p>
              Phone:
              <button className={contactStyles["copy-btn"]} onClick={() => copyToClipboard(member.phone)}>
                {member.phone}
              </button>
            </p>
          </div>
        ))}
      </div>

      {/* Inquiry Form */}
      <div className={contactStyles["inquiry-form-container"]}>
        <h2>Or ask us directly</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Describe your case..." value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;