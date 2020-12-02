import { Comment } from './comment';

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}
