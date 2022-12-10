<?php
function numberToRoman(int $input) {
    static $lookup = [
        1000 => 'M',
        900 => 'CM',
        500 => 'D',
        400 => 'CD',
        100 => 'C',
        90 => 'XC',
        50 => 'L',
        40 => 'XL',
        10 => 'X',
        9 => 'IX',
        5 => 'V',
        4 => 'IV',
        1 => 'I'
    ];
    $romanString = '';
    foreach ($lookup as $int => $roman) {
        while ($input >= $int) { 
            $input -= $int; //kurangi input dengan nilai int angka romawi
            $romanString .= $roman; //add string
            if (!$input) {
                break 2;
            }
        }
    }
    return $romanString;
}

echo(numberToRoman(900));

?>