/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import CardData from "./CardData";

const Card = ({items}) => {
    // console.log(items.category);
    return (
        <div className="w-full rounded-lg bg-gray-200 ">
            <p className="text-center text-xl font-semibold my-5">{items.category}</p>
            <div className="">
                {
                    items?.content?.map(item => <CardData key={item.clientName} cardData={item} ></CardData>
                    )
                }
            </div>
        </div>
    );
};

export default Card;