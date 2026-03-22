const snakeToCamel = (str: string): string =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

export const toCamelCase = <T>(value: T): ToCamelCase<T> => {
  if (Array.isArray(value)) {
    return value.map((item) => toCamelCase(item)) as ToCamelCase<T>;
  }

  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [
        snakeToCamel(key),
        toCamelCase(val),
      ])
    ) as ToCamelCase<T>;
  }

  return value as ToCamelCase<T>;
};

