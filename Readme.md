# Repositorio para la práctica de "Cursos de Visual Thinking API" 💻
## LaunchX : Mision-Backend 🚀 

### Cursos de Visual Thinking API 🎨
El curso de Visual Thinking impartido por [Visual Partner-Ship](https://github.com/visualpartnership) necesita de un API para filtrar cierta información, esta práctica busca satisfacer los siguientes requerimientos

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

### Prueba este proyecto 💻
1) Clona este repositorio
```
git clone https://github.com/dev-LuisSM/WM4_visualthinking_api.git
```
2) Descarga las siguientes dependencias
- Jest - Para pruebas unitarias ```npm i --save-dev jest```

- ExpressJs - Para servidor y endpoints ```npm i express --save```

3) Correr el servidor para poder probar la aplicación
```
npm run server
```

4) Revisa los endpoints

Descripción | Endpoints |  Descripción 
------------- |:-------------:|:-------------:|
Todos los estudiantes | ```http://localhost:3000/``` | Obtiene todos los estudiantes inscritos en los cursos. |
Filtrar por certificado | ```/certification``` | Obtiene el email de todos los estudiantes que tengan un certificado realizado. |
Filtrar por crécitos | ```/certification/:creditos``` <br> Ej: ```/certification/500``` | Obtiene los nombres de los estudiantes que tengan cierta cantidad de créditos para arriba. |

5) Documentación en Postman y la colección
- Puedes consultar la colección [aquí](https://github.com/dev-LuisSM/WM4_visualthinking_api/blob/main/Visual%20Thinking%20API%20%F0%9F%8E%A8.postman_collection.json)

### ¿Para qué sirven los archivos en la carpeta lib? 📑
1) **Utils**
- El archivo Reader.js se encarga de leer la base de datos proporcionada en formato Json para el manejo dentro del proyecto y las pruebas.
````
const fs = require("fs");

class Reader {

    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }

}
module.exports = Reader;
````

2) **Service**
- El archivo StudentsService.js se encarga de crear las siguientes funciones con el parámetro de students.
  - getAllStudents : Obtiene todos los estudiantes de los cursos.
  - getEmailIfCertificated : Obtiene el email de todos los estudiantes con certificados.
  - getStudentsIfCredits500 : Obtiene el nombre de los estudiantes que tengan cierta cantidad de créditos. Es la única función que recibe el parametro "checkCredits" para establecer los créditos que se necesiten al momento.
```
class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmailIfCertificated(students) {
        const certificatedStudents = students.filter((student) => student.haveCertification === true);
        const getStudents = certificatedStudents.map((student) => student.email);
        return getStudents;
    }

    static getStudentsIfCredits500(students, checkCredit) {
        const credits = students.filter((student) => student.credits > checkCredit);
        const getStudents = credits.map((student) => student.name);
        return getStudents;
    }
}

module.exports = StudentService;
```
3) **Controller**
- El archivo StudentsController.js tiene como función traer las funciones de StudentsService.js para facilitar su lectura en el servidor, aquí se hace uso de los archivos anteriormente mencionados para evitar tener líneas de código extra en el servidor, por lo tanto ya no reciben el parámetro de student en la función, únicamente la función de "getStudentsIfCredits500" con el parámetro "credits".

```
const Reader = require("./../utils/Reader");
const StudentService = require("../services/StudentsService");
const studentsJson = "visualpartners.json";

const students = Reader.readJsonFile(studentsJson);


class StudentController {
    static getAllStudents(){
        const getThem = StudentService.getAllStudents(students);
        return getThem;
    }

    static getEmailIfCertificated(){
        const getStudetnsWithCertification = StudentService.getEmailIfCertificated(students);
        return getStudetnsWithCertification;
    }

    static getStudentsIfCredits500(credits){
        const getStudentsIf500Credits = StudentService.getStudentsIfCredits500(students, credits);
        return getStudentsIf500Credits;
    }
}


module.exports = StudentController;
```
4) **Server** 
- El archivo de server.js es el que hace uso de ExpressJs para crear un servidor y consultar las funciones creadas en StudentController, tiene 2 endpoints y el endpoint inicial. Todos los resultados los arroja en formato JSON. Se utiliza el puerto 3000.
  - localhost:3000/ : Obtiene a todos los estudiantes.
  - localhost:3000/certification : Obtiene el email de todos los estudiantes certificados.
  - localhost:3000/credits/:credits : Obtiene el nombre de todos los estudiantes con cierta cantidad de créditos.
 ```
 const StudentsController = require("./../lib/controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    const allStudents = StudentsController.getAllStudents();
    response.json({allStudents : allStudents});
});

app.get("/certification", (request, response) => {
    const getStudetnsWithCertification = StudentsController.getEmailIfCertificated();
    response.json({getStudetnsWithCertification});
});

app.get("/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const getStudentsIfCredits500 = StudentsController.getStudentsIfCredits500(credits);
    response.json({ getStudentsIfCredits500 });
});

app.listen(port, () => {
    console.log("Visual Thinking Api server running at http://localhost:3000/");
});
 ```

### Organización de los módulos 📦
En la siguiente imagen creada por [Visual Partner-Ship](https://github.com/visualpartnership) se explica de manera gráfica el flujo de los módulos creados.
![image](https://user-images.githubusercontent.com/72401861/166620464-378a9858-bea4-42a3-93fb-5fdf55ad9496.png)

### Dependencias 🎯
  - [ExpressJs](https://expressjs.com/es/) Para el servidor y endpoints
  - [Jest](https://jestjs.io/) Para realizar pruebas unitarias
  - [Linter](https://eslint.org/) Analiza y corrige problemas de sintaxis

Playbook: [Mis prácticas](https://github.com/dev-LuisSM/playbook)

<sub>  Tiempo utilizado en crear el proyecto: 1 hora con 15 min </sub>
