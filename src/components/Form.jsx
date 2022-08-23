import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Adicionar nova carta</h1>
        </div>

        <form>
          <label htmlFor="name-input">
            Nome
            <input type="text" data-testid="name-input" />
          </label>

          <label htmlFor="description-input">
            Descrição
            <textarea data-testid="description-input" />
          </label>

          <label htmlFor="attr1-input">
            Attr01
            <input type="number" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2-input">
            Attr02
            <input type="number" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3-input">
            Attr03
            <input type="number" data-testid="attr3-input" />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input type="text" data-testid="image-input" />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
        </form>
        <button type="submit" data-testid="save-button">salvar</button>
      </div>
    );
  }
}

export default Form;
