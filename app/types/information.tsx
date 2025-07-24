
type Langue = {
    niveau:string,
    langue:string
}

export type personnalInfo = {
    proffession:string,
    address:string,
    email:string,
    contact:string,
    site:string[],
    objectif:string,
    nom:string,
    prenom:string
    langue:Langue[]
}

export type parcoursExp = {
    titre:string,
    poste:string,
    annees:string,
    role:string
}

export type education = {
    diplome:string,
    etablissement:string,
    Lieu:string,
    Date :string,
    mention:string,
    description:string
} 

/*
export type parcours = {
    experience:exp[],
    formation:exp[],
}
*/
