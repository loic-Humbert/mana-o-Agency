import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { json } from "stream/consumers";
import * as EmailValidator from 'email-validator';

export default function FullOfferTsx(props: any) {
    const router = useRouter()
    const [file, setFile] = useState<FormData>();

    const [applyData, setApplyData] = useState<any>();
    const [data, setData] = useState({

        id: "",
        companyName: "",
        email: "",
        offerName: "",
        city: "",
        description: "",
        types: "",
        vue: "",
        createdAt: ""


    })
    const [isLoading, setLoading] = useState(false)
    const [offerUseState, setOffer] = useState({})


    function formatDate(date: string) {
        let dateFormat = new Date(date)
        return dateFormat.toLocaleDateString()

    }



    console.log("ici");

    useEffect(() => {
        if (router.isReady) {
            setLoading(true)
            fetch('http://localhost:3000/api/offers/' + router.query.id)
                .then((res) => res.json())
                .then((data) => {
                    setOffer(data)
                    setData(data)
                    setLoading(false)
                })
        }
    }, [router.isReady])

    fetch('http://localhost:3000/api/offers/' + data.id, {
        method: 'PUT',
    })



    function handleFileChange(e: any) {

        if (e.target.files) {
            const formData: FormData = new FormData();
            formData.append("file", e.target.files[0]);

            setFile(formData);
            let test = JSON.stringify(Object.fromEntries(formData));
        }
    };

    function postApply() {
        let dataUser = {
            lastName: (document.getElementById("lastName") as HTMLInputElement).value,
            firstName: (document.getElementById("firstName") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
        }
        if (!file) {
            return;
        }
        if (EmailValidator.validate(dataUser.email)) {
            fetch('http://localhost:3000/api/apply/' + data.id + '/upload/', {

                method: 'POST',
                body: file

                // 👇 Set headers manually for single file upload
                //   headers: {
                //     'content-type': file.type,
                //     'content-length': `${file.size}`, // 👈 Headers need to be a string
                //   },
            }).then(response => response.json())
                .then((data) => {
                    (document.getElementById("emailInvalid") as any).innerHTML = `<div class="bg-green-400-100 border border-green-500-400 text-green-700 px-4 py-3 rounded relative" role="alert">

                    <span class="block sm:inline">Votre cv a bien été envoyée</span>
              
                  </div>`
                    const requestOptions = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(dataUser)
                    };
                    fetch('http://localhost:3000/api/apply/' + data.id, requestOptions)
                        .then(response => {
                            router.push('/offers-list')

                        })

                }
                );
        } else {
            (document.getElementById("emailInvalid") as any).innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">

            <span class="block sm:inline">EMAIL invalide</span>
      
          </div>`

        }


    };


    // }

    return <>
        <div id="emailInvalid"></div>
        <a href="/offers-list"><label className="btn btn-secondary">Retour</label></a>

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <form className="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                nom
                            </label>
                            <input id="lastName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text"  />
                            <p className="text-red-500 text-xs italic">.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                prénom
                            </label>
                            <input id="firstName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"  />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                email
                            </label>
                            <input id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text"  />
                            <p className="text-red-500 text-xs italic">.</p>
                        </div>


                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900" >Votre cv</label>
                    <input onChange={(e) => handleFileChange(e)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " id="multiple_files" type="file" multiple />

                </form>
                <div className="modal-action">
                    <label htmlFor="my-modal-5" onClick={postApply} className="btn">Valider</label>
                </div>
            </div>
        </div>
        <div className="card  bg-base-100 shadow-xl flex justify-center">
            <div className="">
                <div className="card-body border-b-4  ">
                    <h2 className="card-title">
                        Nom :{data.offerName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Email : {data.email} </p>
                    <p className="text-center border-b-4 border-b-indigo-500 ">Description</p>
                    <article>
                        {data.description}
                    </article>
                    <div className="flex justify-between">
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{data.types}</div>
                            <div className="badge badge-outline">Vues : {data.vue + 1}</div>
                            <div className="badge badge-outline">Date : {formatDate(data.createdAt)}</div>
                        </div>
                        <label htmlFor="my-modal-5" className="btn btn-secondary">Postuler</label>
                    </div>


                </div>

            </div>

        </div>
    </>
}


