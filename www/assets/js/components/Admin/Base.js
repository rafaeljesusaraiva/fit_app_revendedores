import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import Home from './Home';
// import Ambassadors from './Ambassadors';
// import News from './News';

import {
    IonApp,
    IonMenu, 
    IonHeader, 
    IonToolbar,
    IonContent, 
    IonList, 
    IonItem,
    IonFooter,
    IonLabel,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonTitle,
    IonAvatar
} from '@ionic/react';
    
class Base extends Component {
    
    render() {
        return (
            <>
                <IonApp>
                    <IonMenu side="start" content-id="main-content">
                        <IonHeader>
                            <IonToolbar translucent className="sidebar-user-padding" id="user-slot">
                                <IonItem lines="none">
                                    <IonAvatar slot="start">
                                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                                    </IonAvatar>
                                    <IonLabel>
                                        <h3>Rafael Saraiva</h3>
                                        <p>Online</p>
                                    </IonLabel>
                                </IonItem>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="no-scroll">
                            <IonList className="menu-space">
                                <IonItem href={"/app/home"}>
                                    <IonLabel>Início</IonLabel>
                                </IonItem>
                                <IonItem href={"/app/embaixadores"}>
                                    <IonLabel>Embaixadores</IonLabel>
                                </IonItem>
                                <IonItem href={"/app/noticias"}>
                                    <IonLabel>Notícias</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonContent>
                        <IonFooter>
                            <IonButton href={"/logout"} expand="full" className="button-fit">Logout</IonButton>
                        </IonFooter>
                    </IonMenu>
                    <div className="ion-page" id="main-content">
                        <IonHeader>
                            <IonToolbar>
                                <IonButtons slot="start">
                                    <IonMenuButton>
                                        <IonButton className="menu-button">Menu</IonButton>
                                    </IonMenuButton>
                                </IonButtons>
                                <IonTitle><em>fit</em> Sportbalsem PT</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding bg-app" overflow-scroll="true">
                            <Switch>
                                {/* <Route path="/app/home" component={Home} />
                                <Route path="/app/embaixadores" component={Ambassadors} />
                                <Route path="/app/noticias" component={News} /> */}
                            </Switch>
                        </IonContent>
                    </div>
                </IonApp>
            </>
        );
    }
}
    
export default Base;