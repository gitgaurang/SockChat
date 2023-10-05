const mongoose = require('mongoose');

const url = `mongodb+srv://gaurangraorane:PRlU74SQZAYRzV1W@cluster0.gj4zamr.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))