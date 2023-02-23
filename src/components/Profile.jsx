import './Profile.css'
import { Button } from "@mantine/core";
export const Profile = () => {
  return (
    <div className='content'>
    <div>
      <img src="https://c4.wallpaperflare.com/wallpaper/4/285/220/wave-yellow-background-yellow-fon-hd-wallpaper-preview.jpg" alt="oboi" />
    </div>

    <div>AVA + description
      {/* <img src="https://miro.medium.com/max/1400/1*fbzvY92vTasUvCqZvh1-1A.jpeg" alt="" /> */}
    </div>
    <div>
      My Posts
      <div>
        New Posts
      </div>
      <div className='item'>
        post 1
      </div>
      <div className='item'> 
        post 2
      </div>
      <div className='item'>
        post 3
      </div>

       <div className="buttonSend"> 
        <Button radius="xs" size="xs">
           Send
       </Button></div>
    </div>
  </div>
  )};

  