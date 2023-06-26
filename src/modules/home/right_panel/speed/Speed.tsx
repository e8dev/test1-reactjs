import React, {FC, useState} from "react";
import Slider from 'react-rangeslider'
import {SessionTitle} from "../../../../components/session_title/SessionTitle";
import {BsSpeedometer2} from "react-icons/bs";


interface IProps {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}

export const Speed: FC<IProps> = ({speed,setSpeed}) => {
  //const [speed, setSpeed] = useState(3)
  return (
    <div>
      <SessionTitle>
        <BsSpeedometer2/>
        <div>Speed</div>
      </SessionTitle>
      <div className={'card rounded px-2'}>
        <div className={'pb-2'}>
          <Slider
            onChange={(e)=>setSpeed(e)}
            min={1}
            value={speed}
            max={5}
            labels={{
              1: '1x',
              2: '2x',
              3: '3x',
              4: '4x',
              5: '5x',
            }}
          />
        </div>
      </div>
    </div>
  )
}