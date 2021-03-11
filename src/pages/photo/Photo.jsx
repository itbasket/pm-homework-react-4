import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader';
import { clearState, loadSinglePhoto } from '../../store/ducks/photos/photos';
import selector from './Photo.selector';

import styles from './Photo.module.scss';

const Photo = () => {
  const dispatch = useDispatch();
  const { photo, isLoading } = useSelector(selector)
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadSinglePhoto(id))

    return () => dispatch(clearState('active'))
  }, [])

  return (
    <div className={styles.Photo}>
      <h1>Single photo</h1>
      <Loader loaded={!isLoading} loadedClassName={styles.loadedContent}>
        <div className={styles.image}>
          <img src={photo.url} alt={photo.title} />
        </div>
        <div className={styles.description}>
          <p>
            {photo?.title}
          </p>
          <Link to={`/albums/${photo.albumId}`}>{photo?.album?.title}</Link>
        </div>
      </Loader>
    </div>
  );

}

export default Photo;