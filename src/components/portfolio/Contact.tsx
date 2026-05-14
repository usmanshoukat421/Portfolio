import { useState } from "react";
import { Reveal, SectionTitle } from "./Reveal";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_ko8hz09",
        "template_l37ekpp",
        e.currentTarget,
        "PaJpTSeaSDoeYAKYOKvkQ",
      );

      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle eyebrow="Say Hello" title="Let's build something" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
          
          <Reveal>
            <div className="card-elev rounded-3xl p-8 h-full flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  Get in touch
                </h3>
                <p className="text-sm text-muted-foreground">
                  Got a project, role or just want to say hi? My inbox is always open.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:usmandotshoukat@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <span className="size-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-primary-foreground" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Email</span>
                    <span className="text-sm font-medium group-hover:text-primary transition break-all">
                      usmandotshoukat@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Location</span>
                    <span className="text-sm font-medium">Pakistan · Remote</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Status</span>
                    <span className="text-sm font-medium">Open to opportunities</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="card-elev rounded-3xl p-8 space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <Field label="Subject" name="subject" placeholder="What's this about?" />

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-sm font-semibold text-primary-foreground glow hover:scale-[1.01] transition disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
                <Send className="size-4" />
              </button>

            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
      />
    </div>
  );
}