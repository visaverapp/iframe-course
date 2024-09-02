export const getSearchParamFromURL = (url: string | undefined, param: string) => {
  let result;
  if (url) {
    result = new URLSearchParams(url).get(param);
  }

  return result ?? '';
};
