'use client'
import { Phone, Mail, MapPinHouse, GlobeLock } from 'lucide-react'
import { personnalInfo } from '../types/information'


interface CvLeftProps {
    information: personnalInfo // On utilise ici notre interface pour typer les props
}


const CvLeft = ({ information }: CvLeftProps) => {
    return (
        <div className="h-full w-1/3 bg-base-300  p-4 items-center space-y-8">{ }
            <img
                src="https://tse3.mm.bing.net/th/id/OIP.P-UW9o6SG03KVhnCKc_17wHaHO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Photo de profil"
                className="border-8 border-primary rounded-full w-full h-3/12 object-cover "
            />
            <div className="space-y-4">
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto text-primary">PROFILE</h1>
                <h1>{information.proffession}</h1>
                <p className="textarea-xs ">{information.objectif}</p>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl text-center border-t border-b w-6/12 mx-auto text-primary">CONTACTS</h1>
                <p className='inline-flex'><Phone className='text-secondary' />{information.contact}</p> <br />
                <p className='inline-flex'><Mail className='text-secondary' />{information.email}</p> <br />
                <p className='inline-flex'><MapPinHouse className='text-secondary' />{information.address}</p>
            </div>

            <div className="space-y-4">
                <h1 className="text-xl text-center border-t border-b w-10/12 mx-auto text-primary">LIENS SOCIAUX</h1>
                <p className='inline-flex'><GlobeLock />{information.site}</p>
            </div>

            <div>
                <h1>LANGAGE</h1>
                <div className="w-full max-w-xs">
                    <div className='flex items-center space-x-8'>
                        <div>
                            <p>Français</p>
                            <input type="range" min={0} max="100" value="30" className="range range-xs" />
                        </div>
                        <div>
                            <p>Anglais</p>
                            <input type="range" min={0} max="100" value="30" className="range range-xs" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CvLeft;