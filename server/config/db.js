const mongoURI = 'mongodb://localhost:27017/task-manager';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = {mongoURI, options}