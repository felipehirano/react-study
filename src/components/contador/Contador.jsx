import React, { Component } from 'react';
import './Contador.css';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} onChangePassoInput={ (value)=> {this.setState({passo : value})}}/>
                <Display valor={this.state.valor} />
                <Botoes onInc={this.inc} onDec={this.dec}/>
            </div>
        )
    }
}