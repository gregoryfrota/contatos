import  React, { Component } from  'react';
import  TelefonesService  from  './TelefonesService';

const  telefonesService  =  new  TelefonesService();

class  TelefonesList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            telefones: [],
        };
    }

    componentDidMount(){ 
    var  self  =  this;
    var pessoa = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    telefonesService.getTelefones(pessoa).then(function (result) {
        self.setState({ telefones:  result })
    });
   }

    handleDelete(e,pk){
    var  self  =  this;
        if (window.confirm("Deseja realmente excluir este registro?")) {       
        telefonesService.deleteTelefone(pk).then(()=>{
            var  newArr  =  self.state.telefones.filter(function(obj) {
                return  obj.pk  !==  pk;
        });
        self.setState({telefone:  newArr})
        window.location.reload();
    });
    }
}
 
   redirect(url, method) {
    var form = document.createElement('form');
    form.method = method;
    form.action = url;
    form.submit();
};

render() {




    var { match: { params } } = this.props;
    var pessoa = params.pk
    return (
        <div  className="telefone--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>Id</th>
                <th>Número</th>
            </tr>
            </thead>
            <tbody>
            {this.state.telefones.map( c  =>
                <tr  key={c.id}>
                <td>{c.id}  </td>
                <td>{c.numero}</td>
                <td>
                <a className="btn btn-success"  href={"/telefone/" + c.id}> Alterar</a>&nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={(e)=>  this.handleDelete(e,c.id) }> Excluir</button>
                </td>
            </tr>)}
            </tbody>
            </table>
            <a className="btn btn-primary"  href={"/"}> Retornar</a>&nbsp;&nbsp;
            <a className="btn btn-primary"  href={"/telefone/cadastrar/pessoa/"+pessoa}> Cadastrar Telefone</a>
        </div>
        );
  }
}
export  default  TelefonesList;

