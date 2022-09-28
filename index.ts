const port = process.env.PORT || 3000;
import db from "./models";
import app from "./app";
import { users } from "./seeders/users";
import { projects } from "./seeders/projects";

const createProjects = () => {
  projects.map((project) => {
    db.Project.create(project);
  });
};
createProjects();

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
