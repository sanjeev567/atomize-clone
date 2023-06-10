import "./login.scss";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LoginIcon from "../loginIcon/LoginIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreateIcon from "@mui/icons-material/Create";
import AttachmentIcon from "@mui/icons-material/Attachment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FollowImg from "../../assets/girl.png";
import SeaFace from "../../assets/cart-img.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
const Login = () => {
  const [heart, setHeart] = useState("FavoriteBorderIcon");
  return (
    <>
      <div className="login">
        <div className="left">
          <div className="login-icons">
            <LoginIcon icon={<FavoriteBorderIcon style={{ color: "red" }} />} />
            <LoginIcon
              icon={<RemoveRedEyeOutlinedIcon style={{ color: "blue" }} />}
            />
            <LoginIcon icon={<CreateIcon style={{ color: "goldenRod" }} />} />
            <LoginIcon icon={<AttachmentIcon style={{ color: "green" }} />} />
            <LoginIcon icon={<PlayArrowIcon style={{ color: "orange" }} />} />
            <LoginIcon
              icon={<FileDownloadOutlinedIcon style={{ color: "blue" }} />}
            />
          </div>
          <div className="follow-card">
            <div className="follow-img">
              <img src={FollowImg} alt="" />
              <h3>Meagan Fisher</h3>
              <p>Engineering Manager</p>
            </div>
            <div className="follow-btn">
              <span className="follow">
                Follow <AddIcon />
              </span>
              <span>
                Message <ChatBubbleOutlineIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="canvas">
            <div className="canvas-img">
              <img src={SeaFace} alt="canvas error" />
            </div>
            <div className="user-like">
              <img src={FollowImg} alt="girlErr" />
              <h5>Harmarn Preet</h5>
              {heart === "FavoriteBorderIcon" ? (
                <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setHeart("FavoriteOutlinedIcon")}
                />
              ) : (
                <FavoriteOutlinedIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => setHeart("FavoriteBorderIcon")}
                />
              )}
            </div>
          </div>
          <div className="user-profile">
            <img src={FollowImg} alt="girlErr" />
            <h5>Suren yatri</h5>
            <CreateIcon style={{ color: "goldenrod" }} />
          </div>
        </div>
        <div className="right">
          <h3>Login into your account</h3>
          <p>
            Don't have an account yet?{" "}
            <span style={{ color: "#0284fe", cursor: "pointer" }}>
              Create New
            </span>
          </p>
          <span className="box ">
            <input type="email" placeholder="johndoe@gmail.com" />
            <EmailOutlinedIcon className="inputIcon" />
          </span>

          <span className="box ">
            <input type="password" placeholder="Password" />
            <RemoveRedEyeOutlinedIcon className="inputIcon" />
          </span>
          <span className="box btn">
            <button>Login</button>
          </span>
        </div>
      </div>
      <hr
        className="Hr"
        style={{
          width: "75%",
          color: "gray",
          margin: "80px auto",
          borderBottom: ".5px solid gray",
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
        }}
      />
    </>
  );
};

export default Login;
