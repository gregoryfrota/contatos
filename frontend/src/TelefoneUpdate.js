import React, { Component } from 'react';
import TelefonesService from './TelefonesService';

const telefonesService = new TelefonesService();

class TelefoneUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          telefonesService.getTelefone(params.pk).then((c)=>{
            this.refs.numero.value = c.numero;
            this.refs.pessoa.value = c.pessoa;
          })
        }
      }
      
      handleUpdate(pk){
        telefonesService.updateTelefone(
          {
            "pk": pk,
            "numero": this.refs.numero.value,
            "pessoa": this.refs.pessoa.value,
        }
        ).then((result)=>{
          alert("Número Atualizado com Sucesso!");
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
        const { match: { params } } = this.props;
        
        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Número:</label>
              <input className="form-control" type="text" ref='numero' required='required'/>
              <input type="hidden" ref='pessoa' name='pessoa' />
              <br/>
              <a className="btn btn-primary"  href={"javascript:history.back()"}> Retornar</a>&nbsp;&nbsp;
              <input className="btn btn-primary" type="submit" value="Salvar" />
            </div>
          </form>
        );
      }
}

export default TelefoneUpdate;