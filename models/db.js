const mongoose = require('mongoose');

mongoose.connect(`mongodb://{process.env.server}:{process.env.PORT}`/EmployeeDB`, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
