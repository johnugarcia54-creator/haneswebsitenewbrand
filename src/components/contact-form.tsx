"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Tell us about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Project enquiry — ${values.company || values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:Enquiry@hanesdistribution.co.nz?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="rounded-[28px] bg-canvas-raised p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(0,0,0,0.12)]"
        >
          <div className="font-display text-2xl font-semibold text-accent">Opening your email client</div>
          <p className="mt-3 text-ink-muted leading-relaxed">
            We&apos;ve pre-filled a message to Enquiry@hanesdistribution.co.nz with your details.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -10 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <Field label="Name" error={errors.name} value={values.name} onChange={(v) => setValues((s) => ({ ...s, name: v }))} />
          <Field
            label="Email"
            type="email"
            error={errors.email}
            value={values.email}
            onChange={(v) => setValues((s) => ({ ...s, email: v }))}
          />
          <Field label="Company" required={false} value={values.company} onChange={(v) => setValues((s) => ({ ...s, company: v }))} />
          <div>
            <label className="text-sm font-medium text-ink-muted">Project details</label>
            <textarea
              rows={5}
              value={values.message}
              onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
              className="mt-2 w-full rounded-2xl bg-canvas-raised border border-line px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow resize-none"
            />
            {errors.message && <p className="mt-1.5 text-sm text-accent">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 text-[15px] font-medium hover:brightness-110 transition-all"
          >
            Send enquiry
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  required = true,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl bg-canvas-raised border border-line px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
      />
      {error && <p className="mt-1.5 text-sm text-accent">{error}</p>}
    </div>
  );
}
