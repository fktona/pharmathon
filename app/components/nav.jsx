import Link from "next/link"

export default function 
Nav() {
  return (
    <nav className=' text-white/90 flex justify-between lg:flex-row flex-row-reverse lg:px-4
     mb-4 lg:text-[18px] text-[15px] relative'>
        <ul className='flex items-center cursor-pointer  gap-10'>

            <li className="hover:underline">
              <Link href='/#solutions'>
              Solutions
              </Link>
              </li>
            <li className="hover:underline">
              <Link href='/#problems'>
              Problems
              </Link>
              </li>
        </ul>
        <div className='font-bold text-[20px] px-8 lg:text-[25px]'>
            <span>Drugcop</span>
        </div>
        <button className='hidden md:block'>
          
        </button>
    </nav>
  )
}
