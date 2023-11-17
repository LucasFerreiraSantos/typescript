import { Team, Students, Skill } from "./class";

const skills = new Skill("1", "Lucas", 25, "12", "Proativo", true);
const skills1 = new Skill("2", "Gabriel", 18, "10", "Comunicativo", true);
const skills2 = new Skill("3", "Matheus", 25, "18", "Reservado", true);
const students = new Students("1", "Lucas", 25);
const students1 = new Students("2", "Gabriel", 18);
const students2 = new Students("3", "Matheus", 25);
const team = new Team("1", 16, "Starter");

skills.showSkills();
students.addSkills(skills1);
students.showStudents();
students.listSkills();
team.listStudents();
team.addStudents(students2);
team.listStudents();
team.addStudents(students1);
team.listStudents();
team.addStudents(students);
team.listStudents();
