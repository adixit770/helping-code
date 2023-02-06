<?php

use LDAP\Result;

require APPPATH . 'libraries/REST_Controller.php';

class AuthController extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->config->load('myConstant');
        $this->load->library('session');
        $this->load->library('Authorization_Token');
        $this->load->helper(array('form', 'url', 'Validation_helper'));
        $this->load->library('form_validation');
        $this->load->database();
        // $this->load->service('User_service');
        $this->load->model('Common_model');
        date_default_timezone_set('UTC');
    }

    /* 
    Use:registrationApi
    Param:  studentName
            studentEmail
            countryCode
            studentMobileNo
            countryName
            stateName
            password
            fcmId
    Method:POST
    Response:obejct() Of the userData
     */

    public function registrationApi_post()
    {
        $countryCode = $this->input->post('countryCode') ? $this->post('countryCode') : "";
        $studentMobileNo = $this->put('studentMobileNo') ? $this->post('studentMobileNo') : "";
        $studentName = $this->post('studentName') ? $this->post('studentName') : "";
        $password = $this->post('password') ? $this->post('password') : "";
        $fcmId = $this->post('fcmId') ? $this->post('fcmId') : "";
        $countryName = $this->post('countryName') ? $this->post('countryName') : "";
        $stateName = $this->post('stateName') ? $this->post('stateName') : "";
        $studentEmail = $this->post('studentEmail') ? $this->post('studentEmail') : "";
        if ($studentEmail != "" && $studentMobileNo != "" && $studentName != "" && $password != "") {
            $checkMobile = $this->user_service->getDataWhere('tbl_students', '*', array('studentMobileNo' => $studentMobileNo, 'isDeleted' => "No"));
            $Userdata = array(
                'countryCode' => $countryCode,
                'studentMobileNo' => $studentMobileNo,
                'studentName' => $studentName,
                'password' => md5($password),
                'fcmId' => $fcmId,
                'countryName' => $countryName,
                'stateName' => $stateName,
                'studentEmail' => $studentEmail,
                'roleType' => 'Student',
                'loginType' => 'Normal',
                'createdDtm' => date('Y-m-d H:i:s'),
            );
            $checkValidMobile = mobileValidation($studentMobileNo);
            if ($checkValidMobile) {
                $checkValidEmail = verifyEmail($studentEmail);
                if ($checkValidEmail) {
                    $getCountry = $this->user_service->getDataWhere('tbl_country', '*', array('countryName' => $countryName));
                    $checkpasswordValidation = passwordValidation($password);
                    if ($checkpasswordValidation) {
                        if ($getCountry) {
                            $getState = $this->user_service->getDataWhere('tbl_state', '*', array('stateName' => $stateName, 'countryId' => $getCountry['countryId']));
                            if ($getCountry['phoneCode'] == $countryCode) {
                                if ($getState) {
                                    if (empty($checkMobile)) {
                                        $checkEmail = $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'isDeleted' => "No"));
                                        if (empty($checkEmail)) {
                                            $Userdata['urlSlug'] = $this->user_service->generate_url_slug($studentName, 'tbl_students');
                                            $addUser = $this->user_service->insertData('tbl_students', $Userdata);
                                            if ($addUser) {
                                                $getStd = $this->user_service->getDataWhere(
                                                    'tbl_students',
                                                    "studentId,studentName,studentEmail,studentMobileNo,countryCode, countryName, stateName,fcmId,mobileVerified,emailVerified,roleType",
                                                    array('studentId' => $addUser)
                                                );
                                                $tokenD['user_email'] = $getStd['studentEmail'];
                                                $tokenD['user_id'] = $getStd['studentId'];
                                                $tokenD['role'] = $getStd['roleType'];
                                                $tokenData = $this->authorization_token->generateToken($tokenD);
                                                $getStd['token'] = $tokenData;
                                                $sessionArray = array('token' => $tokenData,'studentId'=>$getStd['studentId'],'studentName'=>$getStd['studentName']);
                                                $this->session->set_userdata('exame101Web', $sessionArray);
                                                $this->response(array("message" => MESSAGE_conf::REGISTER, 'User' => $getStd), REST_Controller::HTTP_OK);
                                            } else {
                                                $this->response(array("message" => MESSAGE_conf::REGISTER_FAILED, 'User' => (object)array()), REST_Controller::HTTP_BAD_REQUEST);
                                            }
                                        } else {
                                            $this->response(array("message" => MESSAGE_conf::EMAIL_ALREADY_EXIST), REST_Controller::HTTP_BAD_REQUEST);
                                        }
                                    } else {
                                        $this->response(array("message" => MESSAGE_conf::ALREADY_EXIST), REST_Controller::HTTP_BAD_REQUEST);
                                    }
                                } else {
                                    $this->response(array("message" => MESSAGE_conf::INVALID_STATE), REST_Controller::HTTP_BAD_REQUEST);
                                }
                            } else {
                                $this->response(array("message" => MESSAGE_conf::INVALID_COUNTRY_CODE), REST_Controller::HTTP_BAD_REQUEST);
                            }
                        } else {
                            $this->response(array("message" => MESSAGE_conf::INVALID_COUNTRY), REST_Controller::HTTP_BAD_REQUEST);
                        }
                    } else {
                        $this->response(array("message" => MESSAGE_conf::INVALID_PASSWORD_FORMAT), REST_Controller::HTTP_BAD_REQUEST);
                    }
                } else {
                    $this->response(array("message" => MESSAGE_conf::INVALID_EMAILS), REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::INVALID_MOBILE_NUMBER), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
        }
    }




    /* 
    Use:get Country
    Param:
    Method:Get
    Response:array() Of the country
     */
    public function getCountryListApi_get()
    {
        $getCountry = $this->user_service->getCountryList();
        if ($getCountry) {
            $final = array();
            foreach ($getCountry as  $value) {
                // $value['flag'] = base_url()."assets/images/flags/".strtolower($value['sortName']).".png";
                $value['flag'] = "assets/images/flags/" . strtolower($value['sortName']) . ".png";
                array_push($final, $value);
            }
            $this->response(array("message" => MESSAGE_conf::SUCCESS, 'country' => $final), REST_Controller::HTTP_OK);
        } else {
            $this->response(array("message" => MESSAGE_conf::FAILED, 'country' => array()), REST_Controller::HTTP_OK);
        }
    }
    /* 
    Use:get state
    Param:countryId(Numeric)
    Method:Get
    Response:array() Of the state
     */
    public function getStateListApi_get()
    {
        $countryId = $this->get('countryId') ? $this->get('countryId') : "";
        if ($countryId != "") {
            $getStateList = $this->user_service->getStateList($countryId);
            if ($getStateList) {
                $this->response(array("message" => MESSAGE_conf::SUCCESS, 'state' => $getStateList), REST_Controller::HTTP_OK);
            } else {
                $this->response(array("message" => MESSAGE_conf::FAILED, 'state' => array()), REST_Controller::HTTP_OK);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED, 'countryId' => ""), REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    /* 
    Use:student Login Api
    Param:  studentEmail
            password
            fcmId
    Method:post
    Response:object() Of the user detail
     */
    public function loginApi_post()
    {
        $studentEmail = $this->post('studentEmail') ? $this->post('studentEmail') : "";
        $password = $this->post('password') ? $this->post('password') : "";
        $fcmId = $this->post('fcmId') ? $this->post('fcmId') : "";
        if ($studentEmail != "" && $password != "") {
            $getStd = $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'password' => md5($password)));
            if ($getStd) {
                if ($getStd['isDeleted'] == "No") {
                    if ($getStd['isActive'] == "Yes") {
                        $finalAr['studentId'] = $getStd['studentId'];
                        $finalAr['studentName'] = $getStd['studentName'];
                        $finalAr['studentEmail'] = $getStd['studentEmail'];
                        $finalAr['studentMobileNo'] = $getStd['studentMobileNo'];
                        $finalAr['countryCode'] = $getStd['countryCode'];
                        $finalAr['countryName'] = $getStd['countryName'];
                        $finalAr['stateName'] = $getStd['stateName'];
                        $finalAr['fcmId'] = $getStd['fcmId'];
                        $finalAr['mobileVerified'] = $getStd['mobileVerified'];
                        $finalAr['emailVerified'] = $getStd['emailVerified'];
                        $finalAr['roleType'] = $getStd['roleType'];
                        $userData = array('fcmId' => $fcmId);
                        $updateUser = $this->user_service->updateData('tbl_students', array('studentId' => $getStd['studentId']), $userData);

                        $tokenD['user_email'] = $getStd['studentEmail'];
                        $tokenD['user_id'] = $getStd['studentId'];
                        $tokenD['role'] = $getStd['roleType'];
                        $tokenData = $this->authorization_token->generateToken($tokenD);
                        $finalAr['token'] = $tokenData;
                        $sessionArray = array('token' => $tokenData,'studentId'=>$getStd['studentId'],'studentName'=>$getStd['studentName']);
                        $this->session->set_userdata('exame101Web', $sessionArray);
                        $this->response(array("message" => MESSAGE_conf::SUCCESS, 'userData' => $finalAr), REST_Controller::HTTP_OK);
                    } else {
                        $this->response(array("message" => MESSAGE_conf::DEACTIVE_ACCOUNT), REST_Controller::HTTP_BAD_REQUEST);
                    }
                } else {
                    $this->response(array("message" => MESSAGE_conf::DELETED_ACCOUNT), REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::INVALID_DETAIL, 'userData' => (object)array()), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
        }
    }



    /* 
    Use:socialLoginApi
    Param:  studentName
            studentEmail
            countryCode
            studentMobileNo
            countryName
            stateName
            password
            fcmId
    Method:POST
    Response:obejct() Of the userData
     */

    public function socialLoginApi_post()
    {
        $loginType = $this->post('loginType') ? $this->post('loginType') : "";
        $studentName = $this->post('studentName') ? $this->post('studentName') : "";
        $fcmId = $this->post('fcmId') ? $this->post('fcmId') : "";
        $studentEmail = $this->post('studentEmail') ? $this->post('studentEmail') : "";
        if ($studentEmail != "" && $loginType != "") {
            $Userdata = array(
                'loginType' => $loginType,
                'studentName' => $studentName,
                'fcmId' => $fcmId,
                'studentEmail' => $studentEmail,
                'roleType' => 'Student',
                'emailVerified' => 'Yes',
                'isPasswordGenerated' => 'No',
                'createdDtm' => date('Y-m-d H:i:s'),
            );
            if ($loginType == 'Facebook' || $loginType == 'Google' || $loginType == 'Apple' || $loginType == 'Normal') {
                $checkValidEmail = verifyEmail($studentEmail);
                if ($checkValidEmail) {
                    $checkEmail = $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'isDeleted' => "No"));
                    if (empty($checkEmail)) {
                        $Userdata['urlSlug'] = $this->user_service->generate_url_slug($studentName, 'tbl_students');
                        $addUser = $this->user_service->insertData('tbl_students', $Userdata);
                        if ($addUser) {
                            $getStd = $this->user_service->getDataWhere(
                                'tbl_students',
                                "studentId,studentName, studentEmail,studentMobileNo,countryCode, countryName, stateName,fcmId,mobileVerified,emailVerified,roleType",
                                array('studentId' => $addUser)
                            );
                            $tokenD['user_email'] = $getStd['studentEmail'];
                            $tokenD['user_id'] = $getStd['studentId'];
                            $tokenD['role'] = $getStd['roleType'];
                            $tokenData = $this->authorization_token->generateToken($tokenD);
                            $getStd['token'] = $tokenData;
                            $sessionArray = array('token' => $tokenData,'studentId'=>$getStd['studentId'],'studentName'=>$getStd['studentName']);
                            $this->session->set_userdata('exame101Web', $sessionArray);
                            $this->response(array("message" => MESSAGE_conf::REGISTER, 'User' => $getStd), REST_Controller::HTTP_OK);
                        } else {
                            $this->response(array("message" => MESSAGE_conf::REGISTER_FAILED, 'User' => (object)array()), REST_Controller::HTTP_BAD_REQUEST);
                        }
                    } else {
                        $tokenD['user_email'] = $checkEmail['studentEmail'];
                        $tokenD['user_id'] = $checkEmail['studentId'];
                        $tokenD['role'] = $checkEmail['roleType'];
                        $tokenData = $this->authorization_token->generateToken($tokenD);
                        $tokenD['studentId'] = $checkEmail['studentId'];
                        $tokenD['studentName'] = $checkEmail['studentName'];
                        $tokenD['studentEmail'] = $checkEmail['studentEmail'];
                        $tokenD['studentMobileNo'] = $checkEmail['studentMobileNo'];
                        $tokenD['countryCode'] = $checkEmail['countryCode'];
                        $tokenD['countryName'] = $checkEmail['countryName'];
                        $tokenD['stateName'] = $checkEmail['stateName'];
                        $tokenD['fcmId'] = $checkEmail['fcmId'];
                        $tokenD['mobileVerified'] = $checkEmail['mobileVerified'];
                        $tokenD['roleType'] = $checkEmail['roleType'];
                        $tokenD['token'] = $tokenData;
                        $sessionArray = array('token' => $tokenData,'studentId'=>$checkEmail['studentId'],'studentName'=>$checkEmail['studentName']);
                        $this->session->set_userdata('exame101Web', $sessionArray);
                        $this->response(array("message" => MESSAGE_conf::REGISTER, 'User' => $tokenD), REST_Controller::HTTP_OK);
                    }
                } else {
                    $this->response(array("message" => MESSAGE_conf::INVALID_EMAILS), REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::INVALID_LOGIN_TYPE), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    /* 
    Use:forgotPasswordApi
    Param: studentEmail
    Method:GET
    Response:Successs with student url slug
     */


    public function forgotPasswordApi_post()
    {

        $studentEmail = $this->post('studentEmail') ? $this->post('studentEmail') : "";
        if ($studentEmail != "") {
            $checkValidEmail = verifyEmail($studentEmail);
            if ($checkValidEmail) {
                $checkEmail = $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'isDeleted' => "No"));
                if ($checkEmail) {
                    $forgotPassToken =  bin2hex(random_bytes(16));
                    $getSetting = $this->user_service->getDataWhere('tbl_admin_setting', 'forgotPassExpireTime', array('1' => 1));
                    $date  = date('Y-m-d h:i:s');
                    $forgotPassExpireTime = $getSetting['forgotPassExpireTime'];
                    $forgotPassTokenExapiration = date('H:i:s', strtotime($date . " +$forgotPassExpireTime minutes"));

                    $url = "";
                    $sender = "meenakhsid.dollo@gmail.com";
                    $reciever = "dollop.meenakshi@gmail.com";
                    $mail_subject = "Forgot password link";
                    $mail_message = $url;
                    $this->Common_model->send_mail($sender, $reciever, $mail_message, $mail_subject);
                    $this->user_service->updateData('tbl_students', array('studentId' => $checkEmail['studentId']), array('forgotPassTokenExapiration' => $forgotPassTokenExapiration, 'forgotPassToken' => $forgotPassToken));
                    $this->response(array("message" => MESSAGE_conf::LINK_SEND, 'url' => $url), REST_Controller::HTTP_OK);
                } else {
                    $this->response(array("message" => MESSAGE_conf::INVALID_USER, 'User' => (object)array()), REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::INVALID_EMAILS), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    /* 
    Use:changePasswordApi
    Param: newPassword
            confirmPassword
            oldPassword
    Method:PUT
    Response:Successs with message
     */

    public function changePasswordApi_put()
    {
        $headers = $this->input->request_headers();
        $headers = tokenVerification($headers);
        if ($headers) {
            $newPassword = $this->put('newPassword') ? $this->put('newPassword') : "";
            $confirmPassword = $this->put('confirmPassword') ? $this->put('confirmPassword') : "";
            $oldPassword = $this->put('oldPassword') ? $this->put('oldPassword') : "";
            if ($newPassword != "" && $confirmPassword != "" && $oldPassword != "") {
                $checkpasswordValidation = passwordValidation($newPassword);
                if ($checkpasswordValidation) {
                    if ($confirmPassword == $newPassword) {
                        $checkUser = $this->user_service->getDataWhere('tbl_students', '*', array('studentId' => $headers['id'], 'isDeleted' => "No"));
                        if ($checkUser) {
                            if ($checkUser['password'] == md5($oldPassword)) {
                                if (md5($oldPassword) != md5($newPassword)) {
                                    $update = $this->user_service->updateData('tbl_students', array('studentId' => $headers['id']), array('password' => md5($newPassword)));
                                    if ($update) {
                                        $this->response(array("message" => MESSAGE_conf::PASSWORD_CHANGED_SUCCESS), REST_Controller::HTTP_OK);
                                    } else {
                                        $this->response(array("message" => MESSAGE_conf::FAILED_CHANGE_PASSWORD), REST_Controller::HTTP_BAD_REQUEST);
                                    }
                                } else {
                                    $this->response(array("message" => MESSAGE_conf::OLD_NEW_PASSWORD), REST_Controller::HTTP_BAD_REQUEST);
                                }
                            } else {
                                $this->response(array("message" => MESSAGE_conf::INVALID_PASSWORD,), REST_Controller::HTTP_BAD_REQUEST);
                            }
                        } else {
                            $this->response(array("message" => MESSAGE_conf::NO_USER), REST_Controller::HTTP_BAD_REQUEST);
                        }
                    } else {
                        $this->response(array("message" => MESSAGE_conf::INVALID_CONFIRM_PASSWORD), REST_Controller::HTTP_BAD_REQUEST);
                    }
                } else {
                    $this->response(array("message" => MESSAGE_conf::INVALID_PASSWORD_FORMAT), REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            return $headers;
        }
    }

    /* 
    Use:generatePasswordApi
    Param: newPassword
            confirmPassword
            oldPassword
    Method:PUT
    Response:Successs with message
     */


    public function generatePasswordApi_post()
    {
        $password = $this->post('password') ? $this->post('password') : "";
        $forgotPassToken = $this->post('forgotPassToken') ? $this->post('forgotPassToken') : "";

        if ($password != "" && $forgotPassToken != "") {
            $checkpasswordValidation = passwordValidation($password);
            if ($checkpasswordValidation) {
                $checkUser = $this->user_service->getDataWhere('tbl_students', '*', array('forgotPassToken' => $forgotPassToken, 'isDeleted' => "No"));
                if ($checkUser) {
                    if ($checkUser['forgotPassTokenExapiration'] >= date('Y-m-d h:i:s')) {
                        $update = $this->user_service->updateData('tbl_students', array('studentId' => $checkUser['studentId']), array('password' => md5($password)));
                        if ($update) {
                            $this->response(array("message" => MESSAGE_conf::PASSWORD_GENERATE_SUCCESS), REST_Controller::HTTP_OK);
                        } else {
                            $this->response(array("message" => MESSAGE_conf::PASSWORD_GENERATE_FAILED), REST_Controller::HTTP_BAD_REQUEST);
                        }
                    } else {
                        $this->response(array("message" => MESSAGE_conf::TOKEN_EXPIRE), REST_Controller::HTTP_BAD_REQUEST);
                    }
                } else {
                    $this->response(array("message" => MESSAGE_conf::UNAUTH_TOKEN), REST_Controller::HTTP_UNAUTHORIZED);
                }
            } else {
                $this->response(array("message" => MESSAGE_conf::INVALID_PASSWORD_FORMAT), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(array("message" => MESSAGE_conf::ALL_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
        }
    }

     /* 
    Use:checkEmailForRemoteValidationApi
    Param: studentId
            studentEmail
           
    Method:post
    Response:Successs with message
     */
    public function checkEmailForRemoteValidationApi_post()
    {
        $studentId = $this->input->post("studentId");
        $studentEmail = $this->input->post("studentEmail");
        // if ($studentId == "") {
        //     $result =  $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'isDeleted' => "No"));
        // } else {
        //     $result =  $this->user_service->getDataWhere('tbl_students', '*', array('studentEmail' => $studentEmail, 'isDeleted' => "No"));
        //    if($result){
        //         if($result["studentId"] == $studentId)
        //         {
        //             $result = 0;
        //         }else
        //         {
        //             $result = 1;
        //         }
        //    }else
        //    {
        //         $result = 0;
        //    }
            
        // }
        // if ($result) {
        //     echo ("true");
        // } else {
        //     echo ("false");
        // }
        if(empty($studentId)){
            $result = $this->AffiliateModel->uniqueEmail($studentEmail);
        } else {
            $result = $this->AffiliateModel->uniqueEmail($studentEmail, $studentId);
        }

        if(empty($result)){ echo("true"); }
        else { echo("false"); }
    }
     /* 
    Use:generatePasswordApi
    Param: studentId
            studentEmail
    Method:post
    Response:Successs with message
     */
    public function checkMobileForRemoteValidationApi_post()
    {
        $studentId = $this->input->post("studentId");
        $studentMobile = $this->input->post("studentMobileNo");
        // if ($studentId == "") {
        //     $result =  $this->user_service->getDataWhere('tbl_students', '*', array('studentMobile' => $studentMobile, 'isDeleted' => "No"));
        // } else {
        //     $result =  $this->user_service->getDataWhere('tbl_students', '*', array('studentMobile' => $studentMobile, 'isDeleted' => "No"));
        //     if($result){
        //         if($result["studentId"] == $studentId)
        //         {
        //             $result = 0;
        //         }else
        //         {
        //             $result = 1;
        //         }
        //    }else
        //    {
        //         $result = 0;
        //    }
            
        // }
        // if ($result) {
        //     echo ("true");
        // } else {
        //     echo ("false");
        // }
        if(empty($studentId)){
            $result = $this->AffiliateModel->uniqueMobile($studentMobile);
        } else {
            $result = $this->AffiliateModel->uniqueMobile($studentMobile, $studentId);
        }

        if(empty($result)){ echo("true"); }
        else { echo("false"); }
    }
}
