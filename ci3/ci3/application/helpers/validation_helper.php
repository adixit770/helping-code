<?php
/*
Used for verfiy the email 
*/
function verifyEmail($email)
{
  return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email)) ? FALSE : TRUE;
}
/*
Used for verfiy the token 
*/
function verifiedToken($headers)
{
 //print_r($headers['Authorization']);die;
  $CI = &get_instance();
  $CI->load->library('Authorization_Token');
 
  $decodedToken = $CI->authorization_token->validateToken($headers['Authorization']);
  
 
  if (isset($decodedToken['data'])) {
    $var = (array)$decodedToken['data'];
  } else {
    $var = MESSAGE_conf::ERROR;
  }
  return $var;
}
//For Password Validation
function passwordValidation($password)
{
  $uppercase = preg_match('@[A-Z]@', $password);
  $lowercase = preg_match('@[a-z]@', $password);
  $number    = preg_match('@[0-9]@', $password);
  if ($uppercase && $lowercase && $number && strlen($password) > 6) {
    return 1;
  } else {
    0;
  }
}
//For mobile Validation for international number which 10-13 digits
function mobileValidation($mobile)
{
 
  $number  =preg_match('/^\d{10,13}$/', str_replace('-', '', $mobile)) ;
    if ($number == 1) {
      return 1;
    } else {
      0;
    }
 /*  $number    = preg_match('/^[0-9]{13}+$/', $mobile);
  if ($number == 1) {
    return 1;
  } else {
    0;
  } */
}
//For token Validation
function tokenVerification($headers)
{ //print_r($headers['Authorization']);die;
  $CI = &get_instance(); 
 
  if (isset($headers['Authorization']) && ($headers['Authorization']) != null && !empty($headers['Authorization'])) {
    $result = verifiedToken($headers);
    if ($result == MESSAGE_conf::ERROR) {
      return $result = $CI->response(array("message" => MESSAGE_conf::INVALID_TOKEN), REST_Controller::HTTP_UNAUTHORIZED);
    }
    $display_role = isset($result['display_role'])?$result['display_role']:"";
    $checkUserAuth = $CI->user_service->getDataWhere('tbl_students','*',array('studentId'=>$result['user_id']));
    if($checkUserAuth){
      
      if($checkUserAuth['isDeleted']=="No"){
        if($checkUserAuth['isActive']=="Yes"){
          return  array("id" => $result['user_id'], "email" => $result['user_email'], "role" => $result['role'], "display_role" => $display_role);
        }else
        {
          return $result = $CI->response(array("message" =>'User Not Active'), REST_Controller::HTTP_UNAUTHORIZED);
        }
       
      }else
      {
        return $result = $CI->response(array("message" =>'User Not Exist'), REST_Controller::HTTP_UNAUTHORIZED);
      }
    }else
    {
      return $result = $CI->response(array("message" => MESSAGE_conf::INVALID_TOKEN), REST_Controller::HTTP_UNAUTHORIZED);
    }
   
  } else {
    return $result = $CI->response(array("message" => MESSAGE_conf::TOKEN_REQUIRED), REST_Controller::HTTP_BAD_REQUEST);
  }
}
/**
 * For coupon discount
 */
function get_coupon_discount($coupon_code, $user_id, $total_amount)
{
  $CI = &get_instance();
  //$total_price = $order_discounted_amount;
  //$coupon_code = "";
  $coupon_discount = $total_amount;
  $coupon_id = 0;
  $percent = 0;
  //print_r($coupon_code);die();
  if ($coupon_code != "") {
    $coupon_data = $CI->db->select('*')->from('coupns')->where('coupon_code', $coupon_code)->where('is_active', 1)->where('is_delete', 1)->get()->result_array();
 
    if ($coupon_data) {
 
      $todayDate = date('Y-m-d H:i:s');
      $start_date = $coupon_data[0]['start_date'];
      $end_date = $coupon_data[0]['end_date'];
      if (($todayDate >= $start_date) && ($todayDate <= $end_date)) {
 
        if ($coupon_data[0]['restriction_type'] == 1) {
          //print_r($total_amount);die();
          // if($offer_discount > $coupon_data[0]['min_amount'] ){
          if ($total_amount >= $coupon_data[0]['min_amount']) {
 
            // if ($coupon_data[0]['use_type_id'] == 1) {
 
              $order_data = $CI->db->select('*')->from('orders')->where('retailer_id', $user_id)->where('coupon_id', $coupon_data[0]['id'])->get()->result_array();
 
              if (empty($order_data)) {
 
                $percent = $coupon_data[0]['percent'];
 
                $coupon_discount = floatval($total_amount) * (floatval($percent) / 100);
 
                $dis_amount = floatval($total_amount) - floatval($coupon_discount);
                //print_r($coupon_discount);die();
                if ($coupon_discount > $coupon_data[0]['upto_amount']) {
 
                  //$coupon_discount = floatval($total_amount) - ($coupon_data[0]['upto_amount']);
                  $coupon_discount = $coupon_data[0]['upto_amount'];
                } else {
                  $coupon_discount = floatval($total_amount) - floatval($dis_amount);
                }
 
                $coupon_id = $coupon_data[0]['id'];
              } else {
 
                $coupon_discount = $total_amount;
              }
            // } else {
 
            //   $coupon_code = $coupon_data[0]['coupon_code'];
            //   $percent = $coupon_data[0]['percent'];
            //   // print_r($coupon_discount);
            //   // print_r($total_amount);die();
 
            //   $coupon_discount = floatval($total_amount) * (floatval($percent) / 100);
            //   //print_r($coupon_discount);die();
            //   $dis_amount = floatval($total_amount) - floatval($coupon_discount);
            //   if ($coupon_discount > $coupon_data[0]['upto_amount']) {
            //     $coupon_discount = $coupon_data[0]['upto_amount'];
            //   }
            //   $coupon_id = $coupon_data[0]['id'];
            // }
          } else {
            $coupon_discount = $total_amount;
          }
        }
      } else {
        $coupon_discount = $total_amount;
      }
    } else {
      $coupon_discount = $total_amount;
    }
  }
 
  return json_encode(array('coupon_discount' => round($coupon_discount, 2), 'coupon_id' => $coupon_id, 'percent' => $percent, 'coupon_code' => $coupon_code));
}
 
?>
