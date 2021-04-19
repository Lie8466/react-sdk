export type HOC<InjectProps> = <P extends InjectProps>(
    Component: React.ComponentType<P>
  ) => React.ComponentType<Omit<P, keyof InjectProps>>;