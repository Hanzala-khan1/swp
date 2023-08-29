import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ image }) => {
    const { src, alt, className } = image
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            effect="blur"
            className={className}
        />
    );
};

export default LazyImage;
