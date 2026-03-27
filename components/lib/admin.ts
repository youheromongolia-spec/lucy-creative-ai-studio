import { getCurrentSessionUser } from './authSession';

export async function requireAdmin() {
  const user = await getCurrentSessionUser();
  if (!user) {
    return { ok: false as const, reason: 'unauthorized' as const };
  }

  const allowedIds = (process.env.ADMIN_USER_IDS ?? '')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);

  if (allowedIds.length === 0 || !allowedIds.includes(user.id)) {
    return { ok: false as const, reason: 'forbidden' as const };
  }

  return { ok: true as const, user };
}