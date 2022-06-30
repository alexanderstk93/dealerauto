import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PreviewCard from "./CarPreviewCard";
import WheelPreviewCard from "./WheelPreviewCard";
export default function PreviewList() {
  const carPreviews = useSelector((state) => state.preview.carPreviews);
  const wheelsPreviews = useSelector((state) => state.preview.wheelsPreviews);
  const currentSection = useSelector((state) => state.status.currentSection);

  const vehiclesSectionStyles = `
  grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
  const wheelsSectionStyles = `grid gap-[5rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-[3rem]`;
  const toolsSectionStyles = ``;

  const loadCarsCards = carPreviews.map((preview) => {
    return (
      <PreviewCard
        key={preview.id}
        img={preview.img}
        model={preview.model}
        km={preview.km}
        year={preview.year}
        price={preview.price}
      />
    );
  });
  const loadWheelsCards = wheelsPreviews.map((preview) => {
    return (
      <WheelPreviewCard
        key={preview.id}
        id={preview.id}
        img={preview.img}
        price={preview.price}
        producer={preview.producer}
      />
    );
  });

  return (
    <div
      className={`${
        currentSection.vehicles
          ? vehiclesSectionStyles
          : currentSection.wheels
          ? wheelsSectionStyles
          : toolsSectionStyles
      }`}
    >
      {currentSection.vehicles
        ? loadCarsCards
        : currentSection.wheels
        ? loadWheelsCards
        : "No items found here"}
    </div>
  );
}
