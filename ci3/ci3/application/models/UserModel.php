<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class UserModel extends CI_Model
{
  function getUsers()
  {
    $response = array();
    // Select record
    $this->db->select('*');
    $q = $this->db->get('home'); ////////////Database Table Name
    $response = $q->result_array();
    // print_r( $response);
    return $response;
  }
  function getContacts()
  {
    $response = array();
    // Select record
    $this->db->select('*');
    $q = $this->db->get('contacts'); ////////////Database Table Name
    $response = $q->result_array();
    // print_r( $response);
    return $response;
  }

  function getBusiness()
  {
    $response = array();
    // Select record
    $this->db->select('*');
    $q = $this->db->get('business'); ////////////Database Table Name
    $response = $q->result_array();
    // print_r( $response);
    return $response;
  }

  ///////// Select record
  function getAbout()
  {
    $response = array();
    $this->db->select('*');
    $q = $this->db->get('about'); ////////////Database Table Name
    $response = $q->result_array();
    // print_r( $response);
    return $response;
  }
  
  ///////// Insert record
  function insertUsers($data)
  {
    $this->db->insert('home', $data);
  }
  ///////// Update record
  function updateUsers($data,$id)
  {
    $ID = $id;
    $this->db->where('user_id',$ID);
    $this->db->update('home', $data);
  }
  ///////// Delete record
  function deleteUsers($id)
  {
    $ID = $id;
    $this->db->where('user_id',$id);
    $this->db->delete('home');
  }
}
