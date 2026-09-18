'use client';

import { useState } from 'react';

export default function ShareButton({
  title,
  text,
  url,
  className,
  children,
}: {
  title: string;
  text: string;
  url?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [justCopied, setJustCopied] = useState(false);

  async function handleShare() {
    const shareUrl = url ?? window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
      } catch {
        // user cancelled — do nothing
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch {
      // clipboard blocked — nothing more we can do silently
    }
  }

  return (
    <button type="button" onClick={handleShare} className={className}>
      {justCopied ? 'Link copied' : children}
    </button>
  );
}
