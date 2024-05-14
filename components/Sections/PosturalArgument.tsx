import React from 'react'
import SectionHeader from '../SectionHeader'
import Section from '../Section'
import Image from 'next/image'

const PosturalArgument = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader title="Postural data offers a" titleHighlight="better model" />
      <div className="flex flex-col md:flex-row md:items-center gap-y-4  lg:gap-x-16 xl:px-32">
        <div className="md:w-3/4">
          <p className="text-center lg:text-left text-sm md:text-md">
          To address the lack of data, we were able to establish a large-scale, high-quality annotated dataset within the vehicle&apos;s interior, leveraging 3D modeling. Through deep learning in artificial intelligence, we developed software aimed at estimating the driver&apos;s posture from an image, more accurately and reliably than the state of the art, to better understand the driver&apos;s condition.
          </p>
        </div>
        <div>
          <Image src="/images/Posture.jpg" alt="DMS" width={1000} height={500} />
        </div>
      </div>
    </Section>
  )
}

export default PosturalArgument