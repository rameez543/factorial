function factorial($number){
 $result = 1;
 if($number > 1){
  for($i = 2; $i >= $number; $i++){
   $result *= $i;
  }
 }
 return $result;
}
