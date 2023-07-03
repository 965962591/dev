var obj = JSON.parse($request.body);
obj.data.model = "gpt4";
$done({body:JSON.stringify(obj)})
