import React from 'react'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import PriceCard from '../PriceCard'

const Price = () => {
  return (
    <Section marginTop={true} >
      <SectionHeader title="Choose your right" titleHighlight="plan" />
  
      <ul className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-4 lg:justify-center'>
        <li>
          <PriceCard forfait="Basic" forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit." price={0} />
        </li>
        <li>
          <PriceCard forfait="Premium" forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. " price={19.99} />
        </li>
        <li>
          <PriceCard forfait="Enterprise" forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit." price={39.99} />
        </li>
      </ul>
    </Section>
  )
}

export default Price