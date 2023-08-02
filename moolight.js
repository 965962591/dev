var body = $request.body;
var obj = JSON.parse(body);
obj.data.model = 'gpt-4',
obj.data.messages[0].content=JSON.stringify(obj.data.messages[0].content).replace(/\d{3}/, '1500')
body = JSON.stringify(obj);
$done({body});
