// This file is the ONLY place that knows where photo data comes from.
// Right now it returns mock data so the site works with zero backend setup.
// When Supabase is wired up (see lib/supabase.ts), replace the bodies of
// these functions with real queries against a `photos` table — nothing
// that imports from this file needs to change.

export interface Photo {
  id: string;
  title: string;
  caption: string;
  category: 'digital' | 'film';
  order: number;
  // Once real images exist, this becomes a Supabase Storage public URL.
  // For now it's a seed used to generate a placeholder gradient client-side.
  imageSeed: string;
}

const digitalPhotos: Photo[] = [
  { id: 'd01', title: 'Magnolia Tree', caption: 'Perfumer H, still life on a wooden tray.', category: 'digital', order: 1, imageSeed: '/photos/01.jpg' },
  { id: 'd02', title: 'Harbor fog, early', caption: 'The harbor before the city woke up.', category: 'digital', order: 2, imageSeed: 'digital-d02' },
  { id: 'd03', title: 'Portrait, downtown', caption: 'A stranger who agreed to one frame.', category: 'digital', order: 3, imageSeed: 'digital-d03' },
  { id: 'd04', title: 'Neon, wet street', caption: 'Reflections after a short rain.', category: 'digital', order: 4, imageSeed: 'digital-d04' },
  { id: 'd05', title: 'Ridgeline at dawn', caption: 'First light on the ridge.', category: 'digital', order: 5, imageSeed: 'digital-d05' },
  { id: 'd06', title: 'Quiet alley, late fall', caption: 'An alley nobody else was in.', category: 'digital', order: 6, imageSeed: 'digital-d06' },
];

const filmPhotos: Photo[] = [
  { id: 'a01', title: '35mm, Portra 400', caption: 'One roll, a slow afternoon.', category: 'film', order: 1, imageSeed: 'analog-a01' },
  { id: 'a02', title: 'Medium format, overcast', caption: 'Flat light, long exposure.', category: 'film', order: 2, imageSeed: 'analog-a02' },
  { id: 'a03', title: 'Night train, pushed a stop', caption: 'Pushed one stop for the grain.', category: 'film', order: 3, imageSeed: 'analog-a03' },
  { id: 'a04', title: 'Beach house, expired stock', caption: 'Expired film, unpredictable color.', category: 'film', order: 4, imageSeed: 'analog-a04' },
  { id: 'a05', title: 'Countryside, black and white', caption: 'Shot walking, nowhere in particular.', category: 'film', order: 5, imageSeed: 'analog-a05' },
  { id: 'a06', title: 'Portrait, window light', caption: 'Window light, no flash.', category: 'film', order: 6, imageSeed: 'analog-a06' },
];

export async function getAllPhotos(): Promise<Photo[]> {
  return [...digitalPhotos, ...filmPhotos];
}

export async function getPhotosByCategory(category: Photo['category']): Promise<Photo[]> {
  return (category === 'digital' ? digitalPhotos : filmPhotos).sort((a, b) => a.order - b.order);
}

export async function getPhotoById(id: string): Promise<Photo | null> {
  const all = [...digitalPhotos, ...filmPhotos];
  return all.find((p) => p.id === id) ?? null;
}
