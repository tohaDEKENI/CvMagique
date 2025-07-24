import { personnalInfo } from '../types/information'
import { Dispatch, SetStateAction, useState } from 'react'
import { Plus } from 'lucide-react'

interface CvLeftProps {
    information: personnalInfo // On utilise ici notre interface pour typer les props
    setInformation: Dispatch<SetStateAction<personnalInfo>>
}

type Langue = {
    niveau: string,
    langue: string
}

const PersonalInfoInput = ({ information, setInformation }: CvLeftProps) => {
    const [sites, setSites] = useState<string[]>(['https://exemple.com'])
    const [langue, setLangue] = useState<Langue[]>([{ langue: 'Francais', niveau: 'Langue maternelle' }])

    return (
        <div>
            <h1 className="text-xl font-medium">Information personnelle</h1>
            <div>
                <div className="flex space-x-6 items-center">
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Quel est votre prénom ?</legend>
                        <input type="text" className="input w-full" placeholder="Ex : Toha"
                            value={information.prenom} onChange={(e) => setInformation({ ...information, prenom: e.target.value })}
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
                            maxLength={600}
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

                {
                    sites.map((value, index) => (
                        <fieldset key={index} className="fieldset w-full">
                            <legend className="fieldset-legend">Veuillez saisir l’URL de votre site web personnel ou portfolio</legend>
                            <input type="tel" className="input w-full" placeholder="https://votre-portfolio.com"
                                value={information.site[index]}
                                onChange={(e) => {
                                    const updatedSites = [...information.site];       // clone du tableau
                                    updatedSites[index] = e.target.value;             // mise à jour de l'élément ciblé
                                    setInformation({ ...information, site: updatedSites }); // mise à jour du state
                                }}
                            />
                        </fieldset>
                    ))
                }
                {
                    sites.length < 3 &&
                    <button className='btn btn-outline btn-primary' onClick={() => { setSites([...sites, "https://exemple.com"]) }}>
                        <Plus /> Ajouter un lien
                    </button>
                }

                {
                    sites.length !== 1 &&
                    <button className='btn btn-outline btn-primary' onClick={() => { setSites(sites.slice(0, -1)) ;
                            const updateInformatiom = information.site.slice(0,-1);
                            setInformation({...information,site:updateInformatiom})
                        }}
                    >
                        Enlever
                    </button>
                }

                <h1>Langage</h1>
                {

                    langue.map((lang, index) => (
                        <div key={index} className="flex items-center justify-between space-x-8">
                            <select
                                className="select w-1/2"
                                value={information.langue[index]?.niveau ?? ''}
                                onChange={(e) => {
                                    const updatedLangues = [...information.langue];
                                    updatedLangues[index] = {
                                        ...updatedLangues[index],
                                        niveau: e.target.value,
                                    };
                                    setInformation({ ...information, langue: updatedLangues });
                                }}
                            >
                                <option value="" disabled>
                                    Niveau
                                </option>
                                <option value="Native">Native</option>
                                <option value="Courant">Courant</option>
                                <option value="Intermédiaire">Intermédiaire</option>
                            </select>

                            <fieldset className="fieldset w-1/2">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={information.langue[index]?.langue ?? ''}
                                    onChange={(e) => {
                                        const updatedLangues = [...information.langue];
                                        updatedLangues[index] = {
                                            ...updatedLangues[index],
                                            langue: e.target.value,
                                        };
                                        setInformation({ ...information, langue: updatedLangues });
                                    }}
                                />
                            </fieldset>
                        </div>
                    ))
                }

                {
                    langue.length < 3 &&
                    <button className='btn btn-outline btn-primary'
                        onClick={() => { setLangue([...langue, { langue: '', niveau: '' }]) }}
                    >
                        <Plus /> Ajouter une langue
                    </button>
                }

                {
                    langue.length !== 1 && (
                        <button
                            className="btn btn-outline btn-primary"
                            onClick={() => {
                                setLangue(langue.slice(0, -1));
                                const newLangues = information.langue.slice(0, -1);
                                setInformation({ ...information, langue: newLangues });
                            }}
                        >
                            Enlever
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default PersonalInfoInput;