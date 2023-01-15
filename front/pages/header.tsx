import type { NextPage } from 'next'
import styles from '../styles/Header.module.css'
import Link from 'next/link'


const Header: NextPage = () => {
    return (
        <div className=' h-20 bg-slate-200 table-cell align-middle	w-screen' >
            <div className='flex justify-between mx-20 '>
                <div className='flex content-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/600px-Logo_P%C3%B4le_Emploi_2008.svg.png" className='h-10  table-cell align-middle' />
                    <p className='mt-3 ml-6 '>Mana'o Agency</p>
                </div>
                <div className='flex content-center'>
                    <div className='mt-1'>
                        <div className="dropdown dropdown-bottom">
                            <picture id='dropdownDefaultButton' data-dropdown-toggle="dropdown"> <img tabIndex={0} className="w-10 h-10 rounded-full" src="data:image/jpeg;base64,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" alt="Rounded avatar"></img></picture>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href='/createAnnonce'>ajouter une annonce</a></li>
                                <li><a>Voir mes annonces</a></li>
                            </ul>
                        </div>



                    </div>
                    <div className='ml-10'>
                        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
                        </button>
                    </div>
                </div>
            </div>
{/* 
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/tech" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/tech/grayscale" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/animals/grayscale" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Header
