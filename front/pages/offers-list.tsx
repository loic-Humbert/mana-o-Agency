import { env } from "process";
import OfferTsx from "./offer";

export default function OffersList(props: any) {

    return <div className="mx-24 my-16">


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Nom de l’employeur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Intitulé du poste
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Ville
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type de contrat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>

                {
                    props.offers.map((offer: any) => <OfferTsx offer={offer}></OfferTsx>)
                }
            </table>
        </div>

        <div />
    </div>

}


export async function getStaticProps() {
    let offers;
    await fetch(process.env.API_URL +      `/api/offers`).then((res) => res.json()).then((data) => offers = data)
    return {
        props: {
            offers: offers
        }
    }
}


