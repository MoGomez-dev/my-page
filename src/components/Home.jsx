import React from 'react'
import selfie from "../img/IMG_6360.jpg"

export const Home = () => {
  return (
    <>
      <section id='home'>
        <div className="container">
          <div className="home-wrapper">
            <img className="selfie" src={selfie} />
            <div className="profile">
              <h2 className="section-title">About</h2>
              <h5>MOTONARI</h5>
              <p>2002年12月生まれ、愛知県出身</p>
              <p>
                フリーターとしてアルバイトをしながらフロントエンドエンジニアになるために独学で勉強中
              </p>
              <h5>使う技術</h5>
              <p> HTML,CSS,JavaScript,React,Redux</p>
              <h5>勉強予定または勉強中</h5>
              <p> Next.js,TypeScript</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
