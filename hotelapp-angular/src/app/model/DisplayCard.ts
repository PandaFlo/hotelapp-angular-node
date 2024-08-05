export interface DisplayCard {
  imageUrl?: string;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  link?: string;
  cardSize?: 'tall' | 'short' | 'custom';
  width?: string;
  height?: string;
  showArrow?: boolean; // New property
}
