import React from "react";
import styles from "./UserInformation.module.scss";
import { Button } from "../../../components";

const UserInformation: React.FC = () => {
  return (
    <div className={styles["user-info"]}>
      <Button label="" variant="user" size="medium" icon={"A"}/>
      <div className={styles["user-info__content"]}>
        <span className={styles["user-info__name"]}>Admin</span>
        <span className={styles["user-info__email"]}>Admin@example.com</span>
      </div>
    </div>
  );
};

export default UserInformation;
