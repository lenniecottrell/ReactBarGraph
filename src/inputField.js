import './App.css';
import React from 'react';

class InputNewAmount extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     amount: props.amount
    };
  }

  handleChange = (event) => {
    this.setState({amount: event.target.value});
  }

  handleButtonClicked() {
    console.log(this.state.amount);
  }

  render() {
    return (
      <form action="submit" className="amount-input-field">
        <p>Enter an amount:</p>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.amount}/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}



export default InputNewAmount;