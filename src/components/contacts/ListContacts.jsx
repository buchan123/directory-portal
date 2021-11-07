import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import {
  getContacts,
  sortByDate,
  sortByName,
} from "../../store/actions/contactActions";

const useStyles = makeStyles({
  contactsStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  buttonStyle: {
    marginRight: "20px",
    marginTop: "20px",
  },
});

const ListContacts = ({ contact, setContact, modalOpen }) => {
  const auth = useSelector((state) => state.auth);
  const contacts = useSelector((state) => state.contacts);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [contact._id, dispatch]);

  if (!auth._id) return <Redirect to="/signin" />;
  return (
    <>
      <div className={classes.contactsStyle}>
        <Typography variant="h5">
          {" "}
          {contacts.length > 0 ? "Contacts;" : "noContactsYet;"}{" "}
        </Typography>
        <Button
          onClick={() => dispatch(sortByName())}
          variant="contained"
          className={classes.buttonStyle}
        >
          Sort By Name
        </Button>
        <Button
          onClick={() => dispatch(sortByDate())}
          variant="contained"
          className={classes.buttonStyle}
        >
          Sort By Date Added
        </Button>

        {contacts &&
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                key={contact._id}
                setContact={setContact}
                modalOpen={modalOpen}
                contacts={contacts}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListContacts;
