import React, { useState, useEffect } from "react";
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

function VehicleCreate() {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      model: "",
      year: "",
      color: "",
      engine: "",
      cc: "",
      planid: "",
      // userid: "",
    },
    validationSchema: yup.object({
      name: yup.string().strict().trim().required("Name is required"),
      price: yup.string().strict().trim().required("price is required"),
      model: yup.string().strict().trim().required("model is required"),
      year: yup.string().strict().trim().required("year is required"),
      color: yup.string().strict().trim().required("color is required"),
      engine: yup.string().strict().trim().required("engine is required"),
      cc: yup.string().strict().trim().required("cc is required"),
      planid: yup.string().strict().trim().required("planid is required"),
      // userid: yup.string().strict().trim().required("userid is required"),
    }),

    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:5000/api/auth/vehicleCreate", data)
        .then((res) => {
          toast.success("Vehicle plan is created successfully!");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      toast.success("Plan Created!", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  const user = JSON.parse(localStorage.getItem("auth"));
  console.log("User ID is", user.id);

  const [json, setJson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/listPlan", {
        headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` },
      })
      .then((res) => {
        console.log(res); // Here we get the token in data
        setJson(res.data);
      })
      .catch((err) => {
        // toast.error(err.response.data);
      });
  }, []);

  console.log("All Plan ID", json.Data);

  return (
    <div className={classes.reg_div}>
      <Grid container className={classes.grid_center}>
        <Grid xs={3.5} className={classes.reg_form_color}>
          <div style={{ width: "100%", paddingTop: "25px" }}>
            <h2 className={classes.heading_h2}>Create Vehicle Plan</h2>

            <Grid container className={classes.grid_reg}>
              <Grid xs={10} className={classes.grid_form_field}>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <ReusableInput
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
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="Price"
                    type="text"
                    name="price"
                    id="price"
                    value={formik.price}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.price ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.price}
                    </div>
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="Model"
                    type="text"
                    name="model"
                    id="model"
                    value={formik.model}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.model ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.model}
                    </div>
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="Year"
                    type="text"
                    name="year"
                    id="year"
                    value={formik.year}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.year ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.year}
                    </div>
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="Color"
                    type="text"
                    name="color"
                    id="color"
                    value={formik.color}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.color ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.color}
                    </div>
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="Engine"
                    type="text"
                    name="engine"
                    id="engine"
                    value={formik.engine}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.engine ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.engine}
                    </div>
                  ) : null}
                  <br />

                  <ReusableInput
                    placeholder="CC"
                    type="text"
                    name="cc"
                    id="cc"
                    value={formik.cc}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.cc ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.cc}
                    </div>
                  ) : null}
                  <br />

                  <select
                    name="planid"
                    id="planid"
                    value={formik.planid}
                    onChange={formik.handleChange}
                    className={classes.select_box}
                  >
                    {json?.Data?.map((ids, i) => (
                      <option value={ids._id}>{ids.name}</option>
                    ))}
                  </select>
                  <br />
                  {formik.errors.duration ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.duration}
                    </div>
                  ) : null}
                  <br />

                  {/* <ReusableInput
                    placeholder="Userid"
                    type="text"
                    name="userid"
                    id="userid"
                    value={user.id}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.userid ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.userid}
                    </div>
                  ) : null}
                  <br /> */}

                  <ResuasbleButton type="submit" style={{ fontWeight: 500 }}>
                    Create Vehicle Plan
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

export default VehicleCreate;

const useStyles = makeStyles({
  reg_div: {
    backgroundColor: "whitesmoke",
    // width: "100vw",
    height: "93vh",
  },
  grid_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // top: "50% !important",
    transform: "translate(0, 6%)",
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
