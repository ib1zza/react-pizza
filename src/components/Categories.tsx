import React, { useState } from "react";

interface CategoriesProps {
  value: number;
  onChange: (id: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChange }) => {
  const [categories] = useState<string[]>([
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChange(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
