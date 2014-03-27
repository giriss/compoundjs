module.exports = 
  { "development":
    { "driver":   "memory"
//      driver:   "redis"
//    , host:     "pub-redis-13848.us-east-1-3.3.ec2.garantiadata.com"
//    , port:     13848
//    , password: "wV2xV3z8IolVrla5"
    }
  , "test":
    { "driver":   "memory"
    }
  , "production":
    {
      driver:   "redis"
    , host:     "pub-redis-13848.us-east-1-3.3.ec2.garantiadata.com"
    , port:     13848
    , password: "wV2xV3z8IolVrla5"
//     driver:   "mongodb"
//    , url:      "mongodb://admin:Neha1803@oceanic.mongohq.com:10002/app23431960"
    }
  };
