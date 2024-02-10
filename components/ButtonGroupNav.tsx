import * as React from 'react'
import { Button, ButtonGroup, Box } from '@mui/material'

export default function ButtonGroupNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        '& > *': {
          mt: 4,
          p: 2,
          gap: 4
        },
      }}
    >
      <ButtonGroup size='small' variant="outlined" aria-label="outlined button group">
        <Button className='nav-btn' variant='text' href='#about'>About</Button>
        <Button className='nav-btn' variant='text' href='#skills'>Skills</Button>
        <Button className='nav-btn' variant='text' href='#projects'>Projects</Button>
        <Button className='nav-btn' variant='text' href='#socials'>Socials</Button>
      </ButtonGroup>
    </Box>
  )
}
