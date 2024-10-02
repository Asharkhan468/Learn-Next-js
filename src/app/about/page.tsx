import React from 'react'
import Image from 'next/image'

function page() {
  return (
   <>
   <h1>Abou page here</h1>
   <Image src={'/favicon.ico'} alt='Image not load' width={500} height={500} priority quality={80}/>
   </>
  )
}

export default page