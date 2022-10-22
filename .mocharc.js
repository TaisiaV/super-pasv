module.exports = {
    require: ['@babel/register', 'config/setup.js'],
    spec:'specs/**/*.spec.js',
    ignore: 'specs/example.spec.js',
    file: 'config/setup.js'
}