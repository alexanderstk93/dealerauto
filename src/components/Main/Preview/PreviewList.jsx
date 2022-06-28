import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PreviewCard from "./PreviewCard";
export default function PreviewList() {
  const previews = useSelector((state) => state.preview.previews);

  const loadCards = previews.map((preview) => {
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

  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loadCards}
    </div>
  );
}
