import React from 'react'
import MainBanner from '../component/MainBanner'
import Categories from '../component/categories'
import BestSeller from '../component/BestSeller'
import BottomBanner from '../component/BottomBanner'
function Home() {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
    </div>
  )
}

export default Home
