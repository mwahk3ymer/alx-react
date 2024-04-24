import React from 'react';
import { AppProvider } from './AppContext';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [],
    };
  }

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id),
    }));
  };

  render() {
    return (
      <AppProvider>
        <div className="App">
          <Notifications listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead} />
          <CourseList />
          <Footer />
        </div>
      </AppProvider>
    );
  }
}

export default App;
