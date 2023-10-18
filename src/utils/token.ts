import crypto from 'crypto';

const token = (): string => crypto.randomBytes(8).toString('hex');

export default token;