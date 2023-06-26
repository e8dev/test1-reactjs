import {FC} from "react";

export const Login: FC<{
  login: ()=>void
}> = (props) => {
  return (
    <div className={'card bg rounded h-full'}>
      <div className="card-body">
        <h1 className={'text-center mt-12 mb-20'}>Welcome</h1>
  
        <div>
          <p className={'text-center text-muted'}>Please Insert Your Name</p>
          <input placeholder={'Your Name'} type="text" className={'form-control form-control-sm my-2'}/>
          <button
            className={'btn btn-sm btn-primary'}
            style={{width: '100%'}}
            onClick={()=>props.login()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}