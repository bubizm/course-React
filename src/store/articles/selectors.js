import { fetch_statuses } from '../../components/Utils/constants';

export const selectArticles = (state) => state.articles.data;
export const selectArticlesLoading = (state) =>
  state.articles.status === fetch_statuses.request;
export const selectError = (state) => state.articles.error;
