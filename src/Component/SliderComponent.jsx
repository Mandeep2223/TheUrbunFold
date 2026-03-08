import Card from "../Component/Card";
import WhatsAppCTA from "./WhatsAppCTA";
import { productsData, jordanCollectionData } from "../Data/CardData";

const SliderComponent = () => {
  return (
    <>
      <div className="  pt-15 md:pt-25">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full rounded-[10px]">
            <Card
              title="Featured Products"
              cards={productsData}
              slidesPerView={1}
            />
          </div>
          <div className="right-container w-full">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">⚡2026 STREET ICON EDITION⚡</h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Where fashion meets performance.
                <br />A design that blends street culture and athletic energy.
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
                  ₹3500
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹699</span>
              </div>
              <WhatsAppCTA
                label="Order Jordan 2026 Summer Collection"
                message="Hi, I want to know more about your Jordan Summer Collection."
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-15 md:pt-25">
        <div className=" wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full order-2 md:order-1 rounded-[10px]">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                ⚡COURT LEGACY DROP⚡
              </h1>
              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Where ambition meets style.
                <br />Crafted for those who play bold and dress sharper.
                <br />
               A modern fusion of basketball heritage and urban culture.
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
                  ₹3400
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹679</span>
              </div>
              <WhatsAppCTA
                label="Order Jordan Summer Collection"
                message="Hi, I want to know more about your Jordan old Summer Collection."
              />
            </div>
          </div>
          <div className="right-container w-full order-1 md:order-2 ">
            <Card
              title=" Polo Featured Products"
              cards={jordanCollectionData}
              slidesPerView={1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
