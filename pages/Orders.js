import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Orders = () => {

    const [ord, setOrd] = useState("");

    const router = useRouter()

    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'))
        if (!myuser) {
            router.push('/')
        }
        fetchData(myuser.token)
    }, [router])

    const fetchData = async (token) => {
        let data = { token: token };

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        let { orders } = response
        setOrd(orders)
    }

    return (
        <>
            <div className='container m-auto min-h-screen'>
                <h1 className='text-2xl font-semibold text-center p-8'>My Orders</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">

                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                NO
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                ORDER-ID
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Full Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Mobile NO.
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Your Adress
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                                                Message
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                                                subtotal
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                                                cart
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                                                <Link href={"/"}>Details</Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(ord).map((k, i) => {
                                            return <tr key={k} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ord[k]._id}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].fullname}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].mobile}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].adress}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].message}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].subTotal}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {ord[k].subTotal}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Link href={`/OrderPage?id=${ord[k]._id}`}>Details Of Order</Link>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Orders
