import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";

const CategoriaController = {
  create: async (req, res) => {
    try {
      const categoria = await Categoria.create(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const categorias = await Categoria.findAll({
        include: [
          {
            model: Produto,
            as: 'produtos'
          }
        ]
      });

      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id, {
        include: [
          {
            model: Produto,
            as: 'produtos'
          }
        ]
      });

      if (!categoria) {
        return res.status(404).json({ error: 'Categoria nao encontrada' });
      }

      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (!categoria) {
        return res.status(404).json({ error: 'Categoria nao encontrada' });
      }

      await categoria.update(req.body);
      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (!categoria) {
        return res.status(404).json({ error: 'Categoria nao encontrada' });
      }

      await categoria.destroy();
      res.status(200).json({ message: 'Categoria excluida com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default CategoriaController;