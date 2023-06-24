export interface SearchBarProps {
  testID: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  debounceTime?: number;
}
