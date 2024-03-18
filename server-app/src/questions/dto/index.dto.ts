export class createQuestion {
  name: string;
  variants: createVariant[];
}

export type createVariant = {
  name: string;
  count: number;
};

export type variant = {
  id: number;
  name: string;
  counte: number;
};

export type responsesToQuestion = {
  id: number;
  variants: variant[];
};
