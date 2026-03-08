import Card from "../Component/Card";
import WhatsAppCTA from "../Component/WhatsAppCTA";
import { pumaCollectionData } from "../Data/CardData";

const PumaCollection = () => {
  return (
    <>
      <div className=" pt-15 md:pt-25" id="puma">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="left-container w-full rounded-[10px]">
            <Card
              title="Featured Products"
              cards={pumaCollectionData}
              slidesPerView={1}
            />
          </div>

          <div className="right-container w-full">
            <div className="text-container text-center md:text-left px-2 md:px-4">
              <h1 className="text-l md:text-xl">
                ⚡ 2026 PERFORMANCE EDITION ⚡
              </h1>

              <h2 className="mt-3 text-lg md:text-2xl font-bold">
                Power in every move.
                <br />
                Style in every step.
                <br />
                Athletic perfect fit for gym & casual wear
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
                  ₹2500
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  80% OFF
                </span>
                <span className="text-2xl font-bold text-black">₹499</span>
              </div>
              <WhatsAppCTA
                label="Order Puma Summer Collection"
                message="Hi, I want to know more about your Puma Summer Collection."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PumaCollection;
