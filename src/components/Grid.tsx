import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import "../../node_modules/swiper/swiper-bundle.min.css";

type FeatureType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type GridProps = {
  features: FeatureType[];
};

export function Grid({ features }: GridProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto">
      {isMobile ? (
        <div className="w-full h-auto px-4 mb-8 overflow-hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            autoHeight={true}
            breakpoints={{
              375: { slidesPerView: 1.3 },
              425: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.1 },
            }}
            className="!overflow-visible"
            style={{ overflow: "visible" }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={feature.title} className="pb-4">
                <Feature
                  {...feature}
                  index={index}
                  totalItems={features.length}
                  isMobile={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 border-neutral-200 dark:border-neutral-800">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              totalItems={features.length}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalItems,
  isMobile = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalItems: number;
  isMobile?: boolean;
}) => {
  const mdCols = 2;
  const lgCols = 4;

  const mdRow = Math.floor(index / mdCols);
  const mdCol = index % mdCols;
  const lgRow = Math.floor(index / lgCols);
  const lgCol = index % lgCols;

  const totalMdRows = Math.ceil(totalItems / mdCols);
  const totalLgRows = Math.ceil(totalItems / lgCols);

  const isMdLastRow = mdRow === totalMdRows - 1;
  const isLgLastRow = lgRow === totalLgRows - 1;
  const isMdLeft = mdCol === 0;
  const isLgLeft = lgCol === 0;
  const isLgLastCol = (index + 1) % lgCols === 0 || index === totalItems - 1;

  const cardBaseStyles = isMobile
    ? cn(
        "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6",
        "bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm h-auto flex flex-col"
      )
    : cn(
        "relative group/feature py-10",
        "border-b border-r border-neutral-200 dark:border-neutral-800",
        isMdLeft && "md:border-l",
        isLgLeft && "lg:border-l",
        isMdLastRow && "md:border-b-0",
        isLgLastRow && "lg:border-b-0",
        isLgLastCol && "lg:border-r-0"
      );

  return (
    <div className={cn("flex flex-col", cardBaseStyles)}>
      <div className={cn("mb-4 relative z-10", !isMobile && "px-4")}>
        {icon}
      </div>
      <div
        className={cn(
          "text-lg font-bold mb-2 relative z-10",
          !isMobile && "px-4"
        )}
      >
        {!isMobile && (
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#00fdb9] transition-all duration-200 origin-center" />
        )}
        <span
          className={cn(
            "transition duration-200 inline-block text-neutral-800 dark:text-neutral-100",
            !isMobile && "group-hover/feature:translate-x-2"
          )}
        >
          {title}
        </span>
      </div>
      <p
        className={cn(
          "text-sm text-neutral-600 dark:text-neutral-300 relative z-10",
          isMobile ? "flex-1" : "max-w-xs px-4"
        )}
      >
        {description}
      </p>
    </div>
  );
};
