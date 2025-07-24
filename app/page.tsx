'use client'
import { House, Eye } from 'lucide-react'
import Link from "next/link";
import ThemeController from './components/themeController';
import PersonalInfoInput from './components/personalInfoInput';
import ProffessionnalObjective from './components/proffesionnalObjective';
import CvLeft from './components/cvLetf';
import CvRight from './components/cvRight';
import { personnalInfo, parcoursExp, education } from './types/information'
import { useRef, useState } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro';

const Page = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState("light")
  const [zoom, setZoom] = useState(1)

  const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setZoom(value / 100)
  }

  const [information, setInformation] = useState<personnalInfo>({
    proffession: "Developpeur",
    address: "Casablanca",
    email: "expemple@gmail.com",
    contact: "+33 6 12 34 56 78",
    site: ["http://exemple.com"],
    objectif: "Passionné par les nouvelles technologies, je possède une solide expérience en gestion de projet et en développement web. Autonome, rigoureux et curieux, j'aime relever des défis et travailler en équipe pour concevoir des solutions innovantes et efficaces. Mon objectif est de continuer à apprendre et à contribuer à des projets qui ont du sens.",
    nom: "DEKENI",
    prenom: "Toha",
    langue: [{ langue: "Francais", niveau: "Courant" }]
  })

  const [proffessionnelInfo, setProffessionnelInfo] = useState<parcoursExp[]>([{
    titre: 'DEVELLOPPEUR WEB',
    poste: 'INTERFACE',
    annees: '2012',
    role: ' Mon objectif est de continuer à apprendre et à contribuer à des projets qui'
  }])


  const [Education, setEducation] = useState<education[]>([{
    diplome: "Licence Informatique",
    etablissement: "Université Hassan II",
    Lieu: "Casablanca, Maroc",
    Date: "2020-09",
    mention: "Très bien",
    description: "Études en programmation, algorithmique, structures de données, projets web et mobile."
  }])

  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
    "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"
  ]

  const handleDownload = async () => {
    const element = divRef.current
    if (element) {
      try {

        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true
        })

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: "A4"
        })

        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight()

        pdf.addImage(imgData, "PNG", 0, 0, width, height);

        pdf.save("mon_CV.pdf");
      } catch (error) {
        alert("Impossible")
      }
    }
  }

  const handleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme); // Met à jour l’état React
    //document.documentElement.setAttribute('data-theme', selectedTheme); // Change le thème visuellement
    //localStorage.setItem('theme', selectedTheme); // Enregistre le thème dans le navigateur
  };

  return (
    <div>
      <div className="h-screen hidden lg:flex items-center ">
        <div className="w-1/3 h-full bg-base-200 flex flex-col p-10 space-y-4 scrollable-no-scrollbar">
          <div className='flex justify-between'>
            <Link href="/" className="btn btn-outline btn-primary rounded-md"> <House /> </Link>
            <ThemeController />
          </div>
          <div className='flex justify-between'>
            <h1 className='text-3xl italic font-bold'><span className='text-white'>CV</span>Magique</h1>
            <button className='btn btn-primary rounded-md'><Eye className='text-white' />Previsualiser</button>
          </div>
          <PersonalInfoInput information={information} setInformation={setInformation} />
        <ProffessionnalObjective proffessionnelInfo={proffessionnelInfo} setProffessionnelInfo={setProffessionnelInfo} Education={Education} setEducation={setEducation} />
        </div>


        <div className="w-2/3 h-full bg-base-200  justify-center p-10 space-y-4 scrollable-no-scrollbar"
          style={{ backgroundImage: "url('/grid.svg')" }}

        >
          <select value={theme} onChange={handleTheme} className="select fixed right-10 w-40 bg-accent btn btn-outline">
            <option disabled>Pick a theme</option>
            {themes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <input
            type="range"
            min={20}
            max={100}
            value={zoom * 100}
            onChange={handleZoom}
            className="range fixed top-5  w-40 bg-secondary z-50"
          />

          <div
            ref={divRef} style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center'
            }} className='w-[794px] h-[1123px] mx-auto bg-white flex items-center transition-transform duration-300' data-theme={theme}
          >
            <CvLeft information={information} />
            <CvRight information={information} proffessionnelInfo={proffessionnelInfo} Education={Education}/>
          </div>
          <button onClick={handleDownload} className='btn btn-primary fixed top-25'>Telecharger</button>
        </div>
      </div>

      <div className="flex h-screen lg:hidden items-center justify-center">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-error">Accès non disponible</h1>
              <p className="py-6 text-lg text-base-content">
                Pour garantir une expérience optimale, cette application est uniquement accessible sur un écran de taille large (ordinateur de bureau ou portable).
              </p>
              <p className="text-sm text-base-content">
                Merci de vous connecter depuis un appareil avec un écran plus grand.
              </p>
              <img src="/sorry.gif" alt="" />
              <button className="btn btn-outline btn-error mt-4" disabled>
                Mode mobile désactivé
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Page;