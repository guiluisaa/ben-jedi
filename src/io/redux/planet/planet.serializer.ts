import { fromUrlToId } from '@/utils';

const planetSerializer = (record: any) => ({
  id: fromUrlToId(record.url, 'planets'),
  name: record.name
});

const planetsSerializer = (records: any[]) => records.map(planetSerializer);

export { planetSerializer, planetsSerializer };
