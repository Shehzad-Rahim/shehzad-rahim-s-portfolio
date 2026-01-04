
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="heading-font text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's build <br />
              <span className="text-blue-500">something great</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Available for freelance, full-time roles, or just a technical chat. Let's connect and see how we can collaborate.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@shehzad.dev" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="font-semibold">hello@shehzad.dev</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="font-semibold">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h3 className="heading-font text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-blue-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/50 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors`} 
                      placeholder="John Doe" 
                    />
                    {errors.name && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/50 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors`} 
                    placeholder="Project Inquiry" 
                  />
                  {errors.subject && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.subject}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none`} 
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Shehzad Rahim. Built with React, Tailwind & Gemini AI.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-dribbble text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
