import { fromUrlToId } from '@/utils';

const specieSerializer = (record: any) => ({
  id: fromUrlToId(record.url, 'species'),
  name: record.name
});

const speciesSerializer = (records: any[]) => records.map(specieSerializer);

export { specieSerializer, speciesSerializer };
