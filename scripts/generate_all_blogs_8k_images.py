import os
import cv2
from PIL import Image, ImageFilter

LOGO_PATH = 'public/images/brand-logo-emblem.png'
TARGET_WIDTH_8K = 7680
RAW_SOURCES_DIR = 'public/images/blog/raw_sources'

# 32 Spine & Back Conditions
SPINE_CONDITIONS = [
    ('doc_male_spine1.jpg', 'spine-and-back-conditions-guide.jpg', 0.80, 1.48, 0.40),
    ('doc_male_scrub1.jpg', 'low-back-pain-causes-symptoms-treatment.jpg', 0.80, 1.45, 0.40),
    ('doc_female_coat1.jpg', 'chronic-low-back-pain-rehabilitation.jpg', 0.80, 1.45, 0.40),
    ('doc_male_coat2.jpg', 'acute-back-pain-first-aid-physiotherapy.jpg', 0.80, 1.48, 0.40),
    ('doc_female_scrub1.jpg', 'mechanical-back-pain-causes-exercises.jpg', 0.78, 1.50, 0.40),
    ('doc_female_coat2.jpg', 'lumbar-spondylosis-physiotherapy-management.jpg', 0.78, 1.48, 0.40),
    ('doc_male_scrub2.jpg', 'lumbar-spondylitis-symptoms-and-care.jpg', 0.78, 1.50, 0.40),
    ('doc_male_coat3.jpg', 'lumbar-disc-prolapse-non-surgical-recovery.jpg', 0.80, 1.48, 0.40),
    ('doc_consult_m1.jpg', 'slipped-disc-herniated-disc-treatment.jpg', 0.80, 1.48, 0.40),
    ('doc_female_scrub2.jpg', 'disc-bulge-causes-reversal-physiotherapy.jpg', 0.80, 1.48, 0.40),
    ('doc_female_spine1.jpg', 'degenerative-disc-disease-spine-care.jpg', 0.80, 1.50, 0.40),
    ('doc_female_senior1.jpg', 'sciatica-nerve-pain-relief-exercises.jpg', 0.80, 1.48, 0.40),
    ('doc_female_scrub3.jpg', 'lumbar-radiculopathy-diagnosis-treatment.jpg', 0.80, 1.48, 0.40),
    ('doc_male_senior1.jpg', 'spinal-stenosis-neurogenic-claudication.jpg', 0.60, 0.50, 0.12),
    ('doc_female_rehab1.jpg', 'spondylolisthesis-vertebral-slip-physiotherapy.jpg', 0.80, 1.45, 0.40),
    ('doc_male_rehab1.jpg', 'ankylosing-spondylitis-spine-mobility-exercises.jpg', 0.78, 1.48, 0.40),
    ('doc_female_physio1.jpg', 'sacroiliac-si-joint-dysfunction-rehab.jpg', 0.78, 1.50, 0.40),
    ('doc_female_neuro1.jpg', 'coccydynia-tailbone-pain-relief-physiotherapy.jpg', 0.80, 1.48, 0.40),
    ('doc_male_ortho1.jpg', 'facet-joint-syndrome-lumbar-spine-treatment.jpg', 0.78, 1.50, 0.40),
    ('doc_female_ortho1.jpg', 'back-muscle-spasm-causes-quick-relief.jpg', 0.80, 1.48, 0.40),
    ('doc_ergonomics1.jpg', 'postural-back-pain-desk-workers-ergonomics.jpg', 0.78, 1.50, 0.40),
    ('doc_posture1.jpg', 'thoracic-spine-pain-mid-back-rehabilitation.jpg', 0.60, 0.50, 0.12),
    ('doc_scoliosis1.jpg', 'scheuermanns-kyphosis-adolescent-spine-rehab.jpg', 0.80, 1.48, 0.40),
    ('public/images/therapist_avatar_1.jpg', 'scoliosis-non-surgical-physiotherapy-schroth.jpg', 0.80, 1.50, 0.40),
    ('public/images/therapist_avatar_2.jpg', 'hyperkyphosis-rounded-shoulders-treatment.jpg', 0.80, 1.50, 0.40),
    ('public/images/therapist_avatar_3.jpg', 'lumbar-hyperlordosis-anterior-pelvic-tilt.jpg', 0.80, 1.50, 0.40),
    ('public/images/therapist_avatar_4.jpg', 'spinal-fracture-compression-fracture-rehab.jpg', 0.80, 1.50, 0.40),
    ('public/images/home-nursing/nursing-service-post-surgical.jpg', 'post-spinal-surgery-rehabilitation-timeline.jpg', 0.42, 0.36, 0.07),
    ('public/images/physiotherapy/program-post-surgical.jpg', 'failed-back-surgery-syndrome-fbss-physio.jpg', 0.45, 0.38, 0.07),
    ('doc_rehab_clinic1.jpg', '5-everyday-habits-that-harm-your-spine.jpg', 0.60, 0.50, 0.12),
    ('doc_male_coat2.jpg', 'physiotherapy-vs-surgery-for-disc-problems.jpg', 0.80, 1.48, 0.40),
    ('doc_female_coat1.jpg', 'top-7-exercises-for-a-stronger-lower-back.jpg', 0.80, 1.45, 0.40),
]

# 15 Neck Conditions (All regenerated with character left-chest placement)
NECK_CONDITIONS = [
    ('public/images/physiotherapy/program-cervical.jpg', 'neck-pain.jpg', 0.48, 0.38, 0.07),
    ('public/images/physiotherapy/program-arthritis.jpg', 'cervical-spondylosis.jpg', 0.45, 0.35, 0.07),
    ('doc_female_coat2.jpg', 'cervical-spondylitis.jpg', 0.78, 1.48, 0.40),
    ('doc_male_spine1.jpg', 'cervical-disc-prolapse.jpg', 0.80, 1.48, 0.40),
    ('doc_female_spine1.jpg', 'cervical-radiculopathy.jpg', 0.80, 1.50, 0.40),
    ('doc_male_scrub1.jpg', 'cervical-disc-bulge.jpg', 0.80, 1.45, 0.40),
    ('doc_male_senior1.jpg', 'cervical-stenosis.jpg', 0.60, 0.50, 0.12),
    ('doc_female_neuro1.jpg', 'cervicogenic-headache.jpg', 0.80, 1.48, 0.40),
    ('doc_ergonomics1.jpg', 'text-neck-syndrome.jpg', 0.78, 1.50, 0.40),
    ('doc_male_coat3.jpg', 'whiplash-injury.jpg', 0.80, 1.48, 0.40),
    ('doc_female_scrub2.jpg', 'torticollis.jpg', 0.80, 1.48, 0.40),
    ('doc_female_physio1.jpg', 'upper-trapezius-spasm.jpg', 0.78, 1.50, 0.40),
    ('doc_posture1.jpg', 'postural-neck-pain.jpg', 0.60, 0.50, 0.12),
    ('doc_consult_m1.jpg', 'cervical-myelopathy.jpg', 0.80, 1.48, 0.40),
    ('public/images/home-nursing/nursing-service-post-surgical.jpg', 'post-cervical-surgery.jpg', 0.42, 0.36, 0.07),
]

# 6 General / Neuro / Knee Conditions
GENERAL_CONDITIONS = [
    ('doc_consult_m1.jpg', 'evidence-based-lower-back-pain-rehabilitation-at-home.jpg', 0.80, 1.48, 0.40),
    ('public/images/physiotherapy/physio-knee-treatment.jpg', 'managing-knee-osteoarthritis-quadriceps-strengthening-home-care.jpg', 0.62, 0.38, 0.07),
    ('doc_stroke_gait1.jpg', 'post-stroke-neurological-rehabilitation-timeline-and-neuroplasticity.jpg', 0.60, 0.50, 0.12),
    ('public/images/physiotherapy/program-neuro.jpg', 'stroke-rehabilitation-at-home-a-complete-guide.jpg', 0.45, 0.38, 0.07),
    ('doc_female_neuro2.jpg', 'understanding-neuroplasticity-in-stroke-recovery.jpg', 0.78, 1.50, 0.40),
    ('doc_neuro_clinic1.jpg', 'balance-training-after-stroke-steps-to-safer-movement.jpg', 0.60, 0.50, 0.12),
]

def resolve_source_path(src):
    if os.path.exists(src):
        return src
    raw_path = os.path.join(RAW_SOURCES_DIR, src)
    if os.path.exists(raw_path):
        return raw_path
    shoulder_path = os.path.join('public/images/blog/shoulder_sources', src)
    if os.path.exists(shoulder_path):
        return shoulder_path
    raise FileNotFoundError(f"Cannot find source image: {src}")

def generate_8k_image(source_spec, output_dir, out_filename, chest_x_ratio, chest_y_ratio, badge_scale_ratio):
    os.makedirs(output_dir, exist_ok=True)
    out_path = os.path.join(output_dir, out_filename)
    
    src_path = resolve_source_path(source_spec)
    print(f"Generating 8K: {out_filename} from {src_path}...")
    
    cv_img = cv2.imread(src_path)
    if cv_img is None:
        raise ValueError(f"Could not load image with OpenCV: {src_path}")
        
    orig_h, orig_w = cv_img.shape[:2]
    
    # Try OpenCV Haar face detection
    cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
    face_cascade = cv2.CascadeClassifier(cascade_path)
    gray = cv2.cvtColor(cv_img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 3)
    
    # Check if face is valid size (not tiny artifact)
    valid_faces = [f for f in faces if f[2] >= orig_w * 0.08]
    
    if len(valid_faces) > 0 and chest_x_ratio >= 0.70:
        f = max(valid_faces, key=lambda b: b[2] * b[3])
        fx, fy, fw, fh = f
        orig_cx = fx + int(fw * chest_x_ratio)
        orig_cy = fy + int(fh * chest_y_ratio)
        orig_badge_w = int(fw * badge_scale_ratio)
    else:
        # Use normalized position based on image dimensions
        orig_cx = int(orig_w * chest_x_ratio)
        orig_cy = int(orig_h * chest_y_ratio)
        orig_badge_w = int(orig_w * badge_scale_ratio)
        
    scale = TARGET_WIDTH_8K / orig_w
    target_w = TARGET_WIDTH_8K
    target_h = int(orig_h * scale)
    
    badge_x_8k = int(orig_cx * scale)
    badge_y_8k = int(orig_cy * scale)
    badge_size_8k = int(orig_badge_w * scale)
    
    pil_img = Image.open(src_path).convert('RGB')
    base_8k = pil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    base_8k = base_8k.filter(ImageFilter.UnsharpMask(radius=2, percent=115, threshold=2))
    
    if os.path.exists(LOGO_PATH):
        badge = Image.open(LOGO_PATH).convert('RGBA')
        badge_resized = badge.resize((badge_size_8k, badge_size_8k), Image.Resampling.LANCZOS)
        
        badge_x_8k = max(20, min(target_w - badge_size_8k - 20, badge_x_8k))
        badge_y_8k = max(20, min(target_h - badge_size_8k - 20, badge_y_8k))
        
        base_8k.paste(badge_resized, (badge_x_8k, badge_y_8k), badge_resized)
        
    base_8k.save(out_path, 'JPEG', quality=93, optimize=True)
    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f"   -> Saved {out_filename} ({target_w}x{target_h}, {size_mb:.2f} MB, Badge at {badge_x_8k},{badge_y_8k})")

def main():
    print("==================================================================")
    print("🏥 GENERATING 8K HD DOCTOR & PHYSIOTHERAPIST BRANDED BLOG IMAGES")
    print("   STRICT ARIES GOLD CREST LOGO PLACEMENT ON CHARACTER'S LEFT CHEST")
    print("==================================================================\n")
    
    # 1. Generate 32 Spine Images
    print("\n--- Generating 32 Spine Condition 8K Images ---")
    for src, out_name, cx_r, cy_r, b_r in SPINE_CONDITIONS:
        generate_8k_image(src, 'public/images/blog/spine', out_name, cx_r, cy_r, b_r)
        
    # 2. Generate 15 Neck Images
    print("\n--- Generating 15 Neck Condition 8K Images (Left Chest Branded) ---")
    for src, out_name, cx_r, cy_r, b_r in NECK_CONDITIONS:
        generate_8k_image(src, 'public/images/blog/neck', out_name, cx_r, cy_r, b_r)
        
    # 3. Generate 6 General / Neuro / Knee Images
    print("\n--- Generating 6 General / Neuro / Knee Condition 8K Images ---")
    for src, out_name, cx_r, cy_r, b_r in GENERAL_CONDITIONS:
        generate_8k_image(src, 'public/images/blog/general', out_name, cx_r, cy_r, b_r)
        
    print("\n🎉 ALL 53 TARGET 8K HD IMAGES GENERATED WITH LEFT-CHEST BRANDING!")

if __name__ == '__main__':
    main()
