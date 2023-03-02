import p from './Post.module.css'


export const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&usqp=CAU" alt="avatar" />
      {props.message}
      <div className={p.like}>
      <span>Like: {props.like} 
      <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png"/>
      </span>
      </div>
    </div>
    )
};

