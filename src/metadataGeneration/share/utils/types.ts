export type JSONData<T> = T extends Date ? string: {
  [K in keyof T]: JSONData<T[K]>
}
