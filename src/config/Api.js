export const BASE_URL = 'http://localhost:4500/api/v1';

export const endPoints = {
  user: {
    GET_LIST: `${BASE_URL}/users`,
    CREATE: `${BASE_URL}/user`,
    UPDATE: `${BASE_URL}/user`,
    REMOVE: `${BASE_URL}/user`,
    REMOVE_BULK: `${BASE_URL}/users/delete`,
    GET_ONE_USER: `${BASE_URL}/user`
  }
};
