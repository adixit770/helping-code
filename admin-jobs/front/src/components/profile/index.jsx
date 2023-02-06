import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../mainLayout";
import { useForm } from "react-hook-form";
import { getRequest, putRequest } from "../apiHandler";
import { Button } from "@nextui-org/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Input, Text } from "@nextui-org/react";

const schema = yup.object().shape({
  fullName: yup.string().required("please enter your name"),
  email: yup.string().required("please enter your email"),
  mobile: yup.string().required("please enter your number"),
});
const passwordSchema = yup.object().shape({
  oldpassword: yup.string().required("Please Enter your old password"),
  newpassword: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newpassword"), null], "Passwords must match"),
});

export default function Profile() {
  const [message, setMessage] = useState();
  const token = localStorage.getItem("token");
  const [data, setData] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [status, setStatus] = useState();
  const [check, setCheck] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    reset();
  };
  useEffect(() => {
    if (visible) {
      setCheck(true);
    }
  }, [visible]);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(check ? passwordSchema : schema),
  });
  const [id, setId] = useState("");
  const file = watch("file");
  console.log(errors);
  const onSubmit = async (vaules) => {
    console.log("Submitted=>", vaules);
    const {
      address,
      bio,
      city,
      country,
      email,
      fullName,
      mobile,
      password,
      profilePhoto,
      personalWebsite,
      state,
    } = vaules;
    const formData = new FormData();
    formData.append("image", file[0]);
    formData.append("address", address);
    formData.append("bio", bio);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("email", email);
    formData.append("fullName", fullName);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("profilePhoto", profilePhoto);
    formData.append("personalWebsite", personalWebsite);
    formData.append("state", state);

    const res = await putRequest(`/updateProfile/${id}/${token}`, formData);
    console.log("/updateProfile===>", res);
    setData(res.add);
  };
  const changePassword = async (value) => {
    console.log("id", id, "value", value);
    const res = await putRequest(`/ChangePassword/${id}/${token}`, value);
    setMessage(res.message);
    setStatus(res.status);
    console.log("====>", res);
    reset();
  };
  const getProfile = async () => {
    const getProfileRes = await getRequest(`/getProfile/${token}`);
    if (getProfileRes.status == 200) {
      const {
        address,
        bio,
        city,
        country,
        email,
        fullName,
        mobile,
        password,
        profilePhoto,
        personalWebsite,
        state,
        _id,
      } = getProfileRes.add[0];
      setId(_id);
      setValue("address", address);
      setValue("fullName", fullName);
      setValue("country", country);
      setValue("email", email);
      setValue("mobile", mobile);
      setValue("password", password);
      setProfilePhoto(profilePhoto);
      setValue("state", state);
      setValue("city", city);
      setValue("bio", bio);
      setValue("personalWebsite", personalWebsite);
    } else {
      localStorage.removeItem("token");
    }
  };
  useEffect(() => {
    getProfile();
  }, [data]);

  return (
    <MainLayout>
      <Modal
        style={{ width: "60%" }}
        className="modalreset"
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <form>
          <Modal.Header className="modalHeader">
            <Text id="modal-title" size={18}>
              Change
              <Text b size={18}>
                Password
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <Input
              clearable
              label="Old Password"
              bordered
              type={"password"}
              fullWidth
              color="primary"
              size="xl"
              name="oldpassword"
              placeholder="Old Password"
              {...register("oldpassword")}
            />
            {errors.oldpassword ? (
              <p className="error" role="alert">
                {errors.oldpassword.message}
              </p>
            ) : (
              ""
            )}

            <Input
              clearable
              label="Password"
              type={"password"}
              bordered
              fullWidth
              color="primary"
              size="xl"
              name="newpassword"
              placeholder="Password"
              {...register("newpassword")}
            />
            {errors.newpassword ? (
              <p className="error" role="alert">
                {errors.newpassword.message}
              </p>
            ) : (
              ""
            )}
            <Input
              clearable
              type={"password"}
              bordered
              label="Confirm-Password"
              fullWidth
              color="primary"
              size="xl"
              name="confirmPassword"
              placeholder="Confirm-Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p className="error" role="alert">
                {errors.confirmPassword.message}
              </p>
            ) : (
              ""
            )}
            <h6 style={{ color: status == 200 ? "green" : "red" }}>
              {message}
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button type="button" onClick={handleSubmit(changePassword)}>
              Change Password
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <div>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">My Profile</h3>
          </div>
          <div className="box-breadcrumb">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link className="icon-home" to="/">
                    Admin
                  </Link>
                </li>
                <li>
                  <span>My Profile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <form>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="section-box">
                <div className="container">
                  <div className="panel-white mb-30">
                    <div className="box-padding">
                      <div className="passButton " style={{ display: "flex" }}>
                        <div className="img-profile">
                          <h6 className="color-text-paragraph-2 mx-3">
                            Update your profile
                          </h6>
                          <img
                            style={{
                              marginTop: "1rem",
                              width: "11rem",
                              height: "13rem",
                              borderRadius: "25px",
                            }}
                            src={`http://localhost:8000/api/image/${profilePhoto}`}
                            alt="No image found"
                          />

                          <input
                            className="form-control"
                            type="file"
                            {...register("file")}
                          />
                        </div>
                        <div className="box-profile-image">
                          <Button auto color="primary" shadow onClick={handler}>
                            Change Password
                          </Button>
                        </div>
                      </div>

                      <div className="row my-4">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted">
                              Full Name
                              <span className="star">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Name"
                              {...register("fullName")}
                            />
                            {errors.fullName ? (
                              <p className="error" role="alert">
                                {errors.fullName.message}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted">
                              Email
                              <span className="star">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email"
                              {...register("email")}
                            />
                            {errors.email ? (
                              <p className="error" role="alert">
                                {errors.email.message}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted">
                              Contact number
                              <span className="star">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Mobile Number"
                              {...register("mobile")}
                            />
                            {errors.mobile ? (
                              <p className="error" role="alert">
                                {errors.mobile.message}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted">
                              Personal website
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="https://alithemes.com"
                              {...register("personalWebsite")}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted">
                              Bio
                            </label>
                            <textarea
                              className="form-control"
                              name="message"
                              rows={5}
                              defaultValue={
                                "We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                              }
                              {...register("bio")}
                            />
                          </div>
                        </div>
                        <div className="box-padding">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group mb-30">
                                <label className="font-sm color-text-mutted">
                                  Country
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="country"
                                  {...register("country")}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <div className="form-group mb-30">
                                <label className="font-sm color-text-mutted">
                                  State
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="State"
                                  {...register("state")}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <div className="form-group mb-30">
                                <label className="font-sm color-text-mutted">
                                  City
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="City"
                                  {...register("city")}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group mb-30">
                                <label className="font-sm color-text-mutted">
                                  Address
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Address"
                                  {...register("address")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-10">
                            <button
                              type="button"
                              className="btn btn-default btn-brand icon-tick"
                              onClick={handleSubmit(onSubmit)}
                            >
                              Save Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/*  */}

        <div className="mt-10">
          <div className="section-box">
            <div className="container">
              <div className="panel-white pt-30 pb-30 pl-15 pr-15">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-10">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/microsoft.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/sony.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/acer.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/nokia.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/asus.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/casio.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/dell.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/panasonic.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/vaio.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="assets/imgs/page/dashboard/sony.svg"
                          alt="jobBox"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
