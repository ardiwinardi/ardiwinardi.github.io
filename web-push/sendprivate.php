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

$msg = "Hari ini mau beli herbal insyaAllah, ada yang mau titip??";
//ardi
$string = '[{"keyword":"BP4JdBpVT91qPmsN0DaQVpkcAHbZMiBWsuejrWfKysXHbjRkjBtyAGnEOOCuIZ1RM1Ie3f0oCE6zHqc9_U6n0g8=","token":"War5S0MMQ6nt20rp0ElqRQ==","endpoint":"https:\/\/fcm.googleapis.com\/fcm\/send\/eJ_35coWQks:APA91bG7AKrrWMSaUc_A6AIF8GfIExv_FsqeCLLbNqUCteU7cc0co5anpv1WuMVoSBH_kktLlu_QRs1CeuYelNvNrQZKuNTSLinWWr4Ezb56xCSJMSBaodE_tePdnGVlouP3JZTTPBpK","created":"2017-07-05 08:47:28"}]';

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
