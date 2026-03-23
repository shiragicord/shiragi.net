import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
        id: z.string().optional(),
        title: z.string(),
        meta_title: z.string().optional(),
        description: z.string().optional(),
        date: z.date().optional(),
        image: z.string().optional(),
        authors: z.array(z.string()).default(["admin"]),
        categories: z.array(z.string()).default(["others"]),
        tags: z.array(z.string()).default(["others"]),
        draft: z.boolean().optional(),
    }),
});

const authorsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
    schema: z.object({
        id: z.string().optional(),
        title: z.string(),
        meta_title: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        social: z
            .object({
                facebook: z.string().optional(),
                twitter: z.string().optional(),
                instagram: z.string().optional(),
            })
            .optional(),
        draft: z.boolean().optional(),
    }),
});

const pagesCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
    schema: z.object({
        id: z.string().optional(),
        title: z.string(),
        meta_title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        layout: z.string().optional(),
        draft: z.boolean().optional(),
    }),
});

const aboutCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/about" }),
    schema: z.object({
        id: z.string().optional(),
        title: z.string(),
        meta_title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    posts: postsCollection,
    pages: pagesCollection,
    authors: authorsCollection,
    about: aboutCollection,
};