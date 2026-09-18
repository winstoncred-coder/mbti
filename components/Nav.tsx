import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7 py-5 backdrop-blur-sm bg-bg/70 border-b border-border">
      <Link href="/" className="font-serif text-lg">
        Latent
      </Link>
      <ul className="hidden sm:flex gap-7 list-none m-0 p-0">
        <li>
          <Link href="/#gallery" className="text-sm text-muted hover:text-ink transition-colors">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/#film" className="text-sm text-muted hover:text-ink transition-colors">
            On Film
          </Link>
        </li>
        <li>
          <Link href="/types" className="text-sm text-muted hover:text-ink transition-colors">
            By Personality
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-muted hover:text-ink transition-colors">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
