'use client'
import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import Image from 'next/image'
import flagIcon from '@/images/ae.png'

export const CountryFlagPicker = () => {
    const [selected, setSelected] = React.useState('AE')

  const phoneCodeMap = {
    'AE': '+971',
    'US': '+1', 
    'GB': '+44',
    'IN': '+91'
  }
  return (
    // <ReactFlagsSelect
    //     selected={selected}
    //     onSelect={code => setSelected(code)}
    //     countries={["AE", "US", "GB", "IN"]}
    //     customLabels={phoneCodeMap}
    //     placeholder="Select"
    //     searchable={false}
    //     menuShouldScrollIntoView={false}
    //     menuPosition="fixed"
    //     appendTo={document.body}
    // />

        <>
        <div className="phone-code-static-input">
          <Image src={flagIcon} alt="Flag" />
          <span>+971</span>
          {/* <input type="text" placeholder="Select" /> */}
        </div>
        </>

  )
}
