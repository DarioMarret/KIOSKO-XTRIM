module.exports = {
  apps: [{
    name: "XTRIM KIOSKOS",
    script: "./server.js",
    watch: true,
    max_memory_restart: '1000M',
    exec_mode: 'cluster',
    instances: 1,
    env: {
      NODE_ENV: "production",
      PORT: "5055",
      HOST: "0.0.0.0",
      BASIC_USERNAME: "",
      BASIC_PASSWORD: "",
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}