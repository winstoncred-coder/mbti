'use client';

import Link from 'next/link';
import type { Photo } from '@/lib/photos';
import { resolvePhotoSrc } from '@/lib/placeholder';

export default function PhotoGrid({
  photos,
  variant = 'grid',
}: {
  photos: Photo[];
  variant?: 'grid' | 'contact-sheet';
}) {
  const cols =
    variant === 'contact-sheet'
      ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  return (
    <div className={`grid ${cols} gap-4`}>
      {photos.map((p) => (
        <Link
          key={p.id}
          href={`/photo/${p.id}`}
          className={`group relative block overflow-hidden bg-surface rounded ${
            variant === 'contact-sheet' ? 'aspect-[3/2]' : 'aspect-[4/5]'
          }`}
        >
          <img
            src={resolvePhotoSrc(p.imageSeed, 800, 1000)}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {variant === 'contact-sheet' ? (
            <span className="absolute top-1.5 left-1.5 text-[0.62rem] text-white bg-black/45 px-1.5 py-0.5 rounded">
              {String(p.order).padStart(2, '0')}
            </span>
          ) : (
            <span className="absolute inset-x-0 bottom-0 p-3 text-xs text-white bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {p.title}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
