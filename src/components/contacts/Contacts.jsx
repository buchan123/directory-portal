import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddContact from "./AddContact";
import ListContacts from "./ListContacts";
import { Redirect } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  boxShadow: 24,
  p: 4,
};

const Contacts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setContact({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobileNum: "",
      landlineNum: "",
      notes: "",
    });
  };

  const auth = useSelector((state) => state.auth);
  const [contact, setContact] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    landlineNum: "",
    notes: "",
  });

  if (!auth._id) return <Redirect to="/signin" />;

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Contact
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box style={modalStyle}>
          {" "}
          <AddContact
            contact={contact}
            setContact={setContact}
            modalClose={handleClose}
          />
        </Box>
      </Modal>
      <ListContacts
        contact={contact}
        setContact={setContact}
        modalOpen={handleOpen}
      />
    </>
  );
};

export default Contacts;
