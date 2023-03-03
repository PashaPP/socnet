import n from './Navbar.module.css'
export const Navbar = () => {
   return (
      <nav className={n.nav}>
         <div>
            <div className={`${n.item} ${n.active}`}>
               <a>Profile</a>
            </div>
            <div className={`${n.item} ${n.active}`}>
               <a>Messages</a>
            </div>
            <div className={n.item}>
               <a>News</a>
            </div>
            <div className={`${n.item} ${n.active}`}>
               <a>Music</a>
            </div>
            <div className={n.item} >
               <a>Settingus</a>
            </div>

         </div>
      </nav>
   )
};

