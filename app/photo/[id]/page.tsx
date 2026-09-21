import { notFound } from 'next/navigation';
import { getPhotoById, getAllPhotos } from '@/lib/photos';
import { resolvePhotoSrc } from '@/lib/placeholder';
import ShareButton from '@/components/ShareButton';

export async function generateStaticParams() {
  const photos = await getAllPhotos();
  return photos.map((p) => ({ id: p.id }));
}

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = await getPhotoById(id);
  if (!photo) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-7 py-16">
      <img
        src={resolvePhotoSrc(photo.imageSeed, 1600, 2000)}
        alt={photo.title}
        className="w-full rounded-lg mb-6"
      />
      <h1 className="text-2xl mb-2">{photo.title}</h1>
      <p className="text-muted mb-6">{photo.caption}</p>
      <ShareButton
        title={`Latent — ${photo.title}`}
        text={`A photograph I liked: ${photo.title}`}
        className="border border-border px-5 py-2.5 rounded-full text-sm hover:border-accent transition-colors"
      >
        Share this photo
      </ShareButton>
    </main>
  );
}
