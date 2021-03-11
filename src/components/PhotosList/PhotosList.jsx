import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader';
import selector from './PhotosList.selector';
import { clearState, loadPhotos } from '../../store/ducks/photos/photos';
import PropTypes from 'prop-types';

import styles from './PhotosList.module.scss';

const componentPropTypes = {
  limit: PropTypes.number,
  albumId: PropTypes.number
}

const PhotosList = ({ limit, albumId }) =>  {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector(selector)

  useEffect(() => {
    dispatch(loadPhotos(0, limit, albumId))

    return () => dispatch(clearState('items'))
  }, [])

  const loadMore = () => {
    const currentPhotos = photos.length
    dispatch(loadPhotos(currentPhotos, limit, albumId))
  }

  return (
    <div className={styles.PhotosList}>
      <div className={styles.container}>
        {photos.map(photo => {
          return <Link to={`/photos/${photo.id}`} key={photo.id}><img src={photo.thumbnailUrl} alt={photo.title} /></Link>
        })}
      </div>
      <div className={styles.controls}>
        <Loader loaded={!isLoading}>
          <span onClick={loadMore}>Load more</span>
        </Loader>
      </div>
    </div>
  );
}

PhotosList.propTypes = componentPropTypes;

export default PhotosList;