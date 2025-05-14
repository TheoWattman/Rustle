import dotenv from 'dotenv';

dotenv.config(); // Load from .env file

export const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DATABASE_URL || '',
}