import React, { PropsWithChildren } from 'react'

function MainContainer(props: PropsWithChildren & { background: string }) {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-start"
      style={{ backgroundImage: `url(https://bing.com/${props.background})` }}
    >
      {props.children}
    </div>
  );
}

export default MainContainer
