import Image from "next/image";


interface InsightRollProps {
  subject: string;
  altText: string;
}

interface InsightRollImageProps {
  images: InsightRollProps[];
}

const InsightRollImage = ({ images }: InsightRollImageProps) => {
  return (
    <div className="w-full  text-light  whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center text-white justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.subject} alt={image.altText}
            width={80}
            height={80}
            className="mx-24"
          /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRollImage;