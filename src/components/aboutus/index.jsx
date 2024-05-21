export default function AboutUs() {
    return (
        <div className="relative min-h-[576px] bg-[linear-gradient(-130deg,#1f1c18_33%,#8c000f_100%)]">
            <div className="md:flex md:flex-row md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
                <div className="flex flex-col md:basis-3/4 md:items-stretch md:overflow-hidden">
                    <img
                        src="src/assets/aboutUs2.png"
                        alt="Headphones"
                        className="h-full object-cover"
                    />
                </div>
                <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
                    <p className="text-4xl font-bold text-white uppercase">
                        ABOUT US
                    </p>
                    <h1 className="text-white text-2xl md:leading-[40px] font-bold mt-2 mb-2">
                        Zero Store
                    </h1>
                    <p className="text-white text-xl text-justify">
                        Zero Store proudly offers a variety of used games, reflecting the diverse trends of today, to satisfy our customers with high standards of quality.
                    </p>
                    <p className="text-white text-xl mt-3 text-justify">
                        Focused on discovering new gems, the zero game of the year competition creates opportunities for gamers to find the best used games, both nationally and internationally, every year.
                    </p>
                    <p className="text-white text-xl mt-3 text-justify">
                        We work with a wide range of platforms, including: <br></br> 
                        Nintendo Entertainment System (NES); Super Nintendo Entertainment System (SNES); Master System; Mega Drive, Playstation; Nintendo6 and others.
                    </p>
                </div>
            </div>
        </div>
    );
}