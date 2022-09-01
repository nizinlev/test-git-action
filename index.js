exports.handler = async (event) => {
    // TODO implement
    const max=20;
    const min=1;
    let randNumb=Math.floor(Math.random()*max)+min;
    const response = {
        statusCode: 200,
        body: JSON.stringify(`I refresh my site ${randNumb} times`),
    };
    return response;
};
