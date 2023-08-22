const child_process = require("child_process");
const dotenv = require("dotenv");

dotenv.config();

const { execSync } = child_process;

const username = process.env.DROPLET_USERNAME;
const ip = process.env.DROPLET_IP;
const sshKeyPath = process.env.SSH_KEY_PATH;

const commands = [
  `ssh -i ${sshKeyPath} ${username}@${ip} "sudo rm -r /var/www/docker/api"`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "git clone git@github.com:GoCheff/api.git /var/www/docker/api"`,
  `scp -i ${sshKeyPath} -r .env ${username}@${ip}:/var/www/docker/api`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "cd /var/www/docker/api && docker-compose up -d --build"`
];

const deployCommand = commands.join(" && ");

try {
  execSync(deployCommand, { stdio: "inherit" });
  console.log("Deploy concluído com sucesso!");
} catch (error) {
  console.error("Erro ao executar o deploy:", error.message);
  process.exit(1);
}
