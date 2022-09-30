import React from 'react'
import Image from 'next/image'
import SpinnerGIF from '../public/spinner.gif'
import styles from '../styles/spinner.module.css'

function Snipper() {
  return (
    <>
      <Image
        alt='loading...'
        src={SpinnerGIF}
        className={styles['spinner-img']}
      />
    </>
  )
}

export default Snipper