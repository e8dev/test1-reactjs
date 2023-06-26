import { FC } from 'react';
import {Round} from "./round/Round";
import {Speed} from "./speed/Speed";
import {Points} from "./topbar/Points";
import {Multiplier} from "./topbar/Multiplier";

interface IProps {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
  started: boolean;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}

export const RightPanel: FC<IProps> = ({started, setStarted, speed, setSpeed}) => {

  
  return (
    <div className={'d-flex flex-column gap-5'}>
      <div>
        <div className="d-flex flex-row gap-4 mb-4">
          <Points/>
          <Multiplier/>
        </div>
        <button disabled={started ? true : false } className={'btn btn-sm btn-primary w-full'} onClick={() => {setStarted(true)}}>
          Start
        </button>
      </div>
      <Round/>
      <Speed speed={speed} setSpeed={setSpeed}/>
    </div>
  )
}