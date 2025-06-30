import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { useEffect, useRef, useState } from "react";

type SwiperProps = {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

const CustomSwiper = ({ features }: SwiperProps) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, features.length);
    const heights = cardRefs.current
      .filter((ref): ref is HTMLDivElement => ref !== null)
      .map((ref) => ref.offsetHeight);

    if (heights.length > 0) {
      setMaxHeight(Math.max(...heights));
    }
  }, [features]);

  return (
    <div className="w-full overflow-hidden px-4">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        className="!overflow-visible"
        style={{ overflow: "visible" }}
        breakpoints={{
          375: { slidesPerView: 1.3 },
          425: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.1 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={feature.title} className="!w-auto">
            <div
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={{ height: maxHeight || "auto" }}
              className="h-full w-full max-w-[90vw] sm:max-w-[350px]"
            >
              <Card className="h-full bg-muted/40 backdrop-blur-sm flex flex-col border border-neutral-800 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="[&>svg]:h-6 [&>svg]:w-6">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-md text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
