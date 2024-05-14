import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest, logout } from '../actions/userActions'; // Ensure these are correctly imported
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.state = {
      listNotifications: [
        { id: 1, value: 'New course available', type: 'default' },
        { id: 2, value: 'New resume available', type: 'urgent' },
        { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
      ]
    };
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter(keep => keep.id !== id);
    this.setState({
      listNotifications: newList
    });
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn, displayDrawer, loginRequest, hideNotificationDrawer, displayNotificationDrawer } = this.props;

    return (
      <React.Fragment>
        <Notification
          listNotifications={this.state.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className={css(bodyStyles.App)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={loginRequest} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Random Text</p>
          </BodySection>
          <div className={css(footerStyles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const bodyStyles = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh'
  }
});

const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic'
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  loginRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible')
});

const mapDispatchToProps = {
  loginRequest,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
