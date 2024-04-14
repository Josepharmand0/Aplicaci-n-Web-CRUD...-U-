var students = [];

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var numeroDocumento = document.getElementById('numeroDocumento').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var nivelEstudios = document.getElementById('nivelEstudios').value;
    var areaEstudio = document.getElementById('areaEstudio').value;
    var grado = document.getElementById('grado').value;
    var eps = document.getElementById('eps').value;
    var salario = document.getElementById('salario').value;
    
    var student = {
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        nivelEstudios: nivelEstudios,
        areaEstudio: areaEstudio,
        grado: grado,
        eps: eps,
        salario: salario
    };
    
    students.push(student);
    
    displayStudents();
    
    document.getElementById('studentForm').reset();
});

function displayStudents() {
    var studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    
    students.forEach(function(student, index) {
        var studentElement = document.createElement('div');
        studentElement.classList.add('student');
        studentElement.innerHTML = '<p><strong>Tipo Documento:</strong> ' + student.tipoDocumento + '</p>' +
                                    '<p><strong>Número Documento:</strong> ' + student.numeroDocumento + '</p>' +
                                    '<p><strong>Nombre:</strong> ' + student.nombre + '</p>' +
                                    '<p><strong>Apellido:</strong> ' + student.apellido + '</p>' +
                                    '<p><strong>Fecha de Nacimiento:</strong> ' + student.fechaNacimiento + '</p>' +
                                    '<p><strong>Nivel de Estudios:</strong> ' + student.nivelEstudios + '</p>' +
                                    '<p><strong>Área de Estudio:</strong> ' + student.areaEstudio + '</p>' +
                                    '<p><strong>Grado:</strong> ' + student.grado + '</p>' +
                                    '<p><strong>EPS:</strong> ' + student.eps + '</p>' +
                                    '<p><strong>Salario:</strong> ' + student.salario + '</p>' +
                                    '<button class="editBtn" onclick="editStudent(' + index + ')">Editar</button>' +
                                    '<button class="deleteBtn" onclick="deleteStudent(' + index + ')">Eliminar</button>';
        studentList.appendChild(studentElement);
    });
}

function editStudent(index) {
    var student = students[index];
    var studentElement = document.getElementsByClassName('student')[index];
    
    var editForm = createEditForm(student, studentElement);
    
    studentElement.parentNode.replaceChild(editForm, studentElement);
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function createEditForm(student, studentElement) {
    var editForm = document.createElement('form');
    editForm.classList.add('editForm');
    editForm.innerHTML = '<label for="editTipoDocumento">Tipo Documento:</label>' +
                         '<select id="editTipoDocumento" required>' +
                         '<option value="CC">CC</option>' +
                         '<option value="CE">CE</option>' +
                         '<option value="TI">TI</option>' +
                         '<option value="NIUP">NIUP</option>' +
                         '</select>' +
                         '<label for="editNumeroDocumento">Número Documento:</label>' +
                         '<input type="text" id="editNumeroDocumento" required>' +
                         '<label for="editNombre">Nombre:</label>' +
                         '<input type="text" id="editNombre" required>' +
                         '<label for="editApellido">Apellido:</label>' +
                         '<input type="text" id="editApellido" required>' +
                         '<label for="editFechaNacimiento">Fecha de Nacimiento:</label>' +
                         '<input type="date" id="editFechaNacimiento" required>' +
                         '<label for="editNivelEstudios">Nivel de Estudios:</label>' +
                         '<select id="editNivelEstudios" required>' +
                         '<option value="Pregrado">Pregrado</option>' +
                         '<option value="Maestría">Maestría</option>' +
                         '<option value="Doctorado">Doctorado</option>' +
                         '</select>' +
                         '<label for="editAreaEstudio">Área de Estudio:</label>' +
                         '<select id="editAreaEstudio" required>' +
                         '<option value="Matemáticas">Matemáticas</option>' +
                         '<option value="Ciencias">Ciencias</option>' +
                         '<option value="Sistemas">Sistemas</option>' +
                         '</select>' +
                         '<label for="editGrado">Grado:</label>' +
                         '<select id="editGrado" required>' +
                         '<option value="Primer Semestre">Primer Semestre</option>' +
                         '<option value="Segundo Semestre">Segundo Semestre</option>' +
                         '<option value="Tercer Semestre">Tercer Semestre</option>' +
                         '<option value="Cuarto Semestre">Cuarto Semestre</option>' +
                         '</select>' +
                         '<label for="editEps">EPS:</label>' +
                         '<input type="text" id="editEps" required>' +
                         '<label for="editSalario">Salario:</label>' +
                         '<input type="text" id="editSalario" required>' +
                         '<button type="button" id="saveBtn">Guardar</button>' +
                         '<button type="button" id="cancelBtn">Cancelar</button>';

    editForm.querySelector('#editTipoDocumento').value = student.tipoDocumento;
    editForm.querySelector('#editNumeroDocumento').value = student.numeroDocumento;
    editForm.querySelector('#editNombre').value = student.nombre;
    editForm.querySelector('#editApellido').value = student.apellido;
    editForm.querySelector('#editFechaNacimiento').value = student.fechaNacimiento;
    editForm.querySelector('#editNivelEstudios').value = student.nivelEstudios;
    editForm.querySelector('#editAreaEstudio').value = student.areaEstudio;
    editForm.querySelector('#editGrado').value = student.grado;
    editForm.querySelector('#editEps').value = student.eps;
    editForm.querySelector('#editSalario').value = student.salario;

    editForm.querySelector('#saveBtn').addEventListener('click', function() {
        student.tipoDocumento = editForm.querySelector('#editTipoDocumento').value;
        student.numeroDocumento = editForm.querySelector('#editNumeroDocumento').value;
        student.nombre = editForm.querySelector('#editNombre').value;
        student.apellido = editForm.querySelector('#editApellido').value;
        student.fechaNacimiento = editForm.querySelector('#editFechaNacimiento').value;
        student.nivelEstudios = editForm.querySelector('#editNivelEstudios').value;
        student.areaEstudio = editForm.querySelector('#editAreaEstudio').value;
        student.grado = editForm.querySelector('#editGrado').value;
        student.eps = editForm.querySelector('#editEps').value;
        student.salario = editForm.querySelector('#editSalario').value;

        displayStudents();
        editForm.parentNode.replaceChild(studentElement, editForm);
    });

    editForm.querySelector('#cancelBtn').addEventListener('click', function() {
        editForm.parentNode.replaceChild(studentElement, editForm);
    });

    return editForm;
}
