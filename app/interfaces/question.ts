export interface Option {
  nextId?: string;
  label: string;
  value: string;
}

export interface Question {
  id: string;
  name?: string;
  type: string;
  message: string;
  data: Array<Question>;
  validator: string;
  nextId?: string;
  choices?: Array<Option>;
}

export interface QuestionFlow {
  find(arg0: (questionItem: Question) => boolean);
  questions: Array<Question>;
}
