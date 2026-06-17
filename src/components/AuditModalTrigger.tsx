"use client";

interface Props {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function AuditModalTrigger({ label, className, children }: Props) {
  const open = () => window.dispatchEvent(new CustomEvent("open-audit-modal"));
  return (
    <button type="button" onClick={open} className={className}>
      {children ?? label}
    </button>
  );
}
