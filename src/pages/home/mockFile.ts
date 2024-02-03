import { Product } from '../../services/api/Product';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Innovative Widget',
    description: 'This is the description for the Innovative Widget.',
    url: 'https://picsum.photos/200/200',
    upvotes: 10,
    createdAt: new Date('2024-01-31T10:00:00Z'),
    updatedAt: new Date('2024-01-31T10:30:00Z'),
  },
  {
    id: '2',
    title: 'TechGizmo Pro',
    description: 'Description for the TechGizmo Pro goes here.',
    url: 'https://picsum.photos/200/200',
    upvotes: 5,
    createdAt: new Date('2024-01-31T11:15:00Z'),
    updatedAt: new Date('2024-01-31T11:45:00Z'),
  },
  {
    id: '3',
    title: 'Infinite Wonder Device',
    description: 'The Infinite Wonder Device is an amazing product.',
    url: 'https://picsum.photos/200/200',
    upvotes: 20,
    createdAt: new Date('2024-01-31T12:30:00Z'),
    updatedAt: new Date('2024-01-31T13:00:00Z'),
  },
  {
    id: '4',
    title: 'GadgetMaster 5000',
    description: 'The description for the GadgetMaster 5000 is provided here.',
    url: 'https://picsum.photos/200/200',
    upvotes: 15,
    createdAt: new Date('2024-01-31T14:00:00Z'),
    updatedAt: new Date('2024-01-31T14:30:00Z'),
  },
  {
    id: '5',
    title: 'Revolutionary Tech Gear',
    description: 'Check out this awesome Revolutionary Tech Gear.',
    url: 'https://picsum.photos/200/200',
    upvotes: 8,
    createdAt: new Date('2024-01-31T15:00:00Z'),
    updatedAt: new Date('2024-01-31T15:30:00Z'),
  },
];