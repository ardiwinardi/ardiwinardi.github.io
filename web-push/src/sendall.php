<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';
use Minishlink\WebPush\WebPush;


$msg = 'jadwal adzan magrib hari ini (Maghrib 17:48)';

$auth = array(
    'VAPID' => array(
        'subject' => 'https://github.com/Minishlink/web-push-php-example/',
        'publicKey' => 'BDYmWnemb0QcQKXCPJvZmnfkCHKYyJvPSbTm1mmTR6lwOk-92uTswvEzSKsr0Rvnn35Tpyz1eExFe_285mheu5Y',
        'privateKey' => 'nLO6S4aXOAauBSDBMm2DiZhFmpMsx7CTqpYx3_fTs2w', // in the real world, this would be in a secret file
    ),
);

$string = file_get_contents("https://ardiwinardi.000webhostapp.com/get");
$json = json_decode($string,true);

foreach($json as $row){
	
	$subscription = array(
		"endpoint"=> $row['endpoint'],
		"msg"=>$msg,
		"key"=> $row['keyword'],
		"token"=> $row['token']
	);

	$webPush = new WebPush($auth);
	$res = $webPush->sendNotification(
		$subscription['endpoint'],
		$subscription['msg'],
		$subscription['key'],
		$subscription['token'],
		true
	);
	
	echo $res? 'success' : 'error';
	echo '<br/>';
}
?>
