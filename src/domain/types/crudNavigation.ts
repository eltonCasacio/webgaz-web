/* eslint-disable no-empty-pattern */
export type CrudNavigationProps = {
  Delete: (id: string) => void;
  Cancel: (id: number) => void;
  Details: ({}) => void;
  Update: ({}) => void;
  Create: () => void;
};
