import bread from "../assets/bread.jpg"
import cheese from "../assets/cheese.webp"
import chocolate from "../assets/chocolate.jpg"
import drinks from "../assets/drinks.jpg"
import vegetables from "../assets/vegetables.jpg"
import nasi from "../assets/nasi.jpg"

const Gallery = () => {
    return ( 
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-8 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Most Popular Products <br /> at our Platform
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={vegetables}/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={cheese}/>
                </div>
                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={bread}/>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={drinks}/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={nasi}/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={chocolate}/>
                </div>
            </div>
            </div>
        </div>
      </section>
     );
}
 
export default Gallery;