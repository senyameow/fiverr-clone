import React from 'react'
import BoxRow from './BoxRow'

const Levels = () => {
  return (
    <div className=''>
        <div className='/levels/ relative w-full '>
            <img src="//assetsv2.fiverrcdn.com/assets/v2_photos/levels/bg-levels-hero-2-5399c423700461ed2bfd72e8d6aab8fd.jpg" alt="" className=' h-[353px] object-cover' />
            <span className='container xx-auto text-center text-[4rem] shadowedText absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-[#fff]'>Seller levels at Fiverr</span>
        </div>
        <div className='container flex flex-col gap-2 mx-auto'>
            <div className='py-10 px-5 flex flex-row items-start justify-between w-[90%] mx-auto'>
              <span className='text-slate-800 font-bold flex-[2] text-[2.4rem]'>What are seller levels?</span>
              <span className='text-[#d5d4d2] flex-[2.3] text-[1.1rem]'>Your seller level is based on your monthly performance. Superb service, high buyer satisfaction, and on-time delivery can earn you a top-level status on Fiverr, and help you get more traffic and orders.</span>
            </div>
        </div>
        <BoxRow title={'New Seller'} level={'new'} overview={'This is where everything starts. When you create a Gig on Fiverr, you’re automatically ranked as a New Seller. We encourage you to deliver your best work and service to move up to the next level.'} get={['Create up to 7 active Gigs', 'Add 2 Extra services per Gig ($5, $10, $20 for each Extra)', 'Create custom offers (up to $20,000 each)', 'Withdraw your earnings after 14 days']} />
        <BoxRow title={'Level One'} level={'level one'} overview={'To reach the Level 1 status, you need to meet the following requirements:'} get={['Create up to 7 active Gigs', 'Add 2 Extra services per Gig ($5, $10, $20 for each Extra)', 'Create custom offers (up to $20,000 each)', 'Withdraw your earnings after 14 days']} requirements={['Be an active seller for at least 60 days', 'Complete at least 10 orders (all time)', 'Earn $400 or more', 'Maintain a 4.7-star rating over 60 days', 'Deliver a 90% response rate score over 60 days', 'Score a 90% order completion rate over 60 day', 'Achieve a 90% on-time delivery score over 60 days', 'Receive no warnings over 30 days']} />
        <BoxRow title={'Level Two'} level={'level two'} overview={'To reach the Level 2 status, you need to meet the following requirements:'} get={['Create up to 7 active Gigs', 'Add 2 Extra services per Gig ($5, $10, $20 for each Extra)', 'Create custom offers (up to $20,000 each)', 'Withdraw your earnings after 14 days']} requirements={['Be an active seller for at least 60 days', 'Complete at least 10 orders (all time)', 'Earn $400 or more', 'Maintain a 4.7-star rating over 60 days', 'Deliver a 90% response rate score over 60 days', 'Score a 90% order completion rate over 60 day', 'Achieve a 90% on-time delivery score over 60 days', 'Receive no warnings over 30 days']} />
        <BoxRow title={'Top Rated Seller'} level={'top'} overview={'The Top Rated Seller level is the highest status you can achieve on Fiverr and is a recognition for all your hard work. Our editorial team manually reviews your performance for the previous 60 days and awards you this level when you meet the following requirements:'} get={['Create up to 7 active Gigs', 'Add 2 Extra services per Gig ($5, $10, $20 for each Extra)', 'Create custom offers (up to $20,000 each)', 'Withdraw your earnings after 14 days']} requirements={['Be an active seller for at least 60 days', 'Complete at least 10 orders (all time)', 'Earn $400 or more', 'Maintain a 4.7-star rating over 60 days', 'Deliver a 90% response rate score over 60 days', 'Score a 90% order completion rate over 60 day', 'Achieve a 90% on-time delivery score over 60 days', 'Receive no warnings over 30 days']}  />
    </div>
  )
}

export default Levels