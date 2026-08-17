import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Public, publishable Web3Forms access key — safe to ship in client code.
// Delivers only to the verified address registered at web3forms.com.
const WEB3FORMS_ACCESS_KEY = "752e6976-d33a-4b7e-affc-ee40c16364b0";
const CONTACT_EMAIL = "info@kubesailor.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name.").max(100),
  email: z.string().trim().min(1, "Please enter your work email.").email("Please enter a valid email address.").max(255),
  company: z.string().trim().min(1, "Please enter your company.").max(150),
  message: z.string().trim().max(2000, "Please keep your message under 2000 characters."),
});

type ContactContextValue = { open: (topic?: string) => void };

const ContactContext = createContext<ContactContextValue>({ open: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("Discovery call");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const open = (nextTopic?: string) => {
    setTopic(nextTopic ?? "Discovery call");
    setSent(false);
    setError(null);
    setSubmitting(false);
    setIsOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: bots fill this hidden field, real users never see it.
    if (String(formData.get("botcheck") ?? "")) return;

    const parsed = contactSchema.safeParse({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `KubeSailor enquiry: ${topic}`,
          from_name: parsed.data.name,
          replyto: parsed.data.email,
          topic,
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          message: parsed.data.message,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message ?? `Request failed (${response.status})`);
      }

      setSent(true);
      form.reset();
    } catch {
      setError("We couldn't send your request just now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg rounded-2xl border-border bg-surface p-0 gap-0">
          <DialogHeader className="border-b border-border px-6 py-5 text-left">
            <DialogTitle className="text-lg font-semibold">Request: {topic}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              A platform engineer replies within one business day with scope, timeline and a
              fixed quote.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="space-y-3 px-6 py-10 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
              <h3 className="text-lg font-semibold">Request received</h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thank you. We've logged your enquiry about {topic.toLowerCase()} and will be in
                touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-4 px-6 py-6" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Alex Rivera" required />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  required
                />
              </div>
              <Field label="Company" name="company" placeholder="Acme Technologies" required />
              <div className="space-y-1.5">
                <label className="text-sm font-medium" htmlFor="contact-message">
                  Infrastructure context
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  maxLength={2000}
                  defaultValue={`Interested in: ${topic}.`}
                  className="w-full rounded-xl border border-input bg-surface-muted px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:bg-surface focus:ring-4 focus:ring-brand/10"
                />
              </div>
              {error ? (
                <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3.5 py-2.5 text-sm text-destructive">
                  {error}{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline underline-offset-2">
                    Email us directly
                  </a>
                  .
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    Sending… <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send request <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No newsletters. Your details are used only to answer this enquiry.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </ContactContext.Provider>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium" htmlFor={`contact-${name}`}>
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-surface-muted px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-brand focus:bg-surface focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}