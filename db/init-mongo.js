db.createUser(
  {
    user: "faheempb",
    pwd: "faheemp1tney1a",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)