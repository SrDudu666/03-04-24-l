import React, {useState} from 'react'
import './App.css'


const cambio = {
  BRL: 1,    //REAL
  USD: 0.20, //DOLAR AMERICANO
  EUR: 0.18, //EURO
  GBP: 0.16, //LIBRA ESTERLINA
  JPY: 30.25 //IENE JAPONES
}

const Conversao = () => {
  const [quantidadeInicial, setQuantidadeInicial] = useState(0);
  const [quantidadeFinal, setQuantidadeFinal] = useState(0);
  const [conversaoInicial, setConversaoInicial] = useState('BRL');
  const [conversaoFinal, setConversaoFinal] = useState('USD');


const calculo = () => {
  const calc = cambio[conversaoInicial] / cambio[conversaoFinal];
  const valorFinal = quantidadeInicial / calc

  setQuantidadeFinal(valorFinal.toFixed(2));
};

return (
  <div className="conversao">
    <h2>Conversor de Moedas</h2>
  <div className="generico">

  <input 
    type="number"
    value={quantidadeInicial}
    onChange={(e) => setQuantidadeInicial(e.target.value)} 
    />

    <select
    value={conversaoInicial}
    onChange={(e) => setConversaoInicial(e.target.value)}>

      {Object.keys(cambio).map((parametro) => (
        <option key={parametro} value={parametro}>
          {parametro}
          </option>
      ))}
      </select>

      para

      <select
    value={conversaoFinal}
    onChange={(e) => setConversaoFinal(e.target.value)}>

      {Object.keys(cambio).map((parametro) => (
        <option key={parametro} value={parametro}>
          {parametro}
          </option>
      ))}
      </select>

      
    </div>
    <div className="botao">
    <button onClick={calculo}>Converter</button>
    </div>

    <p>{ `${quantidadeInicial} ${conversaoInicial} equivalente a ${quantidadeFinal} ${conversaoFinal}` }</p> 
    
    </div>
);

};

export default Conversao;