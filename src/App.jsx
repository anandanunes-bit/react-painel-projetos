import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'
import Resumo from './components/Resumo'
import ProjetoCard from './components/ProjetoCard'
import Rodape from './components/Rodape'
import './App.css'

function App() {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema de Estoque",
      descricao: "Controle de produtos e movimentações.",
      responsavel: { nome: "Ana", turma: "3A" },
      status: "Concluído",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      destaque: true,
      nota: 9
    },
    {
      id: 2,
      titulo: "App de Finanças",
      descricao: "Gerenciamento de gastos pessoais.",
      responsavel: { nome: "Bruno", turma: "3A" },
      status: "Em desenvolvimento",
      tecnologias: ["React Native", "Firebase"],
      destaque: false,
      nota: 8
    },
    {
      id: 3,
      titulo: "Site da Biblioteca",
      descricao: "Catálogo online de livros.",
      responsavel: { nome: "Carla", turma: "3B" },
      status: "Planejamento",
      tecnologias: ["React", "JSON Server"],
      destaque: false,
      nota: 6.5
    },
    {
      id: 4,
      titulo: "Dashboard de Vendas",
      descricao: "Painel com gráficos e métricas.",
      responsavel: { nome: "Diego", turma: "3A" },
      status: "Concluído",
      tecnologias: ["React", "Chart.js", "Node.js"],
      destaque: true,
      nota: 10
    },
    {
      id: 5,
      titulo: "Jogo da Memória",
      descricao: "Jogo educativo para crianças.",
      responsavel: { nome: "Elena", turma: "3B" },
      status: "Em desenvolvimento",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      destaque: false,
      nota: 7
    },
    {
      id: 6,
      titulo: "API de Clima",
      descricao: "Consulta de previsão do tempo.",
      responsavel: { nome: "Felipe", turma: "3B" },
      status: "Concluído",
      tecnologias: ["Node.js", "Express", "API Rest"],
      destaque: false,
      nota: 8.5
    }
  ]

  // Dados para o Resumo - App prepara, Resumo apresenta
  const total = projetos.length
  const concluidos = projetos.filter(p => p.status === "Concluído").length
  const emDesenvolvimento = projetos.filter(p => p.status === "Em desenvolvimento").length

  return (
    <div className="app">
      <Cabecalho />

      <main className="container">
        <Secao titulo="Resumo Geral">
          <Resumo total={total} concluidos={concluidos} emDesenvolvimento={emDesenvolvimento} />
        </Secao>

        <Secao titulo="Projetos da Turma">
          <div className="grid-projetos">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
                nota={projeto.nota}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  )
}

export default App