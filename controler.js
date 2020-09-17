
const catchAsync = require("./ErrorController/AsyncError");
const AppError = require("./ErrorController/appError");
// Hello world message
exports.getfirstMessage = catchAsync(async (req, res, next) => {
  
  res.status(200).json({
    
    message:"Hello world!"
  });
});

// Additions
exports.addition = catchAsync(async (req, res) => {
  let {num1,num2}=req.body;
  if( typeof num1=="string" || typeof num2=="string" ){
    res.status(400).json({
        status: "failure",
        message: "invalid data types",
    
      });
    }
    else if( num1>1000000 || num2>1000000){
        res.status(400).json({
            status: "failure",
            message: "Overflow",
        
          });
        }
  const sum=num1+num2; 
  res.status(200).json({
    status: "success",
    message: "the sum of given two number",
    sum
  });
});
// Subtract
exports.sub = catchAsync(async (req, res) => {
    console.log("hello from devision")
    let {num1,num2}=req.body;
    if( typeof num1=="string" || typeof num2=="string" ){
      res.status(400).json({
          status: "failure",
          message: "invalid data types",
      
        });
      }
      else if( num1>1000000 || num2>1000000){
          res.status(400).json({
              status: "failure",
              message: "Overflow",
          
            });
          }
    const sum=num1-num2; 
    res.status(200).json({
      status: "success",
      message: "the sum of given two number",
      sum
    });
  });

  // multiply
exports.multiply = catchAsync(async (req, res) => {
    let {num1,num2}=req.body;
    if( typeof num1=="string" || typeof num2=="string" ){
      res.status(400).json({
          status: "failure",
          message: "invalid data types",
      
        });
      }
      else if( num1>1000000 || num2>1000000){
          res.status(400).json({
              status: "failure",
              message: "Overflow",
          
            });
          }
    const sum=num1*num2; 
    res.status(200).json({
      status: "success",
      message: "the sum of given two number",
      sum
    });
  })
  // division
exports.division = catchAsync(async (req, res) => {
    let {num1,num2}=req.body;
    if( typeof num1=="string" || typeof num2=="string" ){
      res.status(400).json({
          status: "failure",
          message: "invalid data types",
      
        });
      }
      else if( num1>1000000 || num2>1000000){
          res.status(400).json({
              status: "failure",
              message: "Overflow",
          
            });
          }
    const sum=num1/num2; 
    res.status(200).json({
      status: "success",
      message: "the sum of given two number",
      sum
    });
  })

