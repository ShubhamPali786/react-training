import React from "react";

interface ImageWithFallbackProps {
  source: string;
  size?: number;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = (props) => {
  // let [state,setState]=React.useState(default value);
  let [imgSrc, updateImage] = React.useState(props.source);
  return (
    <img
      src={imgSrc}
      onError={() =>
        updateImage("https://img.icons8.com/carbon-copy/2x/no-image.png")
      }
      alt={"some text"}
      className="img-thumbnail"
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    />
  );
};
export default ImageWithFallback;
ImageWithFallback.defaultProps = { size: 200 };
// product.jpg : fails : default.jpg
