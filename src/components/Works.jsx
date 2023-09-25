import React from 'react'
import timerAppImg from '../img/timerApp.png'

export const Works = () => {
  return (
    <section id="work">
      <div className='container'>
        <div className="work-wrapper">
          <h2 className="section-title">Work</h2>
            <div className="project">
              <div className="image">
                <img src={timerAppImg} />
              </div>
              <a
                href="https://timer-app-azure.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sentence">
                  <h3 className="project-title">Timer App</h3>
                  <p>
                    指定した時間を数えてくれるタイマーアプリをバニラjavascriptで作りました。５時間ぐらいで完成しました。
                  </p>
                  <p>
                  遊びでFontボタンを押したらフォントがランダムで変わるようにしてみました。時間は全て秒で換算し、分ボタンを押したら残り時間の変数に６０を追加し、秒ボタンを押したら１を追加するようにして、画面に表示する際に計算して分と秒を出すようにしました。
                  </p>
                  <p>
                  最初はfor文のなかでsetTimeoutを用いてカウントダウンしようと思いましたが、挙動がうまく行かず、setIntervalで作成しました。
                  </p>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
