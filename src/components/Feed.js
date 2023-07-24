import React, {useState} from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {

    const [posts, setPosts] = useState([])
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input className="input__text" type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="E7A33E" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="C0CBCD" />
          <InputOption Icon={ArticleIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (<Post />))}
      <Post name="Jangg Dev" description="Kaya mo yan!" message="Be consistent!"/>
    </div>
  );
}

export default Feed;
