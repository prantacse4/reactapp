import React from "react";
import classes from "./Footer.module.css";
export const Footer = () => {
    return (
        <footer>
            <div className={["container", classes.container].join(" ")}>
                <div>Copyright &copy;2020.</div>
                <div className="textRight">
                    Developed by
                    <a href="https://www.facebook.com/angrypranta" >
                        Pranta Kumar Biswas
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer