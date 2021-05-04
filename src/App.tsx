import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Page } from './components';
import { Accomodation, Results, Search } from './containers';

const App = () =>  {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Page>
          <Switch>
            <Route path="/results/:accomodationId">
              <Accomodation />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Page>
        </Fragment>
    </BrowserRouter>
  );
}

export default App;
