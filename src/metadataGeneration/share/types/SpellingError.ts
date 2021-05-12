export interface SpellingErrorContext {
  text: string;
  offset: number;
  length: number;
}

export interface SpellingError {
  id: string;
  context: SpellingErrorContext;
  type: string;
  error: string;
  suggestion: string[];
}
