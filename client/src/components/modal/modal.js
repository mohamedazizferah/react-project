import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import "./modal.css";
import Login from "./login";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import SignUp from "./signUp";

export default function BasicModal(state) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = React.useState("login");
  console.log(content);
  return (
    <div>
      <Avatar onClick={handleOpen} alt="Remy Sharp" className="avatar" src="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="wa">
          {content == "login" ? (
            <div>
              <Login />
              <Button
                color="error"
                className="modal_button"
                variant="text"
                onClick={() => setContent("Signup")}
              >
                No Account? Sign UP
              </Button>
            </div>
          ) : (
            <div>
              <SignUp />
              <Button
                color="error"
                className="modal_button"
                variant="text"
                onClick={() => setContent("login")}
              >
                Already Have an account ? Login Here
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
