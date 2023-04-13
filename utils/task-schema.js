const Joi = require('joi');

const taskSchema = {
    name: Joi.string().min(3).required(),
    completed: Joi.boolean()
};

// method below is not supported with joi version ^16; had to downgrade in package.json
exports.validateTask = (task) => Joi.validate(task, taskSchema);