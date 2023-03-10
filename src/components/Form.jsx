import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Form extends Component {
  validaSuperTrunfo = (verificaTrunfo) => {
    if (!verificaTrunfo) {
      return <p>Super Trybe Trunfo</p>;
    }
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <div>
          <h1>Adicionar nova carta</h1>
        </div>

        <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>

          <label htmlFor="attr1-input">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="attr2-input">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="attr3-input">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            { this.validaSuperTrunfo(hasTrunfo)}
            { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
            />}
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardImage,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardRare,
              cardTrunfo }) }
          >
            salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
  hasTrunfo: PropType.bool,
  isSaveButtonDisabled: PropType.bool,
  onInputChange: PropType.func,
  onSaveButtonClick: PropType.func,
}.isRequired;
