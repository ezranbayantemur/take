export interface SearchBarProps<T> {
  testID: string;
  data: T[];
  onSearch: (result: T[]) => void;
  placeholder?: string;
  debounceTime?: number;
}
