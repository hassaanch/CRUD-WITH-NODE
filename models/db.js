const mongoose = require('mongoose');

mongoose.connect(`mongodb://{process.env.SERVER}:{process.env.PORT}/{process.env.DB}`, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
