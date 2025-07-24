'use client'
import { Phone, Mail, MapPinHouse, GlobeLock } from 'lucide-react'
import { personnalInfo } from '../types/information'
import { useState } from 'react'


interface CvLeftProps {
    information: personnalInfo // On utilise ici notre interface pour typer les props
}


const CvLeft = ({ information }: CvLeftProps) => {


    return (
        <div className="h-full w-1/3 bg-base-300  p-4 items-center space-y-4">
            <img src="https://tse3.mm.bing.net/th/id/OIP.P-UW9o6SG03KVhnCKc_17wHaHO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Photo de profil"
                className="border-8 border-primary rounded-full w-full h-3/12 object-cover "
            />
            <div className="space-y-4">
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto text-primary">PROFILE</h1>
                <h1 className='text-primary'>{information.proffession}</h1>
                <p className="textarea-xs ">{information.objectif}</p>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto text-primary">CONTACTS</h1>
                <p className='inline-flex'><Phone className='text-secondary' />{information.contact}</p> <br />
                <p className='inline-flex'><Mail className='text-secondary' />{information.email}</p> <br />
                <p className='inline-flex'><MapPinHouse className='text-secondary' />{information.address}</p>
            </div>

            <div className="space-y-4" >
                <h1 className="text-xl text-center border-t border-b w-10/12 mx-auto text-primary">LIENS SOCIAUX</h1>
                <div className='flex  flex-col space-y-2'>
                    {
                        information.site.map((si, i) => (
                            <p key={i} className='inline-flex text-xs items-center'><GlobeLock className='text-primary ' size={10} />{si}</p>
                        ))
                    }
                </div>
            </div>

            <div>
                <h1>LANGAGE</h1>
                <div className="w-full max-w-xs">
                    <div className='flex items-center flex-col space-y-4'>
                        {
                            information.langue.map((value, i) => (
                                <div className='flex justify-between w-full items-center space-x-4' key={i}>
                                    <p className='badge badge-primary'>{value.langue}</p>
                                    <div className='w-full'>
                                        <p className='text-xs badge badge-xs'>{value.niveau}</p>
                                        {
                                            value.niveau === "Native" && <progress className="progress w-full" value="100" max="100"></progress>
                                        }
                                        {
                                            value.niveau === "Courant" && <progress className="progress w-full" value="70" max="100"></progress>
                                        }
                                        {
                                            value.niveau === "Intermédiaire" && <progress className="progress  w-full" value="45" max="100"></progress>
                                        }
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>

    );
}

export default CvLeft;