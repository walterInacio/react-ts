import endpoint from './endpoints/quick-rest-endpoint';

export interface User {
  name: string;
  gender: string;
  email: string;
  profilePicURL?: string;
  dateOfBirth: Date;
}

export interface UserWithId extends User {
  id: string;
}

const getUser = async (userId: string): Promise<UserWithId | undefined> => {
  try {
    const { data } = await endpoint.get<{ data: UserWithId }>(
      `/v2/users/${userId}`,
    );
    const user = data.data;
    return {
      ...user,
      dateOfBirth: new Date(user.dateOfBirth),
    };
  } catch (err) {
    return undefined;
  }
};

const putUser = async (
  userId: string,
  body: User,
): Promise<UserWithId | undefined> => {
  try {
    const { data } = await endpoint.put<{ data: UserWithId }>(
      `/v2/users/${userId}`,
      body,
    );
    const user = data.data;
    return {
      ...data.data,
      dateOfBirth: new Date(user.dateOfBirth),
    };
  } catch (err) {
    return undefined;
  }
};

export default { putUser, getUser };
