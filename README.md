# READ ME


# faybuk
Faybuk is a clone of social media app, Facebook. It is a single page application that allow users to connect with friends and family. Users can upload a cover photo and profile picture, send and receive friend requests, post on walls and comment on posts. 

[Live Site](https://faybuk.herokuapp.com/#/login)
## Technologies Used


### Backend
* PostgreSQL
* Ruby on Rails

### Frontend
* Javascript
* React
* Redux
* HTML/CSS

### Storage
* AWS S3


## Features



### User Authenticiation


* Users can sign up, login, and logout.
* Users can also use Demo Login.
![Screen Shot 2021-06-11 at 9 30 17 AM](https://user-images.githubusercontent.com/78631034/121719177-b033f680-ca97-11eb-8b79-ee5f8d1ae916.png)

### Profile Page
* User's profile page has an intro section that let others know more about them. The intro section is customizable, allowing users to update their info.
![Screen Shot 2021-06-11 at 9 45 29 AM](https://user-images.githubusercontent.com/78631034/121722116-e2deee80-ca99-11eb-8cc0-43e802b0b16b.png)
![Screen Shot 2021-06-11 at 9 46 10 AM](https://user-images.githubusercontent.com/78631034/121722129-e5414880-ca99-11eb-95ce-156e3795bebb.png)

* Used hooks for creating the user's edit from. This allowed for two different creations of states. A state for the intro container and the edit form. 
```Javascript
function IntroBox() {
  const [details, setDetails] = useState({
    work: "whats work?",
    study: "huh?",
    home: "home"
  });
  const [formVals, setFormVals] = useState({
    work: "",
    study: "",
    home: "",
  });
  const [visible, setVisible] = useState(false);
  const { work, study, home } = details;
```

## Future Direction
* Users are able to upload cover and profile photo.
* Comments/Postings
    * Users can post on each others wall if they are friends.
    * Users can comment on each others post. 
    * Users can create/edit/delete comments and posts. 
* Friending
    * Users can send and receive friend requests.
    * Users can accept or decline friend requests. 
* News Feed
    * Displays all comments and posts for current user.
    * Displays contacts/friends list.


