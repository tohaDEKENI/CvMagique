'use client'
import { House, Eye } from 'lucide-react'
import Link from "next/link";
import ThemeController from './components/themeController';
import PersonalInfoInput from './components/personalInfoInput';
import ProffessionnalObjective from './components/proffesionnalObjective';
import CvLeft from './components/cvLetf';
import CvRight from './components/cvRight';
import { personnalInfo } from './types/information'
import { useRef, useState } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro';

const Page = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState("light")
  const [information, setInformation] = useState<personnalInfo>({
    proffession: "Developpeur",
    address: "Casablanca",
    email: "expemple@gmail.com",
    contact: "+33 6 12 34 56 78",
    site: "http://exemple.com",
    objectif: "Passionné par les nouvelles technologies, je possède une solide expérience en gestion de projet et en développement web. Autonome, rigoureux et curieux, j'aime relever des défis et travailler en équipe pour concevoir des solutions innovantes et efficaces. Mon objectif est de continuer à apprendre et à contribuer à des projets qui ont du sens.",
    nom: "DEKENI",
    prenom: "Toha"
  })

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
          scale: 1,
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

        pdf.save();
      } catch (error) {

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
          <ProffessionnalObjective />
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

          <input type="range" min={0} max="100" value="40" className="range fixed  w-40 bg-secondary" />
          <div ref={divRef} className='w-[794px] h-[1123px]  mx-auto bg-white flex items-center' data-theme={theme}>
            <CvLeft information={information} />
            <CvRight information={information} />
          </div>
          <button onClick={handleDownload} className='btn btn-primary fixed top-25'>Telecharger</button>
        </div>
      </div>

      <div className="flex h-screen lg:hidden items-center justify-center">
        <h1>Desiler</h1>
      </div>
    </div>
  );
}

export default Page;