import Layout from '../../components/Layout'

const Login = () => {
  return (
    <Layout>
      <div>Login</div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/about'}>About</Link>
      </Box>
    </Layout>
  )
}

export default Login
