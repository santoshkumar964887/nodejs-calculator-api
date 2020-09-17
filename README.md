# nodejs-calculator-api
 Calculator API Contract application which performs the following operations:

Addition
Subtraction
Multiplication
Division

The input may contain positive, negative, and floating-point numbers. And you have to perform all operations on these types of inputs

But before you start implementing the above operations, you need to check that you have started in a fine way. For that, you need to perform GET requests which lets you land on the home page successfully with below message
"Hello world!".

After that, you need to implement the following POST requests:

1. /add:
Body parameters: when 2 parameters are integers(positive, negative or floating numbers)

num1
num2


Response

{
status: “success/failure/error”,
message: “the sum of given two number”,
sum:
}

If the body parameters contain Strings then you need to give a message: "invalid data types"
If the body parameters contain values above 10M(10 lakhs) then you need to give the message: "Overflow"

2. /sub

Body parameters: when 2 parameters are integers(positive, negative or floating numbers)

num1
num2


Response

{
status: “success/failure/error”,
message: “the difference of given two number”,
sum:
}

If the body parameters contain Strings then you need to give a message: "invalid data types"
If the body parameters contain one of the value is less than 10M(10 lakhs) then you need to give the message: "Underflow"

3. /multiply

Body parameters

num1
num2


Response

{
status: “success/failure/error”,
message: “The product of given numbers”
sum:
}

If the body parameters contain Strings then you need to give a message: "invalid data types"
If the body parameters contain values above 10M(10 lakhs) then you need to give the message: "Overflow"

4. /division

Body parameters

num1
num2


Response

{
status: “success/failure/error”,
message: “The division of given numbers”
sum:
}

If the body parameters contain num2 as 0 then you need to give the message: "Cannot divide by zero"
