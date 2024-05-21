export default function FaqBanner() {
    return (
        <div className="relative bg-neutral-100">
            <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <picture>
                        <source srcSet="src/assets/aboutUs1.png" media="(min-width: 768px)" />
                        <img
                            src="src/assets/aboutUs1.png"
                            alt="About Us"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="px-4 md:px-0">
                        <p className="text-4xl font-bold text-black uppercase mb-6">
                            Frequently Asked Questions
                        </p>
                        <p className="text-black text-xl text-justify">
                            At Zero Store, we're dedicated to enhancing your online shopping journey while supporting the gaming community. Our platform, Zero Store, offers a curated selection of gaming products and accessories, designed to elevate your gaming experience from the comfort of your home. We prioritize quality, affordability, and accessibility, ensuring that every gamer can find what they need with ease. With Zero Store, you can explore a wide range of games, consoles, and peripherals, all conveniently available at your fingertips. Join us in our mission to provide exceptional online gaming shopping while contributing to the growth and prosperity of the gaming community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
