import React from "react";
import {SessionTitle} from "../../../../components/session_title/SessionTitle";
import {TfiCup} from "react-icons/tfi";

export const Round = () => {
  return (
    <div className={'h-full d-flex flex-column'}>
      <SessionTitle>
        <TfiCup/>
        <div>Current Round</div>
      </SessionTitle>
      
      <div className="card overflow-hidden flex-grow-1">
        <table className="table text-sm table-borderless table-striped align-middle gs-0 gy-3 m-0">
          <thead>
          <tr className="">
            <th></th>
            <th className="text-light-gray">Name</th>
            <th className="text-light-gray">Point</th>
            <th className="text-light-gray">Multiplier</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td>You</td>
            <td>100</td>
            <td>2.15</td>
          </tr>
          <tr>
            <td></td>
            <td>CPU 1</td>
            <td>100</td>
            <td>7.53</td>
          </tr>
          <tr>
            <td></td>
            <td>CPU 1</td>
            <td>100</td>
            <td>7.53</td>
          </tr>
          <tr>
            <td></td>
            <td>CPU 1</td>
            <td>100</td>
            <td>7.53</td>
          </tr>
          <tr>
            <td></td>
            <td>CPU 1</td>
            <td>100</td>
            <td>7.53</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}