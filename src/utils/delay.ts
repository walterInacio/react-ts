const delay = (timeout: number): Promise<void> =>
  new Promise((resolve: () => void): void => {
    setTimeout(resolve, timeout);
  });

export default delay;
