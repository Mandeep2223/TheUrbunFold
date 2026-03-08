import React from "react";
import { Parallax } from "react-parallax";
import banner_image from "../assets/jordan-x-union-x-fragment-apparel-collection-release-date.jpg";
import instagramQR from "../assets/Instagram_QR.jpeg";

const ParallaxComponent = () => {
  const styles = {
    parallax_bg: {
      background: "#aeaeb0",
    },
    parallax: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 20px",
    },

    parallaxText: {
      color: "#fff",
      textAlign: "center",
      background: "rgba(0, 0, 0, 0.5)",
      padding: "30px 40px",
      borderRadius: "10px",
    },
  };
  return (
    <div>
      <Parallax
        bgImage={banner_image}
        strength={300}
        style={styles.parallax_bg}
      >
        <div className="parallax h-[120vw] sm:h-[80vw] md:h-[50vw]" style={styles.parallax}>
          <div className="parallax-text" style={styles.parallaxText}>
            <h1>Elevate Your Everyday Style</h1>
            <h4>Discover the Best Trending Premium T-Shirts for Summer 2026</h4>
            <img
              src={instagramQR}
              alt="Instagram QR"
              className="mt-6 w-32 md:w-40 mx-auto rounded-lg shadow-lg mb-5"
            />
            <h5>
              Follow our Instagram, like & share the post, and send us a
              screenshot 📲🔥
              <br />
              Get an extra 10% OFF on your order — limited time only! 🚀
            </h5>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
