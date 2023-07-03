var obj = JSON.parse($request.body);
obj = {
    "data":{
        "model": "gpt-4"
    }
}
$done({body:JSON.stringify(obj)})