import Pedido from "../models/Pedido.js";
import Entrega from "../models/Entrega.js";
import Avaliacao from "../models/Avaliacao.js";

const PedidoController = {
    create: async (req, res) => {
        try {
            const pedido = await Pedido.create(req.body);
            res.status(201).json(pedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const pedidos = await Pedido.findAll({
                include: [
                    {
                        model: Entrega,
                        as: 'entrega'
                    },
                    {
                        model: Avaliacao,
                        as: 'avaliacao'
                    }
                ]
            });

            res.status(200).json(pedidos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id, {
                include: [
                    {
                        model: Entrega,
                        as: 'entrega'
                    },
                    {
                        model: Avaliacao,
                        as: 'avaliacao'
                    }
                ]
            });

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            await pedido.update(req.body);
            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            await pedido.destroy();
            res.status(200).json({ message: 'Pedido excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default PedidoController;