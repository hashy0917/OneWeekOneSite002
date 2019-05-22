import React from 'react';
import { render } from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import anime from 'animejs';

// import Animation from './Animation'

class Box extends React.Component{
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    const { translateX, translateY } = this.props;
    anime({
      targets: this.box,
      translateX: { value: translateX },
      translateY: { value: translateY },
      duration: 2000
    });
  };

  render() {
    return (
      <div ref={box => (this.box = box)}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    translateX: 0,
    translateY: 0
  };

  render() {
    const { translateX, translateY } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              // translateX: translateX + 10,
              translateY: translateY + 10
            })}
        >
          +10
        </button>
        <Box translateX={translateX} translateY={translateY} />
      </div>
    );
  }
}

export default App;
