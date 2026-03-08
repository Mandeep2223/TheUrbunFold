import Card from "../Component/Card";
import WhatsAppCTA from "../Component/WhatsAppCTA";
import {
  adidasCollectionData,
  adidasOriginalCollectionData,
} from "../Data/CardData";

const AdidasCollection = () => {
  return (
    <>
      <div className=" pt-15 md:pt-25" id="adidas">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full rounded-[10px] order-2 md:order-1">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                ✨ SPORT CORE DROP ✨
              </h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Born from sport. Refined for the streets.
                <br />
                A perfect fusion of speed, comfort, and style.
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                💰 Best Value Price
                <br />
                📏 All sizes available
                <br />
                🎨 Latest colors in stock
                <br />
                🚚 Pan-India delivery available
              </p>
              <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                <span className="text-gray-500 line-through text-lg">
                  ₹2500
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹499</span>
              </div>
              <WhatsAppCTA
                label="Order Adidas Summer Collection"
                message="Hi, I want to know more about your Adidas Summer Collection."
              />
            </div>
          </div>
          <div className="right-container w-full order-1 md:order-2">
            <Card
              title=" Polo Featured Products"
              cards={adidasCollectionData}
              slidesPerView={1}
            />
          </div>
        </div>
      </div>
      <div className=" pt-15 md:pt-25">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full rounded-[10px]">
            <Card
              title="Featured Products"
              cards={adidasOriginalCollectionData}
              slidesPerView={1}
            />
          </div>

          <div className="right-container w-full">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                ⚡Adidas Originals SPORT CORE⚡
              </h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Built for movement. Designed for impact.
                <br/>
                Premium quality cotton fabric.
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                💰 Best Value Price
                <br />
                📏 All sizes available
                <br />
                🎨 Latest colors in stock
                <br />
                🚚 Pan-India delivery available
              </p>
               {/* 💲 Price Section */}
              <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                <span className="text-gray-500 line-through text-lg">
                  ₹2750
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹549</span>
              </div>
              <WhatsAppCTA
                label="Order Adidas Summer Collection"
                message="Hi, I want to know more about your Adidas Summer Collection."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdidasCollection;
