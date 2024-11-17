import React from "react";
import "./UserInformation.scss";
import { Button } from "../../../components";

const UserInformation: React.FC = () => {
  return (
    <div className="user-info">
      <Button label="" variant="user" size="medium" icon={"A"} />
      <div className="user-info__content">
        <span className="user-info__name">Admin</span>
        <span className="user-info__email">Admin@example.com</span>
      </div>
    </div>
  );
};

export default UserInformation;
