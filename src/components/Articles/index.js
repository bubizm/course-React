import { useEffect, useState } from 'react';
import { apiURL } from '../Utils/constants';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/articles/action';
import {
  selectArticles,
  selectArticlesLoading,
  selectError,
} from '../../store/articles/selectors';

export const Articles = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const getData = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Articles</h3>
      <button onClick={getData}>Reload</button>
      {error && <h4>Errrror</h4>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
