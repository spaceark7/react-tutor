import { Box } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      {children}
    </Box>
  )
}

export default Layout
