import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import { DUMMY_DATA } from '../assets/DUMMY_DATA';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootStrap from 'react-bootstrap'
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';



const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position:fixed;
  display: flex;
  top: 0; 
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  ${'' /* height: 800px;  */}
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: red;
  color: #000;
  padding:5rem;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


const columns = [
  {dataField: 'title' , text: "Title"},
  {dataField: 'description' , text: "Description"},
  {dataField: 'amount' , text: "Amount(₪)"},
]

const options = {
  custom: true,
  totalSize: DUMMY_DATA.length
};


const Popup = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
              <BootstrapTable
                keyField='_id'
                data = {DUMMY_DATA}
                columns = {columns}
                pagination = {paginationFactory()}
                />
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Popup


{/* <ModalImg src={require('./modal.jpg')} alt='camera' />
<ModalContent>
  <h1>Are you ready?</h1>
  <p>Get exclusive access to our next launch.</p>
  <button>Join Now</button>
</ModalContent> */}








// import React from 'react'
// import "../utils/popup.css"
// const Popup = (props) => {
//     return (
//         (props.trigger) ? (            
//             <div className="popup">
//                 <div className="popup-inner">
//                     <button  className="close-btn">close</button>
//                     {props.children}
//                 </div>
//             </div>
//         ):""
// )
// }

// export default Popup