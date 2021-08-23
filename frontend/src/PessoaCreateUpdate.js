import React, { Component } from 'react';
import PessoasService from './PessoasService';

const pessoasService = new PessoasService();

class PessoaCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          pessoasService.getPessoa(params.pk).then((c)=>{
            this.refs.nome.value = c.nome;
          })
        }
      }

      handleCreate(){
        pessoasService.createPessoa(
          {
            "nome": this.refs.nome.value,
        }
        ).then((result)=>{
          alert("Pessoa Inserida com Sucesso!");
          window.location.href = "/";
        }).catch(()=>{
          pessoasService.getPessoasByURL('/contatoapi/pessoa/?nome='+this.refs.nome.value).then((c)=>{
            var pessoa = c.nome;
            if(pessoa  != ''){
              alert('Não é possível inserir uma pessoa já cadastrada!');
            }
          })
        });
      }
      handleUpdate(pk){
        pessoasService.updatePessoa(
          {
            "pk": pk,
            "nome": this.refs.nome.value,
        }
        ).then((result)=>{
          alert("Pessoa Atualizada com Sucesso!");
          window.location.href = "/";
        }).catch(()=>{ 
            pessoasService.getPessoasByURL('/contatoapi/pessoa/?nome='+this.refs.nome.value).then((c)=>{
              var pessoa = c.nome;
              if(pessoa  != ''){
                alert('Não é possível inserir uma pessoa já cadastrada!');
              }
            })
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Nome:</label>
              <input className="form-control" type="text" ref='nome' id='nome' required='required'/>
              <br/>
              <a className="btn btn-primary"  href={"/"}> Retornar</a>&nbsp;&nbsp;
              <input className="btn btn-primary" type="submit" value="Salvar" />
            </div>
          </form>
        );
      }
}

export default PessoaCreateUpdate;