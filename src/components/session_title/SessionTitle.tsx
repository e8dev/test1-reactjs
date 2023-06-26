import {FC, ReactNode} from "react";

export const SessionTitle: FC<{
  children: ReactNode
}> = (props) => {
  return (
    <h6 className={'mb-3 d-flex flex-row align-items-center gap-2'}>
      {props.children}
    </h6>
  )
}