/* eslint-disable react/prop-types */
import { FaLayerGroup, FaClipboard, FaRegComments, FaRegCalendarDays } from "react-icons/fa6";
import ModalComponent from "./ModalComponent";


const CardData = ({ cardData }) => {
    const numOfFile = cardData?.files
    // console.log(cardData);
    return (
        <div className="bg-white mx-5 my-5 py-5 px-5 rounded-lg w-[400px]">
            <div className="flex items-center gap-5 mb-2">
                <img className=" w-10 rounded-full" src={cardData.clientImg} alt="client image" />
                <p className="text-mg font-semibold">{cardData?.clientName}</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
                <FaLayerGroup></FaLayerGroup>
                <p> {cardData?.description}...</p>
                <div className="flex justify-between items-center bg-gray-200 p-2 rounded-lg ml-auto">
                    <FaClipboard ></FaClipboard>
                    <p>1/2</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <img className="w-10 rounded-full" src={cardData?.img1} alt="image" />
                <img className="w-10 rounded-full" src={cardData?.img2} alt="image" />

                <p className=" bg-gray-200 w-10 h-10 font-bold rounded-full text-center">+ {cardData.numOfImg}</p>

                <p> <FaRegComments className="inline-block mx-2"></FaRegComments> {cardData?.numOfComment}</p>
                <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg ">
                    <ModalComponent files={numOfFile}></ModalComponent>
                    <p> {numOfFile?.length}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <FaRegCalendarDays ></FaRegCalendarDays>
                    <p> {cardData?.date}</p>
                </div>

            </div>
        </div>
    );
};

export default CardData;