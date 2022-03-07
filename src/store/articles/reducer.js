import { fetch_statuses } from '../../components/Utils/constants';
import {
  get_articles_failure,
  get_articles_request,
  get_articles_success,
} from './action';

const initialState = {
  data: [],
  error: null,
  status: fetch_statuses.idle,
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_articles_request: {
      return {
        ...state,
        error: null,
        status: fetch_statuses.request,
      };
    }
    case get_articles_success: {
      return {
        ...state,
        data: action.payload,
        status: fetch_statuses.success,
      };
    }
    case get_articles_failure: {
      return {
        ...state,
        status: fetch_statuses.failure,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
