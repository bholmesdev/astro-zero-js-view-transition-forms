import { defineAction, z } from "astro:actions";

export const server = {
  signup: defineAction({
    accept: 'form',
    input: z.object({
      username: z.string().refine(s => !takenUsernames.includes(s), 'Username is already taken.'),
    }),
    handler: async (input) => {
      // Use an artificial timeout.
      await new Promise(res => setTimeout(res, 200));

      takenUsernames.push(input.username);
      return {
        username: input.username,
      }
    }
  })
}

const takenUsernames = ['houston'];