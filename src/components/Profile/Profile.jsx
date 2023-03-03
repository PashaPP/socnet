import p from './Profile.module.css'
import { MyPost } from './MyPosts/MyPosts';



export const Profile = () => {
  return (
    <div className={p.content}>
      <img src="https://c4.wallpaperflare.com/wallpaper/4/285/220/wave-yellow-background-yellow-fon-hd-wallpaper-preview.jpg" alt="oboi" />
      <div>
        AVA + description
      </div>
      <MyPost />
    </div>
  )
};

