import api from '@/data/api'


async function getStudents(param: string): Promise<any> {
    return await api.get(`/students?student=${param}`)
}

async function getStudentWithAllData(id: string): Promise<any> {
    return await api.get(`/students/all/${id}`)
}

export { getStudents, getStudentWithAllData }