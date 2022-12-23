import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    created_at: new Date().getTime(),
    name: 'Tesla',
  },
  {
    id: uuid(),
    created_at: new Date().getTime(),
    name: 'Ford',
  },
  {
    id: uuid(),
    created_at: new Date().getTime(),
    name: 'Nissan',
  },
];
