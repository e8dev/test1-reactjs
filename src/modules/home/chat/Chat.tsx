import React from "react";
import {IoMdChatbubbles} from "react-icons/io";
import {SessionTitle} from "../../../components/session_title/SessionTitle";

export const Chat = () => {
  return (
    <div>
      <SessionTitle>
        <IoMdChatbubbles/>
        <div>Chat</div>
      </SessionTitle>
      
      <div className="rounded overflow-hidden">
        <div
          className="chat-main bg-gray d-flex flex-column p-3 justify-content-end gap-2"
          style={{height: 200, background: '#1e1f29'}}
        >
          <div className={'text-sm d-flex gap-2 align-items-start'}>
            <span className={'fw-bolder text-gray-800 flex-shrink-0'}>CPU 1:</span>
            <span className="badge p-1 rounded-1 text-sm text-start badge-info text-wrap">hi guys</span>
          </div>
          <div className={'text-sm d-flex gap-2 align-items-start'}>
            <span className={'fw-bolder text-danger flex-shrink-0'}>CPU 2:</span>
            <span className="badge p-1 rounded-1 text-sm text-start badge-primary text-wrap">hi guys</span>
          </div>
          <div className={'text-sm d-flex gap-2 align-items-start'}>
            <span className={'fw-bolder text-gray-800 flex-shrink-0'}>CPU 1:</span>
            <span className="badge p-1 rounded-1 text-sm text-start badge-info text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum perspiciatis quia soluta suscipit ullam voluptatum? Dolores, reiciendis sapiente?
            </span>
          </div>
        </div>
        <div className="card rounded-top-0">
          <div className={'d-flex gap-3 p-3'}>
            <input type="text" className={'form-control form-control-sm flex-grow-1'}/>
            <button className={'btn btn-primary btn-sm px-8'}>Start</button>
          </div>
        </div>
      </div>
    </div>
  )
}