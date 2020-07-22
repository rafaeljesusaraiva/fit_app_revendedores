import React, {Component} from 'react';
import axios from 'axios';

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSpinner,
    IonList
} from '@ionic/react';
    
class Ambassadors extends Component {
    constructor() {
        super();
        this.state = { Ambassadors: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.get(`/api/users`).then(Ambassadors => {
            //setTimeout( () => this.setState({ Ambassadors: Ambassadors.data, loading: false}), 1000000);
            this.setState({ Ambassadors: Ambassadors.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <IonList className="no-bg">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Embaixadores &nbsp;<em>FIT</em></IonCardTitle>
                </IonCardHeader>
              </IonCard>
              { loading ? (
                  <IonSpinner name="crescent" />
              ) : this.state.Ambassadors.map(ambassador =>
                    <IonCard key={ambassador.id}>
                        <img src={ambassador.imageURL} />
                        <IonCardHeader>
                            <IonCardSubtitle>{ambassador.name}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>{ambassador.description}</IonCardContent>
                    </IonCard>
              )}
            </IonList>
        )
    }
}
export default Ambassadors;