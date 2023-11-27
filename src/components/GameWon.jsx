import { Dialog } from '@mui/material';
import React, { useContext } from 'react'
import { Levels } from '../App';

const GameWon = ({open, setOpen }) => {
    const { setLevel, setTurns, setTargetScore, setScore } = useContext(Levels);
    const handleClose = () => {
        setOpen(false);
    }
    const levelNumber = () => {
        setLevel((prev) => prev+1)
        setTurns(20);
        setTargetScore((prev)=> prev+50);
        setScore(0);
        handleClose();
    }

  return (
    <div >
    <Dialog open={open} onClose={handleClose}>
        <div className='board'>
        <div className='text-result'>
            You Won
        </div>
        <div className='btn'>
            <button onClick={handleClose}>Exit</button>
            <button onClick={levelNumber}>Next</button>
        </div>
        </div>
    </Dialog>
      
    </div>
  )
}

export default GameWon
