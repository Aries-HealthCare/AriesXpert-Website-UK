import re
import os

def audit_file(file_path):
    print(f"\n=======================================================")
    print(f"AUDITING FILE: {file_path}")
    print(f"=======================================================")

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    posts = []
    curr_post = None
    in_content = False
    content_lines = []

    for idx, line in enumerate(lines):
        slug_match = re.search(r"slug:\s*'([^']+)'", line)
        if slug_match:
            if curr_post:
                curr_post['content'] = ''.join(content_lines)
                posts.append(curr_post)
            curr_post = {
                'slug': slug_match.group(1),
                'line': idx + 1,
                'imageUrl': None,
                'content': ''
            }
            content_lines = []
            in_content = False
            continue

        img_match = re.search(r"imageUrl:\s*'([^']+)'", line)
        if img_match and curr_post:
            curr_post['imageUrl'] = img_match.group(1)

        if "content: `" in line:
            in_content = True
            content_lines.append(line.split("content: `", 1)[1])
            continue

        if in_content:
            if "`," in line or (line.strip() == "}," and not line.strip().startswith("-")):
                in_content = False
                content_lines.append(line.split("`,", 1)[0] if "`," in line else "")
            else:
                content_lines.append(line)

    if curr_post:
        curr_post['content'] = ''.join(content_lines)
        posts.append(curr_post)

    print(f"Total articles found: {len(posts)}\n")

    direct_exercise_pattern = re.compile(
        r'\b(?:reps|repetitions|sets of|\d+\s*sets|bird-dog|cat-camel|dead bug|glute bridge|exercise \d+:|perform \d+|hold for \d+|repeat \d+ times)\b',
        re.IGNORECASE
    )

    all_passed = True
    for i, p in enumerate(posts):
        content = p['content']
        headings = re.findall(r'^##\s+(.+)$', content, re.MULTILINE)
        ex_matches = direct_exercise_pattern.findall(content)
        
        # Verify image existence
        img_url = p.get('imageUrl')
        img_exists = False
        img_size = 0
        if img_url:
            local_path = 'public' + img_url if img_url.startswith('/') else img_url
            img_exists = os.path.exists(local_path)
            if img_exists:
                img_size = os.path.getsize(local_path)

        # Verify strict 7 headings
        h_ok = (
            len(headings) == 7 and
            headings[0].startswith('1. Introduction:') and
            headings[1].startswith('2. Common Symptoms') and
            headings[2].startswith('3. Causes & Clinical Diagnosis') and
            headings[3].startswith('4. Pathophysiology & Biomechanical Impact') and
            headings[4].startswith('5. Evidence-Based Physiotherapy Protocols') and
            headings[5].startswith('6. Home Care & Ergonomic Strategies') and
            headings[6].startswith('7. When to Contact Us')
        )

        ex_ok = len(ex_matches) == 0
        status = "PASSED" if (h_ok and ex_ok and img_exists) else "FAILED"
        if status == "FAILED":
            all_passed = False

        print(f"[{i+1:02d}] {p['slug']:<52} | Status: {status} | Headings: {len(headings)}/7 | Ex: {len(ex_matches)} | Img: {img_url} ({'OK' if img_exists else 'MISSING'})")
        if not h_ok:
            print(f"     -> Headings: {headings}")
        if not ex_ok:
            print(f"     -> Exercise terms: {ex_matches}")

    return all_passed

def main():
    ok1 = audit_file('src/lib/shoulder-conditions-blogs.ts')
    ok2 = audit_file('src/lib/neck-conditions-blogs.ts')
    ok3 = audit_file('src/lib/spine-orthopaedic-blogs.ts')
    ok4 = audit_file('src/lib/growth-blog-posts.ts')

    print("\n" + ("="*70))
    if ok1 and ok2 and ok3 and ok4:
        print("🎉 MASTER AUDIT PASSED: 100% OF ALL BLOGS HAVE EXACT 7 POINTS, ZERO EXERCISES & VALID IMAGES!")
    else:
        print("❌ MASTER AUDIT FAILED ON ONE OR MORE BLOGS")
    print("="*70 + "\n")

if __name__ == '__main__':
    main()
