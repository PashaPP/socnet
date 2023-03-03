import p from './MyPosts.module.css'
import { Post } from './Post/Post';

export const MyPost = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea name="" id="" cols="20" rows="3"></textarea>
        <button>Add</button>
        <button>Remove</button>
      </div>
      <div className={p.posts}>
        <Post message="Hi, how are you?" like="15" />
        <Post message="It`s my first post!" like="5" />
      </div>

    </div>
  )
};
