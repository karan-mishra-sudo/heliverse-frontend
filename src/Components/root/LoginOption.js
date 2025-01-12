import { useNavigate } from "react-router-dom";
export default function LoginOption() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">

    <div className="radio-container">
      <input id="radio-basic" name="radio" type="radio" />
      <label
        onClick={() => {
          setTimeout(() => {
            navigate("/Food-manager-login");
          }, 1000);
        }}
        htmlFor="radio-basic"
      >
        Food Manager Login
      </label>
      <input id="radio-basic" name="radio" type="radio" />
      <label
        onClick={() => {
          setTimeout(() => {
            navigate("/Pantry-login");
          }, 1000);
        }}
        htmlFor="radio-basic"
        >
        Inner Pantry Login
      </label>
      <input id="radio-premium" name="radio" type="radio" />
      <label
        onClick={() => {
          setTimeout(() => {
            navigate("/Delivery-login");
          }, 1000);
        }}
        htmlFor="radio-premium"
        >
        {" "}
        Delivery Personnel Login
      </label>
      <div className="glider-container">
        <div className="glider"></div>
      </div>
    </div>
        </div>

  );
}
