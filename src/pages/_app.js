import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import Util from '../components/Util';
import actions from '../redux/action';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} actions={actions} />
        {/* <Confirm /> */}
        <Util
          {...pageProps}
          actions={actions}
        />
      </Provider>
    );
  }
}

// makeStore function that returns a new store for every request
const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
