type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Pick<Partial<Type>, Key>;
