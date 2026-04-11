module.exports = {
  apps: [{
    name: "atassasess",
    script: "index.js",
    cwd: "/home/gifted/.web/gifted-session",
    env: {
      PORT: 50900,
      DATABASE_URL: "mongodb+srv://giftedke:8dbJUy1inRFQfz4x@atassasess.m4t7wun.mongodb.net/?appName=atassasess"
    }
  }]
};
