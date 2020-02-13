import React from 'react';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment(),
      currentDay: moment().format('DD'),
      currentMonth: moment().format('MM'),
      currentYear: moment().format('YYYY'),
      countdownYear: moment().format('YYYY'),
      christmasDay: 1225 // MMDD format
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
    // If after Christmas Day, increment currentYear so the time starts a new countdown
    if ((this.state.now.format('MMDD') > this.state.christmasDay) && this.state.countdownYear <= this.state.now.format('YYYY'))  {
      var newYear = (Number(this.state.countdownYear) + 1);
      this.setState({
        countdownYear: newYear
      });
    };

    var today = moment([2020, 2, 13]);
    var christmasDay = moment([2020, 12, 25]);
    console.log(today);
    console.log(christmasDay);

    return (
      <div>
        <h1>Count Down To Christmas</h1>
        <p>Today is {this.state.now.format('LL')} and it is {this.state.now.format('LTS')}</p>
    <p>Christmas {this.state.countdownYear} is in {christmasDay.diff(today)}</p>

      </div>
    );
  }
}

export default App;
