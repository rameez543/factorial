function factorial(number)
    if number == 1 then
        return 1
    else
        return number * factorial(number-1)
    end
end

print(factorial(10))