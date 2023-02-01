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
import ReusableInput from "../components/ReusableInput";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import ResuasbleButton from "../components/ReusableButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.reg_div}>
      <Grid container className={classes.grid_center}>
        <Grid xs={3.5} className={classes.reg_form_color}>
          <div style={{ width: "100%", paddingTop: "25px" }}>
            <h2 className={classes.heading_h2}>Let's Get Started</h2>
            <p className={classes.reg_sub}>Sign in to continue to InvestX.</p>

            <Grid container className={classes.grid_reg}>
              <Grid xs={10} className={classes.grid_form_field}>
                <ReusableInput
                  placeholder="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <PersonOutlineIcon
                            style={{
                              borderRight: "1px solid #f6f9fb",
                              padding: 4,
                              marginRight: 10,
                              color: "#ced4da",
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: {
                      height: 32,
                      padding: 0,
                    },
                  }}
                  //   value={logEmail}
                  //   onChange={(e) => setLogEmail(e.target.value)}
                />
                <br /> <br />
                <ReusableInput
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <LockOpenIcon
                            style={{
                              borderRight: "1px solid #f6f9fb",
                              padding: 4,
                              marginRight: 10,
                              color: "#ced4da",
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: {
                      height: 32,
                      padding: 0,
                    },
                  }}
                  //   value={logEmail}
                  //   onChange={(e) => setLogEmail(e.target.value)}
                />
                <br /> <br />
                <div className={classes.forgot_flex}>
                  <div>
                    <Checkbox className={classes.check} />
                    <label className={classes.agree_label}>Remember Me</label>
                  </div>
                  <div>
                    <p className={classes.forgot_p}>
                      <AiFillLock className={classes.forgot_lock} />
                      Forgot pwd?
                    </p>
                  </div>
                </div>
                <ResuasbleButton>Sign In</ResuasbleButton>
                <p className={classes.already_p}>
                  Don't have an account?{" "}
                  <Link to="/" className={classes.signin_ref}>
                    Sign Up
                  </Link>
                </p>
                <p className={classes.already_p}>- Sign With -</p>
                <Grid container className={classes.flex_icon_div}></Grid>
                <div className={classes.flex_icon_div}>
                  <div className={classes.facebookIconDiv}>
                    <FaFacebookF className={classes.facebookIcon} />
                  </div>
                  <div className={classes.twitterIconDiv}>
                    <AiOutlineTwitter className={classes.twitterIcon} />
                  </div>
                  <div className={classes.instaIconDiv}>
                    <AiOutlineInstagram className={classes.instaIcon} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

const useStyles = makeStyles({
  reg_div: {
    backgroundImage: `url(${"https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/auth-bg/bg-16.jpg"})`,
    // height: "900px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  grid_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "40% !important",
    transform: "translate(0, 30%)",
  },
  reg_form_color: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  heading_h2: {
    color: "#46bc5c !important",
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  reg_sub: {
    color: "#a1a4b5 !important",
    textAlign: "center",
    margin: 9,
    padding: 0,
  },
  flex_div_input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  grid_reg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0px !important",
  },
  agree_label: {
    color: "#a1a4b5",
    fontSize: "1rem !important",
  },
  terms: {
    color: "#46bc5c !important",
    textDecoration: "none",
    fontSize: "1rem !important",
  },
  already_p: {
    color: "#a1a4b5",
    fontSize: "1rem !important",
    textAlign: "center",
  },
  signin_ref: {
    color: "#46bc5c !important",
    textDecoration: "none",
    fontSize: "1rem !important",
  },
  facebookIconDiv: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "#f0f3f6",
    borderColor: "#f0f3f6",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3b5998 !important",
    },
  },
  facebookIcon: {
    height: 15,
    width: 9,
    color: "#3b5998",
    padding: "12px 15px",
    "&:hover": {
      color: "white !important",
    },
  },
  twitterIconDiv: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "#f0f3f6",
    borderColor: "#f0f3f6",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#1da1f2 !important",
    },
  },
  twitterIcon: {
    height: 15,
    width: 15,
    color: "#1da1f2",
    padding: "13px 14px",
    "&:hover": {
      color: "white !important",
    },
  },
  instaIconDiv: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "#f0f3f6",
    borderColor: "#f0f3f6",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e1306c !important",
    },
    "&.Mui-focused": {
      backgroundColor: "#f0f3f6 !important",
    },
  },
  instaIcon: {
    height: 15,
    width: 15,
    color: "#e1306c",
    padding: "13px 13px",
    "&:hover": {
      color: "white !important",
    },
    "&.Mui-focused": {
      color: "white !important",
    },
  },
  flex_icon_div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap !important",
    gap: 10,
    // height: 200,
  },
  check: {
    // "&:hover": {
    //   top: "-4px !important",
    //   left: "-5px !important",
    //   width: "12px !important",
    //   height: "22px !important",
    //   borderTop: "2px solid transparent !important",
    //   borderLeft: "2px solid transparent !important",
    //   borderRight: "2px solid #26a69a !important",
    //   borderBottom: "2px solid #26a69a !important",
    //   transform: "rotate(40deg) !important",
    //   backfaceVisibility: "hidden !important",
    //   transformOrigin: "100% 100% !important",
    // },
  },
  forgot_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgot_lock: {
    color: "#46bc5c !important",
  },
  forgot_p: {
    color: "#46bc5c !important",
  },
});
