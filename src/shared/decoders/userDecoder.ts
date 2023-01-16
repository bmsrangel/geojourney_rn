import type {User} from '../types/user';

export const userDecoder = (data: any): User => {
  const userData = data.users[0];
  const user: User = {
    id: userData.id,
    email: userData.email,
    first_name: userData.first_name,
    last_name: userData.last_name,
  };
  return user;
};
