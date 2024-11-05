


create table venda (
	id_venda int NOT NULL auto_increment,
    id_cliente int,
    id_alocacao int,
    primary key (id_venda),
    key `id_cliente` (`id_cliente`),
    key `id_alocacao` (`id_alocacao`),
    Constraint `alocacao_ibfk_1` foreign key (`id_alocacao`) references `alocacao` (`id_alocacao`),
    Constraint `cliente_ibfk_2` foreign key (`id_cliente`) references `clientes` (`id_clientes`)
);

create table alocacao (
	id_alocacao int NOT NULL auto_increment,
    area int,
    id_celular int,
    id_representante int,
    quantidade int,
    primary key (id_alocacao),
    key `id_celular` (`id_celular`),
    key `id_representante` (`id_representante`),
    Constraint `celular_ibfk_1` foreign key (`id_celular`) references `celulares` (`id_celulares`),
    Constraint `representante_ibfk_2` foreign key (`id_representante`) references `representantes` (`id_representante`)
);

create table celulares(
	id_celulares int NOT NULL auto_increment,
    modelo VARCHAR(255),
    preco double,
    primary key (id_celulares)
);

create table clientes (
	id_clientes int NOT NULL auto_increment,
	nome varchar (255),
    primary key (id_clientes)
);

create table representantes (
	id_representante int NOT NULL auto_increment,
    representante varchar (255),
	primary key (id_representante)
)





