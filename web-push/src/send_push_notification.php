<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';
use Minishlink\WebPush\WebPush;

// here I'll get the subscription endpoint in the POST parameters
// but in reality, you'll get this information in your database
// because you already stored it (cf. push_subscription.php)
$subscription = array(
	"endpoint"=>"https://fcm.googleapis.com/fcm/send/dD3ii6za3mM:APA91bGh0eQXZ87suPSSQ8cuLtocqLB7SJuAsIkt34ZYxGFZa0yQjHUUSVAeSp3orQn-B3AK9SEHKUsRewIL2942_ocnQLLEe189ke-GHzeV4WvYVwVKwC4ZxI8vMtBaLT5IIrcDF-yE",
    "msg"=>"Hello!",
    "key"=>"BLtMiJ0Ov7jXTHoCg2t1XG-xVRTAfSuloyidH9jhm7iVa4-oOogD8-YHo9baL0Wsg8kuTGuCeY6VBb7x8Tv4I_Y=",
    "token"=>"vaEX5T-glWXd9fqYo58FjA=="
);

$subscription['msg'] = 'bismillah...';

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
