-- 许愿池 v2 数据库 schema
-- ====================================================================
-- 部署时执行一次：
--   wrangler d1 execute cangjie-wish-db --file=cloudflare-worker/schema.sql
-- 或在 Cloudflare Dashboard → D1 → Console 中粘贴本文件全部内容执行。
-- ====================================================================

-- 主表：许愿
CREATE TABLE IF NOT EXISTS wishes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,                -- 库 / 工具 / 框架 / 其他
  nickname TEXT DEFAULT '匿名',
  email TEXT DEFAULT '',                 -- 仅管理员可见
  status TEXT DEFAULT 'pending',        -- pending / done / rejected / hidden
  upvotes INTEGER DEFAULT 0,
  ip_hash TEXT NOT NULL,                 -- SHA-256(ip + salt) 前 16 位
  user_agent TEXT,
  created_at INTEGER NOT NULL,           -- unix ms
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_wishes_status ON wishes(status);
CREATE INDEX IF NOT EXISTS idx_wishes_upvotes ON wishes(upvotes DESC);
CREATE INDEX IF NOT EXISTS idx_wishes_created ON wishes(created_at DESC);

-- 竞品表（一条许愿可有多个竞品）
CREATE TABLE IF NOT EXISTS competitors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wish_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  lang TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (wish_id) REFERENCES wishes(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_competitors_wish ON competitors(wish_id);

-- FTS5 全文索引（用于查重）
-- 使用 content 影子表模式，通过触发器保持与主表同步
CREATE VIRTUAL TABLE IF NOT EXISTS wishes_fts USING fts5(
  title, description, content='wishes', content_rowid='rowid', tokenize='unicode61'
);

-- 触发器：保持 FTS 与主表同步
CREATE TRIGGER IF NOT EXISTS wishes_ai AFTER INSERT ON wishes BEGIN
  INSERT INTO wishes_fts(rowid, title, description) VALUES (new.id, new.title, new.description);
END;
CREATE TRIGGER IF NOT EXISTS wishes_ad AFTER DELETE ON wishes BEGIN
  INSERT INTO wishes_fts(wishes_fts, rowid, title, description) VALUES('delete', old.id, old.title, old.description);
END;
CREATE TRIGGER IF NOT EXISTS wishes_au AFTER UPDATE ON wishes BEGIN
  INSERT INTO wishes_fts(wishes_fts, rowid, title, description) VALUES('delete', old.id, old.title, old.description);
  INSERT INTO wishes_fts(rowid, title, description) VALUES (new.id, new.title, new.description);
END;

-- +1 去重表（同 IP 对同一 wish 只能投一次）
CREATE TABLE IF NOT EXISTS upvote_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wish_id INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  UNIQUE(wish_id, ip_hash)
);
CREATE INDEX IF NOT EXISTS idx_upvote_ip_hour ON upvote_logs(ip_hash, created_at);
