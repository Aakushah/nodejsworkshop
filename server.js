var a=5;
var b=6;
var c=a+b;
console.log(`${a} and ${b} addition is ${c}`)
console.log(`${a} and ${b} addition is ${c} sum is ${a+b}`);
var msg="value of c is :"+c;
if(c==11){
    msg+="<br/> sum is 11"
}
else{
    msg+=" <br/> sum is not matched"
}   
var http=require('http');
http.createServer(function(req,res){
    // res.writeHead(200,{'content-Type':'text/html'});
    res.end(msg);
}).listen(3000);
console.log("server is listening on http://127.0.0.1:3000");