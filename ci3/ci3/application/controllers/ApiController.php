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
        $this->load->model('ApiModel');
        date_default_timezone_set('UTC');
    }

    public function signup_post(){

       $name = $this->post('name');
       $email = $this->post('email');
       $mobile = $this->post('mobile');
       $password = $this->post('password');
       // $confirm_password = $this->post('confirm_password');

      if($name != "" && $email != "" && $mobile != "" && $password != ""){
          $userData = array(
            'user_name'=>$name,
            'user_email'=>$email,
            'user_mobile'=>$mobile,
            'user_password'=>$password,
           );

          $checkEmail = $this->ApiModel->checkEmail($email);

        if($checkEmail==0){
          $checkMobile = $this->ApiModel->checkMobile($mobile);
            if($checkMobile==0){
                $addUser = $this->ApiModel->insertData('user',$userData);
             if($addUser){
                $getStd = $this->ApiModel->getDataWhere('user',$userData);

                array('user_id'=>$addUser);

                $tokenD['user_email'] = $getStd['user_email'];
                $tokenD['user_mobile'] = $getStd['user_mobile'];
                $tokenD['user_id'] = $getStd['user_id'];
                $tokenData = $this->authorization_token->generateToken($tokenD);
                $getStd['token'] = $tokenData;
                $sessionArray = array('token'=>
                                        $tokenData,
                                        'user_id'=>$getStd['user_id'],
                                        'user_name'=>$getStd['user_name']);

                  $this->session->set_userData('exame101Web',$sessionArray);
                  $this->response(array("message"=>MESSAGE_conf::REGISTER,
                                        'User'=>$getStd),
                                        REST_Controller::HTTP_OK);
                }
              else{
                  $this->response(array("message"=>MESSAGE_conf::REGISTER_FAILED,
                                        'User'=>(object)array()),
                                        REST_Controller::HTTP_BAD_REQUEST);
                }
              }
            else{
                $this->response(array("message"=>MESSAGE_conf::INVALID_MOBILE),
                                        REST_Controller::HTTP_BAD_REQUEST);
             }
            }
        else{
                $this->response(array("message"=>MESSAGE_conf::INVALID_EMAILS),
                                        REST_Controller::HTTP_BAD_REQUEST);
            }
        }
      else{
             $this->response(array("message"=>MESSAGE_conf::ALL_REQUIRED),
                                        REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
?>