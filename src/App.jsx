import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Photo from './pages/photo/Photo';
import Album from './pages/album/Album';
import Home from './pages/home/Home';

import styles from './App.module.scss';

function App() {
  const routes = (
    <Switch>
      <Route path='/photos/:id' component={Photo} />
      <Route path='/albums/:id' component={Album} />
      <Route path='/' exact component={Home} />
      <Redirect to={'/'} />
    </Switch>
  )

  return (
    <div className={styles.App}>
      {routes}
    </div>
  );
}

export default App;
