import React from "react";

const FooterContents = () => {
  const footerContents = [
    {
      title: "Product",
      items: [
        { id: 1, name: "Breakfast" },
        { id: 2, name: "Lunch" },
        { id: 3, name: "Desserts" },
        { id: 4, name: "Dinner" },
        { id: 5, name: "Book a table" },
        { id: 6, name: "Our Chefs" },
      ],
    },
    {
      title: "Information",
      items: [
        { id: 1, name: "FAQ" },
        { id: 2, name: "Blog" },
        { id: 3, name: "Support" },
      ],
    },
    {
      title: "Company",
      items: [
        { id: 1, name: "About us" },
        { id: 2, name: "Our Menu" },
        { id: 3, name: "Contact us" },
        { id: 4, name: "Our Logo" },
      ],
    },
  ];
  return (
    <>
      {footerContents.map((section, index) => (
        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={index}>
          <h2 className="text-white text-2xl font-semibold titleFont">
            {section.title}
          </h2>
          <ul className="text-gray py-2">
            {section.items.map(item => (
              <li
                className="py-1 transform hover:text-primary hover:translate-x-1 cursor-pointer duration-300"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContents;
