<?php

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
$ip = $_SERVER['REMOTE_ADDR'];
$key = 'ip_log';
if (!$redis->get($key)) {
	$redis->set($key, $ip);
    $redis->expire($key, 3600);
}

$ip_log = $redis->get($key);

echo $ip_log;
?>