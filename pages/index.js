import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import weatherImgBackground from "../imgs/photo-1601134467661-3d775b999c8b.avif";
import styles from "../styles/Home.module.css";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  
  

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=31a8b4b52095ad3f0e51402168c47542`;

  function fetchWeather(e) {
    e.preventDefault();
    if(city === '' || /\s+/.test(city)) alert('please Enter A City Name')
    setLoading(true);
    axios.get(API_URL).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Head>
            <title>Weather - Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.overlay} /> {/* Overlay */}
          <Image
            alt="backrground img"
            src={weatherImgBackground}
            layout="fill"
            className={styles["background-image"]}
            draggable='false'
          />
          {/* {  Search  } */}
          <form className={styles.form} onSubmit={fetchWeather}>
            <input
              text="text"
              value={city}
              placeholder="Search City"
              className={styles["search-field"]}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather} className={styles["search-btn"]}>
              <BsSearch color="white" fontSize="1.125rem" />
            </button>
          </form>
          {/* { WEATHER DATA } */}
          {weather.main && <Weather data={weather} />}
        </div>
      )}
    </>
  );
}