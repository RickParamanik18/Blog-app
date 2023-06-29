const paramsChecker = (...checkParams) => {
    return (req, res, next) => {
        params = {
            ...req.body,
            ...req.query,
            ...req.headers,
        };
        paramsNames = Object.keys(params);

        isPresent = checkParams.reduce((accumulator, currentVal) => {
            return accumulator && paramsNames.includes(currentVal);
        }, true);

        isPresent
            ? next()
            : res.send({
                  status: 0,
                  msg: "missing parameters",
              });
    };
};

module.exports = paramsChecker;
