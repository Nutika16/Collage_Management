import React, { Component } from 'react';
import './Timetable.css'; // Import the CSS file

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      times: [
        '8:00 AM - 9:30 AM',
        '10:00 AM - 11:30 AM',
        '12:00 PM - 1:30 PM',
        '2:00 PM - 3:30 PM',
        '4:00 PM - 5:30 PM',
      ],
      schedule: {
        Monday: {
          '8:00 AM - 9:30 AM': 'PA',
          '10:00 AM - 11:30 AM': 'FEE',
          '12:00 PM - 1:30 PM': 'Free',
          '2:00 PM - 3:30 PM': 'NALR',
          '4:00 PM - 5:30 PM': 'Backend',
        },
        Tuesday: {
          '8:00 AM - 9:30 AM': 'Backend',
          '10:00 AM - 11:30 AM': 'PA',
          '12:00 PM - 1:30 PM': 'Free',
          '2:00 PM - 3:30 PM': 'VES',
          '4:00 PM - 5:30 PM': 'NALR',
        },
        Wednesday: {
          '8:00 AM - 9:30 AM': 'FEE',
          '10:00 AM - 11:30 AM': 'Backend',
          '12:00 PM - 1:30 PM': 'Free',
          '2:00 PM - 3:30 PM': 'VES',
          '4:00 PM - 5:30 PM': 'NALR',
        },
        Thursday: {
          '8:00 AM - 9:30 AM': 'FEE',
          '10:00 AM - 11:30 AM': 'PA',
          '12:00 PM - 1:30 PM': 'Free',
          '2:00 PM - 3:30 PM': 'VES',
          '4:00 PM - 5:30 PM': 'NALR',
        },
        Friday: {
          '8:00 AM - 9:30 AM': 'FEE',
          '10:00 AM - 11:30 AM': 'NALR',
          '12:00 PM - 1:30 PM': 'Free',
          '2:00 PM - 3:30 PM': 'Backend',
          '4:00 PM - 5:30 PM': 'PA',
        },
      },
    };
  }

  render() {
    return (
      <div className="timetable-container">
        <h1 className='heading'>Timetable</h1>
        <table className="timetable">
          <thead>
            <tr>
              <th></th>
              {this.state.times.map((time, index) => (
                <th key={index}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.days.map((day, index) => (
              <tr key={index}>
                <th>{day}</th>
                {this.state.times.map((time, idx) => (
                  <td
                    key={idx}
                    className={this.state.schedule[day] && this.state.schedule[day][time] ? 'has-event' : ''}
                  >
                    {this.state.schedule[day] && this.state.schedule[day][time]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TimeTable;