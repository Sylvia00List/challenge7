
const roleMiddleware = {
    access: (req, res, next) => {
        if (req.issuperuser) {
            next();
        } else {
          return res.json ({
            message: "unauthorized",
          });
        }
    },
};

module.exports = roleMiddleware;

