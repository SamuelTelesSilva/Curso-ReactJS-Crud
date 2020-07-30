import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './index.css';

class DeletarProduto extends Component {
    constructor(props){
        super(props);

        this.state = {
            produto: {},
            redirect: false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:8080/produtos/${id}`)
        .then(data => {
            data.json().then(data => {
                this.setState({produto: data});
            });
        })
    }

    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to="/produtos" />
        }else {
            return (
                <fieldset>
                    <legend>Deletar Poduto</legend>
                    <div className="produto-delete">
                        <label htmlFor="nome">{this.state.produto.nome}</label>
                        <p>Tem certeza que deseja deletar?</p>

                        <button onClick={this.handleClick}>Remover</button>
                        <br /> <br />
                        <Link to={`/produtos`}>Voltar</Link>
                    </div>
                </fieldset>
            )
        }
    }

    handleClick = event => {
        const {id} = this.props.match.params;

        fetch(`http://localhost:8080/produtos/${id}`, {
            method: "delete"
        })
        .then(data => {
            if(data.ok){
                this.setState ({ redirect: true})
            }
        })

        event.preventDefault();
    };
}
export default DeletarProduto;