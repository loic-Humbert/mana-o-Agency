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
            <tbody className="my-5"> <tr className="border-b border-t-4 border-gray-200 ">

                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>        {offerUseState.companyName} </Link>
                </td>
                <td className="px-6 py-4">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>  {offerUseState.offerName}</Link>
                </td>
                <td className="px-6 py-4 bg-gray-50 ">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>  {offerUseState.city}</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>  {offerUseState.types}</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href={"/fullOfferPage/?id=" + offerUseState.id}>  {offerUseState.description.substring(offerUseState.description.length - 100, offerUseState.description.length)} ...</Link>

                </td>

            </tr>
            </tbody>

        </>
    )

}






