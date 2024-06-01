import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import Notification from "./Notification";

function NotificationManager() {
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );

  return (
    <div className="flex flex-col fixed top-4 left-4 space-y-2 z-50">
      {notifications.map((notification) => (
        <Notification
          key={notification.message}
          id={notification.id}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
        />
      ))}
    </div>
  );
}

export default NotificationManager;
