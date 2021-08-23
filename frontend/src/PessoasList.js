import  React, { Component } from  'react';
import  PessoasService  from  './PessoasService';

const  pessoasService  =  new  PessoasService();

class  PessoasList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            pessoas: [],
        };
    }

    componentDidMount() {
    var  self  =  this;
    pessoasService.getPessoas().then(function (result) { 
        self.setState({ pessoas:  result.data})
    });
}

    handleDelete(e,pk){
    var  self  =  this;
       if (window.confirm("Deseja realmente excluir este registro?")) { 
          pessoasService.deletePessoa({pk :  pk}).then(()=>{
          var  newArr  =  self.state.pessoas.filter(function(obj) {
            return  obj.pk  !==  pk;
          });
          self.setState({pessoas:  newArr})
       });
    }
}

render() {

    return (
        <div  className="pessoa--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>Id</th>
                <th>Nome</th>
            </tr>
            </thead>
            <tbody>
            {this.state.pessoas.map( c  =>
                <tr  key={c.pk}>
                <td>{c.pk}  </td>
                <td>{c.nome}</td>
                <td>
                <a className="btn btn-warning"  href={"/telefone/pessoa/" + c.pk}> Telefones</a>&nbsp;&nbsp;
                <a className="btn btn-success"  href={"/pessoa/" + c.pk}> Alterar</a>&nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={(e)=>  this.handleDelete(e,c.pk) }> Excluir</button>
                </td>
            </tr>)}
            </tbody>
            </table>
        </div>
        );
  }
}
export default  PessoasList 

