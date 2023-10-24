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
          '8:00 AM - 9:30 AM': 'Math Class',
          '10:00 AM - 11:30 AM': 'Science Lab',
          '12:00 PM - 1:30 PM': 'History Class',
          '2:00 PM - 3:30 PM': 'English Class',
          '4:00 PM - 5:30 PM': 'Physical Education',
        },
        Tuesday: {
          '8:00 AM - 9:30 AM': 'Geography Class',
          '10:00 AM - 11:30 AM': 'Art Class',
          '12:00 PM - 1:30 PM': 'Music Class',
          '2:00 PM - 3:30 PM': 'Computer Science',
          '4:00 PM - 5:30 PM': 'Spanish Class',
        },
        Wednesday: {
          '8:00 AM - 9:30 AM': 'Chemistry Class',
          '10:00 AM - 11:30 AM': 'Biology Lab',
          '12:00 PM - 1:30 PM': 'Physics Class',
          '2:00 PM - 3:30 PM': 'Physical Education',
          '4:00 PM - 5:30 PM': 'History Class',
        },
        Thursday: {
          '8:00 AM - 9:30 AM': 'Math Class',
          '10:00 AM - 11:30 AM': 'English Class',
          '12:00 PM - 1:30 PM': 'Chemistry Lab',
          '2:00 PM - 3:30 PM': 'Geography Class',
          '4:00 PM - 5:30 PM': 'French Class',
        },
        Friday: {
          '8:00 AM - 9:30 AM': 'Physical Education',
          '10:00 AM - 11:30 AM': 'History Class',
          '12:00 PM - 1:30 PM': 'Spanish Class',
          '2:00 PM - 3:30 PM': 'Computer Science',
          '4:00 PM - 5:30 PM': 'Biology Class',
        },
      },
    };
  }

  render() {
    return (
      <div className="timetable">
        <h1>Timetable</h1>
        <table>
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