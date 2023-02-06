import { Link } from 'react-router-dom'

export const Navigations = ()=>{
    return(
    <nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
        <span className='font-bold'>React 2023</span>
        <span>
            <Link className='mr-2' to="/">Products</Link>
            <Link to="/about">About</Link>
        </span>
    </nav>
    )
}