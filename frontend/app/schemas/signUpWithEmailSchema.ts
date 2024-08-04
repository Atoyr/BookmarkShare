import { z } from 'zod';

export const signUpWithEmailSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email is invalid'),
  password: z
    .string({ required_error: 'Password is required' }),
});
