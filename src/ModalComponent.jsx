/* eslint-disable react/prop-types */

import { useState } from 'react';
// import './ModalComponent.css';
import { FaSquarespace } from "react-icons/fa6";

const ModalComponent = ({ files }) => {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(id);
    const [allfiles, setAllfiles] = useState([...files])
    const handleFileChange = (event) => {
        // Access the selected files from the event
        const selectedFiles = event.target.files;
        const newFileNames = Array.from(selectedFiles, (file) => file.name)

        // Update the state with the selected files
        setAllfiles([...files, ...newFileNames]);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    // console.log(allfiles);
    return (
        <div >
            {/* <button >Open Modal</button> */}

            <FaSquarespace className=' hover:scale-125' onClick={openModal}></FaSquarespace>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content w-3/4 md:w-1/2 ">
                        {/* <span className="modal-close" onClick={closeModal}></span> */}
                        <h2 className='text-xl text-center font-semibold'>Uploaded Files</h2>
                        <hr className='border-2 mb-10' />

                        <ul className='ms-20 min-h-[200px]'>
                            {
                                allfiles?.map((file, i) => <li className=" text-start font-semibold" key={i}>{i + 1}. {file}</li>)
                            }
                        </ul>
                        <input type="file" onChange={handleFileChange} multiple className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-5" />
                        <div>
                            <button className='btn btn-sm btn-error mx-5' onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalComponent;
