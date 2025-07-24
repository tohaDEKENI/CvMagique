'use client'

import { personnalInfo, parcoursExp, education } from '../types/information'
import { CircleDot, Briefcase, GraduationCap, Brain } from 'lucide-react'
interface cvRight {
    information: personnalInfo,
    proffessionnelInfo: parcoursExp[],
    Education: education[],
    centreInteret: string[],
}


const CvRight = ({ information, proffessionnelInfo, Education, centreInteret }: cvRight) => {
    return (
        <div className="h-full w-2/3 bg-base-200  p-4 items-center space-y-4">
            <div className="text-left px-10 py-6 flex flex-col gap-2">
                <h1 className="text-5xl font-extrabold uppercase text-gray-900 tracking-tight">
                    {information.nom}
                </h1>
                <p className="text-3xl font-semibold text-gray-700">
                    {information.prenom}
                </p>
            </div>
            <h1 className="text-2xl font-bold text-center border-t border-b border-gray-300 w-6/12 mx-auto py-2">EXPERIENCE</h1>
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
                <h1 className="text-2xl font-bold text-center border-t border-b border-gray-300 w-6/12 mx-auto py-2">EDUCATION</h1>
                {
                    Education.map((formation, index) => (
                        <li key={index} className="step step-primary list-none">
                            <div className="ml-2 flex flex-col space-y-1">
                                <h3 className="font-bold text-lg inline-flex items-center space-x-4">
                                    <span><GraduationCap size={30} /></span>
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

            <div className="mt-10">
                <h1 className="text-2xl font-bold text-center border-t border-b border-gray-300 w-6/12 mx-auto py-2">
                    INTÉRÊTS
                </h1>

                <div className="grid grid-cols-2 gap-4 mt-8 px-10">
                    {centreInteret.map((cent, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="text-primary">
                                <Brain />
                            </span>
                            <p className="text-sm font-medium">{cent}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default CvRight;