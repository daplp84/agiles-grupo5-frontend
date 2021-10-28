import categories from '../util/category';

export const getOrder = (userId, barId) => {
    return {
        id: '1',
        userId: '1',
        barId: '1',
        state: 'Pending',
        products: [
            {
                id: '1',
                name: 'Cerveza Golden X',
                price: 300.65,
                quantity: 2,
                category: categories.DRINKS,
                state: 'Delivered'
            },
            {
                id: '2',
                name: 'Hamburguesa',
                price: 500.00,
                quantity: 1,
                category: categories.FOODS,
                state: 'Pending'            
            },
            {
                id: '3',
                name: 'Helado',
                description: 'Helado 3 sabores',
                price: 450,
                quantity: 1,
                category: categories.DESSERTS,
                state: 'Ordered'
            }
        ]
    };
 }