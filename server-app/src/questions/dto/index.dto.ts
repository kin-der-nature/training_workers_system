export class createQuestion {
  name: string;
  variants: createVariant[];
}

export type createVariant = {
  name: string;
  count: number;
};
