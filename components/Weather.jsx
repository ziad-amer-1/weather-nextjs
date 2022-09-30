import React from 'react'
import Image from 'next/image'
import styles from '../styles/weather.module.css'

function Weather({ data }) {
  
  console.log(data)
  
  return (
    <div className={styles['weather-container']}>
      <div className={styles['top-section']}>
        <div className={styles['info-container']}>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=''
            width='100'
            height='100'
          /> 
          <p style={{ fontSize:'50px', color: '#FFF' }}>{ data.weather[0].main }</p>
        </div>
        <p style={{ fontSize: '70px', color: 'white' }}>{ data.main.temp.toFixed(0) }&#176;</p>
      </div>
      <div className={styles['bottom-section']}>
        <p className={styles['country-name']}>Weather in {data.name}</p>
        <div className={styles['weather-info-container']}>
          <div>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels Like</p>
          </div>
          <div>
            <p>{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{data.wind.speed.toFixed(0)} MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather