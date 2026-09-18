// Representative colors here are a stylistic convention (common in MBTI fan
// content), not a psychological measurement — treat this as an aesthetic
// quiz/merch feature, not a personality assessment.
//
// Crystal descriptions use "traditionally associated with" / "said to"
// language on purpose: these are cultural/folklore associations, not
// medical or scientific claims.

export type MbtiGroup = 'Analyst' | 'Diplomat' | 'Sentinel' | 'Explorer';

export interface MbtiType {
  code: string;
  name: string;
  group: MbtiGroup;
  hue: number; // 0-360, used for both the swatch and the tinted album
  colorName: string;
  blurb: string;
  frame: {
    name: string;
    material: string;
    price: string;
  };
  crystal: {
    name: string;
    description: string;
    price: string;
  };
}

export const mbtiTypes: MbtiType[] = [
  { code: 'INTJ', name: 'The Architect', group: 'Analyst', hue: 255, colorName: 'Deep Indigo',
    blurb: 'Systems, strategy, quiet certainty.',
    frame: { name: 'Obsidian Line Frame', material: 'Matte black aluminum, razor-thin profile', price: '$68' },
    crystal: { name: 'Sodalite Bracelet', description: 'Traditionally associated with clarity and focused thinking.', price: '$32' } },

  { code: 'INTP', name: 'The Logician', group: 'Analyst', hue: 222, colorName: 'Slate Blue',
    blurb: 'Curiosity first, everything else later.',
    frame: { name: 'Brushed Steel Frame', material: 'Cool-toned brushed steel, understated edge', price: '$62' },
    crystal: { name: 'Labradorite Bracelet', description: 'Associated in crystal folklore with insight and curiosity.', price: '$34' } },

  { code: 'ENTJ', name: 'The Commander', group: 'Analyst', hue: 350, colorName: 'Wine Red',
    blurb: 'Decisive, direct, built for momentum.',
    frame: { name: 'Dark Walnut Gallery Frame', material: 'Solid dark walnut, gallery depth', price: '$88' },
    crystal: { name: 'Garnet Bracelet', description: 'Traditionally linked to drive and confidence.', price: '$36' } },

  { code: 'ENTP', name: 'The Debater', group: 'Analyst', hue: 32, colorName: 'Amber',
    blurb: 'Ideas as a contact sport.',
    frame: { name: 'Warm Brass Frame', material: 'Brushed brass, asymmetric mount', price: '$74' },
    crystal: { name: 'Citrine Bracelet', description: 'Associated with optimism and creative energy.', price: '$30' } },

  { code: 'INFJ', name: 'The Advocate', group: 'Diplomat', hue: 158, colorName: 'Deep Emerald',
    blurb: 'Reads a room before it speaks.',
    frame: { name: 'Forest Oak Frame', material: 'Stained oak with a deep green undertone', price: '$78' },
    crystal: { name: 'Green Aventurine Bracelet', description: 'Traditionally linked to calm and intuition.', price: '$28' } },

  { code: 'INFP', name: 'The Mediator', group: 'Diplomat', hue: 265, colorName: 'Dusty Lavender',
    blurb: 'Lives a little in the daydream.',
    frame: { name: 'Soft Ash Wood Frame', material: 'Pale ash, hand-waxed finish', price: '$64' },
    crystal: { name: 'Amethyst Bracelet', description: 'Traditionally associated with introspection and dreams.', price: '$30' } },

  { code: 'ENFJ', name: 'The Protagonist', group: 'Diplomat', hue: 358, colorName: 'Coral Rose',
    blurb: 'Warms up every room it enters.',
    frame: { name: 'Rose Gold Frame', material: 'Slim metal, warm rose-gold trim', price: '$70' },
    crystal: { name: 'Rose Quartz Bracelet', description: 'Traditionally linked to warmth and connection.', price: '$26' } },

  { code: 'ENFP', name: 'The Campaigner', group: 'Diplomat', hue: 42, colorName: 'Sunflower Gold',
    blurb: 'Enthusiasm as a default setting.',
    frame: { name: 'Reclaimed Wood Frame', material: 'Eclectic reclaimed wood with gold flecks', price: '$66' },
    crystal: { name: 'Sunstone Bracelet', description: 'Associated with enthusiasm and joy.', price: '$28' } },

  { code: 'ISTJ', name: 'The Logistician', group: 'Sentinel', hue: 220, colorName: 'Charcoal Navy',
    blurb: 'Reliable, precise, built to last.',
    frame: { name: 'Classic Black Wood Frame', material: 'Traditional black-stained hardwood', price: '$58' },
    crystal: { name: 'Hematite Bracelet', description: 'Traditionally linked to grounding and discipline.', price: '$24' } },

  { code: 'ISFJ', name: 'The Defender', group: 'Sentinel', hue: 100, colorName: 'Sage Green',
    blurb: 'Quietly keeps everything running.',
    frame: { name: 'Whitewashed Oak Frame', material: 'Soft whitewash finish, cozy grain', price: '$60' },
    crystal: { name: 'Moonstone Bracelet', description: 'Traditionally associated with nurturing and care.', price: '$32' } },

  { code: 'ESTJ', name: 'The Executive', group: 'Sentinel', hue: 205, colorName: 'Steel Blue',
    blurb: 'Order, structure, a plan for everything.',
    frame: { name: 'Polished Steel Frame', material: 'Clean polished steel, gallery-professional', price: '$72' },
    crystal: { name: "Tiger's Eye Bracelet", description: 'Traditionally linked to confidence and leadership.', price: '$26' } },

  { code: 'ESFJ', name: 'The Consul', group: 'Sentinel', hue: 12, colorName: 'Warm Terracotta',
    blurb: 'Remembers everyone\u2019s birthday.',
    frame: { name: 'Terracotta Wood Frame', material: 'Warm terracotta-toned hardwood', price: '$60' },
    crystal: { name: 'Carnelian Bracelet', description: 'Traditionally associated with warmth and sociability.', price: '$26' } },

  { code: 'ISTP', name: 'The Virtuoso', group: 'Explorer', hue: 220, colorName: 'Graphite',
    blurb: 'Takes things apart to understand them.',
    frame: { name: 'Raw Concrete-Grey Frame', material: 'Industrial concrete-textured resin', price: '$56' },
    crystal: { name: 'Black Onyx Bracelet', description: 'Traditionally linked to steadiness and independence.', price: '$24' } },

  { code: 'ISFP', name: 'The Adventurer', group: 'Explorer', hue: 350, colorName: 'Blush Pink',
    blurb: 'Makes a mood out of everything.',
    frame: { name: 'Pale Pink Lacquer Frame', material: 'Soft lacquered finish, rounded edges', price: '$58' },
    crystal: { name: 'Rhodochrosite Bracelet', description: 'Associated with gentle creativity.', price: '$30' } },

  { code: 'ESTP', name: 'The Entrepreneur', group: 'Explorer', hue: 18, colorName: 'Fiery Orange',
    blurb: 'Acts first, narrates later.',
    frame: { name: 'Bold Red Lacquer Frame', material: 'High-gloss lacquer, statement color', price: '$64' },
    crystal: { name: 'Red Jasper Bracelet', description: 'Traditionally linked to boldness and action.', price: '$24' } },

  { code: 'ESFP', name: 'The Entertainer', group: 'Explorer', hue: 330, colorName: 'Vivid Magenta',
    blurb: 'The room is a stage, always.',
    frame: { name: 'Iridescent Magenta Frame', material: 'Glossy shifting finish, playful trim', price: '$66' },
    crystal: { name: 'Pink Tourmaline Bracelet', description: 'Associated with vibrancy and joy.', price: '$32' } },
];

export function getMbtiByCode(code: string): MbtiType | undefined {
  return mbtiTypes.find((t) => t.code.toLowerCase() === code.toLowerCase());
}
