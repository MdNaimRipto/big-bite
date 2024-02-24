import Image from "next/image";
import Link from "next/link";
import React from "react";

interface iCategoryContent {
    id: number;
    title: string;
    text: string;
    icon: any;
}

const MenuCategoryContent = ({ data }: { data: iCategoryContent }) => {
    return (
        <Link
            key={data.id}
            href={"/"}
            className="bg-lightGray shadow-sm flex items-center p-4 lg:p-8 group"
        >
            <div className="w-[90px] md:w-[60px] relative">
                <p className="bg-primary rounded-full w-[30px] h-[30px] absolute bottom-[-10px] left-[15px] group-hover:w-[45px] group-hover:h-[45px] group-hover:left-2 duration-300"></p>
                <Image
                    className="w-full h-full relative z-10 transform group-hover:-translate-y-3 duration-300"
                    src={data.icon}
                    alt=""
                />
            </div>
            <div className="flex flex-col ps-8">
                <h3 className="text-xl lg:text-2xl text-black group-hover:text-secondary duration-300 font-semibold titleFont">
                    {data.title}
                </h3>
                <p className="text-gray text-sm">{data.text}</p>
            </div>
        </Link>
    );
};

export default MenuCategoryContent;
