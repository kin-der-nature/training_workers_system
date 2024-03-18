import { responsesToQuestion } from 'src/questions/dto/index.dto';

export interface createTestDto {
  readonly name: string;
  readonly questions: number[];
}

export type responsesOfTest = {
  id: number;
  questions: responsesToQuestion[];
};

export type variantsResponseOfTest = {
  id: number;
  responses: number[];
};
