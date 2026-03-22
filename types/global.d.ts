
declare global {
  type SnakeToCamel<S extends string> =
    S extends `${infer Head}_${infer Tail}`
    ? `${Head}${Capitalize<SnakeToCamel<Tail>>}`
    : S;
  type ToCamelCase<T> = T extends Array<infer U>
    ? Array<ToCamelCase<U>>
    : T extends object
    ? {
      [K in keyof T as SnakeToCamel<string & K>]: ToCamelCase<T[K]>
    }
    : T;
}

export { };
