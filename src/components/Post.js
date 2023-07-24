import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddCommentIcon from '@mui/icons-material/AddComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Janggo Dev</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" />
        <InputOption Icon={AddCommentIcon} title="Comment" />
        <InputOption Icon={RepeatIcon} title="Repost" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
