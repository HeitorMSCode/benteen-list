import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL);

/*import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);
async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    email: 'john@example.com',
    password: 'teste@23',
  };
  await db.insert(usersTable).values(user);
  console.log('New user created!')
  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
}

main(); */