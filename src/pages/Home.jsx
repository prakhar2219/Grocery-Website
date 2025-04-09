import React from 'react'
import MainBanner from '../component/MainBanner'
import Categories from '../component/categories'
import BestSeller from '../component/BestSeller'
function Home() {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSeller/>
    </div>
  )
}

export default Home
