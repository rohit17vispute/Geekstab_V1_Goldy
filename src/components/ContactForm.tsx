import { useState, FormEvent } from "react";
import { Send, CheckCircle2, ChevronRight, X, AlertCircle, Building2, HelpCircle } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [helpWith, setHelpWith] = useState("Full-Stack Web & Cloud Portals");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Required fields check: name, email, helpWith, message
    if (!name || !email || !helpWith || !message) {
      setErrorMsg("Please fill in all required fields marked with *");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);

    fetch("/api/submit-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        helpWith,
        message,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error || "Failed to submit request.");
          });
        }
        return res.json();
      })
      .then((data) => {
        setIsSubmitting(false);
        setSubmitted(true);
        setIsSimulated(!!data.simulated);
        
        // Store to localState
        const existingInquiries = JSON.parse(localStorage.getItem("geekstab_inquiries") || "[]");
        existingInquiries.push({
          id: crypto.randomUUID(),
          name,
          email,
          company,
          helpWith,
          message,
          submittedAt: new Date().toISOString(),
          simulated: !!data.simulated
        });
        localStorage.setItem("geekstab_inquiries", JSON.stringify(existingInquiries));
      })
      .catch((err) => {
        setIsSubmitting(false);
        setErrorMsg(err.message || "An error occurred while transmitting your request.");
      });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setHelpWith("Full-Stack Web & Cloud Portals");
    setMessage("");
    setSubmitted(false);
    setIsSimulated(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/90 backdrop-blur-md animate-fade-in font-sans">
      
      <div className="relative w-full max-w-2xl bg-[#0D1527] border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Block */}
        <div className="p-6 bg-brand-navy border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-cyan/10 border border-brand-cyan/20 rounded-md flex items-center justify-center">
              <Building2 className="w-4.5 h-4.5 text-[#00C2FF]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white font-sans uppercase tracking-wider">
                Let's Build Something Great Together
              </h3>
              <p className="text-[10px] text-white/50 font-mono uppercase mt-0.5 tracking-wider">
                Direct route to Geekstab Lead Architect
              </p>
            </div>
          </div>

          <button
            id="close-contact-modal"
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8">
          
          {submitted ? (
            <div className="text-center py-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                Consultation Scheduled
              </h3>
              <p className="text-xs text-white/60 font-light max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-white">{name}</span>. We've logged your request from <span className="font-semibold text-white">{company}</span>. A Senior Salesforce Architect will contact you shortly via <span className="text-brand-cyan">{email}</span>.
              </p>

              {/* Email dispatch feedback note */}
              {isSimulated ? (
                <div className="w-full max-w-md text-left p-4 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs font-mono text-amber-300">
                  <div className="flex gap-2 items-start">
                    <span className="font-bold flex-shrink-0 font-sans text-[10px]">⚠️ SIMULATED</span>
                    <span>
                      Because SMTP settings are not provided in your workspace environment, email transmission was simulated. To send real receipts, configure <strong>SMTP_HOST</strong>, <strong>SMTP_PORT</strong>, <strong>SMTP_USER</strong> & <strong>SMTP_PASS</strong> secrets in your settings panel.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-md text-left p-4 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-mono text-emerald-400">
                  <div className="flex gap-2 items-start">
                    <span className="font-bold flex-shrink-0 font-sans text-[10px]">✓ DISPATCHED</span>
                    <span>
                      A custom receipt and confirmation email was successfully sent to <strong>{email}</strong>!
                    </span>
                  </div>
                </div>
              )}

              {/* Steps timeline outline */}
              <div className="w-full max-w-md text-left p-5 bg-brand-navy border border-white/10 rounded-xl text-xs font-mono space-y-3 mb-8">
                <div className="border-b border-white/10 pb-2 mb-2">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">NEXT RECONNAISSANCE ACTIONS</span>
                </div>
                <div className="flex gap-2 text-white">
                  <span className="text-brand-cyan">[1]</span>
                  <span>Review existing Sandbox specifications or dependency graphs</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-brand-cyan">[2]</span>
                  <span className="text-white/50">Run baseline security architecture review (Least Privilege check)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-brand-cyan">[3]</span>
                  <span className="text-white/50">Schedule 45-minute interactive engineering walkthrough call</span>
                </div>
              </div>

              <button
                id="modal-success-confirm-btn"
                onClick={handleReset}
                className="px-6 py-3 border border-brand-cyan text-brand-cyan rounded-lg hover:bg-brand-cyan hover:text-brand-navy font-bold tracking-widest text-xs uppercase transition-colors duration-300 cursor-pointer"
              >
                Close Portal Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error box */}
              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-mono text-red-500 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Form Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="input-name" className="bloch font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2 font-semibold">
                    Name *
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="Abhishek Malviya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-navy/60 border border-white/10 rounded-lg text-xs text-white focus:border-brand-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="input-company" className="bloch font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2 font-semibold">
                    Company
                  </label>
                  <input
                    id="input-company"
                    type="text"
                    placeholder="DocuSign, Coinbase, etc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-navy/60 border border-white/10 rounded-lg text-xs text-white focus:border-brand-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Form Row 2: Business Email */}
              <div>
                <label htmlFor="input-email" className="bloch font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2 font-semibold">
                  Email *
                </label>
                <input
                  id="input-email"
                  type="email"
                  required
                  placeholder="abhishek@geekstab.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-navy/60 border border-white/10 rounded-lg text-xs text-white focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              {/* Form Row 3: What do you need help with? * */}
              <div>
                <label htmlFor="select-help" className="bloch font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2.5 font-semibold">
                  What do you need help with? *
                </label>
                <select
                  id="select-help"
                  required
                  value={helpWith}
                  onChange={(e) => setHelpWith(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1527] border border-white/10 rounded-lg text-xs text-white/80 focus:border-brand-cyan focus:outline-none transition-colors"
                >
                  <option value="Full-Stack Web & Cloud Portals">Full-Stack Web & Cloud Portals</option>
                  <option value="Enterprise AI & Autonomous Agents">Enterprise AI & Autonomous Agents</option>
                  <option value="Data Sync & Omnichannel Integrations">Data Sync & Omnichannel Integrations</option>
                  <option value="CRM & Cloud Solutions">CRM & Cloud Solutions</option>
                  <option value="DevOps & Automated CI/CD Pipelines">DevOps & Automated CI/CD Pipelines</option>
                  <option value="Security, Auditing & Hardening">Security, Auditing & Hardening</option>
                  <option value="Other custom software requirement">Other custom software requirement</option>
                </select>
              </div>

              {/* Form Row 4: Message * */}
              <div>
                <label htmlFor="input-message" className="bloch font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2 font-semibold">
                  Message *
                </label>
                <textarea
                  id="input-message"
                  rows={4}
                  required
                  placeholder="E.g., We are looking to develop a secure full-stack customer portal integrated with our CRM system and an interactive AI agent..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-navy/60 border border-white/10 rounded-lg text-xs text-white focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              {/* Submit footer button */}
              <button
                id="submit-consultation-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00C2FF] hover:bg-cyan-400 text-brand-navy rounded-lg font-bold tracking-widest text-xs uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-brand-navy border-t-transparent animate-spin" />
                    Connecting Architecture Sandbox...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

        {/* Footer Notes */}
        <div className="p-4 bg-brand-navy border-t border-white/10 text-[9px] text-[#00C2FF] font-mono text-center select-none flex items-center justify-center gap-3">
          <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Security-first encryption. Data is handled under compliance conditions.</span>
        </div>

      </div>

    </div>
  );
}
