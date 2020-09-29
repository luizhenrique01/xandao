import React from 'react';
import axios from 'axios';

import './App.css';

// css do XANDAO
const style = {
  
  perfilContainer: {
    "display": "inline-block",
    "width": "20%",
    
  },
  perfilImagem: {
    "margin": "0 auto",
    "width": "100%"
  },
  "perfilTexto": { "textAlign": "center" },
  fundo:{
    "background":"url(https://i.ytimg.com/vi/H4IYzmX9H7g/maxresdefault.jpg) no-repeat fixed center",
    "display": "grid",
    "grid-template-columns":" 1fr"
  }
  
}

// esse daqui sao os componentes para deixar o XANDAO bolado
const Perfil = (props) => (
  <div style={style.fundo}>
  <div style={style.perfilContainer}>
    <img style={style.perfilImagem}
      src={props.imagem}></img>
    <p style={ style.perfilTexto }>
      { props.nome }
    </p>
    <button onClick={ () => props.clone(props.index) }>MULTIPLICAR DIVINIDADE</button>
    <button onClick={ () => props.alteraNome(props.index) }>+1 DEMONIO MORTO</button>
  </div>

  </div>
);

// constructor para variavel do SUPER XANDAO
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //VARIAVEL DO ULTIMO HEROI MATADOR DE DEMONIOS
      ULTIMOHEROIDATERRA: []
    };
  
    this.atualizaDados();
  }

  // conexao com a api
  atualizaDados = async () => {
    const res = await axios.get("http://localhost:8081/ULTIMOHEROIDATERRA") 
    if(res.data) {
      this.setState({ ULTIMOHEROIDATERRA: res.data });
    }
  }
  // FUNCAO PARA O DOUBLE BICEPS
  ADICIONAXANDAO = async (index) => {
    const XANDAO = this.state.ULTIMOHEROIDATERRA[index];
    XANDAO.nome += " - 💪🏻 "; 
    await axios.put(`http://localhost:8081/ULTIMOHEROIDATERRA/${index}`, XANDAO);
    this.atualizaDados()
  }
    //CLONA O DOUBLE BICEPS
  clone = async (index) => {
    const XANDAO = this.state.ULTIMOHEROIDATERRA[index];
    await axios.post("http://localhost:8081/ULTIMOHEROIDATERRA", XANDAO);
    this.atualizaDados()
  }

  render() {
    return (
      <div className="App">
       <h1>GLEISON, SENTE A PRESSAO DO MAIOR MATADOR DE DEMONIOS DO MUNDO, E ACEITE O ATRASDO PFVR</h1> 
      {
        
        this.state.ULTIMOHEROIDATERRA.map((XANDAO, index) => 
           (<Perfil key={index} index={index} 
            alteraNome={ this.ADICIONAXANDAO }
            clone={ this.clone } {...XANDAO} />) 
        )
      }
    </div>
    )
  }
}

export default App;
