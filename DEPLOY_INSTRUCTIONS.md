# Deployment Instructions

Since you have removed `.html` extensions from your links, you need to configure your web server to map these clean URLs back to the actual `.html` files on the disk.

## Option A: Apache (Common Shared Hosting, cPanel, etc.)
If your server uses Apache (most common), simply upload the `.htaccess` file included in this project to the root folder of your website (usually `public_html` or `www`).

**The `.htaccess` file handles:**
1.  Redirecting HTTP to HTTPS (Security).
2.  Mapping `/simulador` -> `simulador.html` internally.

## Option B: Nginx (VPS, DigitalOcean, etc.)
If you manage your own Nginx server, you cannot use `.htaccess`. Instead, you need to update your server block configuration.

1.  Open your Nginx config file (e.g., `/etc/nginx/sites-available/default`).
2.  Add the `try_files` directive as shown in `nginx.conf.example`.
3.  Restart Nginx.

## Option C: Netlify / Vercel
- **Netlify**: The `netlify.toml` file already handles everything. No action needed.
- **Vercel**: Usually requires a `vercel.json` with similar rewrite rules, but often works out of the box with default settings for static sites.
