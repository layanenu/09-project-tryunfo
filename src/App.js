import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      arrayDeCartas: [],
      hasTrunfo: false,
    };
  }

  // fazendo com arrow function n precisa do bind
  // Na funcao handleChange, usa o target (onde foi realizado o evento) como parametro (nesse caso ja desestruturei)
  // vamos usar o name e o type do target (name: é o nome da label e o type é se é input tipo texto, tipo number ou checkbox...)
  // no type checkbox nao vamos pegar o value, mas sim a propriedade checked que é onde vai ser definido se esta checado ou nao
  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const numeroNoventa = 90;
      const numeroDuzentosEDez = 210;
      const somaDosAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if (
        cardName && cardDescription && cardImage && cardRare
        && cardAttr1 >= 0 && cardAttr1 <= numeroNoventa
        && cardAttr2 >= 0 && cardAttr2 <= numeroNoventa
        && cardAttr3 >= 0 && cardAttr3 <= numeroNoventa
        && somaDosAtributos <= numeroDuzentosEDez) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };
  // O segundo parâmetro do setState pode ser usado para alguma situação que você queira que aconteça assim que o estado for atualizado, como o botão de salvar, nesse caso,
  // onde o requisito pede que o botão só seja ativado após os campos do form estarem preenchidos.

  onSaveButtonClick = (objetoInfo) => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevState) => ({
      arrayDeCartas: [...prevState.arrayDeCartas, objetoInfo],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
      });
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      arrayDeCartas,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          arrayDeCartas.map((element) => (
            <Card
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardImage={ element.cardImage }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr3 }
              cardAttr3={ element.cardAttr3 }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
              key={ element.cardName }
            />))
        }
      </div>
    );
  }
}

export default App;
