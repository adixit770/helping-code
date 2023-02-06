<?php

use LDAP\Result;

require APPPATH . 'libraries/REST_Controller.php';

class UserController extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->config->load('myConstant');
        $this->load->library('session');
        $this->load->library('Authorization_Token');
        $this->load->helper(array('form', 'url'));
        $this->load->library('form_validation');
        $this->load->database();
        //$this->load->model('Common_model');
        date_default_timezone_set('UTC');
    }


    public function getUserApi_get()
    {
        $data = array();
        $data['id'] = 1;
        $data['email'] = 'm@gmail.com';
        $data['role'] = 'User';
        $token = $this->authorization_token->generateToken($data);
        echo $token;

        $headers['Authorization'] = $token;
        $tokenData = $this->authorization_token->validateToken($headers['Authorization']);
        print_r('Decoded Data=>');
        if (isset($tokenData['data'])) {
            $var = (array)$tokenData['data'];
        } else {
            $var = MESSAGE_conf::ERROR;
        }
        print_r($var);
    }
}
