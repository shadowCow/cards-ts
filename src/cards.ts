export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
  rank: Rank;
  suit: Suit;
};
export const twoOfClubs: { rank: 2; suit: 'clubs' } = {
  rank: 2,
  suit: 'clubs',
} as const;
export const threeOfClubs: { rank: 3; suit: 'clubs' } = {
  rank: 3,
  suit: 'clubs',
} as const;
export const fourOfClubs: { rank: 4; suit: 'clubs' } = {
  rank: 4,
  suit: 'clubs',
} as const;
export const fiveOfClubs: { rank: 5; suit: 'clubs' } = {
  rank: 5,
  suit: 'clubs',
} as const;
export const sixOfClubs: { rank: 6; suit: 'clubs' } = {
  rank: 6,
  suit: 'clubs',
} as const;
export const sevenOfClubs: { rank: 7; suit: 'clubs' } = {
  rank: 7,
  suit: 'clubs',
} as const;
export const eightOfClubs: { rank: 8; suit: 'clubs' } = {
  rank: 8,
  suit: 'clubs',
} as const;
export const nineOfClubs: { rank: 9; suit: 'clubs' } = {
  rank: 9,
  suit: 'clubs',
} as const;
export const tenOfClubs: { rank: 10; suit: 'clubs' } = {
  rank: 10,
  suit: 'clubs',
} as const;
export const jackOfClubs: { rank: 11; suit: 'clubs' } = {
  rank: 11,
  suit: 'clubs',
} as const;
export const queenOfClubs: { rank: 12; suit: 'clubs' } = {
  rank: 12,
  suit: 'clubs',
} as const;
export const kingOfClubs: { rank: 13; suit: 'clubs' } = {
  rank: 13,
  suit: 'clubs',
} as const;
export const aceOfClubs: { rank: 14; suit: 'clubs' } = {
  rank: 14,
  suit: 'clubs',
} as const;

export const twoOfDiamonds: { rank: 2; suit: 'diamonds' } = {
  rank: 2,
  suit: 'diamonds',
} as const;
export const threeOfDiamonds: { rank: 3; suit: 'diamonds' } = {
  rank: 3,
  suit: 'diamonds',
} as const;
export const fourOfDiamonds: { rank: 4; suit: 'diamonds' } = {
  rank: 4,
  suit: 'diamonds',
} as const;
export const fiveOfDiamonds: { rank: 5; suit: 'diamonds' } = {
  rank: 5,
  suit: 'diamonds',
} as const;
export const sixOfDiamonds: { rank: 6; suit: 'diamonds' } = {
  rank: 6,
  suit: 'diamonds',
} as const;
export const sevenOfDiamonds: { rank: 7; suit: 'diamonds' } = {
  rank: 7,
  suit: 'diamonds',
} as const;
export const eightOfDiamonds: { rank: 8; suit: 'diamonds' } = {
  rank: 8,
  suit: 'diamonds',
} as const;
export const nineOfDiamonds: { rank: 9; suit: 'diamonds' } = {
  rank: 9,
  suit: 'diamonds',
} as const;
export const tenOfDiamonds: { rank: 10; suit: 'diamonds' } = {
  rank: 10,
  suit: 'diamonds',
} as const;
export const jackOfDiamonds: { rank: 11; suit: 'diamonds' } = {
  rank: 11,
  suit: 'diamonds',
} as const;
export const queenOfDiamonds: { rank: 12; suit: 'diamonds' } = {
  rank: 12,
  suit: 'diamonds',
} as const;
export const kingOfDiamonds: { rank: 13; suit: 'diamonds' } = {
  rank: 13,
  suit: 'diamonds',
} as const;
export const aceOfDiamonds: { rank: 14; suit: 'diamonds' } = {
  rank: 14,
  suit: 'diamonds',
} as const;

export const twoOfHearts: { rank: 2; suit: 'hearts' } = {
  rank: 2,
  suit: 'hearts',
} as const;
export const threeOfHearts: { rank: 3; suit: 'hearts' } = {
  rank: 3,
  suit: 'hearts',
} as const;
export const fourOfHearts: { rank: 4; suit: 'hearts' } = {
  rank: 4,
  suit: 'hearts',
} as const;
export const fiveOfHearts: { rank: 5; suit: 'hearts' } = {
  rank: 5,
  suit: 'hearts',
} as const;
export const sixOfHearts: { rank: 6; suit: 'hearts' } = {
  rank: 6,
  suit: 'hearts',
} as const;
export const sevenOfHearts: { rank: 7; suit: 'hearts' } = {
  rank: 7,
  suit: 'hearts',
} as const;
export const eightOfHearts: { rank: 8; suit: 'hearts' } = {
  rank: 8,
  suit: 'hearts',
} as const;
export const nineOfHearts: { rank: 9; suit: 'hearts' } = {
  rank: 9,
  suit: 'hearts',
} as const;
export const tenOfHearts: { rank: 10; suit: 'hearts' } = {
  rank: 10,
  suit: 'hearts',
} as const;
export const jackOfHearts: { rank: 11; suit: 'hearts' } = {
  rank: 11,
  suit: 'hearts',
} as const;
export const queenOfHearts: { rank: 12; suit: 'hearts' } = {
  rank: 12,
  suit: 'hearts',
} as const;
export const kingOfHearts: { rank: 13; suit: 'hearts' } = {
  rank: 13,
  suit: 'hearts',
} as const;
export const aceOfHearts: { rank: 14; suit: 'hearts' } = {
  rank: 14,
  suit: 'hearts',
} as const;

export const twoOfSpades: { rank: 2; suit: 'spades' } = {
  rank: 2,
  suit: 'spades',
} as const;
export const threeOfSpades: { rank: 3; suit: 'spades' } = {
  rank: 3,
  suit: 'spades',
} as const;
export const fourOfSpades: { rank: 4; suit: 'spades' } = {
  rank: 4,
  suit: 'spades',
} as const;
export const fiveOfSpades: { rank: 5; suit: 'spades' } = {
  rank: 5,
  suit: 'spades',
} as const;
export const sixOfSpades: { rank: 6; suit: 'spades' } = {
  rank: 6,
  suit: 'spades',
} as const;
export const sevenOfSpades: { rank: 7; suit: 'spades' } = {
  rank: 7,
  suit: 'spades',
} as const;
export const eightOfSpades: { rank: 8; suit: 'spades' } = {
  rank: 8,
  suit: 'spades',
} as const;
export const nineOfSpades: { rank: 9; suit: 'spades' } = {
  rank: 9,
  suit: 'spades',
} as const;
export const tenOfSpades: { rank: 10; suit: 'spades' } = {
  rank: 10,
  suit: 'spades',
} as const;
export const jackOfSpades: { rank: 11; suit: 'spades' } = {
  rank: 11,
  suit: 'spades',
} as const;
export const queenOfSpades: { rank: 12; suit: 'spades' } = {
  rank: 12,
  suit: 'spades',
} as const;
export const kingOfSpades: { rank: 13; suit: 'spades' } = {
  rank: 13,
  suit: 'spades',
} as const;
export const aceOfSpades: { rank: 14; suit: 'spades' } = {
  rank: 14,
  suit: 'spades',
} as const;

export const standard52: Array<Card> = [
  twoOfClubs,
  threeOfClubs,
  fourOfClubs,
  fiveOfClubs,
  sixOfClubs,
  sevenOfClubs,
  eightOfClubs,
  nineOfClubs,
  tenOfClubs,
  jackOfClubs,
  queenOfClubs,
  kingOfClubs,
  aceOfClubs,
  twoOfDiamonds,
  threeOfDiamonds,
  fourOfDiamonds,
  fiveOfDiamonds,
  sixOfDiamonds,
  sevenOfDiamonds,
  eightOfDiamonds,
  nineOfDiamonds,
  tenOfDiamonds,
  jackOfDiamonds,
  queenOfDiamonds,
  kingOfDiamonds,
  aceOfDiamonds,
  twoOfHearts,
  threeOfHearts,
  fourOfHearts,
  fiveOfHearts,
  sixOfHearts,
  sevenOfHearts,
  eightOfHearts,
  nineOfHearts,
  tenOfHearts,
  jackOfHearts,
  queenOfHearts,
  kingOfHearts,
  aceOfHearts,
  twoOfSpades,
  threeOfSpades,
  fourOfSpades,
  fiveOfSpades,
  sixOfSpades,
  sevenOfSpades,
  eightOfSpades,
  nineOfSpades,
  tenOfSpades,
  jackOfSpades,
  queenOfSpades,
  kingOfSpades,
  aceOfSpades,
];

export function new52(): Array<Card> {
  return [...standard52];
}
