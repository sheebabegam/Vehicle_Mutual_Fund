import React from "react";
import { makeStyles } from "@mui/styles";
import ReusableInput from "../../components/ReusableInput";
import ResuasbleButton from "../../components/ReusableButton";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid";

function PlanCreate() {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      duration: "",
      percentage: "",
      minimumdeposit: "",
    },
    validationSchema: yup.object({
      name: yup.string().strict().trim().required("Name is required"),
      category: yup.string().strict().trim().required("Category is required"),
      duration: yup.string().strict().trim().required("Duration is required"),
      percentage: yup
        .string()
        .strict()
        .trim()
        .required("Percentage is required"),
      minimumdeposit: yup
        .string()
        .strict()
        .trim()
        .required("Minimum deposit is required"),
    }),

    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:5000/api/auth/createPlan", data)
        .then((res) => {
          toast.success("User plan created successfully!");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      toast.success("Plan Created!", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  return (
    <div className={classes.reg_div}>
      {/* <div className={classes.flex_nav_logout}>
        <div>
          <ResuasbleButton
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            style={{
              backgroundColor: "#4267B2 !important",
              color: "white",
              fontWeight: 700,
            }}
          >
            Logout
          </ResuasbleButton>
        </div>
      </div> */}
      <Grid container className={classes.grid_center}>
        <Grid xs={3.5} className={classes.reg_form_color}>
          <div style={{ width: "100%", paddingTop: "25px" }}>
            <h2 className={classes.heading_h2}>Create User Plan</h2>

            <Grid container className={classes.grid_reg}>
              <Grid xs={10} className={classes.grid_form_field}>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <select
                    label="Name"
                    value={formik.name}
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    id="name"
                    className={classes.select_box}
                  >
                    <option value="">Name</option>
                    <option value="honda">Honda</option>
                    <option value="hero">Hero</option>
                    <option value="tvs">TVS</option>
                    <option value="bajaj">Bajaj</option>
                    <option value="royal_enfield">Royal Enfield</option>
                  </select>
                  <br />
                  {formik.errors.name ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.name}
                    </div>
                  ) : null}
                  {/* <ReusableInput
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    value={formik.name}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.name ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.name}
                    </div>
                  ) : null} */}
                  <br />
                  <ReusableInput
                    placeholder="Category"
                    type="text"
                    name="category"
                    id="category"
                    value={formik.category}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.category ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.category}
                    </div>
                  ) : null}
                  <br />
                  <select
                    name="duration"
                    id="duration"
                    value={formik.duration}
                    onChange={formik.handleChange}
                    className={classes.select_box}
                  >
                    <option value="">Duration</option>
                    <option value={6}> 06 months</option>
                    <option value={12}>12 months</option>
                    <option value={18}>18 months</option>
                    <option value={24}>24 months</option>
                    <option value={30}>30 months</option>
                    <option value={36}>36 months</option>
                    <option value={42}>42 months</option>
                    <option value={48}>48 months</option>
                    <option value={54}>54 months</option>
                    <option value={60}>60 months</option>
                  </select>
                  <br />
                  {formik.errors.duration ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.duration}
                    </div>
                  ) : null}
                  {/* <ReusableInput
                    placeholder="Duration"
                    type="text"
                    name="duration"
                    id="duration"
                    value={formik.duration}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.duration ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.duration}
                    </div>
                  ) : null} */}
                  <br />

                  <select
                    name="percentage"
                    id="percentage"
                    value={formik.percentage}
                    onChange={formik.handleChange}
                    className={classes.select_box}
                  >
                    <option value="">Percentage</option>
                    <option value={5}> 5%</option>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                    <option value={20}>20%</option>
                    <option value={25}>25%</option>
                  </select>
                  <br />
                  {formik.errors.percentage ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.percentage}
                    </div>
                  ) : null}
                  <br />

                  {/* <ReusableInput
                    placeholder="Percentage"
                    type="percentage"
                    name="percentage"
                    id="percentage"
                    value={formik.percentage}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.percentage ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.percentage}
                    </div>
                  ) : null}
                  <br /> */}
                  <select
                    name="minimumdeposit"
                    id="minimumdeposit"
                    value={formik.minimumdeposit}
                    onChange={formik.handleChange}
                    className={classes.select_box}
                  >
                    <option value="">Minimum Deposit</option>
                    <option value={10000}> 10,000</option>
                    <option value={25000}>25,000</option>
                    <option value={50000}>50,000</option>
                    <option value={75000}>75,000</option>
                    <option value={100000}>1,00,000</option>
                  </select>
                  <br />
                  {formik.errors.minimumdeposit ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.minimumdeposit}
                    </div>
                  ) : null}
                  <br />
                  {/* <ReusableInput
                    placeholder="Minimum Deposit"
                    type="minimumdeposit"
                    name="minimumdeposit"
                    id="minimumdeposit"
                    value={formik.minimumdeposit}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.minimumdeposit ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.minimumdeposit}
                    </div>
                  ) : null} */}
                  <br />
                  <ResuasbleButton type="submit" style={{ fontWeight: 500 }}>
                    Create Plan
                  </ResuasbleButton>
                </form>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlanCreate;

const useStyles = makeStyles({
  reg_div: {
    backgroundColor: "whitesmoke",
    // width: "100vw",
    height: "100vh",
  },
  grid_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50% !important",
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
  flex_nav_logout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#4267B2",
    padding: 20,
  },
  input_box: {
    width: "100%",
    margin: 0,
    border: "1px solid #f6f9fb",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
  },
  select_box: {
    width: "100%",
    margin: 0,
    border: "1px solid #f6f9fb",
    padding: "10px 0px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
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
});
