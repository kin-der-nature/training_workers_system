import { Questions } from 'src/questions/questions.model';
import { Questions_variant } from 'src/questions/variants.model';

export const test = {
  model: Questions,
  all: true,
  nested: true,
  include: [
    {
      model: Questions_variant,
      attributes: ['id', 'name'],
    },
  ],
  attributes: ['id', 'name'],
  through: {
    attributes: [],
  },
};
