import React ,{ forwardRef } from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name,description,message,photoUrl},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post-header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
         <div className="post-info">
             <h2>{name}</h2>
             <p>{description}</p>
         </div>
        </div>
   
        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>

        </div>
   </div>
  );
})

export default Post;