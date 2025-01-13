import Link from "next/link";


export default function StudentList(){

   let studentNames=["Arsh","Rohit","asim","samir","pratiksha","rafik","sam"
   ];
    

    return (
        <div>
        <center>
        <h2>Student List</h2>
        <ul>
          {studentNames.map((name) => (
            <li key={name}>
              <Link href={`/${name}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </center>
        </div>
    )
}