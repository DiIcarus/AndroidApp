create database TodoList
go
use TodoList
go

create table USERS(
ID int primary key IDENTITY(1,1),
SIGN_IN_NAME varchar(50) not null,
PASSWORDS varchar(50) not null,
GMAIL varchar(50) not null,
)

create table GROUPS(
ID int primary key IDENTITY(1,1),
GROUP_NAME nvarchar(50) default N'',
NUMBER_NOTE int default 0,
)

create table SMART_LIST(
ID int primary key IDENTITY(1,1),
LIST_NAME nvarchar(50) default N'',
LIST_STATUS int default 1,
)

create table LIST(
ID int primary key IDENTITY(1,1),
LIST_NAME nvarchar(50) default N'',
LIST_STATUS int default 1,
ID_GROUP int not null foreign key REFERENCES GROUPS(ID),
)

create table TASK(
ID int primary key IDENTITY(1,1),
TASK_NAME nvarchar(50) default N'',
DETAIL nvarchar(50) default N'',
STARTTIME datetime ,
ENDTIME datetime,
TASK_STATUS int default 1,
ID_SMART_LIST int not null foreign key REFERENCES SMART_LIST(ID),
ID_LIST int not null foreign key REFERENCES LIST(ID),
)
go