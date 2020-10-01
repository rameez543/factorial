#include <iostream>

using namespace std;

int main() {
    int i, f=1, num;
    
    cout << "Insert number you want to factorialize: ";
    
    cin >> num;
    
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    
    cout << "Factorial of " << num << " is " << f << endl;
    
    return 0;
}
