import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Route } from "next/dist/server/router";

export default function FullOfferTsx(props: any) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [offerUseState, setOffer] = useState({

        id: "",
        companyName: "",
        email: "",
        offerName: "",
        city: "",
        description: "",
        types: ""

    })
    const router = useRouter()

console.log(router.query.id);


    useEffect(() => {
        setLoading(true)

        fetch('http://localhost:3000/api/offers/' + router.query.id)
            .then((res) => res.json())
            .then((data) => {
                setOffer(data)
                setData(data)
                setLoading(false)
            })
    }, [])

    console.log(props);

    // useEffect(() => setOffer(props.offer), [])
    return <>
        <div className="card  bg-base-100 shadow-xl flex justify-center">
            <div className="">
                <div className="card-body border-b-4  ">
                    <h2 className="card-title">
                        {offerUseState.offerName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Email : {offerUseState.email} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{offerUseState.types}</div>
                        <div className="badge badge-outline">Vues 10</div>
                    </div>
                </div>
                <p className="text-center">Description</p>
                <article>
                    {offerUseState.description}
                </article>
                <div>
                    salut les reuf
                </div>
            </div>

        </div>
    </>
}


