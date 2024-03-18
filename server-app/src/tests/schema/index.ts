import { Questions } from 'src/questions/questions.model';
import { Questions_variant } from 'src/questions/variants.model';

export const questionVariant = {
  model: Questions_variant,
  attributes: ['id', 'name'],
};

export const test = {
  model: Questions,
  all: true,
  nested: true,
  include: [
    {
      ...questionVariant,
    },
  ],
  attributes: ['id', 'name'],
  through: {
    attributes: [],
  },
};
