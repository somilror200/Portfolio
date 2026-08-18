"""Generate an ATS-friendly, single-page PDF resume for Somil Garak."""
import urllib.request
from pathlib import Path

from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.ttLib import TTFont as FTFont

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

FONT_DIR = Path("/tmp/resume_fonts")
FONT_DIR.mkdir(exist_ok=True)

VARIABLE_FONTS = {
    "Inter": "https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf",
    "DMSans": "https://github.com/google/fonts/raw/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf",
}

# (registered name, source variable font, weight, opsz)
INSTANCES = [
    ("Inter-Regular", "Inter", 400, 14),
    ("Inter-Medium", "Inter", 500, 14),
    ("Inter-SemiBold", "Inter", 600, 14),
    ("DMSans-Regular", "DMSans", 400, 14),
    ("DMSans-Bold", "DMSans", 700, 14),
]

for name, url in VARIABLE_FONTS.items():
    path = FONT_DIR / f"{name}-variable.ttf"
    if not path.exists():
        urllib.request.urlretrieve(url, path)

for reg_name, source, weight, opsz in INSTANCES:
    out_path = FONT_DIR / f"{reg_name}.ttf"
    if not out_path.exists():
        vf = FTFont(str(FONT_DIR / f"{source}-variable.ttf"))
        axes = {"wght": weight}
        axis_tags = [a.axisTag for a in vf["fvar"].axes]
        if "opsz" in axis_tags:
            axes["opsz"] = opsz
        instantiateVariableFont(vf, axes, inplace=True)
        vf.save(str(out_path))
    pdfmetrics.registerFont(TTFont(reg_name, str(out_path)))

INK = HexColor("#171a1f")
MUTED = HexColor("#565f6b")
ACCENT = HexColor("#0b6fa1")
LINE = HexColor("#d7dce2")

styles = {
    "name": ParagraphStyle("name", fontName="DMSans-Bold", fontSize=22, leading=24, textColor=INK),
    "role": ParagraphStyle("role", fontName="Inter-Medium", fontSize=11.5, leading=15, textColor=ACCENT, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="Inter-Regular", fontSize=9.3, leading=13, textColor=MUTED),
    "section": ParagraphStyle("section", fontName="DMSans-Bold", fontSize=11.5, leading=14, textColor=INK, spaceBefore=4, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Inter-Regular", fontSize=9.2, leading=12.1, textColor=INK, spaceAfter=1.5),
    "bullet": ParagraphStyle("bullet", fontName="Inter-Regular", fontSize=9, leading=11.4, textColor=INK, leftIndent=10, spaceAfter=1),
    "job_title": ParagraphStyle("job_title", fontName="Inter-SemiBold", fontSize=10, leading=13, textColor=INK),
    "job_meta": ParagraphStyle("job_meta", fontName="Inter-Regular", fontSize=9, leading=12, textColor=MUTED),
    "skill_label": ParagraphStyle("skill_label", fontName="Inter-SemiBold", fontSize=9.4, leading=13, textColor=INK),
    "skill_val": ParagraphStyle("skill_val", fontName="Inter-Regular", fontSize=9.4, leading=13, textColor=MUTED),
}


def section_header(title):
    return [
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.8, color=LINE, spaceAfter=6),
    ]


def build():
    doc = SimpleDocTemplate(
        "public/resume-somil-garak.pdf",
        pagesize=A4,
        title="Somil Garak — Resume",
        author="Perplexity Computer",
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=5 * mm,
        bottomMargin=4 * mm,
    )
    story = []

    story.append(Paragraph("Somil Garak", styles["name"]))
    story.append(Paragraph("Software Developer &amp; Computer Science Student", styles["role"]))
    story.append(Paragraph(
        'somilror200@gmail.com &nbsp;&middot;&nbsp; 0433 135 015 &nbsp;&middot;&nbsp; '
        'Melbourne, VIC, Australia &nbsp;&middot;&nbsp; '
        '<a href="https://github.com/somilror200" color="#0b6fa1">github.com/somilror200</a>',
        styles["contact"],
    ))
    story.append(Spacer(1, 1))

    story += section_header("Professional Summary")
    story.append(Paragraph(
        "Computer Science student at Deakin University with hands-on experience building responsive web "
        "applications and working across frontend, backend, API, database, mobile and cloud development. "
        "Practical exposure to React, Vue, Node.js, ASP.NET Core, REST APIs, SQL databases, Git, Docker and "
        "Google Cloud Platform through academic and personal development work. Brings strong problem-solving, "
        "reliability and teamwork developed while balancing university study with long-term construction "
        "employment. Seeking software developer, software engineer, web developer, graduate, junior or "
        "internship opportunities.",
        styles["body"],
    ))

    story += section_header("Technical Skills")
    skill_rows = [
        ("Core Development", "C++, C#, Java, Kotlin, Python, JavaScript, SQL"),
        ("Web &amp; UI", "React, Vue 3, HTML5, CSS3, responsive web development"),
        ("Backend &amp; APIs", "Node.js, Express.js, ASP.NET Core / Web API, REST API development and integration, Swagger / OpenAPI, Postman"),
        ("Data", "PostgreSQL, SQLite, Microsoft SQL Server"),
        ("Mobile", "Android development with Java/Kotlin, React Native"),
        ("Cloud &amp; Tools", "Google Cloud Platform, Docker, Git, GitHub, branching workflows, debugging"),
    ]
    table_data = [
        [Paragraph(label, styles["skill_label"]), Paragraph(val, styles["skill_val"])]
        for label, val in skill_rows
    ]
    t = Table(table_data, colWidths=[38 * mm, 132 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(t)

    story += section_header("Selected Projects")
    story.append(Paragraph("Responsive Company Website — Subcon Pty Ltd", styles["job_title"]))
    story.append(Paragraph(
        "&#8226; Developed and deployed a responsive company website using React, JavaScript, HTML and CSS, "
        "with layouts designed for desktop and mobile users.<br/>"
        "&#8226; Published the production site through GitHub Pages with a custom domain, applying Git/GitHub "
        "version-control workflows during development.",
        styles["bullet"],
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("SmartStock — IoT-Enabled Automatic Stock Management &amp; Delivery System", styles["job_title"]))
    story.append(Paragraph(
        "&#8226; University distinction-task project: an IoT-enabled system automating stock tracking and "
        "delivery scheduling for supermarkets.<br/>"
        "&#8226; Building Node.js microservices and Node-RED flows to process live sensor data, with planned "
        "AWS deployment.",
        styles["bullet"],
    ))

    story += section_header("Education")
    story.append(Paragraph("Deakin University — Bachelor of Computer Science", styles["job_title"]))
    story.append(Paragraph("Melbourne, VIC &nbsp;&middot;&nbsp; In Progress", styles["job_meta"]))
    story.append(Paragraph(
        "&#8226; Relevant study: Object-Oriented Programming, Data Structures and Algorithms, Database "
        "Management, Software Engineering and Embedded Systems.<br/>"
        "&#8226; Member of the Deakin Software and Electronics Club (DSEC) — technical workshops, projects "
        "and peer learning.",
        styles["bullet"],
    ))

    story += section_header("Professional Experience")
    story.append(Paragraph("Formwork and Concrete — Subcon Pty Ltd", styles["job_title"]))
    story.append(Paragraph("Truganina, VIC &nbsp;&middot;&nbsp; March 2022 — Present", styles["job_meta"]))
    story.append(Paragraph(
        "&#8226; Perform formwork and concrete preparation for residential construction, including site "
        "set-out, boxing, framing, measuring and preparation for concrete placement.<br/>"
        "&#8226; Read construction plans and engineering details to complete work accurately and identify "
        "dimensions, levels, structural requirements and sequencing.<br/>"
        "&#8226; Work closely with crew members and supervisors to meet daily construction targets, resolve "
        "on-site issues and maintain quality standards under time pressure.<br/>"
        "&#8226; Maintain reliable attendance and balance ongoing employment with university study, "
        "demonstrating time management, accountability and adaptability.",
        styles["bullet"],
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Member — Deakin Software and Electronics Club (DSEC)", styles["job_title"]))
    story.append(Paragraph("Deakin University &nbsp;&middot;&nbsp; July 2023 — Present", styles["job_meta"]))
    story.append(Paragraph(
        "&#8226; Participate in software, electronics and technical learning activities while collaborating "
        "with other students on practical problem-solving.<br/>"
        "&#8226; Engage with peers and industry-focused events to strengthen software-development knowledge "
        "and professional communication.",
        styles["bullet"],
    ))

    story += section_header("Courses &amp; Certifications")
    story.append(Paragraph(
        "Learning C# Algorithms — LinkedIn Learning &nbsp;&middot;&nbsp; SQL for Data Science — Coursera "
        "&nbsp;&middot;&nbsp; Android App Development — Udemy",
        styles["body"],
    ))

    doc.build(story)
    print("Resume built.")


if __name__ == "__main__":
    build()
