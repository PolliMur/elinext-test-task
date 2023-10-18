type ClassName = string | boolean | undefined;

export const clsx = (...args: ClassName[]): string => {
  return args.reduce<string>((result, className) => {
    if (className) {
      return `${result} ${className}`;
    }

    return result;
  }, '');
};
