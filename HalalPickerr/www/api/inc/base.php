<?php


if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) || !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && 
    (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'be.stevenop'  &&
     strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'io.framework7.myapp')) { 
} 

if (!defined('INDEX')) {
   die('Error : ID-10T');
}

$api_response_code = array(0 => array('HTTP Response' => 400, 'Message' => 'Unknown Error'), 1 => array('HTTP Response' => 200, 'Message' => 'Success'), 2 => array('HTTP Response' => 403, 'Message' => 'HTTPS Required'), 3 => array('HTTP Response' => 401, 'Message' => 'Authentication Required'), 4 => array('HTTP Response' => 401, 'Message' => 'Authentication Failed'), 5 => array('HTTP Response' => 404, 'Message' => 'Invalid Request'), 6 => array('HTTP Response' => 400, 'Message' => 'Invalid Response Format'), 7 => array('HTTP Response' => 400, 'Message' => 'DB problems'), 8 => array('HTTP Response' => 400, 'Message' => 'Empty Resultset'));

$response['code'] = 0;
$response['status'] = 404;
$response['data'] = NULL;

if (!$conn) {
    $response['code'] = 7;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = mysqli_connect_error();
    deliver_response($response);
}

if ($_SERVER['HTTPS'] != 'on') {
    $response['code'] = 2;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = $api_response_code[$response['code']]['Message'];
    deliver_response($response);
}

$body = file_get_contents('php://input');
$postvars = json_decode($body, true);

$response['code'] = 1;
$response['status'] = $api_response_code[$response['code']]['HTTP Response'];

function deliver_response(&$api_response) {
    $http_response_code = array(200 => 'OK', 400 => 'Bad Request', 401 => 'Unauthorized', 403 => 'Forbidden', 404 => 'Not Found');
    header('HTTP/1.1 ' . $api_response['status'] . ' ' . $http_response_code[$api_response['status']]);
    header('Content-Type: application/json; charset=utf-8');
    $json_response = json_encode($api_response, JSON_UNESCAPED_UNICODE);
    echo $json_response;
    exit;
}
function deliver_JSONresponse(&$api_response) {
    $http_response_code = array(200 => 'OK', 400 => 'Bad Request', 401 => 'Unauthorized', 403 => 'Forbidden', 404 => 'Not Found');
    header('HTTP/1.1 ' . $api_response['status'] . ' ' . $http_response_code[$api_response['status']]);
    header('Content-Type: application/json; charset=utf-8');
    $json_response =  '{"data":'.$api_response['data'].'}';
    echo $json_response;
    exit;
}

function getJsonObjFromResult(&$result){
    $fixed = array();
    $typeArray = array(
                    MYSQLI_TYPE_TINY, MYSQLI_TYPE_SHORT, MYSQLI_TYPE_INT24,    
                    MYSQLI_TYPE_LONG, MYSQLI_TYPE_LONGLONG,
                    MYSQLI_TYPE_DECIMAL, 
                    MYSQLI_TYPE_FLOAT, MYSQLI_TYPE_DOUBLE );
    $fieldList = array();
    while($info = $result->fetch_field()){
        $fieldList[] = $info;
    }
    while ($row = $result -> fetch_assoc()) {
        $fixedRow = array();
        $teller = 0;
        foreach ($row as $key => $value) {
            if (in_array($fieldList[$teller] -> type, $typeArray )) {
                $fixedRow[$key] = 0 + $value;
            } else {
                $fixedRow[$key] = $value;
            }
            $teller++;
        }
        $fixed[] = $fixedRow;
    }
    return json_encode($fixed, JSON_UNESCAPED_UNICODE);
}
?>