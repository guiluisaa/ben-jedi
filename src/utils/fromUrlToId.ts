const fromUrlToId = (url: string, modelName: string) =>
  url.split(`/${modelName}/`)[1].split('/')[0];

export default fromUrlToId;
