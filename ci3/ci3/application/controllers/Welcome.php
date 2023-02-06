<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->model('UserModel'); ////////////File Name User Modal
	}

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	///////////CRUD OPERATIONS  STARTS:
	//Insert data
	public function insertData()
	{
		$id = $_GET['id'];
		$data = array('user_name' => $_POST['name'], 'user_number' => $_POST['number']);
		$this->UserModel->insertUsers($data); ////////////get users from model
		header('Location:home');
	}
	//Update data
	public function updateData()
	{
		$id = $_GET['id'];
		$data = array('user_name' => 'HARDIK SILAWAT', 'user_number' => '8989616123');
		$this->UserModel->updateUsers($data, $id); ////////////get users from model 
		header('Location:home');
	}

	//Delete data	
	public function deleteData()
	{
		$id = $_GET['id'];
		$this->UserModel->deleteUsers($id); ////////////get users from model 
		header('Location:home');
	}
    ///////////CRUD OPERATIONS ENDS.
	

	public function user_list_fun()
	{
		$data = array();
		$getUser = $this->UserModel->getUsers();
		$data['users'] = $getUser;
		// print_r($data);
		$this->load->view('user_list', $data); ///////////////load file with file name which is in view folder
	}

	public function home()
	{
		$data = array();
		$getUser = $this->UserModel->getUsers(); ////////////get users from model 
		$data['users'] = $getUser;
		// print_r($data);
		$this->load->view('home', $data); ///////////////load file with file name which is in view folder
		// $data =array();
		// $data['name']= '1st Page';
		// $this->load->view('home',$data);
	}

	public function contacts()
	{
		$data = array();
		$getContact = $this->UserModel->getContacts();
		$data['users'] = $getContact;
		// print_r($data);
		$this->load->view('contacts', $data); ///////////////load file with file name which is in view folder

		// $data =array();
		// $data['name']= '2nd Page';
		// $this->load->view('contacts',$data);
	}

	public function business()
	{
		$data = array();
		$getBusiness = $this->UserModel->getBusiness();
		$data['users'] = $getBusiness;
		// print_r($data);
		$this->load->view('business', $data); ///////////////load file with file name which is in view folder

		// $data =array();
		// $data['name']= '3rd Page';
		// $this->load->view('business',$data);
	}


	public function about()
	{
		$data = array();
		$getAbout = $this->UserModel->getAbout();
		$data['users'] = $getAbout;
		// print_r($data);
		$this->load->view('about', $data); ///////////////load file with file name which is in view folder

		// $data =array();
		// $data['name']= '4th Page';
		// $this->load->view('about',$data);
	}


	// public function folders()
	// {
	// 	$data =array();
	// 	$data['name']= '5th Page';
	// 	$this->load->view('errors/cli/error_404',$data);
	// }
}
