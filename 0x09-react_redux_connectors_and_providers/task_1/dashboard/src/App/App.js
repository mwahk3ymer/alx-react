import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes for defining propTypes
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { AppProvider, user } from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActionCreators';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn') || false,
    displayDrawer: state.get('isNotificationDrawerVisible') || false
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: user,
    });
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <AppProvider
        value={{
          user: user,
          logOut: this.logOut,
        }}
      >
        <React.Fragment>
          <Notification
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
          />
          <div className={css(bodyStyles.App)}>
            <Header />
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Random Text</p>
            </BodySection>
            <div className={css(footerStyles.footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

const bodyStyles = StyleSheet.create({
  App: {
    position: "relative",
    minHeight: "100vh",
  },
});

const footerStyles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "3px solid #E11D3F",
    padding: "1rem",
    fontStyle: "italic",
  },
});

// Define propTypes for the component
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired
};

// Define defaultProps for the component
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
