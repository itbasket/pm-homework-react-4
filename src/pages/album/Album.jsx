import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearState, loadAlbum } from '../../store/ducks/album/album';
import selector from './Album.selector';
import PhotosList from '../../components/PhotosList/PhotosList';

import styles from './Album.module.scss';

const Album = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selector)
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadAlbum(id))

    return () => dispatch(clearState())
  }, [])

  return (
    <div className={styles.Album}>
      <h1>Album page</h1>
      <h2>{data?.title}</h2>
      <p>{data?.user?.name} - <a href={`mailto:${data?.user?.email}`}>{data?.user?.email}</a></p>
      <PhotosList limit={6} albumId={Number(id)} />
    </div>
  );

}

export default Album;