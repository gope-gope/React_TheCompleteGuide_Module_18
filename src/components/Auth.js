import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
    console.log("executed");
  };

  return (
    <main className={classes.auth} hidden={isAuthenticated}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={formSubmitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
