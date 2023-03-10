import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
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
      <form>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            id="name"
            name="cardName"
            type="text"
          />
        </label>

        <label htmlFor="descriptionCard">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="descriptionCard"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          >
            Description
          </textarea>
        </label>

        <label htmlFor="numberAttr01">
          Attr01
          <input
            data-testid="attr1-input"
            id="numberAttr01"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="numberAttr02">
          Attr02
          <input
            data-testid="attr2-input"
            id="numberAttr02"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="numberAttr03">
          Attr03
          <input
            data-testid="attr3-input"
            id="numberAttr03"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="img">
          Imagem
          <input
            data-testid="image-input"
            id="img"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <input type="file" name="" id="" />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {
          hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="check">
              Super Trunfo
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id="check"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )
        }
        <button
          type="button"
          id="btn"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
