import Produto from '../models/Produto.js';

export const criar = async (req, res) => {
    try {
        console.log('ENTROU NO CRIAR PRODUTO');
        console.log('BODY:', req.body);

        const produto = await Produto.create(req.body);

        console.log('PRODUTO CRIADO:', produto);
        res.status(201).json(produto);
    } catch (error) {
        console.error('ERRO NO CRIAR PRODUTO:', error);
        res.status(400).json({ erro: error.message });
    }
};

export const listar = async (req, res) => {
    try {
        console.log('ENTROU NO LISTAR PRODUTOS');
        const produtos = await Produto.findAll();
        console.log('PRODUTOS:', produtos);
        res.status(200).json(produtos);
    } catch (error) {
        console.error('ERRO NO LISTAR:', error);
        res.status(500).json({ erro: error.message });
    }
};

export const obterPorId = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const atualizar = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }
        await produto.update(req.body);
        res.status(200).json(produto);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const deletar = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }
        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};