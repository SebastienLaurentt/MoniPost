import React from 'react'
import SectionHeader from '../SectionHeader'
import Section from '../Section'

const PosturalArgument = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader title="Postural data offers a" titleHighlight="better model" />
      <div className="flex flex-col md:flex-row md:items-center gap-y-4 lg:px-12 xl:px-32">
        <div className="md:w-1/2">
          <p>
          To address the lack of data, we were able to establish a large-scale, high-quality annotated dataset within the vehicle&apos;s interior, leveraging 3D modeling. Through deep learning in artificial intelligence, we developed software aimed at estimating the driver&apos;s posture from an image, more accurately and reliably than the state of the art, to better understand the driver&apos;s condition.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default PosturalArgument