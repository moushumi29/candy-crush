import { Dialog } from '@mui/material'
import React, { useContext } from 'react'
import { Levels } from '../App';

const GameLost = ({open, setOpen}) => {
  const {  setTurns, setScore } = useContext(Levels);
  
    const handleClose = () => {
        setOpen(false);
    }
    const handleTryAgain = () => {
      setTurns(0);
      setScore(0);
      handleClose();
    }
  return (
    <div >
    <Dialog open={open} onClose={handleClose}>
        <div className='board' style={{backgroundColor: "red"}}>
        <div className='text-result'>
            You Lost
        </div>
        <div className='btn'>
          <button onClick={handleClose} style={{backgroundColor: "green"}}>Exit</button>
          <button onClick={handleTryAgain} style={{backgroundColor: "green"}}>Try Again</button>
        </div>
        </div>
    </Dialog>
      
    </div>
  )
}

export default GameLost
