import React, { useState } from 'react'
import Caurosel from '../../../components/caurosel/Caurosel'
import {ContentWrapper} from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/UseFetch'

const Trending = () => {
    const [endPoint, setEndpoint] = useState('day');
    const {data, loading} = useFetch(`/trending/all/${endPoint}`)
    
    const onTabChange = (tab) => {
      setEndpoint(tab==='Day' ? 'day' : 'week');
    }
  return (
    <div className='cauroselSection'>
      <ContentWrapper>
        <span className="cauroselTitle">
            Trending
        </span>
        <SwitchTabs data={["Day", "Week"]} onTabChange = {onTabChange} />
      </ContentWrapper>
      <Caurosel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending
