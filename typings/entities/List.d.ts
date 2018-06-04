declare interface List<T> {
  page: number;
  size: number;
  total: number;
  items: T[];
}
