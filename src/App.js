import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const maxValue = 90;
const minValue = 0;
const somaValues = 210;

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'raro',
    cardTrunfo: false,
    isDisabled: true,
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const validation = cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare === 0
      || Number(cardAttr1) > maxValue
      || Number(cardAttr2) > maxValue
      || Number(cardAttr3) > maxValue
      || Number(cardAttr1) < minValue
      || Number(cardAttr2) < minValue
      || Number(cardAttr3) < minValue
      || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > somaValues;
    this.setState({
      isDisabled: validation,
    });
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.isSaveButtonDisabled();
    });
  };

  render() {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isDisabled } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
