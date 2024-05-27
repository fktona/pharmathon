import Image from "next/image"

export default function 
BENEFITS() {
  return (
    <div className='relative mt-[80px] py-12 lg:px-[80px] px-20'>
        <h1 className='text-[35px] font-bold text-center  mb-10 w-full'>BENEFITS</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 text-center">
            <div className="flex flex-col items-center  justify-center gap-3">
                <Image src='/time.jpg' alt="ai" width={250} height={500} className=" relative rounded-xl " />
                <h2 className='text-[20px] font-bold'>Time-Saving</h2>
                <p className="className=' px-8 text-white/75 text-[16px]'">Save time by finding your medications quickly and easily.</p>
            </div>
            <div className="flex flex-col items-center  justify-center gap-3">
                <Image src='/consult.jpg' alt="ai" width={250} height={300} className=" relative rounded-xl h-[180px]" />
                <h2 className='text-[20px] font-bold'>Remote Consultations</h2>
                <p className="className=' px-8 text-white/75 text-[16px]'">Ensure medication availability with real-time stock alerts.</p>
            </div>
            <div className="flex flex-col items-center  justify-center gap-3">
                <Image src='/supply.jpg' alt="ai" width={250} height={500} className=" relative rounded-xl" />
                <h2 className='text-[20px] font-bold'>Reliable Supply</h2>
                <p className="className=' px-8 text-white/75 text-[16px]'">Ensure medication availability with real-time stock alerts.</p>
            </div>
        </div>
    </div>
  )
}
