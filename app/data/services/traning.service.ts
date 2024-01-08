import api from '../api';

async function findTraining(id: string): Promise<any>  {
    return await api.get(`/trainings/${id}`)
}
 
export {findTraining}