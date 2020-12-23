/**
 * checks whether there is error or not
 * @param {(object)} res - Response Obect
 * @param {(boolean)} variable - Control variable
 * @param {(string | string[] )} message - Error message
 * @param {(number)} code - Status Code. Default value:400
 * @returns {(json)} Error
 */
 

const { Certificate } = require("crypto");

const checkError = (res, variable, code, message) => {
    if(variable) {
        if (typeof message === String) {
            return res.status(code).json({errors: [{message}] })
        }
        else {
            return res.status(code).json({ errors: message });
        } 
    }
}

module.exports = checkError;