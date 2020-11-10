import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../routes.json';
import { actions as mainActions } from '../../reducers/main';

class Home extends Component {


  render() {

    return (
      <div className="Home container">
        <h1>Welcome</h1>
        <Link to={routes.WELCOME_FLOW}>
          <span>Acceder</span>
        </Link>
      </div>
    );
  }
}

/* DISPATCH TO REDUX FUNCTIONS */
const mapDispatchToProps = () => ({
  // getWelcomeFlow: () => dispatch(mainActions.getWelcomeFlow()),
});
/* READS FROM REDUCERS */
const mapStateToProps = () => ({
  // welcomeFlow: state.main.welcomeFlow,
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
