import { useCallback } from 'react';

import constants from 'constants/api';

import profileAPI, { User, UserWithId } from 'api/profile';

const useProfileAPI = (
  // This is temporary, when a login/register logic is made, this default id should be taken out
  userId: string = constants.MOCK_USER_ID,
): [
  () => Promise<UserWithId | undefined>,
  (body: User) => Promise<UserWithId | undefined>,
] => {
  const getUser = useCallback(
    (): Promise<UserWithId | undefined> => profileAPI.getUser(userId),
    [userId],
  );
  const putUser = useCallback(
    (body: User): Promise<UserWithId | undefined> =>
      profileAPI.putUser(userId, body),
    [userId],
  );

  return [getUser, putUser];
};

export default useProfileAPI;
