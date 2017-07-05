<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
require __DIR__ . '/vendor/autoload.php';
use Minishlink\WebPush\WebPush;

$webPush = new WebPush(array(
    'VAPID' => array(
        'subject' => 'https://github.com/Minishlink/web-push-php-example/',
        'publicKey' => 'BDYmWnemb0QcQKXCPJvZmnfkCHKYyJvPSbTm1mmTR6lwOk-92uTswvEzSKsr0Rvnn35Tpyz1eExFe_285mheu5Y',
        'privateKey' => 'nLO6S4aXOAauBSDBMm2DiZhFmpMsx7CTqpYx3_fTs2w',
    ),
));

$msg = '{
	"msg": "mau titip??",
	"title": "Beli Herbal",
	"icon": "images/allah.gif",
	"badge": "images/allah.gif",
	"action_title" : "Dapatkan diskon segera!!!",
	"tag" : "https://ardiwinardi.github.io/",
	"image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0uE7yOsyx1gnBOVrYpiqzJQIKfxNaxUheOsEFLiF9sjwRT6N"
}';

$string = file_get_contents("https://ardiwinardi.000webhostapp.com/get");
$json = json_decode($string,true);
$sent = 0;
foreach($json as $subscription){
	
	$res = $webPush->sendNotification(
		$subscription['endpoint'],
		$msg,
		$subscription['keyword'],
		$subscription['token'],
		true
	);
	
	$sent += $res? 1 : 0;
}
echo 'sent : '.$sent.' subscriptions';
?>
