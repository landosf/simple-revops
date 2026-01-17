import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getAllPosts, getPostBySlug, getNotionPage } from "../lib/notion-api";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API routes
  app.get("/api/blog/posts", async (_req, res) => {
    try {
      console.log("Fetching blog posts from Notion...");
      const posts = await getAllPosts();
      console.log(`Successfully fetched ${posts.length} posts`);
      console.log("Posts details:", JSON.stringify(posts.map(p => ({ id: p.id, title: p.title, slug: p.slug })), null, 2));
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  app.get("/api/blog/post/:slug", async (req, res) => {
    try {
      const post = await getPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error: any) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/blog/content/:pageId", async (req, res) => {
    try {
      const recordMap = await getNotionPage(req.params.pageId);
      res.json(recordMap);
    } catch (error: any) {
      console.error("Error fetching page content:", error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
