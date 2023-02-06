import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../mainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { getRequest, postRequest, putRequest } from "../apiHandler";

const schema = yup.object().shape({
  Workplacetype: yup.string().required("enter your Workplace Type"),
  Joblocation: yup.string().required("enter your Job Location"),
  jobdescription: yup.string().required("enter your Job Description"),
  Jobtitle: yup.string().required("enter your Job Title"),
  companyName: yup.string().required("enter your Company Name"),
  Salary: yup.string().required("enter your Salary"),
  Tags: yup.string().required("enter your Tags"),
});
export default function PostJobs({ id, setId }) {
  console.log("id", id);
  const token = localStorage.getItem("token");
  const [postData, setPostData] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const companyLogo = watch("companyLogo");

  const getDataById = async () => {
    const getjob = await getRequest(`/getjobById/${id}/${token}`);
    console.log("getjob==>", getjob);
    if (id) {
      if (getjob.status == 200) {
        console.log("aman");
        const {
          Workplacetype,
          Joblocation,
          Jobtitle,
          Salary,
          Tags,
          jobdescription,
          companyName,
        } = getjob.add;
        setValue("Workplacetype", Workplacetype);
        setValue("Joblocation", Joblocation);
        setValue("Jobtitle", Jobtitle);
        setValue("Salary", Salary);
        setValue("Tags", Tags);
        setValue("jobdescription", jobdescription);
        setValue("companyName", companyName);
      } else {
        localStorage.removeItem("token");
      }
    } else {
      setValue("Workplacetype", "");
      setValue("Joblocation", "");
      setValue("jobdescription", "");
      setValue("Jobtitle", "");
      setValue("companyName", "");
      setValue("Salary", "");
      setValue("Tags", "");
    }
  };

  const onsubmit = async (value) => {
    console.log("value===>", value);
    const {
      Workplacetype,
      Joblocation,
      Jobtitle,
      Salary,
      Tags,
      jobdescription,
      companyName,
    } = value;
    const formData = new FormData();
    formData.append("companyLogo", companyLogo[0]);
    formData.append("Workplacetype", Workplacetype);
    formData.append("Joblocation", Joblocation);
    formData.append("jobdescription", jobdescription);
    formData.append("Jobtitle", Jobtitle);
    formData.append("companyName", companyName);
    formData.append("Salary", Salary);
    formData.append("Tags", Tags);

    const res = id
      ? await putRequest(`/updatejob/${id}/${token}`, formData)
      : await postRequest(`/addJob/${token}`, formData);
    console.log("res==>", res);
    setPostData(res.data);
    reset();
  };
  useEffect(() => {
    if (id) {
      getDataById();
    } else {
      reset();
    }
  }, [postData]);

  return (
    <MainLayout>
      <div>
        <div class="box-heading">
          <div class="box-title">
            <h3 class="mb-35">Post a Job</h3>
          </div>
          <div class="box-breadcrumb">
            <div class="breadcrumbs">
              <ul>
                <li>
                  <Link class="icon-home" to="/">
                    Admin
                  </Link>
                </li>
                <li>
                  <span>Post New Job</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-box">
              <div class="container">
                <div class="panel-white mb-30">
                  <div class="box-padding bg-postjob">
                    <h5 class="icon-edu">Tell us about your role</h5>
                    <div class="row mt-30">
                      <div class="col-lg-9">
                        <form onSubmit={handleSubmit(onsubmit)}>
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Company Name *
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="companyName"
                                  placeholder=" Company Name"
                                  {...register("companyName")}
                                />
                                {errors.companyName ? (
                                  <p className="error" role="alert">
                                    {errors.companyName.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Job title *
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="Jobtitle"
                                  placeholder="e.g. Senior Product Designer"
                                  {...register("Jobtitle")}
                                />
                                {errors.Jobtitle ? (
                                  <p className="error" role="alert">
                                    {errors.Jobtitle.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Add your job description *
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="jobdescription"
                                  placeholder="e.g. Senior Product Designer"
                                  {...register("jobdescription")}
                                />
                                {errors.jobdescription ? (
                                  <p className="error" role="alert">
                                    {errors.jobdescription.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Job location
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder='e.g. "New York City" or "San Francisco”'
                                  name=" Joblocation"
                                  {...register("Joblocation")}
                                />
                                {errors.Joblocation ? (
                                  <p className="error" role="alert">
                                    {errors.Joblocation.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Workplace type *
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder='e.g. "New York City" or "San Francisco”'
                                  name="  Workplacetype"
                                  {...register("Workplacetype")}
                                />
                                {errors.Workplacetype ? (
                                  <p className="error" role="alert">
                                    {errors.Workplacetype.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Salary
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="$2200 - $2500"
                                  name="Salary"
                                  {...register("Salary")}
                                />
                                {errors.Salary ? (
                                  <p className="error" role="alert">
                                    {errors.Salary.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Tags (optional)
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="Figma, UI/UX, Sketch..."
                                  name="Tags"
                                  {...register("Tags")}
                                />
                                {errors.Tags ? (
                                  <p className="error" role="alert">
                                    {errors.Tags.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group mb-30">
                                <label class="font-sm color-text-mutted ">
                                  Company Logo
                                </label>
                                <input
                                  className="form-control"
                                  id="file"
                                  name="companyLogo"
                                  type="file"
                                  required
                                  {...register("companyLogo")}
                                />
                                {errors.companyLogo ? (
                                  <p className="error" role="alert">
                                    {errors.companyLogo.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="form-group mt-10">
                                <button
                                  class="btn btn-default btn-brand icon-tick"
                                  type="submit"
                                >
                                  Post New Job
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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
