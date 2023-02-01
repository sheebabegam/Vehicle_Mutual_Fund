import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const ReusableInput = (props) => {
  const classes = useStyles();
  const { type, id, onChange, name, value, placeholder, InputProps, style } =
    props;
  return (
    <CssTextField
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={classes.input_box}
      style={style}
      InputProps={InputProps}
      sx={{
        input: {
          fontSize: 14,
          color: "#a1a4b5",
          "&::placeholder": {
            // <----- Add this.
            opacity: 1,
          },
        },
      }}
    />
  );
};

export default ReusableInput;

const useStyles = makeStyles({
  input_box: {
    width: "100%",
    margin: 0,
    border: "1px solid #f6f9fb",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
  },
});

const CssTextField = styled(TextField)({
  //   "& label.Mui-focused": {
  //     color: "white",
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: "white",
  //   },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #f6f9fb",
    },
    "&::placeholder": {
      fontSize: 12,
      color: "green !important",
    },
    "&:hover fieldset": {
      border: "1px solid #f6f9fb",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #f6f9fb",
    },
  },
});
