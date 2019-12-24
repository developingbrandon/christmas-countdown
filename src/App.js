import React from 'react';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment()
     // today: moment().format('l'),
     // time: moment().format('LTS')
    };
  }

  componentDidMount = () => {
    this.timer = setInterval(
      () => this.second(),
      1000
    );
  }

  componentWillUnmount =() => {
    clearInterval(this.timer);
  }

  second = () => {
    this.setState({
      now: moment()
    });
  }

  render() {
   // console.log(this.state.time);
    return (
      <div>
        <h1>Count Down To Christmas</h1>
        <p>Today is {this.state.now.format('l')} and it is {this.state.now.format('LTS')}</p>

      </div>
    );
  }
}

export default App;
