// import React, { useRef, useEffect } from 'react';

// const LazyImage = ({ src, alt, srcset, className }) => {
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const img = entry.target;
//                     img.src = img.dataset.src;
//                     img.srcset = img.dataset.srcset;
//                     observer.unobserve(img);
//                 }
//             });
//         });

//         observer.observe(imageRef.current);

//         return () => {
//             observer.unobserve(imageRef.current);
//         };
//     }, []);

//     return <img ref={imageRef} data-src={src} data-srcset={srcset} alt={alt} className={className} />;
// };

// export default LazyImage;
