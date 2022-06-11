import {
  getArticles,
  getArticlesFailure,
  getArticlesRequest,
  getArticlesSuccess,
  get_articles_success,
} from '../action';

describe('getArticlesSuccess tests', () => {
  it('returns obj with type and payload', () => {
    const payload = [];
    const expected = {
      type: get_articles_success,
      payload,
    };

    const received = getArticlesSuccess(payload);
    expect(expected).toEqual(received);
  });
});

describe('getArticles test', () => {
  it('calls passed with arg "getArticlesReq"', () => {
    const mockDispatch = jest.fn();

    getArticles()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

  it('calls passed with arg "getArticlesSuc" if fetch was successful', async () => {
    const mockDispatch = jest.fn();
    const result = ['test'];

    fetchMock.mockResponseOnce(JSON.stringify(result));

    await getArticles()(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
  });

  it('calls passed with arg "getArticlesFail" if fetch was unsuccessful', async () => {
    const mockDispatch = jest.fn();
    const error = new Error('some error in dispatch');

    fetchMock.mockRejectOnce(error);

    await getArticles()(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure(error));
  });
});
