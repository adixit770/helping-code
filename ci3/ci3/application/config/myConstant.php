

<?php
defined('BASEPATH') or exit('No direct script access allowed');
$config['my_config_item'] = 'my_config_value';
define('ABCD_MY_CONSTANT', 'my_config_item');

class MESSAGE_conf
{
	const ERROR = "Error";
	const UNAUTH = "You are Not Authorized";
	const INVALID_DETAILS = "Please Enter Valid Details";
	const INVALID_REFERRALCODE = "Inavalid Referral Code";
	const GET_OTP = "Your Otp Success";
	const DEACTIVEDTED_USER = "You Account Was Deactiveted";
	const UNDER_VERIFICATION = "YouR Account Under Admin Verification";
	const OLD_PASSWORD_NOT_MATCH = "Old Password Not Matched";
	const OTP_NOT_VERIFIED = "Otp Not Matched";
	const NO_USER = "There is no user";
	const DELETED_USER = "You Account Was Deleted";
	const UNVERIFIED = "You Account Was Not Verfied";
	const ALREADY_HAVE = "Already Have ";
	const ALREADY_ADDED = "Already Submited ";
	const UPDATE_CATEGORY = "Category Updated Successfully";
	const CATEGORY_UPDATE_FAILED = "Category Not Updated ";
	const CATEGORY_ADDED = "Category Added Successfully";
	const CATEGORY_ADDED_FAILED = 'Category Not Added ';
	const UPDATE_REFERRALCODE = "REFERRALCODE Updated Successfully";
	const REFERRALCODE_UPDATE_FAILED = "REFERRALCODE Not Updated ";
	const REFERRALCODE_ADDED = "REFERRALCODE Added Successfully";
	const REFERRALCODE_ADDED_FAILED = 'REFERRALCODE Not Added ';
	
	const UPDATE_SUB_CATEGORY = " Sub Category Updated Successfully";
	const SUB_CATEGORY_UPDATE_FAILED = " Sub Category Not Updated ";
	const SUB_CATEGORY_ADDED = "Sub Category Added Successfully";
	const SUB_CATEGORY_ADDED_FAILED = ' Sub Category Not Added ';
	
	const SUCCESS = "Success";
	const FAILED = "Failed";
	const ALL_REQUIRED = "All Field Required";
	const INVALID_EMAIL = "Invalid Email";
	const INVALID_PASSWORD = "Please Enter Correct Password";
	const AUTHRIZED_USER = "Login Successfully";
	const REGISTERD = "Register Successfully";
	const UNREGISTERD = "User Not Registerd";
	const GET_USER_DATA = "Get User Data";
	const USER_DELETED = "User Successfully Delete";
	const CONTACT_DELETE = "Contact Successfully Delete";
	const CONTACT_NOT_DELETE = "Contact Not Delete";
	const TOKEN_REQUIRED = "Token is Required";
	const INVALID_TOKEN = "Invalid Token";
	const INVALID_MOBILE_NUMBER = "Invalid Mobile Number";
	const SOME_VAR = "Email valid, but not exist";
	const EMAIL_EXIST = "Email valid and exist";
	const MOBILE_EXIST = "Mobile Number Already exist";
	const USER_BLOCKED = "Your Account is Blocked by Admin";
	const USER_DEACTIVATED = "Your Account is Deactivated by Admin";
	const COUPON_ADDED = "Coupon Code Added Successfully";
	const COUPON_NOT_ADDED = "Coupon Code Added Successfully";
	const COUPON_UDATE = "Coupon Code Update Successfully";
	const COUPON_NOT_UPDATE = "Coupon Code Not Update ";
	const BLANK_CART = "Your cart Empty";
	const DO_BLANK_CART = "Please Do You cart Empty";
	const BID_NOT_PLACED = "Bid Placed Failed";
	const BID_UPDATE = "Bid Update Successfully";
	const BID_NOT_UPDATE = "Bid Not Update ";
	const MESSAGE_SEND = "Message Send Successfully";
	const MESSAGE_NOT_SEND = "Message Send Failed";
	const MESSAGE_UPDATE = "Message Send Successfully";
	const MESSAGE_NOT_UPDATE = "Message Send Failed";
}	
