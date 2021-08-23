import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class TelefonesService{

    constructor(){}

    getTelefone(pk) {
        const url = `${API_URL}/contatoapi/telefone/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getTelefones(pessoa) {
        const url = `${API_URL}/contatoapi/telefone/pessoa/${pessoa}`;
        return axios.get(url).then(response => response.data);
    }
    deleteTelefone(telefone){
        const url = `${API_URL}/contatoapi/telefone/${telefone}`;
        return axios.delete(url);
    }
    createTelefone(telefone){ 
        const url = `${API_URL}/contatoapi/telefone/`;
        return axios.post(url,telefone);
    }
    updateTelefone(telefone){
        const url = `${API_URL}/contatoapi/telefone/${telefone.pk}/`;
        return axios.put(url,telefone);
    }
    getTelefonesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
}
