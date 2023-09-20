import React, { Fragment } from 'react'
import { createPortal } from "react-dom";

const Modal = (props) => {

  const Backdrop = (props) => {
    return(
      <div className="fixed h-[100vh] w-full bg-black bg-opacity-50 z-30" onClick={props.onClick}></div>
    )
  }

  const ModalOverlay = () => {
    return (
      <div>{props.children}</div>
    )
  } 

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onAction} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal