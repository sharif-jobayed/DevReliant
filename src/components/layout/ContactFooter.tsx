import React, { useState } from 'react';
import { z } from 'zod';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, Loader2 } from 'lucide-react';

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().refine((val) => val !== "Interested in...", {
    message: "Please select an area of interest",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    interest: 'Interested in...',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: any = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form Submitted:', result.data);
    setErrors({});
    setIsSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', interest: 'Interested in...', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-brand">
              <Code2 className="footer-logo" />
              <span className="footer-brand-text">DevReliant</span>
            </div>
            <p className="footer-desc">
              Ready to scale your engineering? Let's discuss your architecture, your code, and your future.
            </p>
            <div className="footer-contacts">
              <div className="contact-item">
                <Mail className="h-5 w-5 text-dev-light" /> <span>hello@devreliant.tech</span>
              </div>
              <div className="contact-item">
                <Phone className="h-5 w-5 text-dev-light" /> <span>+1 (555) 000-0000</span>
              </div>
              <div className="contact-item">
                <MapPin className="h-5 w-5 text-dev-light" /> <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="social-links">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="social-btn">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="footer-form-title">Get in touch</h3>
            {isSuccess && (
              <div className="form-message-success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'input-error' : ''}`} 
                  />
                  {errors.name && <p className="form-error-text">{errors.name}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'input-error' : ''}`} 
                  />
                  {errors.email && <p className="form-error-text">{errors.email}</p>}
                </div>
              </div>
              <div>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`input-select ${errors.interest ? 'input-error' : ''}`}
                >
                <option>Interested in...</option>
                <option>MVP Development</option>
                <option>Legacy Modernization</option>
                <option>QA Automation</option>
              </select>
                {errors.interest && <p className="form-error-text">{errors.interest}</p>}
              </div>
              <div>
                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`input-field ${errors.message ? 'input-error' : ''}`}></textarea>
                {errors.message && <p className="form-error-text">{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-submit flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <><Loader2 className="animate-spin h-5 w-5" /> Sending...</>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} DevReliant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { ContactFooter }
