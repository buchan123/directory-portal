import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const useStyles = makeStyles({
  moreStyle: {
    color: "#8f8f8f",
  },
  baseGrid: {
    display: "grid",
    margin: "20px",
    width: "750px",
    gridTemplateColumns: "1fr 1fr",
  },
  heading: {
    margin: "20px",
  },
  visualization: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
});

export const ContactDetails = ({ contact }) => {
  const classes = useStyles();
  const data = contact.viewsPerDay.slice(-7);
  return (
    <>
      <Typography variant="h4" align="center" className={classes.heading}>
        Contact Details:{" "}
      </Typography>
      <div className={classes.baseGrid}>
        <Typography variant="subtitle1">
          First Name: {contact.firstName}
        </Typography>
        <Typography variant="subtitle1">
          Middle Name: {contact.middleName}
        </Typography>
        <Typography variant="subtitle1">
          Last Name: {contact.lastName}
        </Typography>
        <Typography variant="subtitle1">Email: {contact.email}</Typography>
        <Typography variant="subtitle1">
          Mobile Number: {contact.mobileNum}
        </Typography>
        <Typography variant="subtitle1">
          Landline Number: {contact.landlineNum}
        </Typography>
        <Typography variant="subtitle1">Notes: {contact.notes}</Typography>
        <Typography variant="subtitle1">
          Contact Views: {contact.views}
        </Typography>
        <Typography variant="subtitle1">
          Added: {moment(contact.dateAdded).fromNow()}
        </Typography>
        <Typography variant="subtitle1">
          Last Modified:{" "}
          {contact.dateModified
            ? moment(contact.dateModified).fromNow()
            : undefined}
        </Typography>
        <div className={classes.visualization}>
          <Typography variant="subtitle1">Views Per Day:</Typography>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </>
  );
};
