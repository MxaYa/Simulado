CREATE TABLE `alocacao` (
  `id_alocacao` int(11) NOT NULL AUTO_INCREMENT,
  `area` int(11) DEFAULT NULL,
  `id_celular` int(11) DEFAULT NULL,
  `id_representante` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_alocacao`),
  KEY `id_celular` (`id_celular`),
  KEY `id_representante` (`id_representante`),
  KEY `alocacao_area_fk` (`area`),
  CONSTRAINT `alocacao_area_fk` FOREIGN KEY (`area`) REFERENCES `area` (`id_area`),
  CONSTRAINT `celular_ibfk_1` FOREIGN KEY (`id_celular`) REFERENCES `celulares` (`id_celulares`),
  CONSTRAINT `representante_ibfk_2` FOREIGN KEY (`id_representante`) REFERENCES `representantes` (`id_representante`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `area` (
  `id_area` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `celulares` (
  `id_celulares` int(11) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(255) DEFAULT NULL,
  `preco` double DEFAULT NULL,
  PRIMARY KEY (`id_celulares`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `clientes` (
  `id_clientes` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_clientes`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `representantes` (
  `id_representante` int(11) NOT NULL AUTO_INCREMENT,
  `representante` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_representante`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `venda` (
  `id_venda` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `id_alocacao` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_venda`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_alocacao` (`id_alocacao`),
  CONSTRAINT `alocacao_ibfk_1` FOREIGN KEY (`id_alocacao`) REFERENCES `alocacao` (`id_alocacao`),
  CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_clientes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
