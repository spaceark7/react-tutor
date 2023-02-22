import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../api/Api'
import ButtonLink from '../../components/ButtonLink'
import Layout from '../../components/Layout'

const Home = () => {
  return (
    <Layout>
      {data}
      <div>Home</div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ButtonLink href='/login' title='Login' />
        <ButtonLink href='/register' title='Register' />
        <ButtonLink href='/about' title='About' />
      </Box>
    </Layout>
  )
}

export default Home
