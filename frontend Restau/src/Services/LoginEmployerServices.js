import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class LoginEmployerServices {
    static async login(login, passwordCrypted) {
        return await httpClient.post(`${ServicesConfig.SERVER_URL}/employe/login`, { login, passwordCrypted })
    }
}