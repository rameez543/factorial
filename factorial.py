n=int(input("enter a number"))
fact=1
for i in range(1,n+1):
      fact=fact*i
print(fact)


#using while loop
n=int(input("enter the number : "))
f=1
if (n==0):
    print("1")
else:
    for i in range(1,n+1):
        f=f*i
        print("The factorial of ",i,"is",f)

