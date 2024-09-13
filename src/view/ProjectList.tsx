import React from "react";
import { Project } from "../models/Project";

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onSelectActive: (id: string) => void;
  onDelete: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onEdit,
  onSelectActive,
  onDelete,
}) => {
  return (
    <div>
      <h2>Your projects: </h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => onEdit(project)}>Edit</button>
            <button onClick={() => onDelete(project.id!)}>Remove</button>
            <button onClick={() => onSelectActive(project.id!)}>Start</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
