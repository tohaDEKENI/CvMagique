'use client'

import { personnalInfo, parcoursExp, education } from '../types/information'
import { CircleDot, Briefcase ,GraduationCap} from 'lucide-react'
interface cvRight {
    information: personnalInfo,
    proffessionnelInfo: parcoursExp[],
    Education: education[]
}


const CvRight = ({ information, proffessionnelInfo, Education }: cvRight) => {
    return (
        <div className="h-full w-2/3 bg-base-200  p-4 items-center space-y-4">
            <div className="text-left text-6xl p-10 font-bold flex flex-col ">
                <h1>{information.nom}</h1>
                <p>{information.prenom}</p>
            </div>
            <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto m-4">EXPERIENCE</h1>
            <div className='p-10 pt-0 pb-0 space-y-4'>

                {
                    proffessionnelInfo.map((prof, index) => (
                        <li key={index} className="step step-primary list-none">
                            <div className="ml-2 flex flex-col space-y-1">
                                <h3 className="font-bold text-lg inline-flex items-center space-x-4"><span><CircleDot size={30} /></span><span>{prof.titre}</span></h3>
                                <p className='inline-flex items-center space-x-4'><span className='badge badge-info mt-1'>{prof.poste}</span>
                                    <span className=''>{prof.annees}</span></p>
                                <p className="mt-2 text-sm">{prof.role}</p>
                            </div>
                        </li>
                    ))
                }
            </div>

            <div className='p-10'>
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto">EDUCATION</h1>
                {
                    Education.map((formation, index) => (
                        <li key={index} className="step step-primary list-none">
                            <div className="ml-2 flex flex-col space-y-1">
                                <h3 className="font-bold text-lg inline-flex items-center space-x-4">
                                    <span><GraduationCap  size={30} /></span>
                                    <span>{formation.diplome}</span>
                                </h3>

                                <p className="inline-flex items-center flex-wrap gap-2 text-sm text-gray-700">
                                    <span className="badge badge-secondary">{formation.etablissement}</span>
                                    <span>{formation.Lieu}</span>
                                    <span>{formation.Date}</span>
                                    {formation.mention && (
                                        <span className="badge badge-ghost">{formation.mention}</span>
                                    )}
                                </p>

                                {formation.description && (
                                    <p className="mt-2 text-sm text-gray-600">
                                        {formation.description}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))
                }
            </div>

            <div>
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto">INTERET</h1>

            </div>
        </div>
    );
}

export default CvRight;