import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsTwitterX} from "react-icons/bs"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div class="main-container">
    <div class="header">
      <h1>ÖZ GEÇMİŞ</h1>
    </div>
    <div class="profile">
      <img src="../src/img/bne.jpg" alt="Profil Fotoğrafı"/>
      <h2>Sefa Kozanoğlu</h2>
    </div>
    <div class="info-section">
      <h3>İletişim Bilgileri</h3>
      <p>Email: sefa.kozanoglu@kun.edu.tr</p>
      <p>Telefon: +90 0543 201 7250</p>
      <a href="https://instagram.com/"><FaInstagram size={40} color='white'/></a>
      <a href="https://www.linkedin.com/in/sefa-kozano%C4%9Flu-590175338/"><FaLinkedin size={40} color='white'/></a>
      <a href="https://x.com/"><BsTwitterX size={40} color='white'/></a>


      <h3>Deneyim</h3>
      <ul>
        <li>Deneyimsiz</li>
      </ul>

      <h3>Eğitim</h3>
      <ul>
        <li>Kapadokya Meslek Yüksekokulu Bilgisayar Programcılığı 2. Sınıf</li>
      </ul>
      <h3>Yetenekler</h3>
      <ul>
        <li>C#</li>
        <li>Node Js</li>
        <li>Python</li>
      </ul>
      <h3>Hobiler ve İlgi alanları</h3>
      <ul>
        <li>Kitap okuma</li>
        <li>Oyun</li>
        <li>Ders Çalışmak</li>
      </ul>
    </div>
  </div>   
    </>
  )
}
export default App
