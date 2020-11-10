import { Question as QuestionInferface } from './question';

export interface Action {
  type?: string;
  data?: Array<QuestionInferface>;
  err?: string;
}
