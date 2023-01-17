import * as Joi from 'joi'

export const configurationSchema = Joi.object({
  environment: Joi.string().default('development'),
  port: Joi.number().required(),
  database: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    database: Joi.string().required(),
    user: Joi.string().required(),
    password: Joi.string().required(),
    acquireConnections: Joi.number().required(),
    evictConnections: Joi.number().required(),
    idleConnections: Joi.number().required(),
    maxConnections: Joi.number().required(),
    minConnections: Joi.number().required()
  }),
  debug: Joi.boolean().default(false),
  logLevel: Joi.string().default('INFO'),
})
