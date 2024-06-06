import { SfButton } from '@storefront-ui/react';
import ayaneoPocket from '../../assets/ayaneopocket.png'
import ayaneoPocketFocus from '../../assets/ayaneopocket2.png'
import { ayaneoVideo, ayaneoImg1, ayaneoImg2, ayaneoImg3, ayaneoImg4, ayaneoInfo, ayaneoTag } from './ayaneoVideo'
import { motion, useAnimation } from "framer-motion";
import ProductDescription from '../productDescription/index'
import { useDispatch } from 'react-redux';
import { productRedux } from '../../store/slices/productSlice/index';



export default function Ayaneo() {
    const dispatch = useDispatch();

    const imageVariantsLeft = {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: {
            x: -10,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1
            }
        }
    };

    const imageVariantsRight = {
        offscreen: {
            x: -10,
            opacity: 0
        },
        onscreen: {
            x: 120,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };

    const product = {
        product_reference: 9001,
        product_name: "Pocket DMG",
        product_description: "AYANEO POCKET pays tribute to classic handheld devices. We are Officially launching the new design: POCKET, invoking your childhood memories.",
        product_price: 250.00,
        product_quantity: 100,
        product_platform: "Ayaneo",
        product_type: "CONSOLE",
        product_img: [
            "https://zerostore.s3.eu-north-1.amazonaws.com/products/consoles/snes+snap1.jpg",
            "https://zerostore.s3.eu-north-1.amazonaws.com/products/consoles/snes+snap2.jpg",
            "https://zerostore.s3.eu-north-1.amazonaws.com/products/consoles/snes+snap3.jpg"
        ],
        product_video: "https://youtu.be/HRYbRgl7EeQ",
        product_status: "NORMAL"
    }
    dispatch(productRedux(product));

    return (
        <div>

            <div className="bg-neutral-100 z-[-2]">
                <picture>
                    <video
                        src={ayaneoVideo}
                        className="pt-20 w-full h-screen object-cover z-[-1]"
                        autoPlay
                        loop
                        muted
                    />
                </picture>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="relative min-h-[576px] z-[-2] flex flex-col md:flex-row-reverse items-center bg-neutral-300">
                <motion.img
                    src={ayaneoImg3}
                    alt="Headphones"
                    className="md:w-1/2 z-[2] object-right"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={imageVariantsLeft}
                    viewport={{ once: false, amount: 0.8 }}
                />
                <div className="md:w-1/2 md:p-10 flex justify-center items-center">
                    <h1 className="mb-2 md:mb-4 font-extrabold text-2xl md:text-4xl text-center md:text-left">
                        {ayaneoInfo.textImg1}
                    </h1>
                </div>
            </div>


            {/* Section 2: Text Left, Image Right */}
            <div className="relative min-h-[576px] z-[-2] flex flex-col md:flex-row-reverse items-center bg-neutral-200">
                <div className="md:w-1/2 md:p-10 flex justify-center items-center">
                    <h1 className="mb-2 md:mb-4 font-extrabold text-2xl md:text-4xl text-center md:text-left">
                        {ayaneoInfo.textImg2}
                    </h1>
                </div>
                <motion.img
                    src={ayaneoImg2}
                    alt="Headphones"
                    className="md:w-1/2 z-[2] object-right"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={imageVariantsRight}
                    viewport={{ once: false, amount: 0.8 }}
                />
            </div>

            <div className="bg-neutral-100 z-[-2] object-center">
                <picture>
                    <img
                        src={ayaneoImg4}
                        className="h-screen z-[-1]"
                    />
                </picture>
            </div>

            <div className="mt-1 relative min-h-[576px] bg-neutral-100 z-[-2]">
                <div>
                    <picture>
                        <img
                            src={ayaneoPocket}
                            className="absolute z-[-1] object-cover"
                        />
                        <div className="pt-10">
                            <ProductDescription />

                        </div>
                    </picture>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}