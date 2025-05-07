import httpRequest from '~/untils/httpRequest';

export const userLogin = async (email, password) => {
    try {
        const res = await httpRequest.post('api/login', {
            email,
            password,
        });

        return res.data;
    } catch (error) {
        throw error;
    }
};
