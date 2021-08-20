import axios from 'axios';
import { endPoints } from '../config/Api';

export const getUser = async (page) => axios.get(endPoints.user.GET_LIST);
export const createUser = async (data) => axios.post(endPoints.user.CREATE, data);
export const updateUser = async (id, data) => axios.patch(`${endPoints.user.UPDATE}/${id}`, data);
export const removeUser = async (id) => axios.delete(`${endPoints.user.UPDATE}/${id}`);
export const removeBulkUser = async (data) => axios.post(endPoints.user.REMOVE_BULK, data);
