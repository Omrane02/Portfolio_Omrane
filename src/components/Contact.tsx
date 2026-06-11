import React, { useState, useEffect } from "react";
import { Mail, MapPin, Send, CheckCircle, Share2, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<any[]>([]);
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState<any | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formspreeId = (import.meta as any).env?.VITE_FORMSPREE_FORM_ID || "xjgdeaqd";

  // Load previously submitted feedback messages from localStorage for neat persistency
  useEffect(() => {
    const saved = localStorage.getItem("omrane_messages");
    if (saved) {
      try {
        setSavedMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setSubmitError(null);
    setSuccess(false);

    const newMessage = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString()
    };

    if (formspreeId && formspreeId.trim() !== "") {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId.trim()}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "Nouveau message de contact - Portfolio",
            message: formData.message
          })
        });

        if (response.ok) {
          const updated = [newMessage, ...savedMessages];
          setSavedMessages(updated);
          localStorage.setItem("omrane_messages", JSON.stringify(updated));
          
          setLastSubmittedMsg(newMessage);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error("Formspree response error");
        }
      } catch (err: any) {
        console.error(err);
        setSubmitError("Une erreur est survenue lors de l'envoi via le service automatisé. Veuillez utiliser l'envoi par Email Direct ci-dessous.");
        // Save locally anyway as backup
        const updated = [newMessage, ...savedMessages];
        setSavedMessages(updated);
        localStorage.setItem("omrane_messages", JSON.stringify(updated));
        setLastSubmittedMsg(newMessage);
      } finally {
        setLoading(false);
      }
    } else {
      // Local Simulation Mode with prefilled Mailto assistance
      setTimeout(() => {
        const updated = [newMessage, ...savedMessages];
        setSavedMessages(updated);
        localStorage.setItem("omrane_messages", JSON.stringify(updated));

        setLastSubmittedMsg(newMessage);
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 bg-warm-bg scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info cards */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-warm-dark">
              Let’s Connect
            </h2>
            <p className="mt-4 text-base text-warm-variant leading-relaxed">
              I'm currently available for internships, junior software engineer roles, or freelance collaborations. If you have any questions or just want to say hello, feel free to fill out this form!
            </p>

            {/* Inboxes */}
            <div className="mt-10 space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-warm-container border border-warm-outline-variant/35 text-warm-primary shrink-0 transition-transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-warm-primary uppercase tracking-wider block">Email</span>
                  <a
                    href="mailto:omraneriahi@hotmail.com"
                    className="text-base text-warm-dark hover:text-warm-primary hover:underline font-medium transition-colors"
                  >
                    omraneriahi@hotmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-warm-container border border-warm-outline-variant/35 text-warm-primary shrink-0 transition-transform hover:scale-105">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-warm-primary uppercase tracking-wider block">Location</span>
                  <span className="text-base text-warm-dark font-medium">
                    Nice, France
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-warm-container border border-warm-outline-variant/35 text-warm-primary shrink-0 transition-transform hover:scale-105">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-warm-primary uppercase tracking-wider block">Social Network</span>
                  <div className="flex gap-3 mt-1.5">
                    <a
                      href="https://github.com/Omrane02"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-warm-lowest border border-warm-outline-variant/30 text-xs font-bold text-warm-variant hover:text-warm-primary hover:border-warm-outline transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/omrane-riahi-bb748920a/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-warm-lowest border border-warm-outline-variant/30 text-xs font-bold text-warm-variant hover:text-warm-primary hover:border-warm-outline transition-all"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact HTML standard interactive Form */}
          <div className="col-span-1 lg:col-span-7">
            <div className="bg-warm-lowest border border-warm-outline-variant/30 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold font-display text-warm-dark mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-warm-primary animate-pulse" />
                Envoyer un message en direct
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="form-name" className="text-xs font-bold text-warm-dark mb-1.5 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-outline-variant/40 bg-warm-bg text-warm-dark placeholder:text-warm-variant/50 focus:outline-none focus:ring-1 focus:ring-warm-primary focus:border-warm-primary text-sm font-medium transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="form-email" className="text-xs font-bold text-warm-dark mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-outline-variant/40 bg-warm-bg text-warm-dark placeholder:text-warm-variant/50 focus:outline-none focus:ring-1 focus:ring-warm-primary focus:border-warm-primary text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="form-subject" className="text-xs font-bold text-warm-dark mb-1.5 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-warm-outline-variant/40 bg-warm-bg text-warm-dark placeholder:text-warm-variant/50 focus:outline-none focus:ring-1 focus:ring-warm-primary focus:border-warm-primary text-sm font-medium transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="form-message" className="text-xs font-bold text-warm-dark mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can I help you?"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-outline-variant/40 bg-warm-bg text-warm-dark placeholder:text-warm-variant/50 focus:outline-none focus:ring-1 focus:ring-warm-primary focus:border-warm-primary text-sm font-medium transition-all resize-none"
                  />
                </div>

                {/* Button Submit */}
                <button
                  type="submit"
                  disabled={loading || !formData.name || !formData.email || !formData.message}
                  className="w-full py-4 rounded-xl bg-warm-primary hover:bg-warm-primary/95 text-white font-bold text-sm tracking-wide disabled:opacity-55 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-warm-primary/10"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Transmission...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Feedback Success Box */}
              {success && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <p className="font-bold text-sm">
                      {formspreeId ? "Message envoyé directement !" : "Message sauvegardé localement !"}
                    </p>
                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                      {formspreeId 
                        ? `Votre message a été transmis avec succès à l'aide de l'API sécurisée.` 
                        : `Le message est stocké dans votre historique de simulation local.`}
                    </p>

                    {/* Mailto Helper Action for instant direct emailing if formspreeId is not set */}
                    {!formspreeId && lastSubmittedMsg && (
                      <div className="mt-3.5 pt-3 border-t border-emerald-200/50">
                        <p className="text-xs font-semibold text-emerald-900 mb-2">
                          📨 Souhaitez-vous également l'envoyer instantanément sur sa boîte mail personnelle (omraneriahi@hotmail.com) ?
                        </p>
                        <a
                          href={`mailto:omraneriahi@hotmail.com?subject=${encodeURIComponent(lastSubmittedMsg.subject || "Contact depuis Portfolio")}&body=${encodeURIComponent("Bonjour Omrane,\n\n" + lastSubmittedMsg.message + "\n\nCordialement,\n" + lastSubmittedMsg.name + " (" + lastSubmittedMsg.email + ")")}`}
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all shadow-xs"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Ouvrir ma messagerie (Gmail, Outlook, etc.)
                        </a>
                      </div>
                    )}

                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => setSuccess(false)}
                        className="text-xs font-bold underline text-emerald-800 hover:text-emerald-950"
                      >
                        Fermer la notification
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Box */}
              {submitError && (
                <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 animate-fadeIn">
                  <div className="w-full">
                    <p className="font-bold text-sm">Erreur de transmission</p>
                    <p className="text-xs text-rose-700 mt-0.5">{submitError}</p>
                    
                    {lastSubmittedMsg && (
                      <div className="mt-3 pt-3 border-t border-rose-200/45">
                        <p className="text-xs font-semibold text-rose-900 mb-2">
                          Vous pouvez tout de même l'envoyer de façon directe :
                        </p>
                        <a
                          href={`mailto:omraneriahi@hotmail.com?subject=${encodeURIComponent(lastSubmittedMsg.subject || "Contact depuis Portfolio")}&body=${encodeURIComponent("Bonjour Omrane,\n\n" + lastSubmittedMsg.message + "\n\nCordialement,\n" + lastSubmittedMsg.name + " (" + lastSubmittedMsg.email + ")")}`}
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg transition-all"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Envoyer par mail direct (Mailto)
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Local outbox log tracker */}
              {savedMessages.length > 0 && (
                <div className="mt-8 border-t border-warm-outline-variant/30 pt-6">
                  <span className="text-xs font-bold text-warm-primary uppercase tracking-wider block mb-3 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-warm-primary" />
                    Messages envoyés récemment (Rapport Local)
                  </span>
                  <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1">
                    {savedMessages.map((msg, idx) => (
                      <div key={msg.id || idx} className="p-3 bg-warm-bg rounded-lg border border-warm-outline-variant/20 text-xs">
                        <div className="flex justify-between items-center text-warm-dark font-bold">
                          <span>{msg.name}</span>
                          <span className="text-[10px] text-warm-variant">{msg.timestamp}</span>
                        </div>
                        <p className="text-warm-variant font-semibold mt-0.5">{msg.subject || "Sans sujet"}</p>
                        <p className="text-warm-variant/90 leading-normal mt-1 italic">"{msg.message}"</p>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        localStorage.removeItem("omrane_messages");
                        setSavedMessages([]);
                      }}
                      className="text-[10px] text-warm-primary font-bold hover:underline"
                    >
                      Effacer tout l'historique local
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
