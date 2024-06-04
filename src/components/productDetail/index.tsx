import GalleryProduct from "../galleryProduct";
import ProductDescription from "../productDescription";

export default function ProductDetail() {
    const productDetail = {
        "_id": "6643a82371c8e4f46d890c5f",
        "product_id": 11003,
        "product_name": "Metal Gear Solid",
        "product_description": "Metal Gear Solid takes place in an alternate history in which the Cold War continued into the 1990s, ending at some point near the end of the 20th century. Coming out of retirement, special agent Solid Snake is called back into the line of duty to take on rogue members of Foxhound, a crack government anti-terrorist squad threatening to launch nuclear-weapons on the White House unless they receive their $1 billion ransom. With only 24 hours to sabotage Foxhound's threat, Snake must infiltrate enemy lines, rescue the two hostages and thwart the terrorists' plans. The demons of his past will challenge him and his will as a soldier shall be tested, as Snake fights to save the world from nuclear devastation.",
        "product_price": 20,
        "product_available": 100,
        "product_platform": "PSX",
        "product_type": "game",
        "product_img": [
            "https://zerostore.s3.eu-north-1.amazonaws.com/PSX/Metal+Gear+Solid/Metal+Gear+Solid+(USA)-box.png",
            "https://zerostore.s3.eu-north-1.amazonaws.com/PSX/Metal+Gear+Solid/Metal+Gear+Solid+(USA)-snap1.png",
            "https://zerostore.s3.eu-north-1.amazonaws.com/PSX/Metal+Gear+Solid/Metal+Gear+Solid+(USA)-snap2.png"
        ],
        "product_new": true,
        "product_sales": false,
        "__v": 0,
        "product_vide": 'https://www.youtube.com/embed/vvL7bnlicmo',
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center w-full justify-center px-5 md:pl-36 md:pr-10 mt-28">
                <ProductDescription />
            </div>
            <div className="flex flex-col items-center w-full justify-center px-5 md:pl-36 md:pr-10">
                <GalleryProduct />
            </div>
        </div>
    );
}