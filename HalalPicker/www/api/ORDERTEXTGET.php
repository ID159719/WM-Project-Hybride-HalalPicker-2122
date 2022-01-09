<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

define ('INDEX', true);
require 'inc/dbcon.php';
require 'inc/base.php';

 $stmt= $conn->prepare("select cstm_id, cstm_username, cstm_password, cstm_gsm,cstm_email FROM customer where cstm_username like ? && cstm_password like ?");

 if (!$stmt){
    $response['code'] = 7;
    $response['status'] = 200;
    $response['data'] = $conn->error;
    deliver_response($response);
}

if(!$stmt->bind_param("ss", $postvars['cstm_username'],$postvars['cstm_password'])){
    $response['code'] = 7;
    $response['status'] = 200;
    $response['data'] = $conn->error;
    deliver_response($response);
}

if (!$stmt->execute()) {
    $response['code'] = 7;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = $conn->error;
    deliver_response($response);
}

$result = $stmt->get_result();

if (!$result) {
    $response['code'] = 7;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = $conn->error;
    deliver_response($response);
}

$response['data'] = getJsonObjFromResult($result);
$result->free();
$conn->close();
deliver_JSONresponse($response);
?>