## vjezba 2

```sql
---- student tablica
create table pr1_student (
    id_studenta NUMBER PRIMARY KEY,
    ime_studenta VARCHAR(255),
    id_smjera NUMBER,
    CONSTRAINT fk_student_smjer FOREIGN KEY (id_smjera) REFERENCES pr1_smjer(id_smjera)
);

INSERT INTO pr1_student (id_studenta, ime_studenta, id_smjera) VALUES (1, 'Vladimir', 6); 
INSERT INTO pr1_student (id_studenta, ime_studenta, id_smjera) VALUES (2, 'Slavica', 1); 
INSERT INTO pr1_student (id_studenta, ime_studenta, id_smjera) VALUES (3, 'matko', 2); 
INSERT INTO pr1_student (id_studenta, ime_studenta, id_smjera) VALUES (4, 'Slavko', 3); 
INSERT INTO pr1_student (id_studenta, ime_studenta, id_smjera) VALUES (5, 'Dorde', 4); 
```

```sql
create table pr1_profesor (
    id_profesora NUMBER PRIMARY KEY,
    ime_profesora VARCHAR(255),
    id_odjela NUMBER,
    CONSTRAINT fk_profesor_odjel FOREIGN KEY (id_odjela) REFERENCES pr1_odjel(id_odjela)
);

create table pr1_ispit (
    id_ispita NUMBER PRIMARY KEY,
    datum_ispita DATE,
    id_predmeta NUMBER,
    id_profesora NUMBER,
    CONSTRAINT fk_ispit_predmet FOREIGN KEY (id_predmeta) REFERENCES pr1_predmet(id_predmeta),
    CONSTRAINT fk_ispit_profesora FOREIGN KEY (id_profesora) REFERENCES pr1_profesor(id_profesora)
);

-- DROP TABLE pr1_ispit;

CREATE TABLE pr1_ispit_prijava (
    id_prijava_ispita NUMBER PRIMARY KEY,
    id_ispita NUMBER,
    id_studenta NUMBER,
    ocijena NUMBER NOT NULL  CHECK (ocijena BETWEEN 1 AND 5), 
    CONSTRAINT fk_prijava_ispit FOREIGN KEY (id_ispita) REFERENCES pr1_ispit(id_ispita),
    CONSTRAINT fk_prijava_student FOREIGN KEY (id_studenta) REFERENCES pr1_student(id_studenta)
);
```

## vjezba 3

