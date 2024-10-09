import React from 'react';

const Plug = () => {
    return (
        <div className="plug_image">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                <g id="SVGRepo_iconCarrier"> <path d="M2,6.5 C2,5.11928813 3.11928813,4 4.5,4 L19.5,4 C20.8807119,4 22,5.11928813 22,6.5 L22,17.5 C22,18.8807119 20.8807119,20 19.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,6.5 Z M3,6.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L19.5,19 C20.3284271,19 21,18.3284271 21,17.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L4.5,5 C3.67157288,5 3,5.67157288 3,6.5 Z M16,7 L18,7 C18.5522847,7 19,7.44771525 19,8 L19,10 C19,10.5522847 18.5522847,11 18,11 L16,11 C15.4477153,11 15,10.5522847 15,10 L15,8 C15,7.44771525 15.4477153,7 16,7 Z M16,8 L16,10 L18,10 L18,8 L16,8 Z M2.85355339,15.8535534 C2.65829124,16.0488155 2.34170876,16.0488155 2.14644661,15.8535534 C1.95118446,15.6582912 1.95118446,15.3417088 2.14644661,15.1464466 L7.14644661,10.1464466 C7.34170876,9.95118446 7.65829124,9.95118446 7.85355339,10.1464466 L13.5,15.7928932 L16.1464466,13.1464466 C16.3417088,12.9511845 16.6582912,12.9511845 16.8535534,13.1464466 L21.3535534,17.6464466 C21.5488155,17.8417088 21.5488155,18.1582912 21.3535534,18.3535534 C21.1582912,18.5488155 20.8417088,18.5488155 20.6464466,18.3535534 L16.5,14.2071068 L13.8535534,16.8535534 C13.6582912,17.0488155 13.3417088,17.0488155 13.1464466,16.8535534 L7.5,11.2071068 L2.85355339,15.8535534 Z"/> </g>

            </svg>

            <label className='add_main_image' htmlFor="add_main_image">
                <input id='add_main_image' type="file"/>
            </label>

            <div className="file_input">
                <label htmlFor="input_file">
                    <input id='input_file' type="file" />
                    <div className='file_button'></div>
                </label>
            </div>
        </div>
    );
};

export default Plug;