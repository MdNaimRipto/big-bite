import React from "react";

const AboutContent = () => {
  const aboutContent = [
    {
      id: 1,
      title: "We are located in the city center",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Nemo incidunt beatae nobis suscipit optio excepturi.",
    },
    {
      id: 2,
      title: "Fresh, organic ingredients",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Nemo incidunt beatae nobis suscipit optio excepturi.",
    },
    {
      id: 3,
      title: "Own fast delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Nemo incidunt beatae nobis suscipit optio excepturi.",
    },
  ];
  return (
    <div className="lg:py-8 xl:py-16">
      <h2 className="text-black text-2xl leading-10 lg:text-3xl pb-10 lg:w-2/3 headingFont lg:leading-[50px]">
        We are doing more than you expect
      </h2>
      <div className="">
        {aboutContent.map(data => (
          <div key={data.id} className="md:flex gap-4">
            <div className="text-secondary text-5xl headingFont">
              0{data.id}
            </div>
            <div className="pb-6">
              <h3 className="text-black text-2xl font-semibold titleFont pb-3">
                {data.title}
              </h3>
              <p className="text-sm text-gray md:w-11/12">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
