export interface MenuItem {
  title: string;
  price: string;
  description: string;
  time: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  TOP = 'top',
  CONCEPT = 'concept',
  MENU = 'menu',
  ACCESS = 'access',
}