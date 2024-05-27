import Nav from "./nav";
import Button from "./button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-landing-bg text-start pb-8 relative
    h-full py-4  lg:text-[25px] px-[22px] lg:pl-[55px]  overflow-hidden text-[18px]'>
      ">
        <Nav /> 

    <div className='flex justify-start   gap-[36px]  items-center'>
      <div className='flex flex-col  z-10 items-start lg:max-w-[60%]  justify-center
       gap-2'>
        <div>
        <p className='lg:text-[15px] text-[12px] mb-6 lg:mb-3 lg:w-[50%] w-[90%] bg-[#2a2a2a] py-2 rounded-[70px] text-center'>Your nearest pharmacy just a click away</p>
        <h1 className=' text-[50px] lg:text-[55px] lg:leading-[65px] leading-[100%] font-bold '>Experience the Future of Pharmaceutical Convenience</h1>
        </div>
        <p className='md:text-[20px] text-[17px] text-white/75  '>Find medications, consult with pharmacists, and manage your health with DrugsCo. </p>
        {/* <Button>Explore More</Button> */}
      </div>
            <Image src='/person.png' alt="ai" width={400} height={400} className="bg-transparen0 relative" />

        
    </div>
       </section>
  )
}