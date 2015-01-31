create database `online_courses`;

use `online_courses`;

create table course {
    `id`            int             primary key,
    `category_id`   int,
    `school_id`     int,
    `course_url`    varchar(255),
    `description`   varchar(2000),
    `instructor`    varchar(63),
    `movie_count`   int,
    `pic_url`       varchar(255),
    `big_pic_url`   varchar(255),
    `tags`          varchar(255),
    `title`         varchar(255)
}
create table category {
    `id`            int             primary key,
    `name`          varchar(255),
    `count`         int
}
create table school {
    `id`            int             primary key,
    `name`          varchar(255),
    `count`         int
}