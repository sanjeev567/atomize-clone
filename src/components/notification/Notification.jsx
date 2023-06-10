import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./notification.scss";

const Notification = () => {
  return (
    <div className="notification">
      <div className="notify-para">
        <h1>UI Templates are on their way 🚀</h1>
        <p>
          Official UI templates build on Atomize React will be released very
          soon.
        </p>
      </div>
      <button>
        Get notified <ArrowForwardIcon style={{ fontSize: "small" }} />
      </button>
    </div>
  );
};

export default Notification;
