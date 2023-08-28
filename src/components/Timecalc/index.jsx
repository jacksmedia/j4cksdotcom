import React, {Link, useState} from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = [
{"url":"https://youtu.be/X3-gKPNyrTA?si=5uiflXNft6zCyvx6&t=25","emojis":"🛣🎒","title":"A 🧘 Yoga For Neck, Shoulders, Upper Back 10m37s"},
{"url":"https://youtu.be/50txkOrJn9o?t=87","emojis":"🦩🪃","title":"L ☯️ Tai Chi 5 Minutes a Day - Warm Up 10m44s"},
{"url":"https://youtu.be/SedzswEwpPw?t=51","emojis":"🧣🎒","title":"A 🧘 Yoga for Neck and Shoulder Relief 17m37s"},
{"url":"https://youtu.be/jOfshreyu4w?t=41","emojis":"🫂🏅","title":"A 🧘 Quick Stress Fix - 5 Minute Sequence 6m18s"}
]
const exercises = [
{"url":"https://youtu.be/3GtFp6sz5zM?t=68","emojis":"💨🍯","title":"M 🪷 Qigong to Purge and Tonify 20m15s"},
{"url":"https://youtu.be/cEOS2zoyQw4?t=89","emojis":"🦆🌊","title":"L ☯️ Tai Chi 5 Minutes a Day Module 01 11m"},
{"url":"https://youtu.be/HMbT-CPVl2k?t=49","emojis":"🍵🐵","title":"M 🪷 MOOD LIFTER 15m40s"},
{"url":"https://youtu.be/enk0bOv-gF8?t=16","emojis":"🦇☁️","title":"L ☯️ Tai Chi 5 min a day module 02 6m20s"},
{"url":"https://youtu.be/IyINAjEoTIs?t=85","emojis":"🚪🦅","title":"M 🪷 Qigong for Beginners 30m3s"},
{"url":"https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31","emojis":"🐎🌕","title":"L ☯️ Tai chi 5 Minutes a Day Module 03 9m8s"},
{"url":"https://youtu.be/8wddPSIEpvE?t=61","emojis":"🐠🛸","title":"M 🪷 Qigong for Vitality: Opening the Door of Life 13m12s"},
{"url":"https://youtu.be/RoIqYtiTLFI?t=18","emojis":"🐍🍂","title":"L ☯️ UPDATED: Module 04 beginners Tai Chi 10m38s"},
{"url":"https://youtu.be/nmmNWj9YtAw?si=Q7Hj2zZY6bPrq2GN&t=52","emojis":"🐯🌋","title":"M 🪷 DAILY QIGONG ROUTINE 17m8s"},
{"url":"https://youtu.be/62a20CiIAlY?t=44","emojis":"🐉☂️","title":"L ☯️ Tai Chi Five Minutes a Day Module 05 7m2s"},
{"url":"hhttps://youtu.be/EZT8RC0wRbA?si=o8q9s3p7nwUaKhQw&t=112","emojis":"🐻🔥","title":"M 🪷 Qigong to Circulate Your Energy 15m30s"},
{"url":"https://youtu.be/tbwbL1pg0HY?t=30","emojis":"🐒🦜","title":"D ☯️ Seated Tai Chi for Home Practice 18m48s"},
{"url":"https://youtu.be/Ba0fweKUwIc?t=37","emojis":"🌬🦮","title":"A 🧘 Yoga to Calm Your Nerves 24m36s"},
{"url":"https://youtu.be/_V29hE0_oBE","emojis":"🦉🌜","title":"D ☯️ Seated Tai Chi For Seniors with David-Dorian Ross 11m15s"}
]
const extras = [
{"url":"https://youtu.be/Yzm3fA2HhkQ?t=45","emojis":"🪢🪡","title":"A 🧘 Yoga For Flexibility 16m26s"},
{"url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s","emojis":"🗼🪜","title":"A 🧘 Head Stand Yoga Pose 17m59s"},
{"url":"https://youtu.be/ED3_i_xVd_s?t=54","emojis":"🎱🌈","title":"L ☯️ Qigong exercises to manage Stress and Anxiety 10m14s"},
{"url":"https://youtu.be/FgfT2fOv31E?t=40","emojis":"🪗🫧","title":"A 🧘 Yoga For Abs 8m2s"},
{"url":"https://youtu.be/LZ2oHU-mMJI?t=443","emojis":"🕸🎡","title":"L ☯️ Qigong 5 Minutes a Day - Spinning the Silk Wheel 12m29s"},
{"url":"https://youtu.be/Nnd5Slo02us?t=25","emojis":"🪑🏹","title":"A 🧘 Yoga For Focus & Productivity 9m51s"},
{"url":"https://youtu.be/eBdfCX5XnX4","emojis":"4️⃣🦎","title":"A 🧘 6-Minute Yoga For Hips 6m15s"},
{"url":"https://youtu.be/8T39OBNaNzU?t=26","emojis":"✂🧱","title":"A 🧘 2-Minute Core Conditioning 12m6s"}
]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

export default function Timecalc() {
  const choice1 = RoundedResult % howManyWarmUps
  const choice2 = RoundedResult % howManyExercises
  const choice3 = RoundedResult % howManyExtras

  const [randomNumber1, setRandomNumber1] = useState(howManyWarmUps)
  const getRandomNumber1 = () => {
    const randomNumber1 = Math.floor(Math.random() * howManyWarmUps + 1)
    setRandomNumber1(randomNumber1)
  }
  const [randomNumber2, setRandomNumber2] = useState(howManyExercises)
  const getRandomNumber2 = () => {
    const randomNumber2 = Math.floor(Math.random() * howManyExercises + 1)
    setRandomNumber2(randomNumber2)
  }
  const [randomNumber3, setRandomNumber3] = useState(howManyExtras)
  const getRandomNumber3 = () => {
    const randomNumber3 = Math.floor(Math.random() * howManyExtras + 1)
    setRandomNumber3(randomNumber3)
  }
  const listWarmUps = warmUps.map((warmUp) => 
    <a href="{warmUps.emojis}"><li>{warmUp.emojis}</li></a>
  );
  const listExercises = exercises.map((exercise) => 
    <a href="{exercises.emojis}"><li>{exercise.emojis}</li></a>
  );
  const listExtras = extras.map((extra) => 
    <a href="{extras.emojis}"><li>{extra.emojis}</li></a>
  );
  return(
    <div>
      <div>⚓️ Today is
        <span> {Today}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>

      <div>🥠 Today's Suggested Videos:
        <table>
          <tr>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{warmUps[choice1].emojis}</h2>
              <p>{warmUps[choice1].title}</p>
            </td>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{exercises[choice2].emojis}</h2>
              <p>{exercises[choice2].title}</p>
            </td>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{extras[choice3].emojis}</h2>
              <p>{extras[choice3].title}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}