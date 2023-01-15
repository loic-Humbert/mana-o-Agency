import { ChangeEvent, useState } from "react";
import { json } from "stream/consumers";

export default function FullOfferTsx(props: any) {



    const [file, setFile] = useState<FormData>();
    const [applyData, setApplyData] = useState<any>();



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






        // const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server



        fetch('http://localhost:3000/api/apply/1/upload/', {

            method: 'POST',
            body: file

            // 👇 Set headers manually for single file upload
            //   headers: {
            //     'content-type': file.type,
            //     'content-length': `${file.size}`, // 👈 Headers need to be a string
            //   },
        }).then(response => response.json())
            .then((data) => {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataUser)
                };
                fetch('http://localhost:3000/api/apply/' + data.id, requestOptions)
                    .then(response => response.json())

            }
            );

    };


    // }

    return <>
        <label htmlFor="my-modal-5" className="btn">open modal</label>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <form className="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                nom
                            </label>
                            <input id="lastName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                prénom
                            </label>
                            <input id="firstName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                email
                            </label>
                            <input id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">.</p>
                        </div>


                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Votre cv</label>
                    <input onChange={(e) => handleFileChange(e)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />

                </form>
                <div className="modal-action">
                    <label htmlFor="my-modal-5" onClick={postApply} className="btn">btn!</label>
                </div>
            </div>
        </div>
        <div className="card  bg-base-100 shadow-xl flex justify-center">
            <div className="">
                <div className="card-body border-b-4  ">
                    <h2 className="card-title">
                        {props.offer.offerName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Email : {props.offer.email} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{props.offer.types}</div>
                        <div className="badge badge-outline">Vues : {props.offer.vue + 1}</div>
                    </div>
                </div>
                <p className="text-center">Description</p>
                <article>
                    {props.offer.description}
                </article>
            </div>

        </div>
    </>
}


export async function getStaticProps() {
    let offer;
    await fetch(`http://localhost:3000/api/offers/1`).then((res) => {
        if (res) {
            res.json()

        }
    }).then((data: any) => {
        if (data) {
            offer = data

        }
        fetch('http://localhost:3000/api/offers/' + data.id, {
            method: 'PUT',
        }).then((res) => res.json()).then((data) => {
        })

    })
    return {
        props: {
            offer: offer
        }
    }
}

