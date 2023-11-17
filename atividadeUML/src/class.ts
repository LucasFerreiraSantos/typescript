class Team {
  constructor(
    private id: string,
    private edit: number,
    private program: string,
    private students: Students[] = []
  ) {}

  addStudents(student: Students): void {
    this.students.push(student);
  }

  listStudents(): void {
    console.log(
      `A turma da edição ${this.edit} com o id ${this.id} do programa ${this.program}`
    );
    this.students.forEach((student) => {
      student.showStudents();
    });
  }
}

class Students {
  constructor(
    public id: string,
    public name: string,
    public age: number,
    public skills: Skill[] = []
  ) {}

  showStudents(): void {
    console.log({
      id: this.id,
      name: this.name,
      age: this.age,
      skills: this.skills,
    });
  }

  addSkills(skills: Skill): void {
    this.skills.push(skills);
    console.log(`Adicionada a skill`);
  }

  listSkills() {
    console.log(`O aluno ${this.name}.`);
    this.skills.forEach((skill) => {
      skill.showSkills();
    });
  }
}

class Skill extends Students {
  constructor(
    id: string,
    name: string,
    age: number,
    public idSkill: string,
    public description: string,
    public ative: boolean
  ) {
    super(id, name, age);
  }

  showSkills(): void {
    console.log(
      `O aluno ${this.name}, ID ${this.id}, idade ${this.age}, SKILL ${this.idSkill}, ${this.description}, ativar SKILL? ${this.ative}.`
    );
  }
}

export { Team, Students, Skill };
