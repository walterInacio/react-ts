import { useCallback } from 'react';

import emptyFunction from 'utils/empty';

interface RootHook {
  handleEmptyLink: () => void;
}

const useRoot = (): RootHook => {
  const handleEmptyLink = useCallback(emptyFunction, []);

  return {
    handleEmptyLink,
  };
};

export default useRoot;
