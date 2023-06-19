export interface DataPage<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
