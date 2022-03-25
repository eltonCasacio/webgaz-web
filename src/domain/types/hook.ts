export interface IAsyncResult<T, E extends Error = Error> {
  pending: boolean;
  value?: T;
  error?: E;
}