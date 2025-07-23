import { info } from 'console'
import { personnalInfo } from '../types/information'
import { Dispatch, SetStateAction } from 'react'

interface CvLeftProps {
    information: personnalInfo // On utilise ici notre interface pour typer les props
    setInformation: Dispatch<SetStateAction<personnalInfo>>
}


const PersonalInfoInput = ({ information, setInformation }: CvLeftProps) => {

    
    return (
        <div>
            <h1 className="text-xl font-medium">Information personnelle</h1>
            <div>
                <div className="flex space-x-6 items-center">
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Quel est votre prénom ?</legend>
                        <input type="text" className="input w-full" placeholder="Ex : Toha" 
                            value={information.prenom} onChange={(e) => setInformation({...information, prenom: e.target.value })}
                        />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Quel est votre nom de famille ?</legend>
                        <input type="text" className="input w-full" placeholder="Ex: DEKENI" 
                            value={information.nom} onChange={(e) => setInformation({ ...information, nom: e.target.value })}
                        />
                    </fieldset>
                </div>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Choisissez une image</legend>
                    <input type="file" className="file-input w-full" />
                    <label className="label">Max size 2MB</label>
                </fieldset>
                
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Quelle est votre profession ?</legend>
                    <input type="text" className="input w-full" placeholder="Ex: Informaticien"
                        value={information.proffession} onChange={(e) => setInformation({ ...information, proffession: e.target.value })} />
                </fieldset>

                <h1 className="text-xl font-medium">Objectif professionnel</h1>
                <div >
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Quel est votre prénom ?</legend>
                        <textarea className="textarea w-full h-44" placeholder="Ex: Ingénieur logiciel avec 5 ans d'expérience en développement web"
                            value={information.objectif} onChange={(e) => setInformation({ ...information, objectif: e.target.value })}
                            maxLength={600 }
                        ></textarea>
                    </fieldset>
                </div>


                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Veuillez saisir votre contact</legend>
                    <input type="tel" className="input w-full" placeholder="Ex: +33 6 12 34 56 78"
                        value={information.contact} onChange={(e) => setInformation({ ...information, contact: e.target.value })}
                    />
                </fieldset>

                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Veuillez saisir votre adresse e-mail</legend>
                    <input type="text" className="input w-full" placeholder="Ex: exemple@gmail.com"
                        value={information.email} onChange={(e) => setInformation({ ...information, email: e.target.value })}
                    />
                </fieldset>

                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Adresse (rue, numéro, code postal, ville)</legend>
                    <input type="text" className="input w-full" placeholder="Ex: 123 rue de l’Exemple, 75000 Paris"
                        value={information.address} onChange={(e) => setInformation({ ...information, address: e.target.value })} />
                </fieldset>

                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Veuillez saisir l’URL de votre site web personnel ou portfolio</legend>
                    <input type="tel" className="input w-full" placeholder="https://votre-portfolio.com"
                        value={information.site} onChange={(e) => setInformation({ ...information, site: e.target.value })}
                    />
                </fieldset>

            </div>
        </div>
    );
}

export default PersonalInfoInput;