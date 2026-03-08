import Card from "../Component/Card";
import WhatsAppCTA from "../Component/WhatsAppCTA";
import {
  lacosteCollectionData,
  messiCollectionData,
} from "../Data/CardData";

const LacosteCollection = () => {
  return (
    <div>
      <>
      <div className=" pt-15 md:pt-25" id="lacoste">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full rounded-[10px] order-2 md:order-1">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                ✨ PREMIUM COLLAR POLO EDITION ✨
              </h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Introducing our Premium Collar Polo T-Shirt
                <br />
                crafted for those who prefer subtle luxury and refined style.
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
                  ₹3500
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹699</span>
              </div>
              <WhatsAppCTA
                label="Order Lacoste Summer Collection"
                message="Hi, I want to know more about your Lacoste Summer Collection."
              />
            </div>
          </div>
          <div className="right-container w-full order-1 md:order-2">
            <Card
              title=" Polo Featured Products"
              cards={lacosteCollectionData}
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
              cards={messiCollectionData}
              slidesPerView={1}
            />
          </div>

          <div className="right-container w-full">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                🏆 CHAMPION EDITION TEE 🏆
              </h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Inspired by greatness.
                <br/>
                Made for everyday legends.
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
                  ₹2900
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹579</span>
              </div>
              <WhatsAppCTA
                label="Order Messi Summer Collection"
                message="Hi, I want to know more about your Messi Summer Collection."
              />
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default LacosteCollection
