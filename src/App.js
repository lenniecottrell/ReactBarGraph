import './App.css';
import React from 'react';
import Title from './title';
import InputNewAmount from './inputField';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: [
        {
          name: "Subscriptions",
          value: 200
        },
        {
          name: "Consulting",
          value: 150
        },
        {
          name: "Training",
          value: 115
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Graph 
          amounts = {this.state.amounts}
        />
      </div>
    )
  }
}

class Graph extends React.Component {
  state = {
    
  }

  renderLines() {
    return Array(10).fill(null).map((el, i) => (
      <Line
        left={i * 10}
        key={i}
        />
    ))
  }

  renderBars() {
    const { amounts } = this.props;

    let totalSales = amounts.reduce((total, saleName) => {
      return total + saleName.value;
    }, 0);

    return amounts.map((saleName) => {
      const percent = (saleName.value / totalSales) * 100;
      return (
        <Bar
          percent={percent}
          key={amounts.name}
        />
      )
    });
  }

  
  render() {
    return (
      <div className="graph-wrapper">
          <Title />
        <div className="graph">

          <BarTextContent 
            amounts={this.props.amounts}
          />
            <div className="bar-lines-container">
            { this.renderLines() }
            { this.renderBars() }
            </div>

        </div>

      </div>
    )
  }
}

// const Markers = () => {
//   const markerArr = Array(11).fill(null);

//   return (
//     <div className = "markers">
//       {
//         markerArr.map((el, i) => (
//           <span className="marker" style={{ left: `${i * 10}%` }}>
//             {i * 10}
//           </span>
//         ))
//       }
//     </div>
//   )
// }

const BarTextContent = ({ amounts }) => {
  return (
    <div className = "bar-text-content">
      {
        amounts.map((saleName) => (
          <div className="side-text">
            {saleName.name}: {`$${saleName.value}`}
              <InputNewAmount 
              amount={saleName.value}
              key={amounts.name}
              />
          </div>
        ))
      }
    </div>
  )
}

const Line = ({ left }) => {
  return (
    <div className="line"
    style={{ left: `${left}%`}} />
  )
}

const Bar = (props) => {
  return (
    <div className="bar" style={{ width: `${props.percent}%`}} /> 
  )
}


export default App;
