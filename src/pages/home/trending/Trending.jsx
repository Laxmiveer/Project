import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switch from '../../../components/switch/Switch'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
   const [endpoint, setEndPoint] = useState('day')
   const { data, loading } = useFetch(`/trending/all/${endpoint}`)

   const onTabChange = (tab) => {
      setEndPoint(tab === "Day" ? "day" : "week")
   }
   return (
      <div className='carouselSection'>
         <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <Switch data={['Day', 'Week']} onTabChange={onTabChange} />
            
         </ContentWrapper>
         <Carousel data={data?.results} loading={loading} />
      </div>
   )
}

export default Trending
