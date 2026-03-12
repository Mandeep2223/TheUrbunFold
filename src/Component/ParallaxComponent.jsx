import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import banner_image from "../assets/jordan-x-union-x-fragment-apparel-collection-release-date.jpg";
import instagramQR from "../assets/Instagram_QR.jpeg";

const ParallaxComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    parallax_bg: { background: "#aeaeb0" },
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
    mobileWrapper: {
      backgroundImage: `url(${banner_image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#aeaeb0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 20px",
    },
  };

  const content = (
    <div style={styles.parallaxText}>
      <h1 className="text-lg md:text-3xl font-bold">
        Elevate Your Everyday Style
      </h1>
      <h4 className="text-sm md:text-xl mt-2">
        Discover the Best Trending Premium T-Shirts for Summer 2026
      </h4>
      <img
        src={instagramQR}
        alt="Instagram QR"
        className="mt-4 w-24 md:w-40 mx-auto rounded-lg shadow-lg mb-4"
      />
      <h5 className="text-xs md:text-base">
        Follow our Instagram, like & share the post, and send us a screenshot 📲🔥
        <br />
        Get an extra 10% OFF on your order — limited time only! 🚀
      </h5>
    </div>
  );

  if (isMobile) {
    return (
      <div className="h-[120vw]" style={styles.mobileWrapper}>
        {content}
      </div>
    );
  }

  return (
    <Parallax bgImage={banner_image} strength={300} style={styles.parallax_bg}>
      <div className="parallax h-[50vw]" style={styles.parallax}>
        {content}
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;
