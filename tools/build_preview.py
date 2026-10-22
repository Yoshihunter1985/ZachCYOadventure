"""Bundles the game into one HTML file (for a quick preview without GitHub)."""
import re, pathlib, sys
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()
html = re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">', lambda m: "<style>\n" + (root / m.group(1)).read_text() + "\n</style>", html)
html = re.sub(r'<script src="([^"]+)"></script>', lambda m: "<script>\n" + (root / m.group(1)).read_text() + "\n</script>", html)
html = re.sub(r'<link rel="manifest"[^>]*>\n', "", html)
# embed pictures so the single file works anywhere
import base64
def embed(m):
    f = root / m.group(1)
    if f.exists():
        mime = "image/png" if f.suffix == ".png" else "image/jpeg"
        return '"data:%s;base64,%s"' % (mime, base64.b64encode(f.read_bytes()).decode())
    return m.group(0)
html = re.sub(r'"(images/[\w.-]+\.(?:jpg|png))"', embed, html)
out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / "preview.html"
if out.suffix == ".html" and "artifact" in out.name:
    # artifact pages get their own skeleton: keep only head bits + body content
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    head = re.sub(r'<meta (charset|name="viewport")[^>]*>\n?', "", head)
    body = re.search(r"<body>(.*?)</body>", html, re.S).group(1)
    html = head + '<style>html,body{height:100%;margin:0}</style>\n' + body
out.write_text(html)
print("wrote", out)
