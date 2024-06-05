import sales from '/Users/renanb/Desktop/zerostore-frontend/src/assets/salesbaga.png';

export const displayDetails = [
    {
        title: 'Discover Your Next Adventure',
        subtitle: 'GAMES',
        callToAction: 'GAMES',
        image: 'https://i.ibb.co/qxzXW3K/games.png',
        backgroundColor: 'bg-[#aba798]',
        reverse: false,
        filterRedux: {
            product_type: 'GAME',
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
            product_type: 'CONSOLE',
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
            product_status: "NEW"
        },
    },
    {
        title: 'Score Big with Monthly Deals',
        subtitle: 'SALES',
        callToAction: 'SALES',
        image: sales,
        backgroundColor: 'bg-[#bca38b]',
        reverse: false,
        filterRedux: {
            product_status: "SALES"
        },
    }
];