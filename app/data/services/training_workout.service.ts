import api from '../api';

async function findTrainingWorkout(traning_id: string) {
    return await api.get(`/training-workout/${traning_id}`)
}

export {findTrainingWorkout}