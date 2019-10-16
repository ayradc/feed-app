import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../utils/svg/index'

function Header() {
    return (
        <header>
            <div className="mb-12 py-4 px-8 mt-4 w-full h-24 bg-white border border-gray-400 rounded flex items-center">
                <div className="container mx-auto flex">
                    <div className="w-3/5 flex">
                        <div className="">
                            <Link to="/" className="w-auto inline-flex items-center h-full">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <div class="w-2/5 flex justify-end items-center">
                        <Link to="/" className="text-gray px-8 py-2.2 font-semibold text-xs ml-3 no-underline hover:text-blue-600">ALL POSTS</Link>
                        <Link to="/add" className="border border-blue-800 bg-blue-600 text-white px-8 py-4 font-semibold text-xs rounded ml-4 no-underline hover:bg-blue-700">ADD NEW</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header