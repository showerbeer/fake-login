const validator = require('./validator');

class AttemptsController {
  constructor(configs, service) {
    this.configs = configs;
    this.attemptsService = service;
  }

  async getAttempts(req, res, next) {
    const page = (req.query.page || 1) - 1;
    const pageSize = this.configs.pageSize;
    const skip = page * pageSize;

    let results = await this.attemptsService.getAttempts(skip, pageSize);
    res.status(200).send(results[0]);
  }

  async createAttempt(req, res, next) {
    const body = req.body;
    const validation = validator.validate(body);
    if (validation.error) {
      const message = validation.error.details.map(i => i.message).join(',');
      res.status(400).send(message);
    } else {
      const result = await this.attemptsService.insertAttempt(body);
      res.status(200).send(`Nice try guy`);
    }
  }
}

module.exports = AttemptsController;