// Generates a deterministic gradient placeholder as a data URI so the app
// runs with zero image assets. Swap a Photo's rendering to a real <img src>
// (Supabase Storage URL) once real photos exist — this stays useful for
// local dev / empty states either way.

function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function placeholderDataUri(seed: string, w = 800, h = 1000): string {
  const hs = hashSeed(seed);
  const hue1 = hs % 360;
  const hue2 = (hue1 + 40 + (hs % 60)) % 360;
  const l1 = hs % 2 === 0 ? 30 : 60;
  const l2 = hs % 2 === 0 ? 56 : 26;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(${hue1},34%,${l1}%)"/>
      <stop offset="100%" stop-color="hsl(${hue2},28%,${l2}%)"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Same idea, but tinted toward a fixed base hue (used for the MBTI-themed
// albums, so every photo in a personality album reads as "that type's
// color" instead of a random hue).
export function tintedPlaceholderDataUri(seed: string, baseHue: number, w = 800, h = 1000): string {
  const hs = hashSeed(seed);
  const drift = (hs % 26) - 13; // small hue wobble so photos aren't identical
  const hue1 = (baseHue + drift + 360) % 360;
  const hue2 = (hue1 + 18) % 360;
  const l1 = 26 + (hs % 12);
  const l2 = 52 + (hs % 14);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(${hue1},40%,${l1}%)"/>
      <stop offset="100%" stop-color="hsl(${hue2},34%,${l2}%)"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
export function resolvePhotoSrc(imageSeed: string, w = 800, h = 1000): string {
  if (imageSeed.startsWith('/') || imageSeed.startsWith('http')) {
    return imageSeed;
  }
  return placeholderDataUri(imageSeed, w, h);
}
