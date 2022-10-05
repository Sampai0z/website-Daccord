import AboutNft from "../../assets/opaaNFT.png";

export default function AboutUs () {
    return(
        <main className="w-[50%] mt-5">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
                <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                    <img src={AboutNft} alt="Logo" className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"/>
                </div>
            </div>

            {/* content box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
                <p className="text-lg text-textBase text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis labore soluta accusantium. Porro voluptate dicta iste molestiae earum ducimus inventore, vitae consequuntur mollitia perferendis eius veniam tenetur vero debitis qui!
                </p>
            </div>

            </section>
        </main>
    );
};