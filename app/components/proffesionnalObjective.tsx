'use client'

import { Plus } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { parcoursExp, education } from '../types/information'

interface ProffessionnalInfoProps {
    proffessionnelInfo: parcoursExp[],
    setProffessionnelInfo: Dispatch<SetStateAction<parcoursExp[]>>
    Education: education[],
    setEducation: Dispatch<SetStateAction<education[]>>,
    centreInteret: string[],
    setCentreInteret: Dispatch<SetStateAction<string[]>>
}

const ProffessionnalObjective = ({ proffessionnelInfo, setProffessionnelInfo, Education, setEducation, centreInteret, setCentreInteret }: ProffessionnalInfoProps) => {

    const handleChangeRole = (i: number, newRole: string) => {
        const updated = [...proffessionnelInfo]
        updated[i] = { ...updated[i], role: newRole }
        setProffessionnelInfo(updated)
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl'>Experience</h1>
            {proffessionnelInfo.map((exp, i) => (
                <div  key={i}>
                    <h1>Experience {i + 1}</h1>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <fieldset className="fieldset" >
                            <legend className="fieldset-legend">Titre</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Décrivez votre rôle"
                                value={exp.titre}
                                onChange={(e) => {
                                    const update = [...proffessionnelInfo]
                                    update[i] = { ...update[i], titre: e.target.value }
                                    setProffessionnelInfo(update)
                                }}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">role</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Décrivez votre rôle"
                                value={exp.poste}
                                onChange={(e) => {
                                    const update = [...proffessionnelInfo]
                                    update[i] = { ...update[i], poste: e.target.value }
                                    setProffessionnelInfo(update)
                                }}
                            />
                        </fieldset>
                        <fieldset className="fieldset" >
                            <legend className="fieldset-legend">annee</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Décrivez votre rôle"
                                value={exp.annees}
                                onChange={(e) => {
                                    const update = [...proffessionnelInfo]
                                    update[i] = { ...update[i], annees: e.target.value }
                                    setProffessionnelInfo(update)
                                }}
                            />
                        </fieldset>
                        <fieldset className="fieldset" >
                            <legend className="fieldset-legend">Description</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Décrivez votre rôle"
                                value={exp.role}
                                onChange={(e) => handleChangeRole(i, e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <hr className='w-full block mt-2 mb-2' />
                </div>
            ))}
            {
                proffessionnelInfo.length < 3 &&
                <button className='btn btn-outline btn-primary'
                    onClick={() => { setProffessionnelInfo([...proffessionnelInfo, { titre: '', poste: '', annees: '', role: '' }]) }}
                >
                    <Plus /> Ajouter une experience
                </button>
            }

            {
                proffessionnelInfo.length > 1 &&
                <button className='btn btn-outline btn-primary' onClick={() => setProffessionnelInfo([...proffessionnelInfo.slice(0, -1)])}>
                    Enlever
                </button>
            }

            <h1 className='text-2xl'>Education</h1>
            {
                Education.map((edu, i) => (
                    <div key={i}>
                        <h1>Education {i + 1}</h1>
                        <div className='grid grid-cols-2 gap-4 w-full'>
                            <fieldset className="fieldset" >
                                <legend className="fieldset-legend">diplome</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.diplome}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], diplome: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                            <fieldset className="fieldset" >
                                <legend className="fieldset-legend">etablissement</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.etablissement}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], etablissement: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                            <fieldset className="fieldset" >
                                <legend className="fieldset-legend">Lieu</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.Lieu}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], Lieu: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                            <fieldset className="fieldset" >
                                <legend className="fieldset-legend">Date</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.Date}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], Date: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">mention</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.mention}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], mention: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                            <fieldset className="fieldset" >
                                <legend className="fieldset-legend">description</legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Décrivez votre rôle"
                                    value={edu.description}
                                    onChange={(e) => {
                                        const update = [...Education]
                                        update[i] = { ...update[i], description: e.target.value }
                                        setEducation(update)
                                    }}
                                />
                            </fieldset>
                        </div>
                        <hr className='w-full block mt-2 mb-2' />
                    </div>
                ))
            }

            {
                proffessionnelInfo.length < 3 &&
                <button className='btn btn-outline btn-primary'
                    onClick={() => {
                        setEducation([...Education, { diplome: "", etablissement: "", Lieu: "", Date: "", mention: "", description: "" }])
                    }}
                >
                    <Plus /> Ajouter une education
                </button>
            }

            {
                Education.length > 1 &&
                <button className='btn btn-outline btn-primary' onClick={() => setEducation([...Education.slice(0, -1)])}>
                    Enlever
                </button>
            }

            <h1 className='text-2xl'>Centre d&apos;interet</h1>
            <div className='space-y-2'>
                {
                    centreInteret.map((centre, i) => (
                        <div key={i}>
                            <input type="text" className='input w-full' placeholder="centre d'interer"
                                value={centre}
                                onChange={(e) => {
                                    const update = [...centreInteret]
                                    update[i] = e.target.value
                                    setCentreInteret(update)
                                }}
                            />
                        </div>
                    ))
                }
            </div>

            {
                centreInteret.length < 4 &&
                <button className='btn btn-outline btn-primary'
                    onClick={() => {
                        setCentreInteret([...centreInteret, ""])
                    }}
                >
                    <Plus /> Ajouter une centre d&apos;interet
                </button>
            }

            {
                centreInteret.length > 1 &&
                <button className='btn btn-outline btn-primary' onClick={() => setCentreInteret([...centreInteret.slice(0, -1)])}>
                    Enlever
                </button>
            }
        </div>
    )
}

export default ProffessionnalObjective

