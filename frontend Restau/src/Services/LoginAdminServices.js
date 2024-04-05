import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class LoginAdminServices {
    static async login(login, passwordCrypted) {
        return await httpClient.post(`${ServicesConfig.SERVER_URL}/admin/login`, { login, passwordCrypted })
    }
}