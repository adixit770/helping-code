<?php

/**
 * @Author:
 *Its Provide services
 */
class User_service extends MY_Service
{
  public function __construct()
  {
    parent::__construct();
    //$this->load->model('AuthModel');
    $this->load->model('Common_model');
    $this->load->library("pagination");
  }

  public function executeSql($sql, $type)
  {
    $query = $this->db->query($sql);
    switch ($type) {
      case 'insert':
        $result = $query;
        break;

      case 'update':
        $result = $query;
        break;

      case 'delete':
        $result = $query;
        break;
      case 'result_array':
        $result = $query->result_array();
        break;
      case 'row_array':
        $result = $query->row_array();
        break;
      case 'num_rows':
        $result = $query->num_rows();
        break;
      default:
        $result = 'Failed';
        break;
    }

    return $result;
  }

  public function insertData($table, $data)
  {
    $query = $this->db->insert($table, $data);
    if ($query) {
      return $this->db->insert_id();
    } else {
      return "0";
    }
  }

  public function getAllData($table, $key = "")
  {
    if (isset($key) && !empty($key)) {
      $this->db->order_by($key, "desc");
    }

    $query = $this->db->get($table);
    if ($query->num_rows() > 0) {
      return $query->result_array();
    } else {
      return 0;
    }
  }
  public function getDataWhere($table, $select, $where)
  {
    $query = $this->db->select($select)->from($table)->where($where)->get();
    return ($query->num_rows() > 0) ? $query->row_array() : 0;
  }

  //mkr
  public function getAllDataWhere($table, $select, $where, $key = "")
  {


    $this->db->select($select);
    $this->db->from($table);
    $this->db->where($where);
    if (isset($key) && !empty($key)) {
      $this->db->order_by($key, "desc");
    }
    $query = $this->db->get();
    return ($query->num_rows() > 0) ? $query->result_array() : 0;
  }

  public function updateData($table, $cond, $data)
  {
    $this->db->where($cond);
    $res = $this->db->update($table, $data);
    if ($res) {
      return 1;
    } else {
      return 0;
    }
  }

  public function deleteData($table, $cond)
  {
    $this->db->where($cond);
    $res = $this->db->delete($table);
    return $this->db->last_query();

    if ($res) {
      return 1;
    } else {
      return 0;
    }
  }


  /*  generate url slug by name */
  public function generate_url_slug($string, $table, $field = 'urlSlug', $key = NULL, $value = NULL)
  {

    $slug = url_title($string);
    $slug = strtolower($slug);
    $i = 0;
    $params = array();
    $params[$field] = $slug;

    if ($key) $params["$key !="] = $value;

    while ($this->db->where($params)->get($table)->num_rows()) {
      if (!preg_match('/-{1}[0-9]+$/', $slug))
        $slug .= '-' . ++$i;
      else
        $slug = preg_replace('/[0-9]+$/', ++$i, $slug);

      $params[$field] = $slug;
    }
    return $slug;
  }

  /*  update url slug by name */

  public function generate_url_slug_on_update($string, $table, $field = 'urlSlug', $key = NULL, $value = NULL)
  {

    $slug = url_title($string);
    $slug = strtolower($slug);
    $i = 0;
    $params = array();
    $params[$field] = $slug;

    if ($key) $params["$key !="] = $value;

    while ($this->db->where($params)->get($table)->num_rows()) {
      if (!preg_match('/-{1}[0-9]+$/', $slug))
        $slug .= '-' . ++$i;
      else
        $slug = preg_replace('/[0-9]+$/', ++$i, $slug);

      $params[$field] = $slug;
    }
    return $slug;
  }

  /* get country */
  public function getCountryList()
  {
    $sql = "SELECT tbl_country.countryId,
            tbl_country.countryName,
            tbl_country.currencyCode,
            tbl_country.sortName,
            tbl_country.currencySymbol,
            tbl_country.currencyName,
            tbl_country.phoneCode,
            tbl_country.capital,
            tbl_country.flag,
            tbl_country.unit 
            FROM `tbl_country`";
    $result2 = $this->Common_model->executeSql($sql, "result_array");
    return $result2;
  }
  /* get state */
  public function getStateList($countryId)
  {
    $sql = "SELECT tbl_state.stateId,
                  tbl_state.stateName
            FROM `tbl_state` WHERE tbl_state.countryId='$countryId'";
    $result2 = $this->Common_model->executeSql($sql, "result_array");
    return $result2;
  }

  /**
   * This function is used to upload image
   */
  public function upload_image($image_data, $num, $path1)
  {
    $image = md5(date("d-m-y:h:i s")) . "_" . $num;
    if (is_array($image_data)) {
      $file_name = pathinfo(@$image_data['name'], PATHINFO_FILENAME);
      $extension = pathinfo(@$image_data['name'], PATHINFO_EXTENSION);

      if (move_uploaded_file(@$image_data['tmp_name'], $path1 . '' . $image . '.' . $extension)) {
        $image = $image . '.' . $extension;
      } else {
        $image = Null;
      }
    }
    return $image;
  }

  /* 
    get blog by cat id and without cat id
  */

  public function getBlogList($finalStr, $urlSlug, $limit, $offset)
  {
    $var = "";
    if ($urlSlug != "") {
      $var = " AND tbl_blog_category.urlSlug='$urlSlug'";
    }
    $sql = "SELECT $finalStr,DATE_FORMAT(tbl_blogs.blogDate,'%d %M ,%Y') AS blogDate
            FROM `tbl_blogs`
            LEFT JOIN tbl_blog_category ON tbl_blog_category.blogCatId = tbl_blogs.blogCatId
            WHERE tbl_blogs.isActive='Yes' AND tbl_blogs.isDeleted='No' $var ORDER BY tbl_blogs.blogId DESC LIMIT $limit OFFSET $offset";
    $result2 = $this->Common_model->executeSql($sql, "result_array");
    return $result2;
  }
  /* 
    get blog by blogId  
  */

  public function getBlog($finalStr, $urlSlug)
  {
    $sql = "SELECT $finalStr,DATE_FORMAT(tbl_blogs.blogDate,'%d %M ,%Y') AS blogDate
            FROM `tbl_blogs`
            LEFT JOIN tbl_blog_category ON tbl_blog_category.blogCatId = tbl_blogs.blogCatId
            WHERE tbl_blogs.isActive='Yes' AND tbl_blogs.isDeleted='No' AND tbl_blogs.urlSlug = '$urlSlug'";
    $result2 = $this->Common_model->executeSql($sql, "row_array");
    return $result2;
  }
  /* 
    get blog by search
  */

  public function getBlogBySearchKey($finalStr, $search, $limit, $offset)
  {

    $sql = "SELECT $finalStr,DATE_FORMAT(tbl_blogs.blogDate,'%d %M ,%Y') AS blogDate
            FROM `tbl_blogs`
            LEFT JOIN tbl_blog_category ON tbl_blog_category.blogCatId = tbl_blogs.blogCatId
            WHERE tbl_blogs.isActive='Yes' AND tbl_blogs.isDeleted='No' AND 
            ( tbl_blogs.authorName LIKE '%$search%' 
            OR tbl_blogs.blogSortDesc LIKE '%$search%' 
            OR tbl_blogs.blogTitle LIKE '%$search%' 
            OR tbl_blog_category.blogCatName LIKE '%$search%') LIMIT $limit OFFSET $offset ";
    $result2 = $this->Common_model->executeSql($sql, "result_array");
    return $result2;
  }
  public function getAllDataWhereWithLimitOffset($table, $select, $where, $key = "", $limit, $offset)
  {

    $this->db->select($select);
    $this->db->from($table);
    $this->db->where($where);
    if (isset($key) && !empty($key)) {
      $this->db->order_by($key, "desc");
    }
    if (isset($limit) && !empty($limit)) {
      $this->db->limit($limit, $offset);
    }
    $query = $this->db->get();

    $res = ($query->num_rows() > 0) ? $query->result_array() : 0;

    return $res;
  }

  public function getStdWithCountryDetail($stdId)
  {
    $sql = "SELECT tbl_students.*,tbl_country.countryId
            FROM `tbl_students` 
            LEFT JOIN tbl_country ON tbl_country.countryName = tbl_students.countryName
            WHERE tbl_students.studentId = '$stdId' AND isDeleted = 'No'";
    $result2 = $this->Common_model->executeSql($sql, "row_array");
    return $result2;
  }

  public function getPackagesByFilter($string, $limit, $offset, $examId, $packageName, $shortDesc, $discountedPriceStart, $discountedPriceEnd, $languageIds)
  {
    $exmFilter = "";
    if ($examId != "") {
      $subQuer =  " SELECT  REPLACE(GROUP_CONCAT(tbl_topic.topicId),',','|') AS topicIds
                    FROM tbl_topic
                    INNER JOIN tbl_modules ON(tbl_modules.moduleId = tbl_topic.moduleId)
                    INNER JOIN tbl_subjects ON(tbl_subjects.subjectId = tbl_modules.subjectId)
                    WHERE  tbl_subjects.examId=$examId";
      $subQuerRes = $this->Common_model->executeSql($subQuer, "row_array");
      if (isset($subQuerRes['topicIds']) && $subQuerRes['topicIds'] != null) {
        $exmFilter = "," . $subQuerRes['topicIds'] . ",";
      } else {
        $exmFilter = "";
      }
    }

    $sql = "SELECT $string,
                (SELECT COUNT(*) FROM tbl_review_rating WHERE tbl_review_rating.packageId = tbl_package.packageId ) AS studentCnt,
                CASE WHEN
                (SELECT ROUND((SUM(rating)/COUNT(rating)),1) FROM tbl_review_rating  WHERE tbl_review_rating.packageId = tbl_package.packageId ) IS NOT NULL THEN (SELECT ROUND((SUM(rating)/COUNT(rating)),1) FROM tbl_review_rating  WHERE tbl_review_rating.packageId = tbl_package.packageId)
                      ELSE ''
                END AS rating
              FROM `tbl_package` 
              WHERE tbl_package.isActive='Yes' AND tbl_package.isDeleted='No'";
    if ($languageIds != "") {
      $lngJson = '{"language":"' . $languageIds . '"}';
      $sql .= " AND JSON_CONTAINS(tbl_package.languageIds,'$lngJson')";
    }
    if ($shortDesc != "") {
      $sql .=  " AND  tbl_package.shortDesc LIKE '%$shortDesc%' OR tbl_package.packageName  LIKE '%$shortDesc%'";
    }
    if ($packageName != "") {
      $sql .=  " AND tbl_package.packageName  LIKE '%$packageName%'";
    }
    if ($discountedPriceStart != "" && $discountedPriceEnd != "") {
      $sql .=  " AND tbl_package.discountedPrice>=$discountedPriceStart AND tbl_package.discountedPrice <=$discountedPriceEnd";
    }
    if ($exmFilter != "") {
      $str1 = '{"topicId":';
      $sql .=  " AND CONCAT(',', REPLACE(REPLACE( REPLACE(REPLACE( tbl_package.topicIds,'[', ''), ']',''),'$str1',''),'}',''), ',') REGEXP '$exmFilter'";
    }
    $sql .= "ORDER BY tbl_package.packageId DESC LIMIT $limit OFFSET $offset";
    $result2 = $this->Common_model->executeSql($sql, "result_array");
    return $result2;
  }


  public function getReviewRatingList($string,$limit,$offset)
  {
      $sql = "SELECT $string,
                    tbl_students.studentId,
                    IF(tbl_students.profilePic IS NOT NULL, tbl_students.profilePic,'') AS profilePic,
                    tbl_students.studentName
              FROM `tbl_review_rating`  
              LEFT JOIN tbl_students ON (tbl_students.studentId = tbl_review_rating.studentId )
              ORDER BY tbl_review_rating.reviewRatingId DESC LIMIT $limit OFFSET $offset ";
      $result2 = $this->Common_model->executeSql($sql, "result_array");
      return $result2;
  }
}
