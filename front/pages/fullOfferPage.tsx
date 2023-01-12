export default function FullOfferTsx(props: any) {
    return <>

        {/* <div>
            <div>
                Nom de l'entreprise {props.offer.companyName}
            </div>
            <div>
                Email : {props.offer.email}
            </div>
            <div>
                Ville : {props.offer.city}
            </div>
            <div>
                Type d'annonce : {props.offer.types}
            </div>
        </div> */}
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
                        <div className="badge badge-outline">Vues 10</div>
                    </div>
                </div>
                <p className="text-center">Description</p>
                <article>
                    {props.offer.description}
                </article>
                <div>
                    salut les reuf
                </div>
            </div>

        </div>
    </>
}


export async function getStaticProps() {
    let offer;
    await fetch(`http://localhost:3000/api/offers/1`).then((res) => res.json()).then((data) => offer = data)
    return {
        props: {
            offer: offer
        }
    }
}