const readlineSync = require('readline-sync');

let usuarios = [];

function menuDeOpcoes() {
  console.log('********** Menu de Cadastro **********\n');
  console.log('1 - Cadastrar usuário');
  console.log('2 - Visualizar usuários');
  console.log('3 - Editar usuário');
  console.log('4 - Excluir usuário');
  console.log('5 - Sair\n');
  return readlineSync.question('Digite a opção desejada: ');
}

function cadastrarUsuario() {
  const nome = readlineSync.question('Digite o nome do usuário: ');
  const email = readlineSync.question('Digite o email do usuário: ');
  const cpf = readlineSync.question('Digite o CPF do usuário: ');

  usuarios.push({ nome, email, cpf });
  console.log('Usuário cadastrado com sucesso!\n');
}

function visualizarUsuarios() {
  if (usuarios.length === 0) {
    console.log('Nenhum usuário cadastrado.\n');
  } else {
    console.log('********** Usuários Cadastrados **********\n');
    usuarios.forEach((usuario, index) => {
      console.log(`Usuário ${index + 1}:`);
      console.log(`Nome: ${usuario.nome}`);
      console.log(`Email: ${usuario.email}`);
      console.log(`CPF: ${usuario.cpf}\n`);
    });
  }
}

function editarUsuario() {
  visualizarUsuarios();
  const index = readlineSync.questionInt('Digite o número do usuário que deseja editar: ') - 1;

  if (index >= 0 && index < usuarios.length) {
    const nome = readlineSync.question('Digite o novo nome do usuário: ');
    const email = readlineSync.question('Digite o novo email do usuário: ');
    const cpf = readlineSync.question('Digite o novo CPF do usuário: ');

    usuarios[index] = { nome, email, cpf };
    console.log('Usuário editado com sucesso!\n');
  } else {
    console.log('Usuário não encontrado.\n');
  }
}

function excluirUsuario() {
  visualizarUsuarios();
  const index = readlineSync.questionInt('Digite o número do usuário que deseja excluir: ') - 1;

  if (index >= 0 && index < usuarios.length) {
    usuarios.splice(index, 1);
    console.log('Usuário excluído com sucesso!\n');
  } else {
    console.log('Usuário não encontrado.\n');
  }
}

function main() {
  let opcaoDesejada;

  do {
    opcaoDesejada = menuDeOpcoes();

    if (opcaoDesejada == 1) {
      cadastrarUsuario();
    } else if (opcaoDesejada == 2) {
      visualizarUsuarios();
    } else if (opcaoDesejada == 3) {
      editarUsuario();
    } else if (opcaoDesejada == 4) {
      excluirUsuario();
    } else if (opcaoDesejada == 5) {
      console.log('Saindo...');
    } else {
      console.log('Opção inválida! Tente novamente.');
    }
  } while (opcaoDesejada != 5);
}

main();