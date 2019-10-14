    #include<iostream>
    
    using namespace std;
    int factorial(int n);
    
    int main()
    {
        int num = 10;
        cout << "Factorial of " << num << " = " << factorial(num);
        return 0;
    }
    int factorial(int number)
    {
        if(n > 1)
            return number * factorial(number - 1);
        else
            return 1;
    }
