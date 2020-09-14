class AttemptsService {
  constructor(database) {
    this.database = database;
  }

  async getAttempts(skip, pageSize) {
    const connection = await this.database.getConnection();

    const query = `
      SELECT *
      FROM attempts
      ORDER BY lastModified DESC
      LIMIT ? , ?
    `;

    const result = await connection.execute(query, [skip, pageSize]);
    return result;
  }

  async insertAttempt(newAttempt) {
    const {
      username,
      password
    } = newAttempt;

    const connection = await this.database.getConnection();

    const insertQuery = `
      INSERT INTO attempts (username, password)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE
        lastModified=current_timestamp(),
        attempts = attempts + 1;
    `;

    const result = await connection.execute(insertQuery, [username, password]);
    return result;
  }
}

module.exports = AttemptsService;