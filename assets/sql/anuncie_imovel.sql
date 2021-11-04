-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Nov-2021 às 22:21
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `anuncie_imovel`
--
CREATE DATABASE IF NOT EXISTS `anuncie_imovel` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `anuncie_imovel`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `imovel`
--

CREATE TABLE `imovel` (
  `id` int(255) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `mensagem` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `imovel`
--

INSERT INTO `imovel` (`id`, `nome`, `email`, `telefone`, `mensagem`) VALUES
(1, 'Kevin', 'ketisinho14@gmail.com', '55996019816', 'dasdadasdasdasdaa'),
(2, 'Kevin', 'ketisinho14@gmail.com', '55996019816', 'dasdadasdasdasdaa'),
(3, 'kevin', 'ketisinho14@gmail.com', '55996019816', 'dasdadasd'),
(4, 'kevin', 'kevinho14@gmail.com', '55996019816', 'dasdadsada'),
(5, 'kevin', 'kevinho14@gmail.com', '55996019816', 'dasdadsada'),
(6, 'Kevin', 'KevinhoBrabo@gmail.com', '99323281', 'Nao gostei do site '),
(7, 'Kevin', 'Brabo@gmail.com', '55996019816', 'alguma mensagem foda'),
(8, 'Pedro', 'pedrinho@gmail.com', '559323413', 'mensagem foda imagina ai');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `imovel`
--
ALTER TABLE `imovel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `imovel`
--
ALTER TABLE `imovel`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
