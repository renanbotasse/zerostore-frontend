import FormContact from '../formContact/index';

export default function ContactUs() {
    return (
        <div className="md:flex md:flex-row min-h-[576px]">
            <div className="relative min-h-[576px] bg-[linear-gradient(-130deg,#1f1c18_33%,#8c000f_100%)]">
                <div className="md:flex md:flex-row md: min-h-[576px] max-w-[1536px] mx-auto">
                    <div className="flex flex-col md:basis-3/4 md:items-stretch md:overflow-hidden md:p-20">
                        <img
                            src="src/assets/contactUs.png"
                            alt="Headphones"
                            className="h-full object-cover "
                        />
                    </div>
                    <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
                        <p className="text-4xl font-bold text-white uppercase">
                            CONTACT US
                        </p>
                        <h1 className="text-white text-2xl md:leading-[40px] font-bold mt-2 mb-2">
                            Customer Service Hours
                        </h1>
                        <p className="text-white text-xl text-justify mt-2 mb-2">
                            Monday to Friday from 8h00 to 20h00.
                            <br></br>
                            Saturday from 09h00 to 18h00.
                            <h1 className="text-white text-2xl md:leading-[40px] font-bold mt-4 mb-2">
                                Can't find what you're looking for on the website?
                            </h1>
                            <p className="text-white text-xl text-justify">
                                Contact us on WhatsApp (XXXXXXXXXXXXX) or email us at contact@zsstore.com
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <FormContact />
        </div>
    );
}