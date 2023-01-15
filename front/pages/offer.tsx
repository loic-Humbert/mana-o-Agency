import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function OfferTsx(props: any) {
    const [offerUseState, setOffer] = useState({
        id: "",
        companyName: "",
        offerName: "",
        city: "",
        types: "",
        description: ""
    })

    useEffect(() => setOffer(props.offer), [])

    return (
        <>
            <tbody className="my-5"> <tr className="border-b border-t-4 border-gray-200 dark:border-gray-700">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>        {offerUseState.companyName} </Link>
                </th>
                <td className="px-6 py-4">
                    {offerUseState.offerName}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {offerUseState.city}
                </td>
                <td className="px-6 py-4">
                    {offerUseState.types}
                </td>
                <td className="px-6 py-4">
                    {offerUseState.description}
                </td>

            </tr>
            </tbody>

        </>
    )

}






