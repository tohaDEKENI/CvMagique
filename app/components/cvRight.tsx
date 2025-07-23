'use client'

import {personnalInfo} from '../types/information'

interface cvRight {
    information:personnalInfo,
   
}


const CvRight = ({information}:cvRight) => {
    return (
        <div className="h-full w-2/3 bg-base-200  p-4 items-center space-y-8">
            <div className=" text-left text-6xl p-16 font-bold">
                <h1>{information.nom}</h1>
                <p>{information.prenom}</p>
            </div>
            <div>
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto">EXPERIENCE</h1>
            
            </div>

            <div>
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto">EDUCATION</h1>
                
            </div>

            <div>
                 <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto">INTERET</h1>

            </div>
        </div>
    );
}

export default CvRight;