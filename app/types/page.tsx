import MbtiGrid from '@/components/MbtiGrid';

export default function TypesPage() {
  return (
    <main className="max-w-6xl mx-auto px-7 py-16">
      <div className="max-w-2xl mb-14">
        <h1 className="text-3xl mb-3">Albums by personality color</h1>
        <p className="text-muted leading-relaxed">
          A color-coded way to browse the collection — pick a type, get a tinted mini-album, a
          matching frame, and a matching crystal bracelet. Playful, not a personality test.
        </p>
      </div>
      <MbtiGrid />
    </main>
  );
}
