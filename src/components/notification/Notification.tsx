import { useEffect } from "react";
import {
  deleteNotification,
  Notification as NotificationType,
} from "../../reducers/notifications";
import { useDispatch } from "react-redux";

function Notification({ id, title, message, duration }: NotificationType) {
  const dispatch = useDispatch();

  // Delete the notifcation after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(deleteNotification(id));
    }, duration || 3000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="bg-zinc-900 text-white p-2 rounded shadow-2xl">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
