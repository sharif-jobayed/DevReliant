import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="h-8 w-8 text-dev-light" />
              <span className="font-bold text-2xl">DevReliant</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-md">
              Ready to scale your engineering? Let's discuss your architecture, your code, and your future.
            </p>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-dev-light" /> <span>hello@devreliant.tech</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-dev-light" /> <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-dev-light" /> <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-800 rounded-full hover:bg-dev-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dev-light w-full" />
                <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dev-light w-full" />
              </div>
              <select className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dev-light w-full text-slate-400">
                <option>Interested in...</option>
                <option>MVP Development</option>
                <option>Legacy Modernization</option>
                <option>QA Automation</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your project..." className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dev-light w-full"></textarea>
              <button className="w-full bg-dev-primary hover:bg-dev-light hover:text-dev-darkest text-white font-bold py-3 rounded-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} DevReliant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { ContactFooter }
