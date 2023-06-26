import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import React from "react";

export const Multiplier = () => {
  return (
    <div className={'rounded card w-full h-3rem d-flex flex-column align-items-center'}>
      <div className={'text-sm text-center text-gray-700'}>Multiplier</div>
      <div className="d-flex gap-1 px-2">
        <button className="btn btn-icon btn-sm btn-outline-dark border border-1 flex-shrink-0 py-0 h-25px w-25px">
          <AiFillCaretDown/>
        </button>
        <input
          value={2.15} type="text" className={'form-control form-control-sm text-center py-0 my-0'} disabled
          style={{
            minHeight: "unset",
          }}
        />
        <button className="btn btn-icon btn-sm btn-outline-dark border border-1 flex-shrink-0 py-0 h-25px w-25px">
          <AiFillCaretUp/>
        </button>
      </div>
    </div>
  )
}