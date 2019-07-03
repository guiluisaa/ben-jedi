import { parse } from 'query-string';

const fromUrlToQuery = (url: string, modelName: string) =>
  parse(url.split(`/${modelName}/`)[1]);

export default fromUrlToQuery;
