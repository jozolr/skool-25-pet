/* eslint-disable */
import { parse } from 'pg-connection-string'
import * as Joi from 'joi'
import { configurationSchema } from './configuration.schema'

export default () => {
  const databaseUrl = process.env.DATABASE_URL as string
  const { host, port, database, user, password } = parse(databaseUrl)
  const configuration = {
    environment: process.env.ENVIRONMENT,
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
    database: {
      host,
      port,
      database,
      user,
      password,
      acquireConnections: process.env.DATABASE_ACQUIRE_CONNECTIONS || 10000,
      evictConnections: process.env.DATABASE_EVICT_CONNECTIONS || 10000,
      idleConnections: process.env.DATABASE_IDLE_CONNECTIONS || 10000,
      maxConnections: process.env.DATABASE_MAX_CONNECTIONS || 10,
      minConnections: process.env.DATABASE_MIN_CONNECTIONS || 1
    },
    debug: process.env.DEBUG,
    logLevel: process.env.LOG_LEVEL
  }
  return Joi.attempt(configuration, configurationSchema)
}
