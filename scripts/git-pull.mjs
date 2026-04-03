import { execSync } from "child_process"

try {
  const output = execSync("git -C /vercel/share/v0-project pull origin v0/jackyzeng983-7823-970bff01", {
    encoding: "utf8",
  })
  console.log(output)
} catch (err) {
  console.error("Git pull failed:", err.message)
}
