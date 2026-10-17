import os
import urllib.request
import json

def main():
    manifest_path = r"D:\Sarvos\screens_manifest.json"
    with open(manifest_path, "r", encoding="utf-8") as f:
        items = json.load(f)

    for item in items:
        idx = item["index"]
        sc_id = item["id"]
        title = item["title"]
        url = item["screenshot_url"] + "=s0"
        
        folder = os.path.join(r"D:\Sarvos\screens", f"{idx:02d}_{sc_id}")
        target = os.path.join(folder, "screenshot.png")
        thumb = os.path.join(folder, "thumbnail.png")
        
        if os.path.exists(target) and not os.path.exists(thumb):
            os.rename(target, thumb)
            
        print(f"Downloading full-res [{idx}/11] {title}...")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp, open(target, "wb") as fp:
            fp.write(resp.read())
        print(f"  Saved full-res: {os.path.getsize(target):,} bytes")

    print("\nAll full-resolution screenshots downloaded successfully!")

if __name__ == "__main__":
    main()
