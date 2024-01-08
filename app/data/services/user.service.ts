import UserForm from '../@types/userForm';
import api from '../api';

async function getUsersByRole(id: string): Promise<any> {
  return await api.get(`/users/role/${id}`);
}

async function postUserForm(form: UserForm) {
  return await api.post('/users/login', form);
}

export { getUsersByRole, postUserForm };
