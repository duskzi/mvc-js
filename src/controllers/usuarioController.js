import {
    criarUsuario,
    listarUsuarios,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
} from "../models/usuarioModel.js";

export async function create(req, res) {
    try {
        const { nome, email } = req.body;
        const usuario = await criarUsuario(nome, email);
        res.status(201).json(usuario);
    } catch (e) {
        res.status(500).json({ erro: "Falha ao criar usuário" });
    }
}

export async function list(req, res) {
    try {
        const usuarios = await listarUsuarios();
        res.json(usuarios);
    } catch (e) {
        res.status(500).json({ erro: "Falha ao listar usuários" });
    }
}

export async function getById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await buscarUsuarioPorId(id);

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json(usuario);
    } catch (e) {
        res.status(500).json({ erro: "Falha ao buscar usuário" });
    }
}

export async function update(req, res) {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        const affectedRows = await atualizarUsuario(id, nome, email);

        if (!affectedRows) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json({ mensagem: "Atualizado com sucesso" });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao atualizar usuário" });
    }
}

export async function remove(req, res) {
    try {
        const { id } = req.params;
        const affectedRows = await deletarUsuario(id);

        if (!affectedRows) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json({ mensagem: "Deletado com sucesso" });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao deletar usuário" });
    }
}
