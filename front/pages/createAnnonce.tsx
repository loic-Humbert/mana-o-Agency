import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import * as EmailValidator from 'email-validator';





export default function CreateAnnonceTsx(props: any) {

  const [ville, setville] = useState("en chargement")

  useEffect(() => {
    fetch(`https://geo.api.gouv.fr/departements/987/communes`).then((res) => res.json()).then((data) => setville(data))



  }, [])
  let formData = {
    companyName: "",
    email: "",
    offerName: "",
    city: "",
    description: "",
    types: "",
  }
  async function post() {

    if (EmailValidator.validate(formData.email)) {
      (document.getElementById("emailNotValid") as any).innerHTML = ""
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData
        )
      };
      await fetch('http://localhost:3000/api/offers', requestOptions) 
    }else{
      (document.getElementById("emailNotValid") as any).innerHTML  = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline">Something seriously bad happened.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </div>`
    }

  }



  return (
    <div >
      <div id='emailNotValid'>

      </div>
      <div>
        <p className='underline text-center my-5 '>Publier une annonce</p>
      </div>
      <div className='flex justify-center'>
        <div className='grid w-max justify-center border-b-2 bg-slate-100 shadow-lg'>
          <div className='text-left my-5  '>
            <p className='underline font-bold'>C'est parti !</p>
          </div>
          <div className='grid justify-center border-b-2 ' >
            <form className="w-full max-w-lg  ">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    nom de l’employeur
                  </label>
                  <input onChange={(e) => formData.companyName = e.target.value} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                  <p className="text-red-500 text-xs italic">
                    Veuillez remplir ce champ.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Email
                  </label>
                  <input onChange={(e) => formData.email = e.target.value} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Description
                  </label>
                  <input onChange={(e) => formData.description = e.target.value} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Intitulé de l’offre
                  </label>
                  <input onChange={(e) => formData.offerName = e.target.value} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************" />
                  <p className="text-gray-600 text-xs italic">a fix</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Villes
                  </label>
                  <select onChange={(e) => formData.city = e.target.value} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {
                      props.villes.map((res: any) => <option id={res.code}>{res.nom}</option>)
                    }

                  </select>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Type
                  </label>
                  <div className="relative">
                    <select onChange={(e) => formData.types = e.target.value} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">

                      <option value={"CDI"} >CDI</option>
                      <option value={"CDD"}>CDD</option>
                      <option value={"Intérim ou Stage"}>Intérim ou Stage</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Zip
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                </div> */}
              </div>
            </form>

          </div>
          <div className='text-right my-5'>
            <button onClick={post} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-fit	">
              Button
            </button>
          </div>

        </div>

      </div>
    </div>

  )

}


export async function getStaticProps() {






  let ville;



  await fetch(`https://geo.api.gouv.fr/departements/987/communes`).then((res) => res.json()).then((data) => ville = data)


  return {
    props: {
      villes: ville
    }
  }
}