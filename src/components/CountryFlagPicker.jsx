'use client'
import React from 'react'
import ReactFlagsSelect from 'react-flags-select'

export const CountryFlagPicker = () => {
    const [selected, setSelected] = React.useState('AE')

  const phoneCodeMap = {
    'AE': '+971',
    'US': '+1',
    'GB': '+44',
    'IN': '+91'
  }
  return (
    <ReactFlagsSelect
        selected={selected}
        onSelect={code => setSelected(code)}
        countries={["AE", "US", "GB", "IN"]}
        customLabels={phoneCodeMap}
        placeholder="Select"
        searchable={false}
    />
  )
}
