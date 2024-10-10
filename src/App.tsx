import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./models/IPost";
import {IUser} from "./models/IUser";
import {getPostsOfUser} from "./services/api.service";

function App() {

    const [posts, setPosts] = useState<IPost[]>([]);

    const lift = (user: IUser) => {
        getPostsOfUser(user)
            .then((response: IPost[]) => {
                setPosts(response);
            });
    }

    return (
   <div>
       <hr/>
       {
           posts.map(post => <div key={post.id}>{post.title}</div>)
       }
       <hr/>
     <Users lift={lift}/>
   </div>
  );
}

export default App;
