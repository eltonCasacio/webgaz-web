/* eslint-disable no-empty-pattern */
export type CrudNavigationProps = {
  Delete: (id: string) => void;
  Details: ({}) => void;
  Update: ({}) => void;
  Create: () => void;
};
