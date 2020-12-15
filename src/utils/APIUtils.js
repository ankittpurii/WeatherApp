import { create } from 'apisauce'

export const executeGetRequest = async (endPoint) => {

    const api = create({
        baseURL: 'https://api.openweathermap.org/data/2.5/',
        headers: { Accept: 'application/json' },
    })

    const apiRes = api.get(endPoint)
    console.log(apiRes, "apiRes")
    return apiRes
}

