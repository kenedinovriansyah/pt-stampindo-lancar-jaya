<?php

use \Moment\Moment;



$result = file_get_contents('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fd500b81fcd74cb5b304b00539a8a6f0', false, stream_context_create(['http' => ['method' => "POST", 'content' => []]]));


$custom = json_decode($result, true)['list'];
$arrays = array();
$custom_array = array();

foreach($custom as $var) {
    if(!intval(explode(' ',explode("-", $var['dt_txt'])[2])[0] % 2)) {
        $d = new DateTime($var['dt_txt']);
        $var['dt_txt'] = $d->format("d, D M Y") . ' : ' . $var['wind']['speed'] . 'ªC';
        array_push($arrays, $var);
        array_push($custom_array,$var['dt_txt']);
    }
}

var_dump($arrays);
var_dump($custom_array);