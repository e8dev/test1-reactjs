import {MetricTop} from "./MetricTop/MetricTop";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface IProps {
  currentNumber: number;
}

export const Metric: FC<IProps> = ({currentNumber}) => {
  return (
    <div
      className={'d-flex flex-column gap-4'}
    >
      <MetricTop/>
      <div
      className={'card rounded'}
      style={{
        height: 500
      }}
    >
      <div className="card-body">

        <div style={{fontSize:"50px",fontWeight:"bold",textAlign:"center"}}>{currentNumber}x</div>
        
        
        <div className="game-wrapper" style={{width:"100%",height:"100%",position:"relative"}}>

        </div>



      </div>
    </div>
    </div>
  )
}