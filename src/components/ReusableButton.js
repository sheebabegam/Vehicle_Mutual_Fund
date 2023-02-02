import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { InputAdornment, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";

function ResuasbleButton(props) {
  const classes = useStyles();
  const { children, onClick, style } = props;

  return (
    <div className={classes.reg_div}>
      <Button
        type="submit"
        variant="contained"
        onClick={onClick}
        className={classes.button}
        style={style}
      >
        {children}
      </Button>
    </div>
  );
}

export default ResuasbleButton;

const useStyles = makeStyles({
  button: {
    backgroundColor: "#46bc5c !important",
    borderColor: "#46bc5c !important",
    color: "#ffffff !important",
    width: "100%",
  },
});
