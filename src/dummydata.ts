import { Model } from './screens/ModelsScreen';

export const dummyModels: Array<Model> = [
    {
        id: 1,
        name: 'foo',
        categories: [
            {
                id: 1,
                name: 'bar',
                items: [
                    {
                        id: 1,
                        image_url: 'https://kek.jpeg',
                    },
                    {
                        id: 2,
                        image_url: 'https://kek.jpeg',
                    },
                ],
            },
            {
                id: 2,
                name: 'baz',
                items: [
                    {
                        id: 3,
                        image_url: 'https://kek.jpeg',
                    },
                    {
                        id: 4,
                        image_url: 'https://kek.jpeg',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'bar',
        categories: [
            {
                id: 1,
                name: 'bar',
                items: [
                    {
                        id: 1,
                        image_url: 'https://kek.jpeg',
                    },
                    {
                        id: 2,
                        image_url: 'https://kek.jpeg',
                    },
                ],
            },
            {
                id: 2,
                name: 'baz',
                items: [
                    {
                        id: 3,
                        image_url: 'https://kek.jpeg',
                    },
                    {
                        id: 4,
                        image_url: 'https://kek.jpeg',
                    },
                ],
            },
        ],
    },
];
