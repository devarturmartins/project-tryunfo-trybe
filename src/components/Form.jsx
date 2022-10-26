import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input data-testid="name-input" id="name" type="text" />
        </label>

        <label htmlFor="descriptionCard">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="descriptionCard"
            cols="30"
            rows="10"
          >
            Description
          </textarea>
        </label>

        <label htmlFor="numberAttr01">
          Attr01
          <input data-testid="attr1-input" id="numberAttr01" type="number" />
        </label>

        <label htmlFor="numberAttr02">
          Attr02
          <input data-testid="attr2-input" id="numberAttr02" type="number" />
        </label>

        <label htmlFor="numberAttr03">
          Attr03
          <input data-testid="attr3-input" id="numberAttr03" type="number" />
        </label>

        <label htmlFor="img">
          Imagem
          <input data-testid="image-input" id="img" type="text" />
          <input type="file" name="" id="" />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input" name="raridade" id="raridade">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          Super Trunfo
          <input data-testid="trunfo-input" type="checkbox" name="check" id="check" />
        </label>

        <button type="button" id="btn" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
