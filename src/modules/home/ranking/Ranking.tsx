import {FaRankingStar} from "react-icons/fa6";
import React from "react";
import {SessionTitle} from "../../../components/session_title/SessionTitle";

export const Ranking = () => {
  return (
    <div className={'h-full d-flex flex-column'}>
      <SessionTitle>
        <FaRankingStar/>
        <div>Ranking</div>
      </SessionTitle>
  
      <div className="card overflow-hidden flex-grow-1">
        <table className="table text-sm table-borderless table-striped align-middle gs-0 gy-3 m-0">
          <thead>
            <tr className="">
              <th></th>
              <th className="text-light-gray">No</th>
              <th className="text-light-gray">Name</th>
              <th className="text-light-gray">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>3</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>4</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>5</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}