-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS transacoes_financeiras;
USE transacoes_financeiras;

-- Criar tabela tipo_transacao_financeira
CREATE TABLE IF NOT EXISTS tipo_transacao_financeira (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criar tabela transacao_financeira
CREATE TABLE IF NOT EXISTS transacao_financeira (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    tipo_transacao_id BIGINT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tipo_transacao_id) REFERENCES tipo_transacao_financeira(id) ON DELETE CASCADE
);

-- Seed para popular a tabela tipo_transacao_financeira com "Receita" e "Despesa"
INSERT INTO tipo_transacao_financeira (tipo) VALUES ('Receita');
INSERT INTO tipo_transacao_financeira (tipo) VALUES ('Despesa');
