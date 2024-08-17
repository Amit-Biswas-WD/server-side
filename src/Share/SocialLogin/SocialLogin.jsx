import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContextProveder";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-2 mx-auto">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
