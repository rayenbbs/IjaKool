import { Fragment } from "react";
import mealsImage from "../../assets/Food_Image.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>IjaKool</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table with food on it" />
      </div>
    </Fragment>
  );
};

export default Header;
