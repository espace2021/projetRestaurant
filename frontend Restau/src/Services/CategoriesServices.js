import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class CategoriesServices {
    static async getCategoriesByCodeSoc(code) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/categories/societe/${code}`)
    }

    static async getCategorieByCodeCategAndCodeSec(codeCateg, codeSec) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/categorie/${codeCateg}/societe/${codeSec}`)
    }
}