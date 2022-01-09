<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

define ('INDEX', true);
require 'inc/dbcon.php';
require 'inc/base.php';

$stmt = $conn->prepare("INSERT INTO `customer` (`cstm_username`, `cstm_password`, `cstm_gsm`, `cstm_email`) VALUES (?,?,?,?)"); 

if (!$stmt){
    $response['code'] = 7;
    $response['status'] = 200;
    $response['data'] = $conn->error;
    deliver_response($response);
}

if(!$stmt->bind_param("ssss",$postvars['cstm_username'],$postvars['cstm_password'],$postvars['cstm_gsm'],$postvars['cstm_email']))
{
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

if($stmt->affected_rows == 0){
    $response['code'] = 7;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = 'geen rij toegevoegd';
    deliver_response($response);
}

$response['code'] = 1;
$response['status'] = $api_response_code[$response['code']]['HTTP Response'];
$response['data'] = 'rij toegevoegd';
$conn->close();
deliver_JSONresponse($response);
?>