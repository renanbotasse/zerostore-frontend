export type FilterPageInitialState = {
    product_platform: string | null;
    product_type: string | null;
    product_status: string | null;
};


export type FilterDetail = {
    id: string;
    label: string;
    value: string;
    counter?: number;
    link?: string;
    color?: string;
};

export type Node = {
    id: string;
    summary: string;
    type: string;
    details: FilterDetail[];
};

export const filtersData: Node[] = [
    {
        id: 'acc2',
        summary: 'Category',
        type: 'category',
        details: [
            {
                id: 'CONSOLES',
                label: 'Consoles',
                value: 'CONSOLE',
                counter: 30,
            },
            {
                id: 'SHOES',
                label: 'Video Games',
                value: 'GAME',
                counter: 28,
            },
            {
                id: 'ACCESSORIES',
                label: 'Accessories',
                value: 'ACCESSORIES',
                counter: 56,
            }
        ],
    },
    {
        id: 'acc4',
        summary: 'Platform',
        type: 'checkbox',
        details: [
            { id: 'platform2', label: 'Super Nintendo', value: 'SNES' },
            { id: 'platform3', label: 'Nintendo', value: 'NES' },
            { id: 'platform4', label: 'Genesis', value: 'GENESIS' },
            { id: 'platform5', label: 'Master System', value: 'MASTER' },
            { id: 'platform6', label: 'Playstation One', value: 'PSX' },
            { id: 'platform7', label: 'Nintendo 64', value: 'N64' },
            { id: 'platform8', label: 'Ayaneo', value: 'AYANEO' },
            { id: 'platform9', label: 'GBA', value: 'GBA' }
        ],
    }
];