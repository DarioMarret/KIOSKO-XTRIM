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
      PORT: "5056",
      HOST: "0.0.0.0",
      BASIC_USERNAME: "",
      BASIC_PASSWORD: "",
      TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRlY25vUm9ib3QiLCJyb2xlIjoiQm90IiwibmJmIjoxNjQ0NTM0MDY0LCJleHAiOjE2NzYwOTE1OTksImlhdCI6MTY0NDUzNDA2NCwiaXNzIjoid3d3Lnh0cmltdHZjYWJsZS5jb20uZWMiLCJhdWQiOiJ3d3cueHRyaW10dmNhYmxlLmNvbS5lYyJ9.XgPwH8PKlsUMPRUravJlUrJEJT81onOHdr4QU8SKnHU"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}