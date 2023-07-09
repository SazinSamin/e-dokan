import Image from "next/image";
import imagedokan from "./../../public/e-dokan-img.png";

const Hero = () => {
  return (
    <div>
      <Image src={imagedokan} alt="image"></Image>
    </div>
  );
};

export default Hero;
