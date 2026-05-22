"use client";

import { useState } from "react";

type InputFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  type?: "text" | "email";
};

export default function InputField({
  label,
  id,
  value,
  onChange,
  multiline = false,
  type = "text",
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: 0,
    borderBottom: `1px solid ${focused ? "var(--storia-orange)" : "var(--storia-black40)"}`,
    padding: "10px 0",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "0.95rem",
    color: "var(--storia-black)",
    outline: "none",
    transition: "border-bottom-color 0.25s ease",
    resize: multiline ? "vertical" : undefined,
    minHeight: multiline ? 120 : undefined,
  };

  return (
    <div
      style={{
        flex: multiline ? undefined : 1,
        width: multiline ? "100%" : undefined,
      }}
    >
      <label
        htmlFor={id}
        className="mb-1.5 block font-body text-[0.8rem] font-normal tracking-[0.08em] text-[var(--storia-blackLight)]"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
      )}
    </div>
  );
}
