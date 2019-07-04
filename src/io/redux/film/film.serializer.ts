import { fromUrlToId } from '@/utils';

const charactersSerializer = (urls: string[]) =>
  urls.map(url => fromUrlToId(url, 'people'));

const filmSerializer = (record: any) => ({
  id: fromUrlToId(record.url, 'films'),
  title: record.title,
  episode_id: record.episode_id,
  characters: charactersSerializer(record.characters)
});

const filmsSerializer = (records: any[]) => records.map(filmSerializer);

export { filmSerializer, filmsSerializer };
