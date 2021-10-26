import React from 'react';
import { Route } from 'react-router';
import Header from '../components/client/header/Header'
const withLayout = WrappedComponent => {
  return ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={routeProps => (
        
        <WrappedComponent>
          <Header />
          <Component {...routeProps} scroll={rest.scroll}/>
        </WrappedComponent>
      )}
    />
  );
};

export default withLayout;