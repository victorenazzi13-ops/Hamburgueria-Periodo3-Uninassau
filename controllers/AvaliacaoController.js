import Avaliacao from "../models/Avaliacao.js";
import Pedido from "../models/Pedido.js";

const AvaliacaoController = {
    create: async (req, res) => {
        try {
            const { nota, pedido_id } = req.body;

            if (nota < 1 || nota > 5) {
                return res.status(400).json({ error: 'A nota deve estar entre 1 e 5' });
            }

            const pedido = await Pedido.findByPk(pedido_id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            const avaliacaoExistente = await Avaliacao.findOne({
                where: { pedido_id }
            });

            if (avaliacaoExistente) {
                return res.status(400).json({ error: 'Este pedido já possui avaliação' });
            }

            const avaliacao = await Avaliacao.create(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);
            if (!avaliacao) {
                return res.status(404).json({ error: 'Avaliação não encontrada' });
            }
            res.status(200).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);

            if (!avaliacao) {
                return res.status(404).json({ error: 'Avaliação não encontrada' });
            }

            if (req.body.nota && (req.body.nota < 1 || req.body.nota > 5)) {
                return res.status(400).json({ error: 'A nota deve estar entre 1 e 5' });
            }

            await avaliacao.update(req.body);
            res.status(200).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);

            if (!avaliacao) {
                return res.status(404).json({ error: 'Avaliação não encontrada' });
            }

            await avaliacao.destroy();
            res.status(200).json({ message: 'Avaliação excluída com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default AvaliacaoController;