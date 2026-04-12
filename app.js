import express from 'express';
import './models/index.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('RAIZ OK');
});

app.get('/teste-direto', (req, res) => {
    res.send('DIRETO OK');
});

app.use('/categoria', categoriaRoutes);
app.use('/produto', produtoRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/entrega', entregaRoutes);
app.use('/avaliacao', avaliacaoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});