import httpClient from 'react-http-client';
import ServicesConfig from '../Config/ServicesConfig';
import Constants from '../Constants/Constants';

export default class CommandeServices {
    static async insertCommande(commande, tableNumber, societeCode, ClientName, Depuis, CodeEmp) {
        return await httpClient.post(`${ServicesConfig.SERVER_URL}/commande/insertCommande`, { "commande": { CodeEmp, "Depuis": Depuis, "NomClient": ClientName, "products": commande, tableNumber, societeCode, "date": Date.now(), status: Constants.COMMAND_STATUS.UNTREATED } })
    }
}