import React, { Component } from 'react';
import TelefonesService from './TelefonesService';

const telefonesService = new TelefonesService();

class TelefoneCreate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleCreate(){
        telefonesService.createTelefone( 
          {
            "numero": this.refs.numero.value,
            "pessoa": this.refs.pessoa.value,
        }
        ).then((result)=>{
          alert("Número Inserido com Sucesso!");
          window.location.href = "/telefone/pessoa/"+this.refs.pessoa.value;
        }).catch(()=>{
          telefonesService.getTelefonesByURL('/contatoapi/telefone/?numero='+this.refs.numero.value).then((c)=>{
            var numero = c.numero;
            if(numero  != ''){
              alert('Não é possível inserir um numero já cadastrado!');
            }
          })
        });
      }
      
      handleSubmit(event) {
        this.handleCreate();
        event.preventDefault();
      }

      render() {
        var { match: { params } } = this.props;
        var pessoa = params.pk
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Número:</label>
              <input className="form-control" type="text" ref='numero' required='required'/>
              <input type="hidden" value={pessoa} ref="pessoa" />
              <br/>
              <a className="btn btn-primary"  href={"/telefone/pessoa/"+pessoa}> Retornar</a>&nbsp;&nbsp;
              <input className="btn btn-primary" type="submit" value="Salvar" />
            </div>
          </form>
        );
      }
}

export default TelefoneCreate;