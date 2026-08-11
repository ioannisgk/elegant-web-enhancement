import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ContactContextValue = { open: (topic?: string) => void };

const ContactContext = createContext<ContactContextValue>({ open: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("Discovery call");
  const [sent, setSent] = useState(false);

  const open = (nextTopic?: string) => {
    setTopic(nextTopic ?? "Discovery call");
    setSent(false);
    setIsOpen(true);
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
            <form
              className="space-y-4 px-6 py-6"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
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
                  rows={3}
                  defaultValue={`Interested in: ${topic}.`}
                  className="w-full rounded-xl border border-input bg-surface-muted px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:bg-surface focus:ring-4 focus:ring-brand/10"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand-strong"
              >
                Send request <ArrowRight className="h-4 w-4" />
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