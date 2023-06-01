CREATE SCHEMA edumation;

create table edumation.assignments
(
    assignment_id   integer,
    assignment_name text,
    course_id       integer,
    course_name     text,
    semester        text,
    assignment_type text,
    grading_weight  double precision,
    due_date        date,
    status          text
);

alter table edumation.assignments
    owner to postgres;

COPY edumation.assignments
FROM '/docker-entrypoint-initdb.d/assignments.csv'
WITH CSV HEADER;

create table edumation.courses
(
    course_id          integer,
    course_name        text,
    rating             double precision,
    difficulty         text,
    tags               text,
    professor_id       integer,
    professor_name     text,
    number_of_students integer
);

alter table edumation.courses
    owner to postgres;

COPY edumation.courses
FROM '/docker-entrypoint-initdb.d/courses.csv'
WITH CSV HEADER;

create table edumation.student_courses
(
    student_course_id integer,
    student_id        integer,
    student_name      text,
    course_id         integer,
    course_name       text,
    semester          text,
    grade             integer,
    status            text
);

alter table edumation.student_courses
    owner to postgres;

COPY edumation.student_courses
FROM '/docker-entrypoint-initdb.d/student_courses.csv'
WITH CSV HEADER;

create table edumation.students
(
    student_id   integer,
    student_name text,
    email        text,
    country      text,
    country_code text,
    state        text,
    state_code   text
);

alter table edumation.students
    owner to postgres;

COPY edumation.students
FROM '/docker-entrypoint-initdb.d/students.csv'
WITH CSV HEADER;

create table edumation.submissions
(
    submission_id   integer,
    assignment_id   integer,
    assignment_name text,
    student_id      integer,
    student_name    text,
    status          text,
    submitted_date  date,
    grade           integer
);

alter table edumation.submissions
    owner to postgres;

COPY edumation.submissions
FROM '/docker-entrypoint-initdb.d/submissions.csv'
WITH CSV HEADER;