import React from "react";
import {SlBadge} from "react-icons/sl";
import {BsPersonCircle} from "react-icons/bs";
import {IoIosTimer} from "react-icons/io";

export const MetricTop = () => {
  return (
    <div
      className={'row g-4'}
    >
      <div className="col-md-4">
        <MetricTopScore/>
      </div>
      <div className="col-md-4">
        <MetricTopUser/>
      </div>
      <div className="col-md-4">
        <MetricTopTime/>
      </div>
    </div>
  )
}

export const MetricTopScore = () => {
  return (
    <div className={'rounded card w-full px-2 h-3rem d-flex flex-row align-items-center'}>
      <SlBadge size={30}/>
      <div className={'text-center fw-bolder flex-grow-1'}>100</div>
    </div>
  )
}
export const MetricTopUser = () => {
  return (
    <div className={'rounded card w-full px-2 h-3rem d-flex flex-row align-items-center'}>
      <BsPersonCircle size={30}/>
      <div className={'text-center fw-bolder flex-grow-1'}>Thomas</div>
    </div>
  )
}
export const MetricTopTime = () => {
  return (
    <div className={'rounded card w-full px-2 h-3rem d-flex flex-row align-items-center'}>
      <IoIosTimer size={30}/>
      <div className={'text-center fw-bolder flex-grow-1'}>21:30</div>
    </div>
  )
}