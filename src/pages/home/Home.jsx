import React from 'react';
import PhotosList from '../../components/PhotosList/PhotosList';

import styles from './Home.module.scss';

const Home = () =>  {

    return (
      <div className={styles.Home}>
        <h1>Photos</h1>
        <PhotosList limit={6} />
      </div>
    );

}

export default Home;