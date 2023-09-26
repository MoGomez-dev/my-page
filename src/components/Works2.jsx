import React from 'react'
import blackjackAppImg1 from '../img/blackjack-app.png'
import blackjackAppImg2 from '../img/blackjack-app2.png'
import blackjackAppImg3 from '../img/blackjack-app3.png'

export const Works2 = () => {
  return (
    <section id='work2'>
      <div className='container'>
        <div className="work-wrapper">
          <h2 className="section-title">Work</h2>
            <div className="project">
              <div className="image-work2">
                <img src={blackjackAppImg2} />
                <div className="split-image">
                  <img src={blackjackAppImg1} />
                  <img src={blackjackAppImg3} />
              </div>
            </div>
              
              <a
                href="https://simple-blackjack-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sentence">
                  <h3>BlackJack App</h3>
                  <p>
                    Deck of Cards API というAPIをフェッチして、Reactでブラックジャックのアプリを作りました。おおまかな実装は7時間ほどでおわりましたが、Aを1とも11とも数えることができるというシステムに4時間、相手が17を超えるまでカードを引き続けるというシステムに9時間ほどつまずき、計20時間ぐらいで完成しました。
                  </p>
                  <p>
                    まず、Aを1とも11とも数える事ができるシステムでつまずきました。まずはAを1として、Aを持っているかというhaveAceというフラグと、合計スコアが10以下であるというisMinimumというフラグを用意して、両方がtrueのときにlargeScoreというStateにスコア+10した値を保持するというロジックで実装しました。
                  </p>
                  <p>
                    ディーラーが17を超えるまでカードを引き続ける実装でつまずきました。最初は、カードを一枚引くごとにAPIをフェッチしてカードを手札に加えていたのですが、それだと非同期で、whileの条件のディーラーのスコアが17未満という条件がfalseにならず、無限ループしてしまい、うまくいきませんでした。そこで、最初にゲームスタートしたときに15枚一気にフェッチして変数に格納し、その変数からカードを取り出すというロジックにしたことで、同期的にディーラーのターンを実現することができました。また、Stateの更新タイミングの挙動にも苦労して、別の変数を作ってSetStateするときにその変数も変更して、変数でループを回しました。
                  </p>
                  <p>
                    次に、ディーラーが1を11として数えたときのスコアが17以上のときにカードを引くのを止めるという2つを合わせたような課題に直面しましたが、aceFlagがTrueかつ、スコアが7以上11以下のときにループを抜け、プレイヤーとディーラーのスコアを比較することでうまく実装できました。
                  </p>
                  <p>
                    最後に、何度もプレイしていたら、aceを11とした値ではなく、1と数えた値でスコアを比較していることに気づきました。プレイヤー側は、スタンドを押したときに大きい方の値をScoreにセットすることで実装できました。ディーラー側は、一個上の状況でループを抜けるときに、プレイヤーとディーラーの大きい方の値を比較するというコードにしたらうまくいきました。
                  </p>
                </div>
              </a>
            </div>        
          </div>
      </div>
    </section>
  )
}
