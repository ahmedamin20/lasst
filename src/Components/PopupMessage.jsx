import 'react-toastify/dist/ReactToastify.css';

const PopupMessage = ({ message, color }) => {
  // Display the popup message
  <div className="alert" style={{ background: `${color}` }} role="alert">
    {message}
  </div>

  return null;
};

export default PopupMessage;