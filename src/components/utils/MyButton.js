import React from "react";

import Button from "@mui/material/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      size={props.size ? props.size : "large"}
      variant="contained"
      style={{ background: "#8e8e8e", color: "#ffffff", ...props.style }}
    >
      {props.iconTicket ? (
        <img className="iconImage" src={TicketIcon} alt="icon_button" />
      ) : null}

      {props.text}
    </Button>
  );
};

export default MyButton;
