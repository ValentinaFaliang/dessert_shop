import React from 'react';
import zefir from '../../assets/zephyr-images/zefir5.png';
import './Carousel.css';

// const slidesCount = 4;

export const Carousel = () => {
  // const [trackWidth, setTrackWidth] = useState<number>(0);
  // const trackWidthRef = useRef<HTMLImageElement>(null);
  // const calcWidthRef = useRef(trackWidth);
  // const currentSlide = useRef(0);

  // useEffect(() => {
  //   const target = trackWidthRef.current;
  //   console.log(target);
  //   const observer = new ResizeObserver((entries) => {
  //     calcWidthRef.current = entries[0].contentRect.width;
  //     setTrackWidth(currentSlide.current * calcWidthRef.current);
  //   });
  //   observer.observe(target!);
  //   return () => {
  //     target && observer.unobserve(target);
  //   };
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTrackWidth((prevTrackWidth) => {
  //       if (currentSlide.current < slidesCount - 1) {
  //         currentSlide.current += 1;
  //         return prevTrackWidth + calcWidthRef.current;
  //       } else {
  //         currentSlide.current = 0;
  //         return 0;
  //       }
  //     });
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const handleMouseDrag = (event: MouseEvent<HTMLDivElement>) => {
  //   // clearInterval()
  //   console.log(event.clientX);
  // };

  return (
    <div className="carousel-container">
      <div
        // ref={trackWidthRef}
        className="carousel-track"
        // style={{ transform: `translateX(-${trackWidth}px)` }}
        // draggable="true"
        // onDragStart={handleMouseDrag}
      >
        <img className="carousel-item" src={zefir} />
        <img className="carousel-item" src={zefir} />
        <img className="carousel-item" src={zefir} />
        <img className="carousel-item" src={zefir} />
        <img className="carousel-item" src={zefir} />
      </div>
    </div>
  );
};
