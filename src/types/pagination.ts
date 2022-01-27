export type PaginationProps = {
  next: () => void;
  preview: () => void;
  goto: (value: number) => void;
};
