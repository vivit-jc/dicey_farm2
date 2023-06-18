declare module 'misc';
declare module 'ActionLogic';

type Card = {
  name: string;
  text: string;
};

type Action = {
  name: string;
  text: string;
  useDice?: boolean;
  free?: boolean;
  num?: number;
};

type Craftsman = {
  name: string;
  text: string;
  passive?: boolean;
  market?: boolean;
  dice?: boolean;
  change?: boolean;
  vendor?: boolean;
};

type Facility = {
  name: string;
  text: string;
  ftype: string;
};

type Resource = {
  j: string;
  num: number;
  rot?: boolean;
  value?: number;
};
