import React, { PropsWithChildren} from 'react'

function MainContainer(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-red-50">
      {props.children}
    </div>
  )
}

export default MainContainer
