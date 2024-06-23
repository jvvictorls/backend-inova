const userService = require('../service/UserService');

const findAllUsers = async (_req, res) => { 
  const allUsers = await userService.findAllUsers();
  return res.status(200).json(allUsers); //status 200 é o padrão para requisições bem sucedidas
}

const  findByEmail = async (req, res) => {
  try {
  const { email } = req.body;
  const user = await userService.findByEmail(email);
  console.log(user);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' }); //status 404 é o padrão para requisições que não encontram o que foi solicitado
  return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message }); //status 500 é o padrão para requisições que deram erro
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  if (!token) return res.status(400).json({ message: 'Usuário ou senha incorretos' }); //status 400 é o padrão para requisições mal sucedidas
  return res.status(200).json({ token });
}
module.exports = {
  findAllUsers,
  findByEmail,
  login,
};