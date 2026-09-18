import Link from 'next/link';
import type { Photo } from '@/lib/photos';
import { tintedPlaceholderDataUri } from '@/lib/placeholder';

export default function MbtiAlbum({ photos, hue }: { photos: Photo[]; hue: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {photos.map((p) => (
        <Link
          key={p.id}
          href={`/photo/${p.id}`}
          className="group block relative aspect-[4/5] rounded overflow-hidden bg-surface"
        >
          <img
            src={tintedPlaceholderDataUri(p.imageSeed, hue, 800, 1000)}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      ))}
    </div>
  );
}
