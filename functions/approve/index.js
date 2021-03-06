const crypto = require("crypto");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

/**
 * Sample Lambda function which mocks the operation of selling a random number of shares for a stock.
 * For demonstration purposes, this Lambda function does not actually perform any  actual transactions. It simply returns a mocked result.
 * 
 * @param {Object} event - Input event to the Lambda function
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - Object containing details of the stock selling transaction
 * 
 */
exports.handler = async (event, context) => {
    // Get the price of the stock provided as input
    const validation = event["validation"]
    var date = new Date();
    // Mocked result of a stock selling transaction
    let transaction_result = {
        'id': crypto.randomBytes(16).toString("hex"), // Unique ID for the transaction
        'score': validation?.toString() ?? "0",
        'type': "Approve", // (Failure|Approve)
        'timestamp': date.toISOString(),  // Timestamp of the when the transaction was completed
    }
    return transaction_result
};
