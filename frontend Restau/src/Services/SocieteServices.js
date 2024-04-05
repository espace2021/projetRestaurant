import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class SocieteServices {
    static async getSocietes() {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/societes`);
    }

    static async getSocieteByCode(code) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/societe/${code}`);
    }
}