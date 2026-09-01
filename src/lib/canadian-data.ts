import { 
  Condition, 
  Treatment, 
  ServiceCategory, 
  SurgicalRehabTimeline, 
  BiomechanicalMovement,
  BodyRegion 
} from "./types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "physiotherapy",
    title: "Orthopaedic & Musculoskeletal Physiotherapy",
    slug: "physiotherapy",
    tagline: "Restoring joint mechanics, spine alignment, and movement integrity.",
    description: "Evidence-informed assessment and physical rehabilitation for bone, joint, ligament, and muscle conditions.",
    iconName: "Activity",
    longDescription: "Our Canadian registered physiotherapists utilize advanced clinical reasoning, manual joint mobilizations, soft-tissue techniques, and individualized exercise prescription to resolve pain at its biomechanical source. Whether you are dealing with persistent lumbar discomfort or an acute sports injury, we build a structured path back to fluid movement.",
    clinicalObjectives: [
      "Alleviate acute and chronic pain without excessive pharmacological reliance",
      "Restore full functional range of motion and joint kinematics",
      "Correct compensatory movement patterns and postural imbalances",
      "Prescribe progressive loaded strengthening to prevent recurrence"
    ],
    targetConditions: ["Low back pain", "Neck stiffness", "Rotator cuff tendinopathy", "Knee osteoarthritis", "Sciatica", "Ankle instability"],
    careFormats: ["clinic", "in-home", "telehealth"]
  },
  {
    id: "sports-rehab",
    title: "Sports Injury & Athletic Performance Rehabilitation",
    slug: "sports-rehabilitation",
    tagline: "From acute injury to return-to-sport mastery.",
    description: "High-performance recovery protocols for athletes, runners, weekend warriors, and active Canadians.",
    iconName: "Zap",
    longDescription: "Sports physiotherapy is more than resting an injury—it is about restoring tissue capacity, explosive power, agility, and neuromuscular control. We utilize objective biomechanical tests, force-vector loading, and sport-specific drills to ensure safe return to peak performance.",
    clinicalObjectives: [
      "Accelerate ligament and tendon remodeling safely",
      "Restore kinetic chain power transfer and neuromuscular symmetry",
      "Minimize re-injury risk through objective return-to-play criteria",
      "Enhance sport-specific movement mechanics and endurance"
    ],
    targetConditions: ["ACL and meniscus tears", "Hamstring & quadriceps strains", "Achilles tendonitis", "Shoulder labral tears", "Running biomechanics"],
    careFormats: ["clinic", "in-home", "telehealth"]
  },
  {
    id: "post-surgical-rehab",
    title: "Post-Surgical Orthopaedic Rehabilitation",
    slug: "post-surgical-rehabilitation",
    tagline: "Guiding your body from the operating room back to confident life.",
    description: "Structured, phased post-operative care for joint replacements, ligament reconstructions, and spinal surgeries.",
    iconName: "ShieldPlus",
    longDescription: "While the surgeon performs the procedure, your long-term success is determined by the quality of your post-operative rehabilitation. We work alongside your surgeon's protocols, advancing from early tissue protection and swelling control to active joint loading and full daily independence.",
    clinicalObjectives: [
      "Manage early post-operative oedema, pain, and scar tissue mobility",
      "Prevent joint arthrofibrosis and restore physiological range of motion",
      "Rebuild muscular atrophy resulting from surgical downtime",
      "Restore independent gait, stair climbing, and recreational activity"
    ],
    targetConditions: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "ACL Reconstruction", "Rotator Cuff Repair", "Lumbar Discectomy & Spinal Fusion"],
    careFormats: ["in-home", "clinic", "telehealth"]
  },
  {
    id: "neurological-rehab",
    title: "Neurological Rehabilitation & Motor Recovery",
    slug: "neurological-rehabilitation",
    tagline: "Rewiring neural pathways through neuroplasticity-focused therapy.",
    description: "Specialized rehabilitation for stroke survivors, Parkinson's disease, Multiple Sclerosis, and balance disorders.",
    iconName: "Brain",
    longDescription: "Neurological conditions require intensive, repetitive, and task-specific movement practice to harness the brain's innate capacity for neuroplastic reorganization. Our specialized neuro-physiotherapists work with you in the clinic or at home to improve motor control, balance, and daily autonomy.",
    clinicalObjectives: [
      "Promote neuroplastic motor learning and cortical reorganization",
      "Manage hypertonicity, spasticity, and muscle rigidity",
      "Retrain safe, symmetrical gait and dynamic postural equilibrium",
      "Maximize functional independence in activities of daily living (ADLs)"
    ],
    targetConditions: ["Stroke / CVA Recovery", "Parkinson's Disease", "Multiple Sclerosis (MS)", "Traumatic Brain Injury", "Peripheral Neuropathy"],
    careFormats: ["in-home", "clinic", "telehealth"]
  },
  {
    id: "geriatric-mobility",
    title: "Geriatric Physiotherapy & Fall Prevention",
    slug: "geriatric-physiotherapy",
    tagline: "Empowering Canadian seniors with strength, stability, and independence.",
    description: "Dedicated in-home and clinic-based care to improve balance, bone density, and safe living.",
    iconName: "HeartHandshake",
    longDescription: "Aging should never mean giving up the activities you love. Our geriatric physiotherapy programs focus on core stability, lower limb power, joint conservation, and home safety audits to dramatically reduce fall risk and maintain vitality.",
    clinicalObjectives: [
      "Identify and correct multifactorial fall risk factors",
      "Strengthen anti-gravity postural muscles and hip stabilizers",
      "Improve bone loading for osteopenia and osteoporosis management",
      "Enhance safe transitions, stair climbing, and community mobility"
    ],
    targetConditions: ["Osteoporosis", "Age-related balance loss", "Degenerative osteoarthritis", "Post-fracture recovery", "Sarcopenia & frailty"],
    careFormats: ["in-home", "clinic", "telehealth"]
  },
  {
    id: "chronic-pain",
    title: "Persistent & Chronic Pain Management",
    slug: "chronic-pain-management",
    tagline: "De-sensitizing the nervous system and reclaiming physical vitality.",
    description: "Modern pain neuroscience education combined with graded movement and sensory modulation.",
    iconName: "Flame",
    longDescription: "When pain persists beyond standard tissue healing times, the central nervous system becomes sensitized. Our clinicians use modern pain science, graded motor imagery, pacing strategies, and gentle restorative movement to help calm an overactive alarm system.",
    clinicalObjectives: [
      "Re-conceptualize pain as a protective alarm rather than direct tissue damage",
      "Progressively expand tolerance to movement without triggering flare-ups",
      "Improve sleep, autonomic balance, and functional capacity",
      "Reduce dependence on passive modalities through self-efficacy"
    ],
    targetConditions: ["Fibromyalgia", "Chronic low back pain", "Complex Regional Pain Syndrome (CRPS)", "Myofascial pain syndrome", "Central sensitization"],
    careFormats: ["clinic", "in-home", "telehealth"]
  },
  {
    id: "vestibular-rehab",
    title: "Vestibular Rehabilitation & Dizziness Care",
    slug: "vestibular-rehabilitation",
    tagline: "Restoring equilibrium, gaze stability, and spatial confidence.",
    description: "Targeted therapy for vertigo, BPPV, inner ear dysfunction, and post-concussion dizziness.",
    iconName: "Compass",
    longDescription: "The vestibular system controls balance and stabilizes your vision when your head moves. Vestibular rehabilitation uses precise canalith repositioning maneuvers, gaze stabilization drills, and habituation exercises to resolve vertigo and lightheadedness.",
    clinicalObjectives: [
      "Reposition otoconia in Benign Paroxysmal Positional Vertigo (BPPV)",
      "Recalibrate the vestibulo-ocular reflex (VOR) for clear vision during head turns",
      "Desensitize motion sensitivity and visual vertigo triggers",
      "Restore dynamic balance and safe navigation in busy environments"
    ],
    targetConditions: ["BPPV (Vertigo)", "Vestibular Neuritis / Labyrinthitis", "Post-Concussion Syndrome", "Cervicogenic Dizziness", "Motion Intolerance"],
    careFormats: ["clinic", "telehealth"]
  },
  {
    id: "tmj-physio",
    title: "TMJ & Craniofacial Dysfunction Care",
    slug: "tmj-dysfunction",
    tagline: "Relieving jaw clicking, facial tension, and cervicogenic headaches.",
    description: "Specialized assessment and gentle intra-oral and cervical treatment for temporomandibular disorders.",
    iconName: "Smile",
    longDescription: "The temporomandibular joint (TMJ) and upper cervical spine work as an integrated unit. Our clinicians assess jaw mechanics, disc alignment, bite dynamics, and neck posture to relieve chronic facial pain, clicking, and headaches.",
    clinicalObjectives: [
      "Restore symmetrical jaw opening without deviation or pain",
      "Release hypertonic pterygoid, masseter, and temporalis muscles",
      "Address underlying cervical spine posture contributing to jaw strain",
      "Provide actionable lifestyle and clenching reduction strategies"
    ],
    targetConditions: ["TMJ disc displacement", "Jaw clicking & locking", "Bruxism (teeth grinding) soreness", "Cervicogenic headaches", "Facial myofascial pain"],
    careFormats: ["clinic", "in-home", "telehealth"]
  }
];

export const CONDITIONS_LIBRARY: Condition[] = [
  {
    id: "lumbar-spondylosis",
    name: "Lumbar Spondylosis & Disc Degeneration",
    slug: "lumbar-spondylosis",
    category: "orthopedic",
    bodyRegion: "spine",
    shortDescription: "Age-related or postural wear-and-tear of lumbar spinal vertebrae and intervertebral discs.",
    whatIsIt: "Lumbar spondylosis refers to degenerative changes in the lower spine, including disc thinning, facet joint arthrosis, and potential osteophyte (bone spur) formation. It commonly manifests as stiffness, localized ache, and reduced lumbar flexibility.",
    anatomyOverview: "The lumbar spine consists of 5 large vertebrae (L1–L5) separated by fibrocartilaginous shock-absorbing discs and stabilized by deep multifidus and transverse abdominis muscles.",
    symptoms: [
      "Morning stiffness in the lower back lasting 20–30 minutes",
      "Dull, aching pain aggravated by prolonged sitting or standing",
      "Reduced flexibility when bending forward or backward",
      "Occasional radiating tension into the buttocks"
    ],
    movementImpact: [
      "Difficulty putting on shoes and socks due to limited lumbar flexion",
      "Discomfort during long commutes or prolonged desk work",
      "Altered pelvic tilt leading to secondary hip or hamstring tightness"
    ],
    assessmentProtocol: [
      "Lumbar active and passive range of motion with overpressure testing",
      "Segmental joint mobility (PA pressures on L1–L5)",
      "Neurological screening (dermatomes, myotomes, deep tendon reflexes)",
      "Core and pelvic stabilizer endurance assessment (Biering-Sørensen test)"
    ],
    evidenceBasedTreatments: [
      "Manual joint mobilization to restore facet gliding mechanics",
      "Motor control exercises targeting lumbar multifidus and core muscles",
      "Gentle neural mobilization to maintain nerve root mobility",
      "Postural and ergonomic workstation modifications"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Symptom Modulation", duration: "Weeks 1–2", goal: "Reduce pain and restore initial gentle spinal mobility", focus: "Joint mobilizations, pain education, and gentle pelvic tilting." },
      { phase: "Phase 2: Motor Control", duration: "Weeks 3–6", goal: "Rebuild deep stabilizing muscle endurance", focus: "Bird-dog, dead bug variations, and hip hinge patterning." },
      { phase: "Phase 3: Functional Capacity", duration: "Weeks 6–12", goal: "Return to loaded lifting, bending, and recreational sport", focus: "Loaded squats, deadlifts, and lifestyle conditioning." }
    ],
    homeCareEducation: [
      "Take micro-movement breaks every 45 minutes during desk work",
      "Perform daily gentle lumbar cat-cow and knee-to-chest stretches",
      "Maintain brisk daily walking (20–30 minutes) to promote disc nutrient exchange"
    ],
    redFlagsUrgentCare: [
      "Sudden loss of bowel or bladder control (Cauda Equina warning)",
      "Numbness in the saddle/groin area",
      "Progressive muscle weakness such as foot drop (inability to lift the toes)",
      "Unexplained fever or unintended significant weight loss"
    ],
    faqs: [
      {
        question: "Can lumbar spondylosis be reversed?",
        answer: "While degenerative structural changes are a normal part of aging, physical symptoms, stiffness, and pain can be significantly reduced or completely resolved through targeted rehabilitation and movement optimization."
      },
      {
        question: "Is bed rest recommended for lower back pain?",
        answer: "No. Modern clinical guidelines strongly recommend staying gently active. Prolonged bed rest leads to muscle deconditioning and worsens spinal stiffness."
      }
    ],
    relatedConditions: ["sciatica", "disc-bulge-herniation", "spinal-stenosis"],
    relatedTreatments: ["manual-therapy", "exercise-therapy", "spinal-decompression"],
    interactive3DModelKey: "spine-lumbar"
  },
  {
    id: "acl-tear",
    name: "Anterior Cruciate Ligament (ACL) Tear & Sprain",
    slug: "acl-tear",
    category: "sports",
    bodyRegion: "knee",
    shortDescription: "Partial or complete disruption of the primary stabilizing ligament inside the knee joint.",
    whatIsIt: "The ACL is one of the main stabilizing ligaments of the knee, preventing excessive forward translation of the tibia relative to the femur and controlling rotational stress during pivoting movements.",
    anatomyOverview: "Located deep within the intercondylar notch of the knee, the ACL connects the posterior aspect of the femur to the anterior intercondylar area of the tibia.",
    symptoms: [
      "A distinct 'pop' sensation or sound at the moment of injury",
      "Rapid swelling (hemarthrosis) occurring within 2–6 hours",
      "Feeling of knee instability or 'giving way' during weight-bearing",
      "Significant loss of full knee extension and flexion"
    ],
    movementImpact: [
      "Inability to pivot, cut, or change directions at speed",
      "Difficulty descending stairs due to lack of anterior knee restraint",
      "Quad inhibition (arthrogenic muscle inhibition) causing noticeable leg weakness"
    ],
    assessmentProtocol: [
      "Lachman Test and Anterior Drawer Test for anterior laxity",
      "Pivot Shift Test to evaluate rotational instability",
      "Meniscal and collateral ligament assessment (McMurray, Valgus/Varus stress)",
      "Quadriceps strength index and single-leg hop battery (during later rehab)"
    ],
    evidenceBasedTreatments: [
      "Early swelling management and restoration of terminal knee extension",
      "Intensive quadriceps and hamstring neuromuscular re-education",
      "Pre-habilitation prior to surgical reconstruction if indicated",
      "Post-operative phased rehabilitation or non-operative conservative pathway"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Protection & Extension", duration: "Weeks 0–4", goal: "Full passive extension, reduce swelling, activate quads", focus: "Straight leg raises, patellar mobilizations, and cryotherapy." },
      { phase: "Phase 2: Strength & Neuromuscular", duration: "Weeks 5–16", goal: "Restore symmetrical leg strength and single-leg balance", focus: "Closed-chain squats, Bulgarian split squats, and perturbation drills." },
      { phase: "Phase 3: Agility & Return-to-Sport", duration: "Months 5–12", goal: "Pass objective hop tests, cutting drills, and psychological readiness", focus: "Deceleration training, reactive agility, and sport-specific conditioning." }
    ],
    homeCareEducation: [
      "Prioritize obtaining 0° extension (do not prop pillows under the knee while resting)",
      "Perform quad sets and ankle pumps frequently throughout the day",
      "Adhere strictly to crutch and weight-bearing guidance from your clinical team"
    ],
    redFlagsUrgentCare: [
      "Inability to bear any weight with severe bony tenderness (rule out fracture)",
      "Coldness, pale skin, or absent pulse in the foot (vascular compromise)",
      "Severe calf swelling, tenderness, and warmth (Deep Vein Thrombosis warning)"
    ],
    faqs: [
      {
        question: "Do all ACL tears require surgical reconstruction?",
        answer: "Not necessarily. Active individuals desiring a return to high-demand pivoting sports often opt for reconstruction, but many patients successfully rehab non-operatively through dedicated neuromuscular strengthening."
      }
    ],
    relatedConditions: ["meniscal-injury", "knee-osteoarthritis", "patellar-tendonitis"],
    relatedTreatments: ["exercise-therapy", "post-surgical-rehabilitation", "kinesio-taping"],
    interactive3DModelKey: "knee-acl"
  },
  {
    id: "rotator-cuff-injury",
    name: "Rotator Cuff Tendinopathy & Tears",
    slug: "rotator-cuff-injury",
    category: "orthopedic",
    bodyRegion: "shoulder",
    shortDescription: "Irritation, partial tear, or degeneration of the tendons stabilizing the glenohumeral joint.",
    whatIsIt: "The rotator cuff is a group of four muscles that hold the head of the humerus securely in the shallow glenoid socket. Tendinopathy or tears lead to pain during overhead movements and night pain when lying on the shoulder.",
    anatomyOverview: "Composed of the Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis tendons wrapping around the humeral head.",
    symptoms: [
      "Pain in the lateral aspect of the upper arm, especially during overhead lifting",
      "Painful arc of motion between 60° and 120° of arm elevation",
      "Difficulty sleeping on the affected shoulder",
      "Weakness when reaching behind the back or lifting objects away from the body"
    ],
    movementImpact: [
      "Struggling to put on jackets, reach seatbelts, or brush hair",
      "Compensatory shoulder hiking using the upper trapezius",
      "Loss of overhead throwing, swimming, or racquet sport capacity"
    ],
    assessmentProtocol: [
      "Scapulohumeral rhythm evaluation during arm elevation",
      "Specific cuff tests: Empty Can test (Supraspinatus), External rotation lag (Infraspinatus), Belly-press (Subscapularis)",
      "Subacromial impingement tests (Neer, Hawkins-Kennedy)",
      "Cervical spine screening to rule out radiating C5/C6 radiculopathy"
    ],
    evidenceBasedTreatments: [
      "Isomeric and progressive eccentric loading of the rotator cuff tendons",
      "Scapular upward rotation and posterior tilt retraining (Serratus Anterior & Lower Trap)",
      "Glenohumeral posterior capsule mobilizations",
      "Manual therapy for myofascial trigger points in the periscapular region"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Pain Modulation & Isometrics", duration: "Weeks 1–3", goal: "Calm reactive tendon and maintain passive mobility", focus: "Isometric external rotation, pendulum exercises, scapular setting." },
      { phase: "Phase 2: Progressive Loading", duration: "Weeks 4–8", goal: "Stimulate collagen remodeling with controlled resistance", focus: "Side-lying external rotations, cable rows, and overhead presses within comfort." },
      { phase: "Phase 3: Dynamic & Plyometric Capacity", duration: "Weeks 9–16", goal: "Restore high-velocity overhead power and endurance", focus: "Medicine ball throws, sport-specific drills, and heavy loaded carries." }
    ],
    homeCareEducation: [
      "Avoid sleeping directly on the affected shoulder (use a pillow under the arm for support)",
      "Perform daily isometric rotations to modulate pain and maintain muscle activation",
      "Avoid sudden jerking motions with arms extended away from the torso"
    ],
    redFlagsUrgentCare: [
      "Sudden total loss of active arm lifting following high-energy trauma",
      "Signs of infection (redness, heat, fever) following an injection or surgery",
      "Chest pressure or left arm pain associated with shortness of breath (rule out cardiac emergency)"
    ],
    faqs: [
      {
        question: "Can a rotator cuff tear heal without surgery?",
        answer: "Many partial and degenerative tears respond exceptionally well to targeted physiotherapy, strengthening the remaining cuff fibers and periscapular muscles to fully restore pain-free function."
      }
    ],
    relatedConditions: ["shoulder-impingement", "frozen-shoulder", "biceps-tendonitis"],
    relatedTreatments: ["exercise-therapy", "manual-therapy", "dry-needling"],
    interactive3DModelKey: "shoulder-cuff"
  },
  {
    id: "sciatica",
    name: "Sciatica & Lumbar Radiculopathy",
    slug: "sciatica",
    category: "orthopedic",
    bodyRegion: "spine",
    shortDescription: "Irritation or compression of the sciatic nerve causing radiating pain down the leg.",
    whatIsIt: "Sciatica is a symptom complex resulting from mechanical compression or chemical inflammation of one or more nerve roots (L4, L5, S1, S2, S3) that merge into the sciatic nerve.",
    anatomyOverview: "The sciatic nerve is the longest and thickest nerve in the human body, traveling from the lower back through the deep gluteal space down to the foot.",
    symptoms: [
      "Sharp, shooting, or electric shock-like pain radiating from the buttock into the leg or foot",
      "Numbness, tingling, or 'pins and needles' in specific dermatomal patterns",
      "Muscle weakness in the calf or foot (difficulty standing on toes or heels)",
      "Aggravation with sitting, coughing, or sneezing (increased intradiscal pressure)"
    ],
    movementImpact: [
      "Inability to sit comfortably for more than 10–15 minutes",
      "Antalgic lateral list (leaning away from the painful side to open nerve space)",
      "Reduced walking speed and stride length"
    ],
    assessmentProtocol: [
      "Straight Leg Raise (SLR) and Well-Leg Raise testing",
      "Slump Test for neural tension evaluation",
      "Lower extremity motor, sensory, and reflex examinations (L4 patellar, S1 Achilles)",
      "Directional preference assessment (McKenzie method)"
    ],
    evidenceBasedTreatments: [
      "Directional preference exercises (McKenzie extension or flexion based on response)",
      "Gentle neural slider and tensioner mobilization techniques",
      "Pain neuroscience education and pacing advice",
      "Lumbar mechanical traction / decompression where indicated"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Centralization", duration: "Weeks 1–3", goal: "Centralize symptoms (move pain out of the leg toward the back)", focus: "Directional preference exercises, positional relief, gentle nerve sliders." },
      { phase: "Phase 2: Mobilization", duration: "Weeks 4–8", goal: "Restore full forward bending and nerve excursion", focus: "Progressive neural glides, core stabilization, and walking tolerance." },
      { phase: "Phase 3: Resilient Loading", duration: "Weeks 8–12+", goal: "Prevent recurrence with full spinal strength", focus: "Deadlifts, hip hinges, and return to unrestricted physical activity." }
    ],
    homeCareEducation: [
      "Use lumbar rolls or supportive seating to prevent slouching",
      "Engage in short, frequent walks rather than long periods of uninterrupted sitting",
      "Perform prescribed directional exercises at regular intervals throughout the day"
    ],
    redFlagsUrgentCare: [
      "Sudden numbness around the anus, genitals, or inner thighs (saddle anesthesia)",
      "Incontinence or inability to pass urine",
      "Rapidly progressing weakness in both legs"
    ],
    faqs: [
      {
        question: "What does centralization of pain mean?",
        answer: "Centralization is a positive clinical sign where pain that was radiating down the leg retreats back toward the lower spine. It indicates that nerve compression is lessening."
      }
    ],
    relatedConditions: ["lumbar-spondylosis", "disc-bulge-herniation", "piriformis-syndrome"],
    relatedTreatments: ["spinal-decompression", "manual-therapy", "exercise-therapy"],
    interactive3DModelKey: "spine-nerve"
  },
  {
    id: "osteoarthritis-knee",
    name: "Knee Osteoarthritis & Joint Cartilage Wear",
    slug: "osteoarthritis",
    category: "orthopedic",
    bodyRegion: "knee",
    shortDescription: "Progressive changes in knee articular cartilage, subchondral bone, and synovial joint capsule.",
    whatIsIt: "Knee osteoarthritis is a whole-joint condition involving cartilage breakdown, joint space narrowing, mild synovial inflammation, and osteophyte formation, leading to stiffness and load-dependent pain.",
    anatomyOverview: "The tibiofemoral and patellofemoral compartments cushioned by articular hyaline cartilage and menisci.",
    symptoms: [
      "Joint stiffness upon waking, typically easing within 30 minutes of moving",
      "Ache and soreness during weight-bearing activities (stairs, long walks)",
      "Crepitus (grating or crunching sensations) during joint movement",
      "Mild intermittent joint effusion (swelling) after strenuous activity"
    ],
    movementImpact: [
      "Difficulty ascending and descending staircases",
      "Trouble rising from low chairs or getting in/out of vehicles",
      "Hesitancy during longer community walks"
    ],
    assessmentProtocol: [
      "Knee joint range of motion and joint line palpation",
      "Quadriceps and hip abductor strength grading",
      "30-Second Chair Stand test and Timed Up and Go (TUG) functional test",
      "Gait analysis for varus/valgus thrust and knee flexion angles"
    ],
    evidenceBasedTreatments: [
      "High-compliance progressive quadriceps and gluteal strengthening",
      "Low-impact aerobic conditioning (cycling, aquatic therapy, brisk walking)",
      "Manual therapy for patellofemoral and tibiofemoral mobility",
      "Weight management and biomechanical load optimization"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Joint Calming & Mobility", duration: "Weeks 1–4", goal: "Reduce joint irritation, improve knee flexion and extension", focus: "Stationary cycling, gentle range-of-motion drills, isometric quad sets." },
      { phase: "Phase 2: Progressive Loading", duration: "Weeks 5–12", goal: "Build robust muscle mass to absorb joint ground forces", focus: "Leg press, step-ups, glute bridges, and balance retraining." },
      { phase: "Phase 3: Lifelong Joint Preservation", duration: "Ongoing", goal: "Maintain joint health, independence, and delay surgery", focus: "Structured home exercise program and regular active living." }
    ],
    homeCareEducation: [
      "Remember: 'Motion is lotion' for arthritic joints—regular low-impact movement lubricates cartilage",
      "Use heat before activity to ease morning stiffness and cold packs after strenuous loading if warm",
      "Wear supportive footwear with cushioned soles"
    ],
    redFlagsUrgentCare: [
      "A hot, red, and severely swollen knee accompanied by systemic fever (rule out septic arthritis)",
      "Sudden complete inability to bear weight with no prior trauma",
      "Severe calf pain and swelling"
    ],
    faqs: [
      {
        question: "Will exercise wear out my knee cartilage faster?",
        answer: "No. High-quality scientific research proves that appropriate, graduated exercise strengthens the surrounding muscles, improves joint lubrication, and does not accelerate cartilage wear."
      }
    ],
    relatedConditions: ["total-knee-replacement", "patellar-tendonitis", "meniscal-injury"],
    relatedTreatments: ["exercise-therapy", "manual-therapy", "aquatic-therapy"],
    interactive3DModelKey: "knee-oa"
  },
  {
    id: "carpal-tunnel-syndrome",
    name: "Carpal Tunnel Syndrome (CTS)",
    slug: "carpal-tunnel-syndrome",
    category: "orthopedic",
    bodyRegion: "wrist",
    shortDescription: "Compression of the median nerve as it travels through the fibro-osseous carpal tunnel at the wrist.",
    whatIsIt: "Carpal Tunnel Syndrome occurs when elevated pressure inside the carpal tunnel compromises blood flow and signal transmission across the median nerve.",
    anatomyOverview: "Bounded by carpal bones posteriorly and the transverse carpal ligament anteriorly, housing 9 flexor tendons and the median nerve.",
    symptoms: [
      "Numbness and tingling in the thumb, index, middle, and radial half of the ring finger",
      "Nocturnal symptoms waking the patient from sleep (often relieved by shaking the hand)",
      "Clumsiness and dropping objects due to diminished fingertip sensation",
      "Weakness in thumb abduction and pinch grip"
    ],
    movementImpact: [
      "Difficulty typing on keyboards, writing, or handling small objects like buttons",
      "Weakness opening jars or holding steering wheels for extended drives"
    ],
    assessmentProtocol: [
      "Phalen's Test (sustained wrist flexion for 60 seconds)",
      "Tinel's Sign over the carpal tunnel",
      "Carpal Compression Test (Durkan's test)",
      "Thenar muscle bulk and strength testing (Abductor Pollicis Brevis)"
    ],
    evidenceBasedTreatments: [
      "Nocturnal neutral wrist splinting to reduce peak canal pressure",
      "Median nerve and flexor tendon gliding exercises",
      "Ergonomic adjustments for computer mice and workstation setup",
      "Manual therapy for forearm flexor myofascial tension"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Decompression & Night Splinting", duration: "Weeks 1–3", goal: "Eliminate nocturnal awakenings and reduce nerve irritability", focus: "Neutral wrist splint fitting, ergonomic coaching, tendon glides." },
      { phase: "Phase 2: Nerve Mobilization & Grip", duration: "Weeks 4–8", goal: "Restore full nerve glide excursion and functional pinch strength", focus: "Median nerve sliders, lumbrical strengthening, dexterity drills." },
      { phase: "Phase 3: Work Resilience", duration: "Weeks 8–12", goal: "Sustain pain-free workstation endurance", focus: "Loaded forearm conditioning and sustained task tolerance." }
    ],
    homeCareEducation: [
      "Wear your neutral wrist splint consistently every night",
      "Avoid sustained tight gripping or extreme wrist bending during daily tasks",
      "Take 30-second micro-breaks every hour to perform gentle nerve gliding drills"
    ],
    redFlagsUrgentCare: [
      "Severe visible wasting/atrophy of the thenar muscle pad at the base of the thumb",
      "Constant loss of sensation in the fingertips lasting days without fluctuation",
      "Sudden acute hand swelling and severe pain following a wrist fracture"
    ],
    faqs: [
      {
        question: "Can Carpal Tunnel Syndrome be resolved without surgery?",
        answer: "Yes, mild-to-moderate CTS responds very favorably to conservative physical therapy, night splinting, and nerve gliding exercises."
      }
    ],
    relatedConditions: ["de-quervains-tenosynovitis", "cubital-tunnel-syndrome", "cervical-spondylosis"],
    relatedTreatments: ["manual-therapy", "exercise-therapy", "ultrasound-therapy"],
    interactive3DModelKey: "wrist-cts"
  },
  {
    id: "stroke-rehabilitation",
    name: "Stroke & Neurological Motor Recovery",
    slug: "stroke-rehabilitation",
    category: "neurological",
    bodyRegion: "spine",
    shortDescription: "Neuroplasticity-based physical therapy to restore movement, balance, and independence after stroke.",
    whatIsIt: "Following a cerebrovascular accident (ischemic or hemorrhagic stroke), brain tissue is damaged, disrupting signals between the brain and musculoskeletal system. Neurological rehabilitation aims to rewire alternate neural pathways.",
    anatomyOverview: "Affects the central nervous system, descending corticospinal motor tracts, and bilateral motor control centers.",
    symptoms: [
      "Hemiparesis or hemiplegia (weakness or paralysis affecting one side of the body)",
      "Spasticity and altered muscle tone in the affected arm or leg",
      "Impaired balance, spatial neglect, and increased fall risk",
      "Difficulty with motor planning and fluid gait coordination"
    ],
    movementImpact: [
      "Asymmetrical walking pattern with circumduction of the affected leg",
      "Difficulty standing up from a chair without upper limb compensation",
      "Reduced functional use of the affected hand for holding utensils or dressing"
    ],
    assessmentProtocol: [
      "Fugl-Meyer Assessment for motor recovery grading",
      "Berg Balance Scale and 10-Meter Walk Test",
      "Modified Ashworth Scale for spasticity quantification",
      "Assessment of posture, midline orientation, and shoulder subluxation"
    ],
    evidenceBasedTreatments: [
      "Task-Specific Training (repetitive practice of real-life functional tasks)",
      "Constraint-Induced Movement Therapy (CIMT) where clinically appropriate",
      "Body-weight supported gait training and functional electrical stimulation (FES)",
      "Neuro-developmental balance and transfers retraining"
    ],
    rehabilitationTimeline: [
      { phase: "Phase 1: Early Bed & Chair Mobility", duration: "Weeks 1–4", goal: "Safe sitting balance, transfers, prevent shoulder subluxation", focus: "Trunk control, bed mobility, sit-to-stand mechanics, tone management." },
      { phase: "Phase 2: Standing & Gait Re-Education", duration: "Weeks 5–16", goal: "Symmetrical weight-bearing, safe walking with or without assistive aids", focus: "Overground gait drills, step training, spasticity stretches, hand grasp." },
      { phase: "Phase 3: Community Independence", duration: "Months 4–12+", goal: "Outdoor walking, community navigation, dual-task mobility", focus: "Advanced dynamic balance, fine motor dexterity, and recreational return." }
    ],
    homeCareEducation: [
      "Encourage use of the affected arm and leg in daily routines whenever safely possible",
      "Position the affected shoulder with proper support to avoid subluxation strain",
      "Perform daily passive and active-assisted range of motion to prevent joint contractures"
    ],
    redFlagsUrgentCare: [
      "Sudden onset of new facial droop, arm weakness, or slurred speech (Call 911 immediately)",
      "Severe sudden headache of unknown cause",
      "Sudden loss of vision or sudden acute balance collapse"
    ],
    faqs: [
      {
        question: "Can functional recovery still occur months or years after a stroke?",
        answer: "Yes. While the fastest rate of neuroplastic recovery occurs in the first 3–6 months, high-repetition task-specific physical therapy can stimulate functional motor improvements for years post-stroke."
      }
    ],
    relatedConditions: ["parkinsons-disease", "multiple-sclerosis", "cerebral-palsy"],
    relatedTreatments: ["neurological-rehabilitation", "exercise-therapy", "home-physiotherapy"],
    interactive3DModelKey: "neuro-brain"
  }
];

export const TREATMENTS_UNIVERSE: Treatment[] = [
  {
    id: "manual-therapy",
    name: "Orthopaedic Manual Therapy (OMT)",
    slug: "manual-therapy",
    category: "hands-on",
    shortDescription: "Specialized hands-on clinical techniques targeting joint mobilization, soft tissue release, and spinal alignment.",
    whatItIs: "Manual therapy encompasses skilled physical techniques applied directly by the physiotherapist to modulate pain, increase range of motion, reduce myofascial restriction, and promote tissue healing.",
    howItWorks: "Through passive joint gliding (Grades I–IV), neurodynamic sliding, and deep myofascial release, manual therapy stimulates mechanoreceptors in joint capsules and muscles. This neurophysiologically dampens nociceptive pain signals while mechanically restoring joint lubrication.",
    whoItHelps: [
      "Individuals with stiff spinal joints (neck and back pain)",
      "Patients recovering from joint sprains or fractures",
      "Sufferers of adhesive capsulitis (frozen shoulder)",
      "Athletes with restricted joint range of motion"
    ],
    sessionExpectations: [
      "Detailed biomechanical palpation and joint assessment",
      "Targeted passive mobilizations tailored to your tolerance",
      "Immediate re-testing of your active movement to measure gains",
      "Follow-up corrective exercises to solidify newly gained range"
    ],
    evidenceSummary: "High-level randomized controlled trials demonstrate that manual therapy combined with active therapeutic exercise yields superior pain and functional outcomes compared to passive modalities or exercise alone.",
    treatedConditions: ["lumbar-spondylosis", "rotator-cuff-injury", "sciatica", "cervical-spondylosis", "frozen-shoulder"],
    cadPricingEstimate: "Included in standard Canadian registered physiotherapy session ($95–$130/visit)"
  },
  {
    id: "exercise-therapy",
    name: "Evidence-Based Therapeutic Exercise Prescription",
    slug: "exercise-therapy",
    category: "exercise-therapy",
    shortDescription: "Individualized, progressive movement and strength protocols designed to rebuild tissue capacity.",
    whatItIs: "Therapeutic exercise is the cornerstone of sustainable physical rehabilitation. Rather than generic gym exercises, it utilizes precise loading, motor control training, and functional drills tailored to your specific biomechanical profile.",
    howItWorks: "Musculoskeletal tissues require mechanical loading (mechanotransduction) to stimulate cellular synthesis, increase tendon stiffness, enhance bone density, and rebuild muscular cross-sectional area.",
    whoItHelps: [
      "Anyone recovering from surgery, trauma, or persistent pain",
      "Individuals with muscular imbalances and postural deconditioning",
      "Athletes seeking peak performance and injury resilience",
      "Seniors aiming to preserve balance and independence"
    ],
    sessionExpectations: [
      "One-on-one supervision and real-time form correction",
      "Clear explanation of the biomechanical purpose of every movement",
      "Gradual progressive overload calibrated to your tissue healing phase",
      "High-definition video home exercise program accessible via mobile app"
    ],
    evidenceSummary: "Therapeutic exercise is universally recognized across global clinical guidelines as the primary intervention for long-term musculoskeletal recovery.",
    treatedConditions: ["acl-tear", "lumbar-spondylosis", "osteoarthritis", "rotator-cuff-injury"],
    cadPricingEstimate: "Included in standard Canadian registered physiotherapy session ($95–$130/visit)"
  },
  {
    id: "dry-needling",
    name: "Intramuscular Stimulation (IMS) / Dry Needling",
    slug: "dry-needling",
    category: "specialized-care",
    shortDescription: "Fine-filament needle insertion into myofascial trigger points to release deep neuromuscular tension.",
    whatItIs: "Dry needling is a specialized technique practiced by rostered, certified physiotherapists. It involves inserting thin filiform needles without medication into taut bands of skeletal muscle.",
    howItWorks: "The needle creates a localized twitch response in the hyperactive motor endplate, triggering immediate biochemical normalization, increased local micro-circulation, and profound muscular relaxation.",
    whoItHelps: [
      "Patients with chronic deep muscular knots and trigger points",
      "Persistent neck stiffness and cervicogenic tension headaches",
      "Athletes with stubborn hamstring, calf, or gluteal tightness",
      "Individuals with chronic myofascial pain syndrome"
    ],
    sessionExpectations: [
      "Precise palpation to locate trigger points",
      "A brief, distinctive local twitch response sensation during treatment",
      "Gentle post-needling stretching and warmth application",
      "Mild muscle soreness lasting 12–24 hours followed by significant tension relief"
    ],
    evidenceSummary: "Clinical trials confirm dry needling accelerates short- and medium-term pain reduction and improves range of motion when integrated into a comprehensive rehabilitation plan.",
    treatedConditions: ["rotator-cuff-injury", "lumbar-spondylosis", "carpal-tunnel-syndrome", "plantar-fasciitis"],
    cadPricingEstimate: "Available within registered physiotherapy sessions where certified ($95–$140/visit)"
  },
  {
    id: "spinal-decompression",
    name: "Spinal Decompression & Traction Therapy",
    slug: "spinal-decompression",
    category: "technology-modality",
    shortDescription: "Computerized mechanical decompression to relieve intradiscal pressure and nerve root impingement.",
    whatItIs: "Spinal decompression uses gentle, calibrated distraction forces applied to the cervical or lumbar spine to decompress intervertebral discs and facet joints.",
    howItWorks: "By creating localized negative intradiscal pressure (vacuum effect), decompression promotes the retraction of bulging disc material and enhances the influx of healing fluids and oxygen to compressed nerve roots.",
    whoItHelps: [
      "Patients with herniated, bulging, or degenerative spinal discs",
      "Individuals suffering from sciatica and lumbar radiculopathy",
      "Patients with cervical radiculopathy (pinched nerve in the neck)",
      "Individuals with spinal facet joint arthrosis"
    ],
    sessionExpectations: [
      "Comfortable positioning on a specialized decompression table",
      "Gradual, cyclical pull-and-release distraction customized to your weight and condition",
      "Painless relaxation during the 15–20 minute session",
      "Post-decompression stabilization exercises"
    ],
    evidenceSummary: "Effective in reducing radiating neural symptoms and expanding intervertebral foramen space for nerve relief.",
    treatedConditions: ["sciatica", "lumbar-spondylosis", "cervical-spondylosis", "disc-bulge-herniation"],
    cadPricingEstimate: "Integrated into clinic-based spine therapy packages ($110–$145/session)"
  }
];

export const SURGICAL_REHAB_TIMELINES: SurgicalRehabTimeline[] = [
  {
    id: "tkr-rehab",
    procedureName: "Total Knee Replacement (TKR / Arthroplasty)",
    slug: "total-knee-replacement",
    anatomicalRegion: "knee",
    procedureOverview: "Total Knee Replacement involves replacing damaged arthritic joint surfaces of the femur, tibia, and patella with precision medical-grade titanium and polyethylene components.",
    surgicalDistinction: "The orthopaedic surgical team performs the joint replacement procedure. Your AriesXpert physiotherapy team guides the essential multi-month rehabilitation required to rebuild muscle power, restore knee flexion/extension, and return to independent living.",
    phases: [
      {
        phaseId: "pre-op",
        title: "Pre-Operative Prehabilitation",
        timelineLabel: "2–6 Weeks Before Surgery",
        anatomicalState: "Arthritic joint with muscle guarding and quadriceps weakness.",
        rehabFocus: [
          "Strengthen quadriceps and gluteals prior to hospital admission",
          "Learn crutch and walker gait mechanics in advance",
          "Set up home environment for post-hospital safety"
        ],
        precautions: ["Avoid high-impact provocative activities"],
        movementGoal: "Maximize baseline strength to shorten post-op hospital stay."
      },
      {
        phaseId: "day1",
        title: "Hospital Discharge & Early Home Care",
        timelineLabel: "Day 1 – Week 1 Post-Op",
        anatomicalState: "New joint implant with acute surgical swelling, incision wound, and quad inhibition.",
        rehabFocus: [
          "Active-assisted knee extension to reach 0° as early as possible",
          "Ankle pumps and gentle heel slides to prevent blood clots",
          "Safe bed-to-chair transfers and walker ambulation"
        ],
        precautions: ["Keep incision clean and dry", "Do not put pillows under the knee joint while sleeping"],
        movementGoal: "Achieve 0° extension, 80° flexion, and independent transfer ability."
      },
      {
        phaseId: "week2-6",
        title: "Mobility & Gait Normalization",
        timelineLabel: "Weeks 2 – 6 Post-Op",
        anatomicalState: "Surgical swelling subsiding; soft tissue remodeling around prosthetic components.",
        rehabFocus: [
          "Achieve >110° of knee flexion and full terminal extension",
          "Progress from walker to single cane or unassisted walking",
          "Begin stationary cycling for smooth continuous joint motion"
        ],
        precautions: ["Monitor for signs of infection or calf swelling"],
        movementGoal: "Normal heel-toe walking gait and reciprocal stair ascent."
      },
      {
        phaseId: "week6-12",
        title: "Strength & Endurance Progression",
        timelineLabel: "Weeks 6 – 12 Post-Op",
        anatomicalState: "Solid osseous integration of implant; increasing soft tissue resilience.",
        rehabFocus: [
          "Progressive resistance leg press, mini-squats, and step-downs",
          "Proprioceptive balance pad training and core stability",
          "Community walking for 30–45 minutes without fatigue"
        ],
        precautions: ["Avoid sudden twisting or high-impact running"],
        movementGoal: "Achieve >120° flexion, climb stairs reciprocally, and return to driving."
      },
      {
        phaseId: "month3-6",
        title: "Return to Active Living",
        timelineLabel: "Months 3 – 6+ Post-Op",
        anatomicalState: "Mature soft tissue healing and rebuilt quadriceps volume.",
        rehabFocus: [
          "Return to recreational hiking, golfing, swimming, and cycling",
          "Lifelong joint preservation and maintenance conditioning"
        ],
        precautions: ["High-impact contact sports generally discouraged"],
        movementGoal: "Move with confidence, zero apprehension, and full physical freedom."
      }
    ],
    faqs: [
      {
        question: "Why is achieving 0° knee extension so critical after surgery?",
        answer: "Full knee extension is essential for normal, symmetrical walking and standing. If you cannot fully straighten the knee, your quadriceps muscle must work twice as hard with every step, leading to fatigue and gait abnormalities."
      },
      {
        question: "When can in-home physiotherapy begin after leaving the hospital?",
        answer: "In-home physiotherapy typically begins within 24 to 48 hours of hospital discharge, ensuring continuity of care during the most critical early recovery window."
      }
    ]
  },
  {
    id: "acl-recon-rehab",
    procedureName: "ACL Surgical Reconstruction & Return-to-Sport",
    slug: "acl-reconstruction",
    anatomicalRegion: "knee",
    procedureOverview: "Surgical replacement of the torn ACL using a tendon autograft (hamstring, bone-patellar tendon-bone, or quadriceps tendon) secured with bio-absorbable screws.",
    surgicalDistinction: "The surgeon securely anchors the graft inside the knee. Your AriesXpert rehabilitation team guides the 9–12 month biological ligamentization and athletic re-conditioning process.",
    phases: [
      {
        phaseId: "phase1",
        title: "Graft Protection & Terminal Extension",
        timelineLabel: "Weeks 0 – 4 Post-Op",
        anatomicalState: "Fragile autograft undergoing early avascular necrosis before revascularization begins.",
        rehabFocus: [
          "Attain full passive knee extension equal to opposite leg",
          "Eliminate arthrogenic quad inhibition via electrical stimulation and quad sets",
          "Normalize crutch-assisted gait"
        ],
        precautions: ["No open-chain resisted quad extensions (0°–45°)", "Avoid active knee twisting"],
        movementGoal: "0° extension, 90°+ flexion, active straight leg raise with zero extensor lag."
      },
      {
        phaseId: "phase2",
        title: "Neuromuscular & Hypertrophy",
        timelineLabel: "Weeks 5 – 12 Post-Op",
        anatomicalState: "Graft revascularization (ligamentization) underway; vulnerable mechanical strength.",
        rehabFocus: [
          "Closed-chain squats, leg press, and Romanian deadlifts",
          "Single-leg dynamic balance and perturbation drills",
          "Stationary cycling and outdoor walking progression"
        ],
        precautions: ["Avoid premature running or jump landings"],
        movementGoal: "Full knee range of motion, limb symmetry index (LSI) > 70%."
      },
      {
        phaseId: "phase3",
        title: "Running & Plyometrics",
        timelineLabel: "Months 4 – 6 Post-Op",
        anatomicalState: "Graft remodeling and increasing tensile collagen density.",
        rehabFocus: [
          "Structured straight-line return-to-running progression",
          "Double-leg and single-leg box jumps and landing mechanics",
          "Eccentric hamstring and quadriceps strengthening"
        ],
        precautions: ["Strict criteria required before running clearance (quad strength > 75% of uninjured side)"],
        movementGoal: "Symmetrical landing mechanics and pain-free 20-minute interval running."
      },
      {
        phaseId: "phase4",
        title: "Agility & Return-to-Sport Battery",
        timelineLabel: "Months 7 – 12 Post-Op",
        anatomicalState: "Mature graft integration.",
        rehabFocus: [
          "Unplanned reactive agility, cutting, and sport-specific practice",
          "Comprehensive Return-to-Sport testing (Hop battery, Y-Balance, psychological readiness scale)"
        ],
        precautions: ["Do not return to full competition until passing objective 90%+ symmetry criteria"],
        movementGoal: "Full clearance for unrestricted competitive athletic competition."
      }
    ],
    faqs: [
      {
        question: "Why does ACL rehabilitation take 9 to 12 months?",
        answer: "Biological ligamentization of the tendon graft takes 9 to 12 months to develop mature tensile strength. Returning to sport before 9 months significantly increases the risk of graft re-tear."
      }
    ]
  },
  {
    id: "thr-rehab",
    procedureName: "Total Hip Replacement (THR / Arthroplasty)",
    slug: "total-hip-replacement",
    anatomicalRegion: "hip",
    procedureOverview: "Replacing the arthritic acetabulum (socket) and femoral head (ball) with prosthetic titanium and ceramic components.",
    surgicalDistinction: "The surgeon stabilizes the joint mechanics. Your physiotherapy team restores pelvic stability, gait symmetry, and abductor strength.",
    phases: [
      {
        phaseId: "phase1",
        title: "Early Protection & Mobilization",
        timelineLabel: "Day 1 – Week 2 Post-Op",
        anatomicalState: "New hip prosthesis settling into surrounding bone.",
        rehabFocus: [
          "Adherence to surgical approach precautions (anterior vs. posterior)",
          "Gluteal isometric setting and safe transfer mechanics",
          "Independent walker/crutch ambulation"
        ],
        precautions: ["Posterior precautions: avoid bending hip past 90°, crossing legs, or internal rotation"],
        movementGoal: "Independent transfers, stair climbing, and minimal swelling."
      },
      {
        phaseId: "phase2",
        title: "Hip Abductor Strengthening",
        timelineLabel: "Weeks 3 – 8 Post-Op",
        anatomicalState: "Surgical soft tissue incision healed; progressive bone ingrowth.",
        rehabFocus: [
          "Side-lying hip abductor strengthening to eliminate Trendelenburg limp",
          "Transition from walker to single cane to unassisted walking",
          "Gentle hip extension and flexion mobility drills"
        ],
        precautions: ["Avoid sudden forceful hip twisting"],
        movementGoal: "Symmetrical gait with no lateral trunk lurch."
      },
      {
        phaseId: "phase3",
        title: "Functional Independence & Recreation",
        timelineLabel: "Weeks 9 – 16+ Post-Op",
        anatomicalState: "Strong prosthetic osseointegration.",
        rehabFocus: [
          "Loaded squats, lunges, and balance pad training",
          "Return to swimming, golf, cycling, and long-distance walking"
        ],
        precautions: ["High-impact distance running usually not advised"],
        movementGoal: "Complete freedom in daily activities with zero hip stiffness."
      }
    ],
    faqs: [
      {
        question: "What is the difference between anterior and posterior hip replacement rehab?",
        answer: "Anterior approach spares the gluteal muscles and generally has fewer movement restrictions early on, while posterior approach requires specific precautions (avoiding bending past 90°) for the first 6 weeks to protect healing posterior tissues."
      }
    ]
  }
];

export const BIOMECHANICAL_MOVEMENTS: BiomechanicalMovement[] = [
  {
    id: "gait-walking",
    title: "Gait & Walking Biomechanics",
    slug: "gait-biomechanics",
    description: "The cyclical sequence of stance and swing phases that propels the body forward efficiently.",
    primaryJointsInvolved: ["Ankle / Talocrural", "Knee", "Hip", "Pelvis / Lumbar spine"],
    criticalKinematicAngles: [
      { joint: "Ankle at Initial Contact", optimalAngle: "0° (Neutral dorsiflexion)", compensationWarning: "Foot slap or premature toe strike indicating weak tibialis anterior." },
      { joint: "Knee at Mid-Stance", optimalAngle: "15°–20° Flexion (Shock absorption)", compensationWarning: "Knee hyperextension (recurvatum) indicating weak quadriceps or spasticity." },
      { joint: "Hip at Terminal Stance", optimalAngle: "10°–15° Extension", compensationWarning: "Forward trunk lean or anterior pelvic tilt due to tight hip flexors." }
    ],
    muscleActivationGroups: [
      { name: "Gluteus Medius", role: "stabilizer", functionInMovement: "Prevents contralateral pelvic drop (Trendelenburg sign) during single-leg stance." },
      { name: "Quadriceps Femoris", role: "prime-mover", functionInMovement: "Controls knee flexion during initial weight acceptance." },
      { name: "Gastrocnemius / Soleus", role: "prime-mover", functionInMovement: "Generates push-off propulsive force at terminal stance." }
    ],
    clinicalAssessments: ["Gait velocity measurement", "Cadence and step length symmetry", "Ground reaction force distribution"]
  },
  {
    id: "squat-kinematics",
    title: "Squat Mechanics & Hip Hinge",
    slug: "squat-mechanics",
    description: "The fundamental multi-joint lower limb loading pattern required for sitting, lifting, and athletic power.",
    primaryJointsInvolved: ["Hip", "Knee", "Ankle", "Thoracolumbar Spine"],
    criticalKinematicAngles: [
      { joint: "Torso / Tibia Parallelism", optimalAngle: "Parallel alignment", compensationWarning: "Excessive forward torso tilt indicating restricted ankle dorsiflexion or weak quads." },
      { joint: "Knee Frontal Plane Angle", optimalAngle: "Tracking in line with 2nd/3rd toe", compensationWarning: "Dynamic knee valgus (knees collapsing inward) indicating gluteal weakness." },
      { joint: "Lumbar Spine Angle", optimalAngle: "Neutral lordosis maintained", compensationWarning: "'Butt wink' (lumbar flexion at bottom of squat) risking disc overload." }
    ],
    muscleActivationGroups: [
      { name: "Gluteus Maximus", role: "prime-mover", functionInMovement: "Drives hip extension from deep flexion back to standing." },
      { name: "Quadriceps", role: "prime-mover", functionInMovement: "Extends the knee against gravity during the ascent." },
      { name: "Erector Spinae & Core", role: "stabilizer", functionInMovement: "Maintains rigid neutral spinal alignment under load." }
    ],
    clinicalAssessments: ["Overhead Squat Assessment", "Ankle weight-bearing lunge test", "Single-leg squat quality index"]
  }
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS_LIBRARY.find(c => c.slug === slug);
}

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS_UNIVERSE.find(t => t.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find(s => s.slug === slug);
}

export function getSurgicalRehabBySlug(slug: string): SurgicalRehabTimeline | undefined {
  return SURGICAL_REHAB_TIMELINES.find(s => s.slug === slug);
}
