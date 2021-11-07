import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete, ArrowRight } from "@material-ui/icons";
import moment from "moment";
import { getContact, deleteContact } from "../../store/actions/contactActions";
import Modal from "@material-ui/core/Modal";
import { Box } from "@material-ui/core";
import { ContactDetails } from "./ContactDetails";

const useStyles = makeStyles({
  contactStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "#8f8f8f",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
    borderRadius: "20px",
    background: "white",
    boxShadow: 24,
    p: 4,
  },
});

const Contact = ({ contact, setContact, contacts, modalOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);

  const handleOnUpdateClick = (id) => {
    const foundContact = contacts.find((contact) => contact._id === id);
    setContact({ ...foundContact });
    modalOpen();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleOpen = (id) => {
    dispatch(getContact(id));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={classes.contactStyle}>
        <div>
          <Typography variant="subtitle1">
            First Name: {contact.firstName}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            Last Name: {contact.lastName}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            Added: {moment(contact.dateAdded).fromNow()}
          </Typography>
        </div>
        <div>
          {auth._id ? (
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => handleOnUpdateClick(contact._id)}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(contact._id)}>
                <Delete color="secondary" />
              </Button>
              <Button onClick={() => handleOpen(contact._id)}>
                <ArrowRight color="primary" />
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modalStyle}>
          <ContactDetails contact={contact} />
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
