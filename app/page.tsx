import Link from 'next/link';
import PhotoGrid from '@/components/PhotoGrid';
import { getPhotosByCategory } from '@/lib/photos';

export default async function HomePage() {
  const digital = await getPhotosByCategory('digital');
  const film = await getPhotosByCategory('film');

  return (
    <main>
      <header className="max-w-3xl px-7 pt-16 pb-24">
        <div className="text-accent text-sm mb-4">digital &amp; film photography</div>
        <h1 className="text-4xl sm:text-6xl leading-tight max-w-[16ch]">
          Look a little longer than you meant to.
        </h1>
        <p className="text-muted mt-5 max-w-[50ch] leading-relaxed">
          A growing collection of photographs — traffic-light glare, empty stairwells,
          somebody&apos;s grandmother laughing at something off-camera. Nothing posed.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap">
          <a href="#gallery" className="bg-accent text-bg font-semibold px-6 py-3 rounded-full text-sm">
            See the gallery
          </a>
          <Link href="/types" className="border border-border px-6 py-3 rounded-full text-sm hover:border-accent transition-colors">
            Browse by personality color
          </Link>
        </div>
      </header>

      <section id="gallery" className="max-w-6xl mx-auto px-7 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl mb-2">Recent</h2>
          <p className="text-muted text-sm">Click a photo to see it larger and share it.</p>
        </div>
        <PhotoGrid photos={digital} />
      </section>

      <section id="film" className="max-w-6xl mx-auto px-7 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl mb-2">On Film</h2>
          <p className="text-muted text-sm">Laid out like a contact sheet.</p>
        </div>
        <PhotoGrid photos={film} variant="contact-sheet" />
      </section>
    </main>
  );
}
