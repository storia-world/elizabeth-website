"use client";

import { useState } from "react";

import { Button, FadeIn, InputField, Text } from "@/components/common";
import Image from "next/image";

import contactImg from "@/assets/images/contactImg.jpg";

const labelStyle: React.CSSProperties = {
  fontWeight: 300,
  fontSize: "1.1rem",
  letterSpacing: "0.2em",
  color: "var(--storia-blackLight)",
};

function LetsChatLabel({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display block ${className}`} style={labelStyle}>
      {`Let's chat`}
    </span>
  );
}

function PortraitImage({
  className,
  heightClass,
}: {
  className?: string;
  heightClass: string;
}) {
  return (
    <div className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-t-lg ${heightClass}`}
      >
        <Image
          src={contactImg}
          alt="Elizabeth Uviebinené portrait"
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 280px, 460px"
        />
      </div>
    </div>
  );
}

function ContactForm({
  submitted,
  isSubmitting,
  error,
  onSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  message,
  setMessage,
}: {
  submitted: boolean;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: () => void;
  firstName: string;
  setFirstName: (v: string) => void;
  lastName: string;
  setLastName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  message: string;
  setMessage: (v: string) => void;
}) {
  return (
    <>
      <h2
        className="font-display"
        style={{
          fontWeight: 600,
          fontSize: "2.8rem",
          color: "var(--storia-blackLight)",
        }}
      >
        Get in touch
      </h2>

      <div className="mb-10 max-w-2xl">
        <Text size="small">
          For speaking engagements, media enquiries or collaboration
          opportunities, please get in touch. Liz works with organisations,
          leadership teams, brands and media outlets across the UK and
          internationally.
        </Text>
        <Text size="small" className="mt-4">
          Please complete the form below or email:{" "}
          <a
            href="mailto:elizabeth@storia.world"
            className="underline underline-offset-4 transition-opacity hover:opacity-75"
          >
            elizabeth@storia.world
          </a>
        </Text>
      </div>

      {submitted ? (
        <FadeIn trigger="mount" direction="up" distance={8} duration={0.5}>
          <Text size="large">Thanks, I&apos;ll be in touch ✦</Text>
        </FadeIn>
      ) : (
        <div>
          <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:gap-4">
            <InputField
              label="First Name"
              id="contact-first-name"
              value={firstName}
              onChange={setFirstName}
            />
            <InputField
              label="Last Name"
              id="contact-last-name"
              value={lastName}
              onChange={setLastName}
            />
          </div>

          <div className="mb-6">
            <InputField
              label="Email"
              id="contact-email"
              type="email"
              value={email}
              onChange={setEmail}
            />
          </div>

          <div className="mb-8">
            <InputField
              label="Message"
              id="contact-message"
              value={message}
              onChange={setMessage}
              multiline
            />
          </div>

          {error && (
            <Text size="small" className="mb-4 text-[var(--storia-orange)]">
              {error}
            </Text>
          )}

          <Button
            color="var(--storia-black)"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING…" : "SUBMIT"}
          </Button>
        </div>
      )}
    </>
  );
}

export default function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      <div className="flex flex-col md:min-h-[600px] md:flex-row">
        {/* Left panel */}
        <div
          className="flex w-full flex-col overflow-hidden px-6 pb-8 pt-10 md:min-h-[600px] md:flex-[0_0_55%] md:px-12 md:py-[60px]"
          style={{ background: "var(--storia-blue50)" }}
        >
          <LetsChatLabel className="shrink-0 mb-8 md:mb-0" />
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
            <PortraitImage
              className="relative w-full max-w-[300px] shrink-0 md:max-w-[460px]"
              heightClass="h-[400px] md:h-[520px]"
            />
          </div>
        </div>

        {/* Right panel — form */}
        <div
          className="w-full flex-1 px-6 py-10 md:px-[60px] md:py-20"
          style={{ background: "var(--storia-beige)" }}
        >
          <ContactForm
            submitted={submitted}
            isSubmitting={isSubmitting}
            error={error}
            onSubmit={handleSubmit}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </section>
  );
}
