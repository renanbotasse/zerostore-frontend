export const displayDetails = [
    {
        title: 'Discover Your Next Adventure',
        subtitle: 'GAMES',
        callToAction: 'GAMES',
        image: 'https://i.ibb.co/qxzXW3K/games.png',
        backgroundColor: 'bg-[#aba798]',
        reverse: false,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: 'game',
        },
    },
    {
        title: 'Unlock Nostalgic Gaming Experiences',
        subtitle: 'CONSOLES',
        callToAction: 'CONSOLES',
        image: 'https://i.pinimg.com/originals/0a/46/a1/0a46a1b92bbba78ed97a06808d5cf5a6.gif',
        backgroundColor: 'bg-[#dee8f3]',
        reverse: true,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: 'console',
        },
    },
    {
        title: 'Stay Up-to-Date with the Latest Releases',
        subtitle: 'NEW',
        callToAction: 'NEW',
        image: "https://i.ibb.co/C2V2mF9/newgame.png",
        backgroundColor: 'bg-[#8c000f]',
        reverse: true,
        filterRedux: {
            product_sale: false,
            product_new: true,
            product_type: null,
        },
    },
    {
        title: 'Score Big with Monthly Deals',
        subtitle: 'SALES',
        callToAction: 'SALES',
        image: 'https://art.pixilart.com/2d29fbba12830ae.png',
        backgroundColor: 'bg-[#bca38b]',
        reverse: false,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: null,
        },
    }
];