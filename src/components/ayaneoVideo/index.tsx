import { SfButton } from '@storefront-ui/react';
import ayaneoPocket from '../../assets/ayaneopocket.png'
import ayaneoPocketFocus from '../../assets/ayaneopocket2.png'
import { ayaneoVideo, ayaneoImg1, ayaneoImg2, ayaneoImg3, ayaneoImg4, ayaneoInfo, ayaneoTag } from './ayaneoVideo'
import { motion, useAnimation } from "framer-motion";
import ProductDescription from '../productDescription/index'
import { useDispatch } from 'react-redux';
import { productRedux } from '../../store/slices/productSlice/index';
import { useEffect } from 'react';
import axios from 'axios';



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

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get('http://localhost:3000/products/12001');
            const ayaneo = response.data; // Define o estado do produto com os dados recebidos do backend
            dispatch(productRedux(ayaneo)); // Dispara a ação Redux com os dados do produto
          } catch (error) {
            console.error('Erro ao obter os dados do produto:', error);
          }
        };
    
        fetchProduct(); // Chama a função para buscar o produto assim que o componente é montado
    
        // Cleanup function (opcional): neste caso, não há necessidade de limpeza
      }, [dispatch]); // Passa dispatch como dependência para garantir que useEffect tenha a versão mais recente
    

    return (
        <div>

            <div className="bg-neutral-100">
                <picture>
                    <video
                        src={ayaneoVideo}
                        className="pt-20 w-full h-screen object-cover"
                        autoPlay
                        loop
                        muted
                    />
                </picture>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="relative min-h-[576px] flex flex-col md:flex-row-reverse items-center bg-neutral-300">
                <motion.img
                    src={ayaneoImg3}
                    alt="Headphones"
                    className="md:w-1/2 object-right"
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
            <div className="relative min-h-[576px] flex flex-col md:flex-row-reverse items-center bg-neutral-200">
                <div className="md:w-1/2 md:p-10 flex justify-center items-center">
                    <h1 className="mb-2 md:mb-4 font-extrabold text-2xl md:text-4xl text-center md:text-left">
                        {ayaneoInfo.textImg2}
                    </h1>
                </div>
                <motion.img
                    src={ayaneoImg2}
                    alt="Headphones"
                    className="md:w-1/2 object-right"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={imageVariantsRight}
                    viewport={{ once: false, amount: 0.8 }}
                />
            </div>

            <div className="bg-neutral-100 object-center">
                <picture>
                    <img
                        src={ayaneoImg4}
                        className="h-screen"
                    />
                </picture>
            </div>

            <div className="mt-1 relative min-h-[576px] bg-neutral-100">
                <div>
                    <div className="pt-10 z-[-1]">
                            <ProductDescription />

                        </div>
                </div>
            </div>

        </div>
    );
}