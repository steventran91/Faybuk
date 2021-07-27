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
![Screen Shot 2021-07-26 at 9 51 52 PM](https://user-images.githubusercontent.com/78631034/127097361-cdaee83a-bb21-4b62-ae26-17634fbec705.png)


### Profile Page
* User's profile page contains an Intro section that is editable as well as a bio section. 
* Users have the ability to upload cover photo or profile picture. 
![Screen Shot 2021-07-26 at 9 54 18 PM](https://user-images.githubusercontent.com/78631034/127097566-d40d6ee0-cca8-4414-801d-a060084fb029.png)
![Screen Shot 2021-07-26 at 9 56 04 PM](https://user-images.githubusercontent.com/78631034/127097715-82c88843-9497-46df-ae75-8adf64ea48fa.png)

* Utilized formData to allow users to upload photos for posts and comments. 
```Javascript
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.props.modal === "post") {
      formData.append("post[body]", this.state.body);
      formData.append("post[author_id]", this.props.currentUser.id);
      formData.append("post[wall_id]", this.props.wallUser.id);
      if (this.state.imageFile) {
        formData.append("post[photo]", this.state.imageFile);
      }
      this.props.publishPost(formData).then(this.handlePostSubmit);
    } else if (Array.isArray(this.props.modal)) {
      formData.append("post[id]", this.props.modal[1]);
      formData.append("post[body]", this.state.body);
      formData.append("post[author_id]", this.props.currentUser.id);
      formData.append("post[wall_id]", this.props.wallUser.id);
      if (this.state.imageFile) {
        formData.append("post[photo]", this.state.imageFile);
      }
      this.props.editPost(formData).then(this.handlePostSubmit);
    }
  }
```


### Friend Requests
* Users have the ability to send and decline friend requests.
![Screen Shot 2021-07-26 at 9 57 28 PM](https://user-images.githubusercontent.com/78631034/127097843-568cd0af-5dcd-4160-82f7-5e8d58bb1760.png)

### Posts/Comments 
* Users can post on their profile page wall or their feed wall. 
* Users can also comment on posts and like posts and comments as well. 
![Screen Shot 2021-07-26 at 10 06 00 PM](https://user-images.githubusercontent.com/78631034/127098745-e06be77a-2f22-4ff6-aeab-be6311fe9d6a.png)
![Screen Shot 2021-07-26 at 10 07 51 PM](https://user-images.githubusercontent.com/78631034/127098752-f1d9efcc-9876-48a2-8d92-4f53cc05d38b.png)







