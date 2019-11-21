CREATE database Notas;
USE Notas;

CREATE TABLE Usuario(
	idUsuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50)  NOT NULL,
	carnet VARCHAR(25) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    tipo VARCHAR(25) NOT NULL,
    PRIMARY KEY (idUsuario)
);

CREATE TABLE Curso(
	idCurso INT NOT NULL auto_increment,
    nombre varchar(100) NOT NULL,
	descripion text null,
    primary key (idCurso)
);

CREATE TABLE Seccion(
	idSeccion int not null auto_increment,
    nombre varchar(20) not null,
    idCurso int not null,
    horaInicio time not null,
    horaFin time not null,
    idUsuario int not null,
    semestre varchar(20) not null,
    anio varchar(20) not null,
    estado varchar(20) not null,
    observacion text null,
    primary key (idSeccion),
    foreign key (idUsuario) references Usuario(idUsuario),
    foreign key (idCurso) references Curso(idCurso)
);

CREATE TABLE Aisgnacion(
	idAsignacion int not null auto_increment,
    idSeccion int not null,
    idUsuario int not null,
    nota int null,
	primary key (idAsignacion),
    foreign key (idSeccion) references Seccion(idSeccion),
    foreign key (idUsuario) references Usuario(idUsuario)
);

CREATE TABLE Publicacion(
	idPublicacion int not null auto_increment,
    fecha timestamp default current_timestamp,
    fechaLimite date not null,
    titulo varchar(100) not null,
    contenido text not null,
    idUsuario int not null,
    idSeccion int not null,
    primary key (idPublicacion),
    foreign key (idUsuario) references Usuario(idUsuario),
    foreign key (idSeccion) references Seccion(idSeccion)  
);

CREATE TABLE RespuestaPublicacion(
	idRespuestaPublicacion int not null auto_increment,
    fecha timestamp default current_timestamp,
    contenido varchar(250) not null,
    idUsuario int not null,
    idPublicacion int not null,
    primary key (idRespuestaPublicacion),
    foreign key (idUsuario) references Usuario(idUsuario),
    foreign key (idPublicacion) references Publicacion(idPublicacion)
);

CREATE TABLE Mensaje(
	idMensaje int not null auto_increment,
    idUsuarioDestino int not null,
    idUsuarioRemitente int not null,
    asunto varchar(50) not null,
    cuerpo text not null,
    adjuntos text null,
    fecha timestamp default current_timestamp,
    primary key (idMensaje),
    foreign key (idUsuarioDestino) references Usuario(idUsuario),
    foreign key (idUsuarioRemitente) references Usuario(idUsuario)
);

CREATE TABLE Actividad(
	idActividad int not null auto_increment,
    idSeccion int not null,
    nombre varchar(50) not null,
    fecha timestamp default current_timestamp,
    ponderacion decimal(5,2) not null,
    primary key (idActividad),
    foreign key (idSeccion) references Seccion(idSeccion)
);


CREATE TABLE DetalleActividad(
	idDetalleActividad int not null auto_increment,
    fecha timestamp default current_timestamp,
    idActividad int not null,
    idUsuario int not null,
    nota decimal(5,2) null,
    respuesta text null,
    adjuntos text null,
    primary key (idDetalleActividad),
    foreign key (idActividad) references Actividad(idActividad),
    foreign key (idUsuario) references Usuario(idUsuario)
);

CREATE TABLE Asistencia(
	idAsistencia int not null auto_increment,
    idUsuario int not null,
    idSeccion int not null,
    fecha timestamp default current_timestamp,
    valor varchar(50) not null,
    primary key (idAsistencia),
    foreign key (idUsuario) references Usuario(idUsuario),
    foreign key (idSeccion) references Seccion(idSeccion)
);

CREATE TABLE Ticket(
	idTicket int not null auto_increment,
    idSeccion int not null,
    idUsuario int not null,
    asunto varchar(50) not null,
    contenido text not null,
    estado varchar(50) not null,
    primary key (idTicket),
    foreign key (idSeccion) references Seccion(idSeccion),
    foreign key (idUsuario) references Usuario(idUsuario)
);

CREATE TABLE Evaluacion(
	idEvaluacion int not null auto_increment,
    idActividad int not null,
    estado varchar(50) not null,
    fecha timestamp default current_timestamp,
    aleatorio bool not null,
    primary key (idEvaluacion),
    foreign key (idActividad) references Actividad(idActividad)
);


CREATE TABLE Inciso(
	idInciso int not null auto_increment,
    idEvaluacion int not null,
    descripacion text not null,
    punteo decimal(5,2)  not null,
    tipo varchar(50) not null,
    respuesta text not null,
    primary key (idInciso),
    foreign key (idEvaluacion) references Evaluacion(idEvaluacion)
);

CREATE TABLE DetalleInciso(
	idDetalleInciso int not null auto_increment,
    idInciso int not null,
    idUsuario int not null,
    respuesta text null,
    calificacion decimal(5,2) not null,
    primary key(idDetalleInciso),
    foreign key (idInciso) references Inciso(idInciso),
    foreign key (idUsuario) references Usuario(idUsuario)
);

CREATE TABLE Opcion(
	idOpcion int not null auto_increment,
	idInciso int not null,
    contenido text not null,
    primary key (idOpcion),
    foreign key (idInciso) references Inciso(idInciso)
);

INSERT INTO Usuario (nombre, carnet, correo, pass, tipo) VALUES ("admin", "200000000", "admin@admin.com", "admin", "Administrador")