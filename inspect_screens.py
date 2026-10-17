import os
import re
import hashlib
import json
from PIL import Image

def analyze_all():
    screens_dir = r"D:\Sarvos\screens"
    folders = sorted([d for d in os.listdir(screens_dir) if os.path.isdir(os.path.join(screens_dir, d))])
    
    results = []
    
    for folder in folders:
        fpath = os.path.join(screens_dir, folder)
        img_full = os.path.join(fpath, "screenshot.png")
        img_thumb = os.path.join(fpath, "thumbnail.png")
        html_file = os.path.join(fpath, "code.html")
        meta_file = os.path.join(fpath, "metadata.json")
        
        with open(meta_file, "r", encoding="utf-8") as f:
            meta = json.load(f)
            
        with open(html_file, "r", encoding="utf-8") as f:
            html = f.read()
            
        header_m = re.search(r"<header[^>]*>(.*?)</header>", html, re.S | re.I)
        header_txt = " ".join(re.sub(r"<[^>]+>", " ", header_m.group(1)).split()) if header_m else "None"
        
        h1_m = re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
        h1 = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip() for x in h1_m]
        
        # Images
        images_info = {}
        for itype, ipath in [("full", img_full), ("thumb", img_thumb)]:
            if os.path.exists(ipath):
                with open(ipath, "rb") as fp:
                    raw = fp.read()
                    sha = hashlib.sha256(raw).hexdigest()
                with Image.open(ipath) as im:
                    w, h = im.size
                    fmt = im.format
                    corrupt = False
                    try:
                        im.verify()
                    except Exception:
                        corrupt = True
                images_info[itype] = {
                    "path": ipath,
                    "filename": os.path.basename(ipath),
                    "size": len(raw),
                    "dimensions": f"{w}x{h}",
                    "width": w,
                    "height": h,
                    "format": fmt,
                    "sha256": sha,
                    "corrupt": corrupt
                }
                
        results.append({
            "folder": folder,
            "id": meta["id"],
            "title": meta["title"],
            "device": meta.get("device", "DESKTOP"),
            "header": header_txt,
            "h1": h1,
            "images": images_info
        })
        
    with open(r"D:\Sarvos\inspection_summary.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
        
    print(f"Inspection complete. Analyzed {len(results)} screen folders.")
    for r in results:
        full_img = r['images'].get('full', {})
        print(f"Folder: {r['folder']}")
        print(f"  Title: {r['title']}")
        print(f"  H1: {r['h1']}")
        print(f"  Full img: {full_img.get('dimensions')} ({full_img.get('size'):,} B) SHA: {full_img.get('sha256')[:16]}...")
        print(f"  Header: {r['header'][:80]}")
        print()

if __name__ == "__main__":
    analyze_all()
