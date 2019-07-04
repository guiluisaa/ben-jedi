import { fromUrlToId } from '@/utils';

const homeworldSerializer = (url: string) => fromUrlToId(url, 'planets');

const speciesSerializer = (urls: string[]) =>
  urls.map(url => fromUrlToId(url, 'species'));

const characterSerializer = (record: any) => ({
  id: fromUrlToId(record.url, 'people'),
  name: record.name,
  height: record.height,
  gender: record.gender,
  birth_year: record.birth_year,
  homeworld: homeworldSerializer(record.homeworld),
  species: speciesSerializer(record.species)
});

const charactersSerializer = (records: any[]) =>
  records.map(characterSerializer);

export { characterSerializer, charactersSerializer };
