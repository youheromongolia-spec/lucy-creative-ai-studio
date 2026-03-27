import { getCurrentSessionUser } from './authSession';

declare const process: {
  env: Record<string, string | undefined>;
};

export async function requireAdmin() {
  const user = await getCurrentSessionUser();

  if (!user) {
    return { ok: false as const, reason: 'unauthorized' };
  }

  // ADMIN_USER_IDS env variable-г зөв унших
  const allowedIds = (process.env.ADMIN_USER_IDS || '')
    .split(',')
    .map((x: string) => x.trim())
    .filter(Boolean);

  // Хэрэв ADMIN_USER_IDS огт байхгүй бол бүгдийг зөвшөөрөхгүй (production-д аюулгүй)
  if (allowedIds.length === 0) {
    return { ok: false as const, reason: 'forbidden' };
  }

  if (!allowedIds.includes(user.id)) {
    return { ok: false as const, reason: 'forbidden' };
  }

  return { ok: true as const, user };
}