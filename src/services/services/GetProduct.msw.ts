import { http, HttpResponse } from 'msw';
import { ProductDTO } from '../api/Product';

const ProductResponseMock: ProductDTO[] = [
  {
    id: '1',
    title: 'Innovative Widget',
    description: 'This is the description for the Innovative Widget.',
    url: 'https://picsum.photos/200/200',
    upvotes: 0,
    categories: ['1'],
    createdAt: new Date('2024-01-31T10:00:00Z'),
    updatedAt: new Date('2024-01-31T10:30:00Z'),
  },
  {
    id: '2',
    title: 'TechGizmo Pro',
    description: 'Description for the TechGizmo Pro goes here.',
    url: 'https://picsum.photos/200/200',
    upvotes: 5,
    categories: ['1', '2'],
    createdAt: new Date('2024-01-31T11:15:00Z'),
    updatedAt: new Date('2024-01-31T11:45:00Z'),
  },
  {
    id: '3',
    title: 'Infinite Wonder Device',
    description: 'The Infinite Wonder Device is an amazing product.',
    url: 'https://picsum.photos/200/200',
    upvotes: 20,
    categories: ['2'],
    rating: 4.5,
    createdAt: new Date('2024-01-31T12:30:00Z'),
    updatedAt: new Date('2024-01-31T13:00:00Z'),
  },
  {
    id: '4',
    title: 'GadgetMaster 5000',
    description: 'The description for the GadgetMaster 5000 is provided here.',
    url: 'https://picsum.photos/200/200',
    upvotes: 15,
    categories: ['3'],
    createdAt: new Date('2024-01-31T14:00:00Z'),
    updatedAt: new Date('2024-01-31T14:30:00Z'),
  },
  {
    id: '5',
    title: 'Revolutionary Tech Gear',
    description: 'Check out this awesome Revolutionary Tech Gear.',
    url: 'https://picsum.photos/200/200',
    upvotes: 0,
    categories: ['1', '3'],
    createdAt: new Date('2024-01-31T15:00:00Z'),
    updatedAt: new Date('2024-01-31T15:30:00Z'),
  },
];

export const listProductsMsw = http.get(
  `${process.env.VITE_API_URL}/products`,
  () => HttpResponse.json(ProductResponseMock),
);
