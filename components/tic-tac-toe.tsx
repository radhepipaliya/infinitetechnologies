"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, Trophy } from "lucide-react"

type Player = "X" | "O" | null
type Board = Player[]

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X")
  const [winner, setWinner] = useState<Player | "draw" | null>(null)
  const [winningCells, setWinningCells] = useState<number[]>([])
  const [gameActive, setGameActive] = useState(true)

  const checkWinner = (board: Board): { winner: Player | "draw" | null; winningCells: number[] } => {
    // Check for winning combinations
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], winningCells: combination }
      }
    }

    // Check for draw
    if (board.every((cell) => cell !== null)) {
      return { winner: "draw", winningCells: [] }
    }

    return { winner: null, winningCells: [] }
  }

  const handleCellClick = (index: number) => {
    if (!gameActive || board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const result = checkWinner(newBoard)
    if (result.winner) {
      setWinner(result.winner)
      setWinningCells(result.winningCells)
      setGameActive(false)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
    setWinningCells([])
    setGameActive(true)
  }

  useEffect(() => {
    if (winner && winner !== "draw") {
      const timer = setTimeout(resetGame, 3000)
      return () => clearTimeout(timer)
    }
  }, [winner])

  const getStatusMessage = () => {
    if (winner === "draw") return "It's a draw! 🤝"
    if (winner) return `🎉 Player ${winner} wins!`
    return `Player ${currentPlayer}'s turn`
  }

  const getCellClass = (index: number) => {
    let baseClass =
      "w-20 h-20 border-2 border-gray-300 flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-200 hover:bg-gray-50"

    if (board[index]) {
      baseClass += " cursor-not-allowed"
    }

    if (winningCells.includes(index)) {
      baseClass += " bg-green-100 border-green-400 text-green-700"
    }

    if (board[index] === "X") {
      baseClass += " text-blue-600"
    } else if (board[index] === "O") {
      baseClass += " text-red-600"
    }

    return baseClass
  }

  return (
    <Card className="shadow-xl">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Play Tic-Tac-Toe</h2>
          </div>
          <p className="text-gray-600">Take a break and challenge yourself to a quick game!</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* Game Board */}
          <div className="grid grid-cols-3 gap-2 p-4 bg-gray-100 rounded-lg">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                className={getCellClass(index)}
                disabled={!gameActive || !!cell}
              >
                {cell}
              </button>
            ))}
          </div>

          {/* Game Status */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 mb-4">{getStatusMessage()}</p>

            {/* Reset Button */}
            <Button
              onClick={resetGame}
              variant="outline"
              className="flex items-center gap-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 bg-transparent"
            >
              <RotateCcw className="w-4 h-4" />
              New Game
            </Button>
          </div>

          {/* Game Rules */}
          <div className="text-center text-sm text-gray-500 max-w-xs">
            <p>Get three in a row to win! The game will automatically reset after a win.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
