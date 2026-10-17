import json
import os
import urllib.request
import urllib.error

screens_data = [
    {
        "index": 1,
        "id": "8759140a14b245f484d99a3efd2c268e",
        "title": "SARVOS — Independent Software & Technology Consultancy",
        "folder_name": "01_independent-software-and-technology-consultancy",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1USY1m6H7MbX9l3-5-Zcemwlo-JgoQ4H5ZNSCa1ScpGVJF3WwPv7dsT_4PyrFbEsIlKTbBBCFHixcmi6bCjg-gJF4BVeQaRILchPd3K7Ap-nAAMZdoOmpGArvhr7O4Fd7-eb4zP1A2OIbdnj_RO-yMNjQXqZD6LX9Gj7X6N6QXZ1gkW3UGkOMM1MUqLLY2sRalnpKsXQKSgir4Ti2SQddHBweY4TxYLbyOzXmU7rbMhjSBBIDR2hRH66dI",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmYjdmZTBmNWQwNTNiNzNkMDg0MjM0NjU4EgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 8180,
        "device": "DESKTOP"
    },
    {
        "index": 2,
        "id": "1344980b8338431e8305eeeefeacf96a",
        "title": "SARVOS — Independent Software & Technology Studio",
        "folder_name": "02_independent-software-and-technology-studio",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1WY48rEb0Xp8ojmhzXTd0byXi4MXAGil7wEWHihdhtbeHGkDciPVHNZ1Ept4by6VKPEmRA97Kjj1b9QA9LoJyvxNc4qony6YvAeW5Tl1genH0ohJW1xnBOZxccti-n9-pZUyIml9ZTLOsYTs7eRhRQY40D0jGFdIiGNz0-HdAIGMBOzzeDJJOYhJ3hxecLV3q2Mu66xDkcN36V5W0ueXWxPyo7vqH3KjvVUWKO4OIAtsSFZxR6Lc9IrT94X",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmYmZiZDM0NGMwNGVhYjAzNDg4MjNiYTM2EgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 9922,
        "device": "DESKTOP"
    },
    {
        "index": 3,
        "id": "68c191340b6c4748a4f18b20a36adbe6",
        "title": "SARVOS — Contact & Project Enquiry",
        "folder_name": "03_contact-and-project-enquiry",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1Vm9v86IpSp_B5SVD10uLfZEd1yUwmLjY76nEQnX2tbIxvMhjdBpvEzsA5KjkcBX4MHAgjh8bDr9R3H8Kmote_CUq4IHyIITvJzboseyUNk57kNPnYMwCh6SPy2UFlcGOVJsI7T7T8vva8m1CdMfLNlesei-7_BCdIS08HNUHFc0DtkesvrNScjvcv6viEPL-Ywmyq-agJ9QKHe_k4Okj0zFKYpjkVXV1DCW_DVyu9AnD57mM2jjp90QOLC",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmYzhiNGU1YTEwOTFmN2VhNjRiMzU0NjhlEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 5232,
        "device": "DESKTOP"
    },
    {
        "index": 4,
        "id": "a0b0acc1cfad4cf09b2923c66e8759c8",
        "title": "SARVOS — Case Study: Core Ingestion Engine & Telemetry Bus [Placeholder]",
        "folder_name": "04_case-study-core-ingestion-engine",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1VvUuzMxSJXq4-V04k19ZeNMccGGDOaP7FGNc68r3-CVHPH85Ia-86maW5JmnTtwRBzvLrLYLZzCJGJUMZ2c87YjgZw0JUJh4wTaOMXvA2UUWkrw0LasYVZlc8vXAVESubF-9FfcLx_A0Vg8-1yLzTlwO9oSlGhLMF17IATZ5HGLEQylGtIRFHODLKIWg-_Ak3kMjgMuQrXIQReas__bPyYUkbFGvPXIfZGrdf7XVPVBNiyUKWojIPGEseM",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZDMwOWZmZjQwOTFmN2VhNjRiMzU0NjhlEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 8614,
        "device": "DESKTOP"
    },
    {
        "index": 5,
        "id": "4ed305c158bc48f4826e16f38e5b5c38",
        "title": "SARVOS — Selected Work & Engineering Case Studies",
        "folder_name": "05_selected-work-and-engineering-case-studies",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1Ui_zH5DYN3ySgXs1rryPjIZW6fCmYqsEAsYb-B2F37uH17_0l7rBogqDJxh3R7vcugCZMv1QjBePwY45NpAYd_1AjzsHrjmBXna5bnKSqbPAu5_wTXSWZ3CE5O-7u35vkXmnKsUKJfxW6-_WkbQcUPi9vWhUOy4VYcKsJkI_DkhmSjPfDMeD2TaphcnTMdfEGwKhDCRUimYt0y9p4LZNBi13X4cZoXvhIcoexVU3x7krrF0SwA9Y8N1V9N",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZDJkNjYzZGUwOTEwN2U1M2NkMTRiYzc4EgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 5814,
        "device": "DESKTOP"
    },
    {
        "index": 6,
        "id": "135fb6ea13bc46beb75a74f2e389d80b",
        "title": "SARVOS — Services & Technical Capabilities",
        "folder_name": "06_services-and-technical-capabilities",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1WWP4w7qmChr0zFybd23e0-_6BwD43E0gqXUww-GsvHRzd5IqnXhHeX0lNek12tI-gpPbu8wlIsSgyUQdGDQitNIYH-51VE57cStYdyAfKR9qtVpdsVsAc4uVh9cX9ekNPDWBIl69APYvc0f5m32SCxjUho92Z-xLTALhrt4n7Dco-M8Mlrfcx9GE9rmaEsLwSN34JZQezn3zCGLFIsPwB2Mnl6-cVgN1_lzDbhGkQ2RKHqKlz-QxfO0g4",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZDkyMmRhMzYwNGVhYjAzNDg4MjNiYTM2EgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 7034,
        "device": "DESKTOP"
    },
    {
        "index": 7,
        "id": "44798360744d439d95ef354c57321585",
        "title": "SARVOS — Service Specification: Websites & Custom Software",
        "folder_name": "07_service-specification-websites-and-custom-software",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1UNKa1TmJSCqTk7vfIDX6DLKApWKTDpYx-KQgHWU1PYrbhN-pifsX9wptWTu_vAFb9vR937XKAgNmNaD8ZmPXRsqpLdW5PVg8G1QHsgIWS9042kYD7qUeUL3Q-2mm5r8gZ7tE61jkI9dyRj3gcHrf_ma1KsvjVg3oEG5bZqtDoitg80zm2zpAHaYNq5sISZbvo28DmVYVVek7ga2Qi_JuXNfhs_O1Za3GZjSEGUJUSAuc0DLgOly7E_S-58",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZDg5YTU2MGQwNTIyOWQwNmRjMDg3OGFjEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 7532,
        "device": "DESKTOP"
    },
    {
        "index": 8,
        "id": "a80e530e3ec94d1fbe655c95bd385946",
        "title": "SARVOS — About Studio, Principles & Team",
        "folder_name": "08_about-studio-principles-and-team",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1WE2Kfi12s-xWxrVnjpulCkKaXEaMIe8z7D__f7okIfwDsJPBnQOGLUsmR9LH1RAe3azEgBkPXcZEzwuI6Pdlt3kbr7yp0v6K3rukZoADu4duH5xsuP0szgmU_u-52KS1kj0BbVdY8ai2ksK49ObWH63dsx-qVKXKqc5fdUTdQ2IGDMGOdgQjJ-0dxbR47ZVqgAaq8fICYFD_Or1gDYYsGCcwlqtdi1Y_LA9yji4e0-ZKaWHDO6FGmBDh0l",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZTUzYzQ1NDAwNzc5YTRmOGMzM2M0ZTU0EgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 7776,
        "device": "DESKTOP"
    },
    {
        "index": 9,
        "id": "8f4fcd4780a34a3792f3f9d68418c37c",
        "title": "SARVOS — Technical Insights & Engineering Notes",
        "folder_name": "09_technical-insights-and-engineering-notes",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1W-2aSc5217YIDbL2AafMW_lxJzebWQcjuIBxSkwjCG2hs2pvc_X93dmajmZSSiboGNoJC3FZddIKjr2Rb6p5F1JheZV9MIVpWseImUYWAfSQ2zyrn2OBfjIubmCu8rbED3WT3F7LcCSJRmf8xACFfB2OaEy1KTd5L8YtvEFGVsJ4SKU1wkNje3QORfW4dYCaerzOEzZBoNwUc2hKXHmZlH3GE9QmFOu7DgIAzzhKv1wV4OF2IYgeLn-Ylv",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZTNjNmI3MjMwNzllNzZmMmNjMGE4NzEzEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 3502,
        "device": "DESKTOP"
    },
    {
        "index": 10,
        "id": "21795cf8e7d94dfaba9ef3e40539c18b",
        "title": "SARVOS — Mobile Home (390px)",
        "folder_name": "10_mobile-home-390px",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1U1YG4UiKuR3IFx2KHzTFnntDCHODtcDUlHrS2P7kE0GXrA2oM4WB9x0tM2d7oKMAgcY9e_pHsjR1O4cBMyd6d-yuk1parnEB--M0S-686_2mk8m0cDWyrVYQnY0uHc6MJs9nLgdMT0xfQIS31XCVi1kwCAPUIOmZSPX5P5ICF42qCkFHhiBqwQWIZ11d1aWvqGLtGg0TdvEBnQ4pxsuJW-PkyCQuAA0TZpk8FFqysClS3ERGZwzqy_Penc",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZWQ4OGRkMGMwMzM4NTgzYjM1MjA0N2FhEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 780,
        "height": 10654,
        "device": "MOBILE"
    },
    {
        "index": 11,
        "id": "2e926ec27e6e4061b8881ec78a403bce",
        "title": "SARVOS — Home Page (Dark Theme)",
        "folder_name": "11_home-page-dark-theme",
        "screenshot_url": "https://lh3.googleusercontent.com/aida/AEtjO1VjLrIhxwYNA4EbpVE1t6THi0D_2F1FBUnMPlt0e4pPRxmLohM14mlic8QmP6L4w_03Z3OCl2szxu7KbLXsARArJ5y5ARZyen8Dp8dV6mD1ZSryDmhmAfEv3BuHHGyukr7SJncSTLzuGpmAPil-c3bvd-itIjfsd9natzi-v5WOwW96Z_9VjtxkUVd-2r5FAP6cEAypWL1kZz18Jl4wKP3kB6YqdsjCDfsfxWVmInejmr9TpTUbQnc97dxM",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1ZTBmZWMxZWZiZDAwOTEwNGY3MzAxMWU5ZGIwEgsSBxD-kfG3owMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzQ0NDg0ODgyNjUxMDE4MDc3Mw&filename=&opi=89354086",
        "width": 2560,
        "height": 7440,
        "device": "DESKTOP"
    }
]

def download_file(url, target_path):
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    )
    with urllib.request.urlopen(req) as resp, open(target_path, "wb") as f:
        f.write(resp.read())

def main():
    base_dir = r"D:\Sarvos\screens"
    os.makedirs(base_dir, exist_ok=True)
    
    summary = []
    
    for item in screens_data:
        folder = os.path.join(base_dir, f"{item['index']:02d}_{item['id']}")
        os.makedirs(folder, exist_ok=True)
        
        img_path = os.path.join(folder, "screenshot.png")
        html_path = os.path.join(folder, "code.html")
        meta_path = os.path.join(folder, "metadata.json")
        
        print(f"Downloading [{item['index']}/11] {item['title']}...")
        
        # Download screenshot
        try:
            download_file(item["screenshot_url"], img_path)
            img_size = os.path.getsize(img_path)
            print(f"  Screenshot saved: {img_size:,} bytes")
        except Exception as e:
            print(f"  Error downloading screenshot: {e}")
            img_size = 0
            
        # Download html
        try:
            download_file(item["html_url"], html_path)
            html_size = os.path.getsize(html_path)
            print(f"  HTML saved: {html_size:,} bytes")
        except Exception as e:
            print(f"  Error downloading html: {e}")
            html_size = 0
            
        with open(meta_path, "w", encoding="utf-8") as f:
            json.dump(item, f, indent=2)
            
        summary.append({
            **item,
            "img_size": img_size,
            "html_size": html_size,
            "folder": os.path.relpath(folder, r"D:\Sarvos")
        })

    with open(os.path.join(r"D:\Sarvos", "screens_manifest.json"), "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    print("\nAll downloads completed!")

if __name__ == "__main__":
    main()
