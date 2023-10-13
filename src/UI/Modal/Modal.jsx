import React, { Fragment } from 'react'
import { createPortal } from "react-dom";

const Modal = ({onAction, children}) => {

  const Backdrop = ({onClick}) => {
    return(
      <div className="fixed h-[100vh] w-full bg-black bg-opacity-50 z-30" onClick={onClick}></div>
    )
  }

  const ModalOverlay = () => {
    return (
      <>{children}</>
    )
  } 

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(<Backdrop onClick={onAction} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal