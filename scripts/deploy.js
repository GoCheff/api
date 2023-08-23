const child_process = require("child_process");
const dotenv = require("dotenv");

const { execSync } = child_process;

const args = process.argv.slice(2);
const mode = args[0] || "production";

dotenv.config({
  path: mode === "production" ? ".env" : ".env.prod-dev"
});

console.log("Iniciando deploy em modo: ", mode);

const username = process.env.DROPLET_USERNAME;
const ip = process.env.DROPLET_IP;
const sshKeyPath = process.env.SSH_KEY_PATH;
const dropletPath = process.env.DROPLET_PATH;
const dockerComposeName =
  mode === "production" ? "docker-compose.yml" : "docker-compose.prod-dev.yml";

const commands = [
  `ssh -i ${sshKeyPath} ${username}@${ip} "sudo rm -r ${dropletPath}"`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "git clone git@github.com:GoCheff/api.git ${dropletPath}"`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "cd ${dropletPath} && rm -rf docs && rm -rf .husky && rm -rf scripts"`,
  `scp -i ${sshKeyPath} -r .env ${username}@${ip}:${dropletPath}`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "cd ${dropletPath} && docker compose -f ${dockerComposeName} up -d --build"`,
  `ssh -i ${sshKeyPath} ${username}@${ip} "docker image prune -f"`
];

const deployCommand = commands.join(" && ");

try {
  execSync(deployCommand, { stdio: "inherit" });
  console.log("Deploy concluído com sucesso!");
} catch (error) {
  console.error("Erro ao executar o deploy:", error.message);
  process.exit(1);
}
