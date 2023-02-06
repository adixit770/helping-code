<?php

require APPPATH . 'libraries/REST_Controller.php';
class TestTokenController extends REST_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->library('Authorization_Token');
		$this->config->load('myConstant');
		$this->load->library('session');
		$this->load->library('Authorization_Token');
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->database();
	}
												
	public function getTokenApi_get()
	{
		$data = array(
			'id' => '1',
			'email' => 'hardiksilawat0902@gamil.com',
			'password' => 'hardik09021998'
		);
		$tokenGenerate = $this->authorization_token->generateToken($data);
		$header['Authorization'] = $tokenGenerate;
		echo $tokenGenerate;

		$tokenD = $this->authorization_token->validateToken($header['Authorization']);
		echo "<pre>";
		print_r('Decoded Data=>');
		if (isset($tokenD['data'])) {
			$var = (array) $tokenD['data'];
		} else {
			$var = MESSAGE_conf::ERROR;
		}

		echo "<pre>";
		print_r($var);
		echo "Hello World";
	}
}
