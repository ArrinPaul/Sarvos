import os
import shutil
import hashlib
import json
from PIL import Image

def run_phase_0():
    base_dir = r"D:\Sarvos"
    screens_dir = os.path.join(base_dir, "screens")
    ref_dir = os.path.join(base_dir, "design-reference")
    dup_dir = os.path.join(ref_dir, "_duplicates")
    
    os.makedirs(dup_dir, exist_ok=True)
    
    # Classification map for canonical unique full-resolution screens
    canonical_map = {
        # Screen 02 is canonical Home Desktop Light (matches Mobile & Dark copy)
        "02_1344980b8338431e8305eeeefeacf96a": ("home", "home-desktop-light.png", "home-desktop-light", "Light", "Desktop (1280px @2x)"),
        "11_2e926ec27e6e4061b8881ec78a403bce": ("home", "home-desktop-dark.png", "home-desktop-dark", "Dark", "Desktop (1280px @2x)"),
        "10_21795cf8e7d94dfaba9ef3e40539c18b": ("home", "home-mobile.png", "home-mobile", "Light", "Mobile (390px @2x)"),
        "03_68c191340b6c4748a4f18b20a36adbe6": ("contact", "contact-default.png", "contact-default", "Light", "Desktop (1280px @2x)"),
        "04_a0b0acc1cfad4cf09b2923c66e8759c8": ("case-study", "case-study-core-ingestion.png", "case-study", "Light", "Desktop (1280px @2x)"),
        "05_4ed305c158bc48f4826e16f38e5b5c38": ("work", "work-list.png", "work-list", "Light", "Desktop (1280px @2x)"),
        "06_135fb6ea13bc46beb75a74f2e389d80b": ("services", "services-list.png", "services", "Light", "Desktop (1280px @2x)"),
        "07_44798360744d439d95ef354c57321585": ("service-detail", "service-detail-websites-software.png", "service-detail", "Light", "Desktop (1280px @2x)"),
        "08_a80e530e3ec94d1fbe655c95bd385946": ("about", "about-studio.png", "about", "Light", "Desktop (1280px @2x)"),
        "09_8f4fcd4780a34a3792f3f9d68418c37c": ("insights", "insights-list.png", "insights", "Light", "Desktop (1280px @2x)"),
    }
    
    # Screen 01 is an alternative home screen variation
    variant_map = {
        "01_8759140a14b245f484d99a3efd2c268e": ("home-desktop-light-alt-consultancy.png", "home-desktop-light (variant)", "Light", "Desktop (1280px @2x)")
    }
    
    report_rows = []
    
    # Process each folder
    screen_folders = sorted(os.listdir(screens_dir))
    
    for sf in screen_folders:
        folder_path = os.path.join(screens_dir, sf)
        if not os.path.isdir(folder_path):
            continue
            
        full_png = os.path.join(folder_path, "screenshot.png")
        thumb_png = os.path.join(folder_path, "thumbnail.png")
        
        # Check full screenshot
        if os.path.exists(full_png):
            with open(full_png, "rb") as f:
                raw = f.read()
                sha = hashlib.sha256(raw).hexdigest()
            with Image.open(full_png) as im:
                w, h = im.size
                fmt = im.format
                corrupt = False
                try:
                    im.verify()
                except Exception:
                    corrupt = True
                    
            if sf in canonical_map:
                screen_dir, dest_filename, class_name, theme, vp = canonical_map[sf]
                target_dir = os.path.join(ref_dir, screen_dir)
                os.makedirs(target_dir, exist_ok=True)
                target_path = os.path.join(target_dir, dest_filename)
                shutil.copy2(full_png, target_path)
                
                # Also copy html code file for reference
                html_src = os.path.join(folder_path, "code.html")
                if os.path.exists(html_src):
                    shutil.copy2(html_src, os.path.join(target_dir, dest_filename.replace(".png", ".html")))
                    
                report_rows.append({
                    "original_file": f"screens/{sf}/screenshot.png",
                    "reference_file": f"design-reference/{screen_dir}/{dest_filename}",
                    "screen": screen_dir,
                    "classification": class_name,
                    "theme": theme,
                    "viewport": vp,
                    "dimensions": f"{w} × {h}",
                    "size_bytes": len(raw),
                    "hash": sha,
                    "status": "CORRUPT" if corrupt else "OK",
                    "role": "Canonical reference"
                })
            elif sf in variant_map:
                dest_filename, class_name, theme, vp = variant_map[sf]
                target_path = os.path.join(dup_dir, dest_filename)
                shutil.copy2(full_png, target_path)
                html_src = os.path.join(folder_path, "code.html")
                if os.path.exists(html_src):
                    shutil.copy2(html_src, os.path.join(dup_dir, dest_filename.replace(".png", ".html")))
                report_rows.append({
                    "original_file": f"screens/{sf}/screenshot.png",
                    "reference_file": f"design-reference/_duplicates/{dest_filename}",
                    "screen": "home (variant)",
                    "classification": class_name,
                    "theme": theme,
                    "viewport": vp,
                    "dimensions": f"{w} × {h}",
                    "size_bytes": len(raw),
                    "hash": sha,
                    "status": "DUPLICATE",
                    "role": "Near-duplicate (Home alternate copy variant)"
                })
                
        # Check thumbnail (downscaled near-duplicate)
        if os.path.exists(thumb_png):
            with open(thumb_png, "rb") as f:
                raw_thumb = f.read()
                sha_thumb = hashlib.sha256(raw_thumb).hexdigest()
            with Image.open(thumb_png) as im:
                tw, th = im.size
            thumb_dest_dir = os.path.join(dup_dir, "thumbnails")
            os.makedirs(thumb_dest_dir, exist_ok=True)
            thumb_dest_file = f"{sf}_thumbnail.png"
            shutil.copy2(thumb_png, os.path.join(thumb_dest_dir, thumb_dest_file))
            report_rows.append({
                "original_file": f"screens/{sf}/thumbnail.png",
                "reference_file": f"design-reference/_duplicates/thumbnails/{thumb_dest_file}",
                "screen": sf.split("_")[1][:8],
                "classification": "thumbnail-downscaled",
                "theme": "N/A",
                "viewport": "Thumbnail (512px h)",
                "dimensions": f"{tw} × {th}",
                "size_bytes": len(raw_thumb),
                "hash": sha_thumb,
                "status": "DUPLICATE",
                "role": "Downscaled near-duplicate of screenshot.png"
            })

    with open(os.path.join(ref_dir, "verification_report.json"), "w", encoding="utf-8") as f:
        json.dump(report_rows, f, indent=2)

    print(f"Phase 0 organization completed. {len(report_rows)} files audited and organized.")

if __name__ == "__main__":
    run_phase_0()
