import React from 'react'
import {ContentWrapper} from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

const Trending = () => {
    const onTabChange = () => {

    }
  return (
    <div className='cauroselSection'>
      <ContentWrapper>
        <span className="cauroselTitle">
            Trending
        </span>
        <SwitchTabs data={["Day", "Week"]} onTabChange = {onTabChange} />
      </ContentWrapper>
    </div>
  )
}

export default Trending
