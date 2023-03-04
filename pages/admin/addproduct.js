import React, { useState } from 'react'
import Sidebar from './admincomponent/sidebar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const addproduct = () => {

    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [sdesc, setSdesc] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [availbleQty, setAvailbleQty] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { title, slug, sdesc, desc, img, category, size, color, price, availbleQty }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response)
        toast.success('New Product Is Added Successfully Yayy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const handleChange = (e) => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)
        }
        else if (e.target.name == 'slug') {
            setSlug(e.target.value)
        }
        else if (e.target.name == 'sdesc') {
            setSdesc(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value)
        }
        else if (e.target.name == 'img') {
            setImg(e.target.value)
        }
        else if (e.target.name == 'category') {
            setCategory(e.target.value)
        }
        else if (e.target.name == 'size') {
            setSize(e.target.value)
        }
        else if (e.target.name == 'color') {
            setColor(e.target.value)
        }
        else if (e.target.name == 'price') {
            setPrice(e.target.value)
        }
        else if (e.target.name == 'availbleQty') {
            setAvailbleQty(e.target.value)
        }
    }

    return (
        <>

            <div className='ml-80 mr-10'>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                Title Of The Product
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" onChange={handleChange} value={title} name='title' type="text" placeholder="product title here" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="slug">
                                Product Slug
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} value={slug} name='slug' id="slug" type="text" placeholder="Slug" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sdesc">
                                product Description Short
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} value={sdesc} name='sdesc' id="sdesc" type="text" placeholder="description Short" />
                        </div>
                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="desc">
                                product Description Long
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} value={desc} name='desc' id="desc" type="text" placeholder="description long" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="img">
                                Product Img Url
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} value={img} name='img' id="img" type="text" placeholder="img url" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                                Select Category
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} value={category} name='category' id="category">
                                    <option>select category</option>
                                    <option>kids</option>
                                    <option>tshirt</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="size">
                                Select Size
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} name='size' value={size} id="size">
                                    <option>Select Size</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="color">
                                Select Color
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} name='color' value={color} id="color">
                                    <option>Select Color</option>
                                    <option>black</option>
                                    <option>blue</option>
                                    <option>white</option>
                                    <option>red</option>
                                    <option>yellow</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} id="price" name='price' value={price} type="text" placeholder="price" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="availbleQty">
                                Quantity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleChange} id="availbleQty" name='availbleQty' value={availbleQty} type="text" placeholder="quantity" />
                        </div>
                    </div>
                    <button className='btn bg-red-600 text-white rounded-xl p-2'>Submit</button>
                </form>
            </div>
            <Sidebar />
        </>
    )
}

export default addproduct
