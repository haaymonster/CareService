import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
<<<<<<< HEAD
} from '@ionic/react';
import SlideMenu from '../../../components/SlideMenu';

import { Link } from 'react-router-dom';
import bodyImg from './body-logo.png';
=======
} from "@ionic/react";
import SlideMenu from "../../../components/SlideMenu";
import "./style0.css";
import { Link } from "react-router-dom";
import bodyImg from "../../mate/mateJudge/body-logo.png";
>>>>>>> 04f7449e3b6c77737a0af6c7186e232cb026c1f2

const UserHome: React.FC = () => {
  return (
    <>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="userHome">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              height: 'auto',
              backgroundColor: '#ffffff',
              margin: '30px 30px 20px',
              textDecoration: 'none',
              color: 'black',
            }}
            className="logo-container"
          >
            <Link to="/other-page">
              <img
                src={bodyImg}
                alt="Logo"
                style={{
                  flexDirection: 'column',
                  cursor: 'pointer',
                  width: '200px',
                  height: '100%',
                  objectFit: 'cover',
                }}
                className="logo-img"
              />
            </Link>
          </div>
<<<<<<< HEAD
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '10% auto 0',
              backgroundColor: '#ffffff',
              width: '313px',
              height: '227px',
              cursor: 'pointer',
            }}
            className="apply-container"
          >
            <Link style={{ textDecoration: 'none' }} to="/other-page">
              <h1 className="body-content"> 동행 서비스</h1>
=======
          <div className="body-image-container">
            <Link to="/user/request">
              <img src="body-image.png" alt="Body Image" className="body-img" />
>>>>>>> 04f7449e3b6c77737a0af6c7186e232cb026c1f2
            </Link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
