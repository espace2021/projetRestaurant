import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';

export default class VerifierCommandeServices {
    static async getCommandesByCodeSociete(codeSoc) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/commande/${codeSoc}`);
    }

    static async getProductByCodeCommande(CodeCmd) {
        return await httpClient.get(`${ServicesConfig.SERVER_URL}/commande/products/${CodeCmd}`)
    }

    static async updateCommandeStatus(CodeCmd, newCmd, CodeEmp) {
        return await httpClient.post(`${ServicesConfig.SERVER_URL}/updateCommande`, { newCmd, CodeEmp })
    }
}