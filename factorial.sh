#!/bin/bash

echo "Enter a number"
read num
fact=1
n=$num
while [ $num -ge 1 ]
do

  fact=`echo $fact \* $num|bc`
  
  let num--

done
echo "factorial of $n is $fact"
