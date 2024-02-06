"use client";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const singlePost = [
  {
    id: "01",
    image:
      "https://who.ibomma.link/wp-content/uploads/2023/12/Keedaa-Cola-Telugu-glb2o-2023-230x345.jpg",
    title: "Keedaa Cola",
    year: "2023",
    zoner: "Action / Comedy / Crime",
    cast: "Brahmanandam, Tharun Bhascker",
    director: "Tharun Bhascker Dhaassyam",
    trailer: "https://youtu.be/OLju-cMjgco?si=-2Tyc7HeaPBn3Twz",
    synopsis:
      "A hilarious group takes on a challenge of a lifetime when they decide to make quick money by planting a cockroach into a soft drink bottle. Will they hit the jackpot?",
    desc: "Telugu Keedaa Cola Movie Watch Online free watch ibomma Comedy King Brahmanandam Latest Telugu movies new 2023 Watch Keedaa Cola Full Movie Download streaming Qida Kola Film watch Khida Khola Cockroach based movie in www.ibomma.one.",
  },
  {
    id: "02",
    image:
      "https://who.ibomma.link/wp-content/uploads/2024/01/Hi-Nanna-Telugu-tgh7v-2023-230x345.jpg",
    title: "Hi Nanna",
    year: "2023",
    zoner: "Drama / Family / Romance",
    cast: "Nani, Mrunal Thakur",
    director: "Shouryuv",
    trailer: "https://youtu.be/3Ld05Om2UWs?si=8LiOT4Zt7OL9cV9Z",
    synopsis:
      "A single father begins to narrate the story of the missing mother to his child and nothing remains the same.",
    desc: "Natural Star Nani Latest Telugu Film Hi Nanna watch online OTT in iBomma Platform free. Sita Ramam Fame Mrunal Thakur new Hit movie Hi Nanna Movie Watch Online High Quality and Free download in iBomma. Watch Hi Nana in iBomma",
  },
  {
    id: "03",
    image:
      "https://who.ibomma.link/wp-content/uploads/2024/01/90s-Middle-Class-Biopic-Telugu-fmp2v-2024-230x345.jpg",
    title: "90s Middle Class Biopic",
    year: "2024",
    zoner: "Drama",
    cast: "Shivaji, Vasuki, Mouli",
    director: "Aditya Hasan",
    trailer: "https://youtu.be/7zzlOolbhFY?si=UfwjU1fdkxjh4T5T",
    synopsis:
      "A nostalgic trip down memory lane, delving into the everyday life of a middle-class family.",
    desc: "Hero Sivaji web series 90s Middle Class Biopic web series watch in www.iBomma.one OTT platform. All episodes Nineties biopic web series all parts of Season 1 Download in iBomma 1990's Kids web series watch online ott platform",
  },
  {
    id: "04",
    image:
      "https://who.ibomma.link/wp-content/uploads/2024/01/Kotabommali-PS-Telugu-gry2u-2023-230x345.jpg",
    title: "Kotabommali PS",
    year: "2023",
    zoner: "Action / Crime / Thriller",
    cast: "Srikanth, Varalaxmi",
    director: "Teja Marni",
    trailer: "https://youtu.be/fHhUBVSFQWI?si=YK9QSGNMzHZsgc2B",
    synopsis:
      "A police officer finds himself on the run after being framed by a politician for a crime.",
    desc: "Kota Bommali PS Movie in Telugu Watch Online HD quality in official iBomma website www.iBomma.one portal. Srikanth and Varalaxmi Sarath Kumar in lead roles as police officers Malayalam Nayattu film remade into Telugu as Kota Bommali PS / Kotabommali PS / Kothabommalie Police Station",
  },
  {
    id: "05",
    image:
      "https://who.ibomma.link/wp-content/uploads/2023/12/Annapoorani-Telugu-cgu4l-2023-230x345.jpg",
    title: "Annapoorani",
    year: "2023",
    zoner: "Drama",
    cast: "Nayanthara, Jai, Sathyaraj",
    director: "Nilesh Krishna",
    trailer: "https://youtu.be/ED-4d0S4Mj0?si=ahQCStSPXcdx2frG",
    synopsis:
      "A girl born in an orthodox family aspires to become India's best chef. She faces events and challenges on her way and goes beyond her conventional beliefs and prejudices to achieve her dream.",
    desc: "Lady Superstar Nayanthara Latest Telugu Dubbed Movie Annapoorani HD Streaming and Direct download link in official ibomma website www.ibomma.one Watch Annapurna free online watch Annapurani The Goddess of Food in telugu Annapoorna / Annnapurni film free download",
  },
  {
    id: "06",
    image:
      "https://who.ibomma.link/wp-content/uploads/2023/12/Parking-Telugu-us8ma-2023-230x345.jpg",
    title: "Parking",
    year: "2023",
    zoner: "Drama / Thriller",
    cast: "Harish Kalyan, Indhuja Ravichandran",
    director: "Ramkumar Balakrishnan",
    trailer: "https://youtu.be/BBje503L_Ng?si=5w1lcM9kYW5DJoX_",
    synopsis:
      "An elderly man and a youngster who are tenants sharing two different floors of an individual house fight over a parking space.",
    desc: "Telugu Dubbed Movie Parking of Jersey and LGM Movie Fame Harish Kalyan Latest Movie with Indhuja Ravichandran as heroine. Movie based on car parking slot fighting. Full Movie Free Download and HD quality streaming only on www.ibomma.one official website",
  },
];

export const GlobalContextProvider = ({ children }) => {
  const [singleMovieData, setSingleMovieData] = useState();
  const [movies, setMovies] = useState();

  const allMovieData = process.env.ALL_MOVIES_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mybomma-backed.onrender.com/api/getAllMovies"
        );
        const data = await response.json();
        setMovies(data); // Assuming the response is an array of movies, adjust accordingly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        singlePost,
        singleMovieData,
        setSingleMovieData,
        movies,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
