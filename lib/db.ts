import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: string;
}

export interface PasswordReset {
  email: string;
  token: string;
  expiresAt: string;
}

async function ensureFileExists(filename: string, initialContent: string = '[]') {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, filename);
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, initialContent, 'utf-8');
  }
  return filePath;
}

export async function getUsers(): Promise<User[]> {
  const filePath = await ensureFileExists('users.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

export async function saveUser(user: User): Promise<void> {
  const users = await getUsers();
  users.push(user);
  const filePath = path.join(DATA_DIR, 'users.json');
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  const normalizedEmail = email.toLowerCase().trim();
  return users.find((u) => u.email.toLowerCase().trim() === normalizedEmail);
}

export async function findUserById(id: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find((u) => u.id === id);
}

export async function getSessions(): Promise<Session[]> {
  const filePath = await ensureFileExists('sessions.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

export async function saveSession(session: Session): Promise<void> {
  const sessions = await getSessions();
  sessions.push(session);
  const filePath = path.join(DATA_DIR, 'sessions.json');
  await fs.writeFile(filePath, JSON.stringify(sessions, null, 2), 'utf-8');
}

export async function findSessionById(id: string): Promise<Session | undefined> {
  const sessions = await getSessions();
  return sessions.find((s) => s.id === id);
}

export async function deleteSession(id: string): Promise<void> {
  const sessions = await getSessions();
  const filtered = sessions.filter((s) => s.id !== id);
  const filePath = path.join(DATA_DIR, 'sessions.json');
  await fs.writeFile(filePath, JSON.stringify(filtered, null, 2), 'utf-8');
}

export async function getResets(): Promise<PasswordReset[]> {
  const filePath = await ensureFileExists('resets.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

export async function saveReset(reset: PasswordReset): Promise<void> {
  const resets = await getResets();
  // Filter out any older resets for the same email
  const filtered = resets.filter((r) => r.email.toLowerCase().trim() !== reset.email.toLowerCase().trim());
  filtered.push(reset);
  const filePath = path.join(DATA_DIR, 'resets.json');
  await fs.writeFile(filePath, JSON.stringify(filtered, null, 2), 'utf-8');
}
