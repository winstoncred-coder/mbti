import { notFound } from 'next/navigation';
import Link from 'next/link';
import { mbtiTypes, getMbtiByCode } from '@/lib/mbti';
import { getAllPhotos } from '@/lib/photos';
import MbtiAlbum from '@/components/MbtiAlbum';

export async function generateStaticParams() {
  return mbtiTypes.map((t) => ({ code: t.code.toLowerCase() }));
}

export default async function MbtiDetailPage({ params }: { params: { code: string } }) {
  const type = getMbtiByCode(params.code);
  if (!type) return notFound();

  const allPhotos = await getAllPhotos();
  // Deterministic-but-varied subset per type, purely for a distinct mini-album.
  const album = allPhotos.filter((_, i) => (i + type.hue) % 3 === 0).slice(0, 6);

  return (
    <main>
      <div
        className="px-7 py-20"
        style={{ background: `linear-gradient(160deg, hsl(${type.hue} 40% 14%), #0b0c0e)` }}
      >
        <div className="max-w-3xl mx-auto">
          <Link href="/types" className="text-sm text-muted hover:text-ink">
            ← All types
          </Link>
          <div className="text-sm mt-6" style={{ color: `hsl(${type.hue} 55% 65%)` }}>
            {type.code} · {type.colorName}
          </div>
          <h1 className="text-4xl mt-2 mb-3">{type.name}</h1>
          <p className="text-muted max-w-[46ch]">{type.blurb}</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-7 py-14">
        <h2 className="text-xl mb-6">A {type.colorName.toLowerCase()} album</h2>
        <MbtiAlbum photos={album} hue={type.hue} />
      </section>

      <section className="max-w-3xl mx-auto px-7 py-14 grid sm:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="text-xs text-accent mb-3">Matching frame</div>
          <h3 className="text-lg mb-1">{type.frame.name}</h3>
          <p className="text-muted text-sm mb-4">{type.frame.material}</p>
          <div className="font-serif text-accent text-lg">{type.frame.price}</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="text-xs text-accent mb-3">Matching crystal bracelet</div>
          <h3 className="text-lg mb-1">{type.crystal.name}</h3>
          <p className="text-muted text-sm mb-4">{type.crystal.description}</p>
          <div className="font-serif text-accent text-lg">{type.crystal.price}</div>
        </div>
      </section>

      <p className="max-w-3xl mx-auto px-7 pb-20 text-xs text-muted">
        Frame and bracelet checkout aren&apos;t wired up yet — this is the browsing experience;
        Stripe checkout gets added in the payments phase.
      </p>
    </main>
  );
}
