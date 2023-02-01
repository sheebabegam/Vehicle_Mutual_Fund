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

function Register(props) {
  const classes = useStyles();
  return <div className={classes.reg_div}></div>;
}

export default Register;

const useStyles = makeStyles({});
