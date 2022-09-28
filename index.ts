const port = process.env.PORT || 3000;
import db from "./models";
import app from "./app";

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
