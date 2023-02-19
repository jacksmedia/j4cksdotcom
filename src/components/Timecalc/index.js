import React, { useState, useEffect } from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Monat = new Date().toLocaleDateString('en-US', options )
const date1 = new Date('5/12/2021')
const date2 = new Date(Monat)
const Difference_In_Time = date2.getTime() - date1.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = ['🛣🧘','🦩🪃','🧣🧘','🫂🏅']
const exercises = ['🦆🌊','🐵🎁','🦇☁️','🦅🌴','🐎🌕','🐠🛸','🐍🍂','🐯🌋','🐉☂️','🐻🔥','🐒🦜','🌬🦮','🦉🌜']
const extras = ['🗼🪜','🎱🌈','🪗🫧','🪑🏹','🕸🎡','🪢🚼','🦎🍭']

const Timecalc = () => {
const [index1, setCount1] = useState(3);
const [index2, setCount2] = useState(11);
const [index3, setCount3] = useState(3);

const DailyUpdater = ({}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
};

  return(
    <div>
      <div>⚓️ Today is
        <span> {Monat}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span><em>{warmUps[index1]}, </em></span>
        <span><em>{exercises[index2]}, </em></span>
        <span><em>{extras[index3]}</em></span>
      </div>
    </div>
  )
}

export default Timecalc