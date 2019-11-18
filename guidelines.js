

{
    FULL_NAME: 'Sagar Shah',
    EMAIL: 'sagar.shah@green-apex.com'
}



// assume below points
// 1. data object is available with predefined key value pairs
// 2. email template html file is available inside some node directory


function() {
    // pass data object
    // read html file using node.js file reader
    // replace key names ({FULL_NAME}) with with dynamic values ('Sagar Shah') 
    // once replacement is done, send email to user (use same email which is mentioned in data object)
}