import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./models/IPost";
import {getPostsOfUser} from "./services/api.service";

function App() {

    const [posts, setPosts] = useState<IPost[]>([]);

    const lift = async (id: number) => {
        setPosts(await getPostsOfUser(id));
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
