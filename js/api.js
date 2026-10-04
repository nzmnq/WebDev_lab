const BASE_URL = 'http://127.0.0.1:3000/api';
const RESOURCE_URL = `${BASE_URL}/helicopters`;

const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAllhHeli = async () => {
    const rawResp = await baseRequest({method: "GET"});
    return rawResp.json();
}

export const getAllHelicopters = getAllhHeli;

export const getHelicopterById = async (id) => {
    const rawResp = await baseRequest({urlPath: `/${id}`, method: "GET"});
    return rawResp.json();
}

export const createHelicopter = async (helicopter) => {
    const rawResp = await baseRequest({method: "POST", body: helicopter});
    return rawResp.json();
}

export const postHelicopter = createHelicopter;

export const updateHelicopter = async (id, helicopter) => {
    const rawResp = await baseRequest({urlPath: `/${id}`, method: "PUT", body: helicopter});
    return rawResp.json();
}

export const deleteHelicopter = async (id) => {
    const rawResp = await baseRequest({urlPath: `/${id}`, method: "DELETE"});
    return rawResp.json();
}