const { execSync } = require('child_process');
try {
  const result = execSync('git -C /vercel/share/v0-project pull origin v0/jackyzeng983-7823-970bff01', { encoding: 'utf8' });
  console.log(result);
} catch (e) {
  console.error(e.message);
}
