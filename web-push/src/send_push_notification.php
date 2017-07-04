<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';
use Minishlink\WebPush\WebPush;

// here I'll get the subscription endpoint in the POST parameters
// but in reality, you'll get this information in your database
// because you already stored it (cf. push_subscription.php)
$subscription = array(
	"endpoint"=>"https://fcm.googleapis.com/fcm/send/c4pNsyIEb6E:APA91bEy6s5zSeY4cLzM-0aqg6_v1AnVeV7TXO579zRxClow1r1KH7llG7tbscuEQYJFZsd8j6h7UH5gzapIa4l9B5ZMO-Gt73SDjp4_6lVskuv_eHv-qTNH82-uSP9jbieLiJsgSfpX",
    "msg"=>"Hello!",
    "key"=>"BPjd3E4JkMQxt7nMmUa1LOHCNkDW7ME4dCHwSJbvhMi9XGu7guqxOR7gdMaQH3NDPR98byLUAa8CB9t7Q46HQEM=",
    "token"=>"hoNir6AQoo4_jGtzbmOjwA=="
);

$subscription['msg'] = 'Ada diskonloh hayu buruan beli kurma oke...';

$auth = array(
    'VAPID' => array(
        'subject' => 'https://github.com/Minishlink/web-push-php-example/',
        'publicKey' => 'BDYmWnemb0QcQKXCPJvZmnfkCHKYyJvPSbTm1mmTR6lwOk-92uTswvEzSKsr0Rvnn35Tpyz1eExFe_285mheu5Y',
        'privateKey' => 'nLO6S4aXOAauBSDBMm2DiZhFmpMsx7CTqpYx3_fTs2w', // in the real world, this would be in a secret file
    ),
);

$webPush = new WebPush($auth);
$res = $webPush->sendNotification(
    $subscription['endpoint'],
    $subscription['msg'],
    $subscription['key'],
    $subscription['token'],
    true
);

echo $res? 1 : 2;
// handle eventual errors here, and remove the subscription from your server if it is expired
