<?php

$arr = range(1,101);
$array = array();

foreach($arr  as $var) {
    $range_to_3 = $var / 3;
    $range_to_5 = $var / 5;
    var_dump($range_to_5);
    if(is_int($range_to_3)) {
        array_push($array,"boleh");
    } else if(is_int($range_to_5)) {
        array_push($array, "boleh");
    } else array_push($array, $var);
}


var_dump($array);