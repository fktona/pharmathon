import React from 'react'
import Image from 'next/image'

export default function 
Solution() {

  return (
    <div id='solutions' className='relative mt-[40px] 
    bg-landing-bg py-12 lg:px-[80px] px-5'>
     <h1 className='text-[35px] font-bold text-start'>Solution we provide</h1>
     <div className='flex items-center flex-col-reverse lg:flex-row justify-center gap-8 mt-12'>
        
            <ul className='grid lg;grid-cols-2 grid-cols-1 gap-6 lg:max-w-[50%]'>
                <li className=' flex flex-col p-2 gap-3 box'>
                    <h2 className='text-[20px] font-bold  flex items-start justify-between'>Comprehensive Pharmacy Listings <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
</h2>
                    <p className='text-white/75 text-[16px]'> Access a complete list of nearby pharmacies and confirm medication availability</p>
                </li>
                <li className=' flex flex-col p-2 gap-3 box'>
                    <h2 className='text-[20px] font-bold flex items-start justify-between'>Telepharmacy Interface <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
</svg>
</h2>
                    <p className='text-white/75 text-[16px]'>Interact with pharmacists, submit prescriptions, and order supplements from home.</p>
                </li>
                <li className=' flex flex-col p-2 gap-3 box'>
                    <h2 className='text-[20px] font-bold flex items-start justify-between'>Real-time Inventory Management <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
</svg>

</h2>
                    <p className='text-white/75 text-[16px]'> Receive updates on medication stock levels to avoid unnecessary delays.</p>
                </li>
                <li className=' flex flex-col p-2 gap-3 box'>
                    <h2 className='text-[20px] font-bold flex items-start justify-between'>Stock Taking
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z" clipRule="evenodd" />
</svg>
</h2>
                    <p className='text-white/75 text-[16px]'>Monitor the amount and quatity of stock in the pharmacy</p>
                </li>
            </ul>
        
        <div>
            <Image src='/solution.png' alt='solution' width={500} height={500} className='w-full' />
        </div>   
     </div>
    </div>
  )
}
