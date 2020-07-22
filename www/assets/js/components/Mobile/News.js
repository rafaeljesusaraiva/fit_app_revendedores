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
    
class News extends Component {
    constructor() {
        super();
        this.state = { News: [], loading: true}
    }
    
    componentDidMount() {
        this.getPosts();
    }
    
    getPosts() {
        const News = [
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 10,
              "title": "optio molestias id quia eum",
              "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
            },
            {
              "userId": 2,
              "id": 11,
              "title": "et ea vero quia laudantium autem",
              "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
            },
            {
              "userId": 2,
              "id": 12,
              "title": "in quibusdam tempore odit est dolorem",
              "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
            },
            {
              "userId": 3,
              "id": 22,
              "title": "dolor sint quo a velit explicabo quia nam",
              "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
            },
            {
              "userId": 3,
              "id": 23,
              "title": "maxime id vitae nihil numquam",
              "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
            },
            {
              "userId": 4,
              "id": 34,
              "title": "magnam ut rerum iure",
              "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
            },
            {
              "userId": 5,
              "id": 42,
              "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
              "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
            },
            {
              "userId": 5,
              "id": 43,
              "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
              "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
            },
            {
              "userId": 5,
              "id": 44,
              "title": "optio dolor molestias sit",
              "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
            },
            {
              "userId": 6,
              "id": 60,
              "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
              "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
            },
            {
              "userId": 7,
              "id": 61,
              "title": "voluptatem doloribus consectetur est ut ducimus",
              "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
            },
            {
              "userId": 7,
              "id": 68,
              "title": "odio quis facere architecto reiciendis optio",
              "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
            }
          ];
        this.setState({ News, loading: false })
    }
    
    render() {
        const loading = this.state.loading;
        return (
            <IonList className="no-bg">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Últimas Notícias</IonCardTitle>
                </IonCardHeader>
              </IonCard>
              { loading ? (
                  <IonSpinner name="crescent" />
              ) : this.state.News.map(post =>
                    <IonCard key={post.id}>
                      <IonCardHeader>
                        <IonCardSubtitle>{post.title}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>{post.body}</IonCardContent>
                    </IonCard>
              )}
            </IonList>
        )
    }
}
    
export default News;