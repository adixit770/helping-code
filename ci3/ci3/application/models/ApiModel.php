<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class ApiModel extends CI_Model {

  function getData(){

     $response = array();

     //select record
     $this->db->select('*');
     $q = $this->db->get('user');////pass the database table name
     $response = $q->result_array();
    return $response;
  }

  function checkEmail($email){

    $this->db->select('*');
    $this->db->where('user_email',$email);
    $e = $this->db->get('user');
    $response = $e->row_array();
    return $response;
  }

  function checkMobile($mobile){
    
    $this->db->select('*');
    $this->db->where('user_mobile',$mobile);
    $m = $this->db->get('user');
    $response = $m->row_array();
    return $response;
  }

  function insertData($table,$addUser){

    //insert record

    $this->db->insert($table, $addUser);
    $last_id = $this->db->insert_id();

    return $last_id;
  }

  function getDataWhere($addUser){
    $this->db->select('*');
    $this->db->where('user_email',$addUser);
    $A = $this->db->get('user');
    $response = $A->row_array();
    return $response;
  }

}