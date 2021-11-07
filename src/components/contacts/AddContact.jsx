import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";

import { addContact, updateContact } from "../../store/actions/contactActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputStyle: {
    margin: "5px",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddContact = ({ contact, setContact, modalClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact._id) {
      const id = contact._id;
      const updatedContact = {
        firstName: contact.firstName,
        middleName: contact.middleName,
        lastName: contact.lastName,
        email: contact.email,
        mobileNum: contact.mobileNum,
        landlineNum: contact.landlineNum,
        notes: contact.notes,
      };

      dispatch(updateContact(updatedContact, id));
    } else {
      const newContact = {
        ...contact,
      };

      dispatch(addContact(newContact));
    }
    modalClose();
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

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        {!contact._id ? (
          <Typography variant="h5">Add New Contact</Typography>
        ) : (
          <Typography variant="h5">Update Contact</Typography>
        )}
        <TextField
          id="enter-firstname"
          label="enterFirstname"
          variant="outlined"
          className={classes.inputStyle}
          autoFocus
          fullWidth
          required
          value={contact.firstName}
          onChange={(e) =>
            setContact({ ...contact, firstName: e.target.value })
          }
        />
        <TextField
          id="enter-middlename"
          label="enterMiddlename"
          variant="outlined"
          className={classes.inputStyle}
          fullWidth
          value={contact.middleName}
          onChange={(e) =>
            setContact({ ...contact, middleName: e.target.value })
          }
        />
        <TextField
          id="enter-lastname"
          label="enterLastname"
          variant="outlined"
          className={classes.inputStyle}
          fullWidth
          required
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
        <TextField
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          className={classes.inputStyle}
          fullWidth
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <TextField
          id="enter-mobilenum"
          label="enterMobileNumber"
          className={classes.inputStyle}
          variant="outlined"
          fullWidth
          value={contact.mobileNum}
          onChange={(e) =>
            setContact({ ...contact, mobileNum: e.target.value })
          }
        />
        <TextField
          id="enter-landline"
          label="enterLandlineNumber"
          variant="outlined"
          className={classes.inputStyle}
          fullWidth
          value={contact.landlineNum}
          onChange={(e) =>
            setContact({ ...contact, landlineNum: e.target.value })
          }
        />
        <TextField
          id="enter-notes"
          label="enterNotes"
          variant="outlined"
          className={classes.inputStyle}
          fullWidth
          value={contact.notes}
          onChange={(e) => setContact({ ...contact, notes: e.target.value })}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          type="submit"
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddContact;
