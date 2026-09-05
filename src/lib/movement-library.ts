import { KnowledgeArticle } from "./types";

export const MOVEMENT_ARTICLES: KnowledgeArticle[] = [
  {
    id: "art-1",
    slug: "understanding-disc-herniation-vs-sciatica",
    title: "Understanding Disc Herniation vs. Sciatica: What is Happening Inside Your Spine?",
    category: "Spine & Neuro",
    readTime: "6 min read",
    author: "Elena Vance, MSc (Hons)",
    authorCredentials: "Chartered Physiotherapist, MCSP, HCPC",
    summary: "Discover why not all back pain is sciatica, how intervertebral discs actually heal, and why early movement out-performs bed rest in UK NICE & CSP clinical guidelines.",
    keyTakeaways: [
      "Intervertebral discs are robust, hydrated shock-absorbers that respond positively to gentle cyclical loading.",
      "Sciatica is a symptom (radiating nerve irritation), not an isolated disease.",
      "90% of lumbar disc protrusions undergo natural biological resorption over 6 to 12 months with conservative physiotherapy."
    ],
    contentSections: [
      {
        heading: "The Myth of the 'Slipped' Disc",
        body: "A common misconception in spinal health is that discs can literally 'slip' out of place. Anatomically, your intervertebral discs are intensely anchored to the vertebral endplates above and below by thick collagen fibers (the annulus fibrosus). Rather than slipping, disc material can migrate slightly or bulge outward under sustained compressive load.",
        clinicalNote: "Clinical imaging often shows disc bulges in people with zero pain. The presence of a bulge on an MRI only matters if it matches your physical clinical symptoms."
      },
      {
        heading: "Chemical Irritation vs. Mechanical Pinch",
        body: "When disc nucleus material touches a nerve root, it triggers an inflammatory chemical cascade that excites nociceptive pain fibers. This is why pain can radiate down into the calf or foot. Targeted physiotherapy uses directional preference exercises to decompress the nerve interface and encourage fluid clearance."
      },
      {
        heading: "Active Movement as Nutrient Exchange",
        body: "Adult spinal discs have minimal direct blood supply. They rely on an 'osmotic pump' created by walking and gentle movement to pull in oxygen and fluid while flushing out inflammatory metabolites. Short, frequent daily walks are one of the most powerful disc-healing tools available."
      }
    ],
    relatedConditions: ["lumbar-spondylosis", "sciatica"],
    publishedDate: "2026-03-15"
  },
  {
    id: "art-2",
    slug: "post-operative-knee-extension-milestone",
    title: "The Zero-Degree Rule: Why Full Knee Extension is the True Key to Post-Op Success",
    category: "Post-Surgical",
    readTime: "5 min read",
    author: "Marcus Thorne, BSc (Hons)",
    authorCredentials: "Chartered Physiotherapist, HCPC, CSCS",
    summary: "Why achieving 0° of terminal knee extension in the first 3 weeks post-surgery protects your gait, saves your hip, and prevents long-term joint stiffness.",
    keyTakeaways: [
      "Knee flexion (bending) can be regained over months, but passive extension (straightening) must be prioritized in early weeks.",
      "A 5-degree lack of extension increases quadriceps energy expenditure by over 30% during everyday walking.",
      "Propping a pillow directly underneath a freshly operated knee encourages permanent scar contractures."
    ],
    contentSections: [
      {
        heading: "The Biomechanics of Terminal Extension",
        body: "When you stand, your knee utilizes a 'screw-home mechanism' where the tibia externally rotates to lock the joint with minimal muscular effort. If you lack full extension, you cannot lock the knee, forcing your quadriceps and hip flexors to constantly fire to prevent you from collapsing forward.",
        clinicalNote: "Always elevate your leg by placing pillows under the ankle/heel, allowing gravity to gently straighten the knee joint."
      },
      {
        heading: "Preventing Arthrofibrosis",
        body: "Surgical trauma causes the release of fibrin and inflammatory cytokines. If the knee is not moved through its full terminal extension early, dense scar tissue can form in the anterior joint capsule. Daily passive stretching and patellar glides are non-negotiable."
      }
    ],
    relatedConditions: ["total-knee-replacement", "acl-tear"],
    publishedDate: "2026-02-28"
  },
  {
    id: "art-3",
    slug: "managing-desk-posture-and-cervicogenic-headaches",
    title: "The Ergonomics of Focus: Solving Tech Neck and Tension Headaches",
    category: "Ergonomics & Posture",
    readTime: "7 min read",
    author: "Sophie Tremblay, MSc",
    authorCredentials: "Chartered Physiotherapist, MCSP, HCPC",
    summary: "How prolonged forward-head posture strains the suboccipital nerve roots and practical strategies to set up your UK remote workspace.",
    keyTakeaways: [
      "For every 1 inch the head moves forward, the cervical spine bears an additional 10 pounds of effective gravitational weight.",
      "Suboccipital muscle spasm can refer pain over the ears into the forehead and temples (cervicogenic headache).",
      "Dynamic movement breaks matter far more than rigid 'perfect' posture."
    ],
    contentSections: [
      {
        heading: "The Upper Crossed Syndrome",
        body: "Prolonged desk work often leads to a combination of tight upper trapezius/pectorals and inhibited deep neck flexors/lower trapezius. This forces the chin to jut forward, compressing the upper cervical facet joints at C1–C3."
      },
      {
        heading: "Actionable Workspace Adjustments",
        body: "Set your monitor height so the top third of the screen is at eye level. Position your keyboard close enough that your elbows rest naturally at 90 degrees by your sides without shrugging."
      }
    ],
    relatedConditions: ["cervical-spondylosis", "tmj-dysfunction"],
    publishedDate: "2026-01-20"
  }
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return MOVEMENT_ARTICLES.find(a => a.slug === slug);
}
