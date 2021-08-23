import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PessoasService{

    constructor(){}


    getPessoas() {
        const url = `${API_URL}/contatoapi/pessoa`;
        return axios.get(url).then(response => response.data);
    }
    getPessoasByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getPessoa(pk) {
        const url = `${API_URL}/contatoapi/pessoa/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deletePessoa(pessoa){
        const url = `${API_URL}/contatoapi/pessoa/${pessoa.pk}`;
        return axios.delete(url);
    }
    createPessoa(pessoa){
        const url = `${API_URL}/contatoapi/pessoa/`;
        return axios.post(url,pessoa);
    }
    updatePessoa(pessoa){
        const url = `${API_URL}/contatoapi/pessoa/${pessoa.pk}/`;
        return axios.put(url,pessoa);
    }
}
