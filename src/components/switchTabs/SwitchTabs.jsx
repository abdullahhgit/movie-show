import React, { useState } from 'react'
import "./style.scss"

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTabs, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {   // day, 0
        setLeft(index * 100);  // 0
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
        onTabChange(tab, index);
    }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {
            data.map((tab, index) => (
                <span
                    key={index}
                    className={
                        `tabItem ${selectedTabs === index ? "active" : ""}`
                    }

                    onClick={() => activeTab(tab, index)}
                >
                    {tab}
                </span>
            ))
        }
            <span className="movingBg" style={{left}} />

      </div>
    </div>
  )
}

export default SwitchTabs
