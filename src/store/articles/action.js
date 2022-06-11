import { apiURL } from '../../components/Utils/constants';

export const get_articles_request = 'articles::get_articles_request';
export const get_articles_success = 'articles::get_articles_success';
export const get_articles_failure = 'articles::get_articles_failure';

export const getArticlesRequest = () => ({
  type: get_articles_request,
});

export const getArticlesSuccess = (articles) => ({
  type: get_articles_success,
  payload: articles,
});

export const getArticlesFailure = (error) => ({
  type: get_articles_failure,
  payload: error,
});

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesRequest());

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    dispatch(getArticlesSuccess(result));
  } catch (err) {
    dispatch(getArticlesFailure(err));
    console.warn(err);
  }
};
