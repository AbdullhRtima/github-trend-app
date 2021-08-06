import React from 'react';
import { ConfigProvider, Typography } from "antd";
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query'
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import TrendingDevs from './pages/TrendingDevs';
import { ROUTE_PATH } from './lib/helpers/router';
import TrendingRepo from './pages/TrendingRepo';

// import style 
import './App.scss';


// constant 
const { Text } = Typography;
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <ErrorBoundary fallback={<Text> Something went wrong </Text>}>
          <Helmet>
            <title>Trend on GitHub</title>
            <meta name="description" content="trend developers and Repository on Github" />
          </Helmet>
          <Switch>
            <Route
              path={ROUTE_PATH.TREND_DEV}
              exact={true}
              render={() => <TrendingDevs />}
            />
            <Route
              path={ROUTE_PATH.TREND_REPO}
              exact={true}
              render={() => <TrendingRepo />}
            />
          </Switch>
        </ErrorBoundary>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
