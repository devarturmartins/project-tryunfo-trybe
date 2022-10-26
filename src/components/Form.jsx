// import PropTypes from 'prop-types';
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
            type="text"
          />
        </label>

        <label htmlFor="descriptionCard">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
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
            value={ cardImage }
            onChange={ onInputChange }
          />
          <input type="file" name="" id="" />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            name="raridade"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="check"
            id="check"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

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

// Form.propTypes = {
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequire,
//   cardImage: PropTypes.string.isRequire,
//   cardName: PropTypes.string.isRequire,
//   cardRare: PropTypes.string.isRequire,
//   cartTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
//   isSaveButtonDisable: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
