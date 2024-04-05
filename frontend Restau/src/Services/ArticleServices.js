import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class ArticleServices {

    static async getArticlesByCodeCateg(code) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/articles/categorie/${code}`)
    }

    static async getArticlesByCodeSocieteAndCodeCateg(codeSoc, codeCateg) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/articles/societe/${codeSoc}/categories/${codeCateg}`);
    }
}