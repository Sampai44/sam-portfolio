<!-- app/pages/index.vue -->
<template>
  <NuxtLayout>
    <main class="page-container">
      
      <!-- HERO -->
      <header id="about" class="whiteboard">
        <p class="subtitle">Software Engineer | Aspiring MOE Teacher</p>
        <h1>Hello, I'm Sam Lah.</h1>
        <p class="bio">
          I am a first-class honors Computer Science graduate and a current Salesforce Engineer at Ufinity Pte Ltd. However, my true north has always been teaching. For years, I have balanced high-level technical engineering with active teaching, sports coaching, and music instruction. My long-term aspiration is to bring this rare blend of industry logic, sports discipline, and artistic patience into a full-time classroom.
        </p>

        <!-- Terminal -->
        <div class="terminal">
          <div class="term-bar">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="term-title">samlah@laptop:~$</span>
          </div>
          <div class="term-content">
            <p><span class="prmpt">➜</span> <span class="cmd">cat contact_details.txt</span></p>
            <p class="out">Phone: +65 94563996 | Email: samlah48@yahoo.com.sg</p>
            <p><span class="prmpt">➜</span> <span class="cmd">npm run current-stack</span></p>
            <p class="out highlight">[v] Nuxt.js, Springboot, Salesforce, Math Pedagogy, Badminton, & Grade 7 Piano</p>
          </div>
        </div>
      </header>

      <!-- VISITOR COUNTER -->
      <section class="sticky-note">
        <p v-if="!pending">You are visitor number <span>#{{ data?.count }}</span> on my portfolio today. Welcome.</p>
        <p v-else>Taking attendance...</p>
      </section>

      <!-- PASSION NARRATIVE -->
      <section id="philosophy" class="narrative-section">
        <h2>A Lifelong Passion for Teaching</h2>
        <div class="text-bubble">
          <p>
           Everytime I explain about my ambition of chasing my dreams and become what I think my calling in life is, people always ask me why not stick to something you are already good at and have years of experience in, which is coding?
          </p>
          <p style="margin-top: 10px;">
           The reason is very simple and down to earth actually. I believe that everyone and everything is born on planet earth for a purpose. After years of coaching/tutoring, I am glad to say that I have found my purpose and my true calling in life - To serve and to inspire.
          </p>
          <p style="margin-top: 10px;">
            Many people view my background as a pivot from tech to teaching, but the reality is that teaching has been my parallel constant. I started coaching badminton back in 2018, and I have previously guided students through music theory and practicals as a piano teacher. 
          </p>
          <p style="margin-top: 10px;">
            Over the years, working with children and adults alike taught me that the joy of a breakthrough is the ultimate reward. Whether it is correcting a physical stroke on the court, guiding a student through Grade 7 piano sheet music, or breaking down a complex P1 to P6 mathematics problem, my fulfillment comes from seeing a student's confidence take flight.
          </p>
          <p style="margin-top: 10px;">
            In my software engineering career, I build systems to solve enterprise problems. But in education, I get to help human beings solve their own blocks. I am passionate about taking the highly structured, logical, and patient frameworks I use in tech and applying them to the classroom to shape the next generation of critical thinkers.
          </p>
        </div>

        <!-- FIVE BLOCK GRID -->
        <div class="narrative-grid five-blocks">
          <div class="block dev-block">
            <h3>Technical Pedagogy</h3>
            <p>Working with code has significantly improved my logical thinking. I often use this skill to break down mathematical concepts for my students and guide them toward logical, structured thinking.</p>
          </div>

          <div class="block edu-block">
            <h3>Coaching and Mentorship</h3>
            <p>With years of badminton coaching experience at BG Academy and Extreme Badminton Academy, I have mastered student engagement, mental discipline, and lesson planning that caters to varying physical and cognitive paces.</p>
          </div>

          <div class="block tutor-block">
            <h3>Tutoring</h3>
            <p>Teaching P1 to P6 mathematics at Nanyang Educational Consultancy has honed my ability to simplify abstract concepts. I design personalized lesson plans that bridge understanding gaps, driving visible grade improvements while keeping young learners engaged and motivated.</p>
          </div>

          <div class="block music-block">
            <h3>Music (Piano)</h3>
            <p>I have reached Grade 7 in Piano and have taught students in the past.</p>
          </div>
        </div>
      </section>

      <!-- BADMINTON COACHING VIDEOS -->
      <section id="coaching-vids" class="narrative-section">
        <h2>Tutoring in Action</h2>
        <p>Short clip of me in action.</p>
        
        <div class="video-grid">
          <!-- Video Card 1 -->
          <div class="video-card">
            <div class="video-wrapper">
              <video controls preload="metadata" class="native-player">
                <source src="/videos/smash-drill.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="video-info">
              <h4>Math Tutoring</h4>
              <p>With one of my math students.</p>
            </div>
          </div>

          <!-- Video Card 2 -->
          <div class="video-card empty-card">
            <div class="placeholder-box">
              <span>Next clip coming soon...</span>
            </div>
            <div class="video-info">
              <h4>Deception & Drop Shots</h4>
              <p>Footage of tactical placement drills will be displayed here soon.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- RESUME TIMELINE -->
      <section id="experience" class="narrative-section">
        <h2>Professional Timeline</h2>
        
        <!-- TEACHING EXPERIENCE -->
        <div class="timeline-group">
          <div class="marker-title edu-marker">Teaching, Coaching, & Music</div>
          
          <div class="block timeline-item edu-item">
            <h3>Math Tutor | Nanyang Educational Consultancy</h3>
            <span class="date-tag">Jan 2025 – Present</span>
            <p>Tutoring primary school students (P1 to P6) in mathematics. I design personalized lesson plans aligned with MOE syllabus requirements to drive visible grade improvements.</p>
          </div>

          <div class="block timeline-item edu-item">
            <h3>Badminton Coach | Extreme Badminton Academy</h3>
            <span class="date-tag">June 2024 – Present</span>
            <p>Active coaching responsibilities focusing on skill development, physical agility, and mental resilience for trainees.</p>
          </div>

          <div class="block timeline-item edu-item inactive">
            <h3>Piano Teacher | Freelance</h3>
            <span class="date-tag">Previous Experience</span>
            <p>Taught practical piano and foundational music theory to students, leveraging my Grade 7 credentials to foster expressive playing and technical discipline.</p>
          </div>

          <div class="block timeline-item edu-item inactive">
            <h3>Badminton Coach | BG Academy</h3>
            <span class="date-tag">Jan 2018 – Jan 2024</span>
            <p>Dedicated six years to coaching students from children to adults, focusing on execution strategy and sports discipline.</p>
          </div>
        </div>

        <!-- WORK EXPERIENCE -->
        <div class="timeline-group">
          <div class="marker-title">Software Engineering</div>
          
          <div class="block timeline-item">
            <h3>Salesforce Engineer | Ufinity Pte Ltd</h3>
            <span class="date-tag">Dec 2025 – Present</span>
            <p>Current role focusing on cloud development, workflow automation, and enterprise software scaling.</p>
          </div>

          <div class="block timeline-item">
            <h3>Full Stack Web Developer | Real Estate Analytics</h3>
            <span class="date-tag">Feb 2024 – Dec 2025</span>
            <p>Maintained company websites using Nuxt.js and Java Springboot. Developed a Python-backed chatbot and served as a cross-functional feature lead.</p>
          </div>
        </div>

        <!-- INTERNSHIPS -->
        <div class="timeline-group">
          <div class="marker-title intern-marker">Internships and Education</div>
          
          <div class="block timeline-item intern-item">
            <h3>Mobile Software Developer Intern | ACP Group</h3>
            <span class="date-tag">June 2023 – Sept 2023</span>
            <p>Sole mobile developer for the MyQueen app, built from scratch using Flutter and Firebase.</p>
          </div>

          <div class="block timeline-item intern-item">
            <h3>BSc in Computer Science | University of London</h3>
            <span class="date-tag">Oct 2021 – Dec 2023</span>
            <p>Graduated with First Class Honors, building core foundations in web systems and logic.</p>
          </div>

          <div class="block timeline-item intern-item">
            <h3>Data Analyst Intern | Monetary Authority of Singapore</h3>
            <span class="date-tag">Feb 2018 – Aug 2018</span>
            <p>Assisted in collecting and visualizing data to derive insights and support decision-making.</p>
          </div>
        </div>
      </section>

    </main>
  </NuxtLayout>
</template>

<script setup>
const { data, pending } = await useFetch('/api/count')
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
}

.whiteboard {
  background: #fff;
  border: 3px solid #000;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 4px 4px 0px #000;
  margin-bottom: 40px;
}

h1 { font-size: 2.5rem; margin: 10px 0; font-weight: 900; color: #000; }
.subtitle { color: #d90429; font-weight: 800; font-size: 0.9rem; text-transform: uppercase;}
.bio { font-size: 1.15rem; line-height: 1.6; color: #333; font-weight: 500;}

/* Terminal Styling */
.terminal { background: #1a1a1a; color: #f4f4f5; border-radius: 4px; font-family: monospace; margin-top: 25px; }
.term-bar { background: #333; padding: 8px 12px; display: flex; align-items: center; border-top-left-radius: 4px; border-top-right-radius: 4px; }
.dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
.dot.red { background: #ff3131; }
.dot.yellow { background: #ffde59; }
.dot.green { background: #00bf63; }
.term-title { font-size: 0.75rem; color: #a1a1aa; margin-left: 5px; }
.term-content { padding: 15px 20px; font-size: 0.85rem; }
.prmpt { color: #00bf63; }
.out { color: #a1a1aa; margin-left: 15px; margin-top: 4px; }
.out.highlight { color: #ffde59; font-weight: 700; }

/* Sticky Note Counter */
.sticky-note {
  background: #fffb96;
  padding: 20px;
  border: 2px solid #000;
  box-shadow: 4px 4px 0px #000;
  transform: rotate(-0.5deg);
  margin-bottom: 50px;
  max-width: 450px;
}
.sticky-note p { margin: 0; color: #000; font-size: 1.1rem; font-weight: 700; }
.sticky-note span { color: #d90429; font-size: 1.3rem; }

/* Narrative Sections */
.narrative-section { margin-bottom: 60px; }
h2 { font-size: 1.8rem; margin-bottom: 25px; color: #000; font-weight: 900; text-transform: uppercase;}

.text-bubble {
  background: #e2f1ff;
  border: 3px solid #000;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 4px 4px 0px #000;
  margin-bottom: 30px;
}
.text-bubble p { color: #000; font-size: 1.05rem; line-height: 1.6; font-weight: 500; margin: 0;}

.narrative-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 600px) { .narrative-grid { grid-template-columns: 1fr 1fr; } }

.block { background: #fff; padding: 25px; border-radius: 4px; border: 3px solid #000; box-shadow: 4px 4px 0px #000; }
.block h3 { margin-top: 0; font-size: 1.2rem; color: #000; font-weight: 800;}
.block p { font-size: 0.95rem; color: #333; line-height: 1.6; }

.dev-block { border-color: #00bf63; }
.edu-block { border-color: #d90429; }
.tutor-block { border-color: #ffde59; }    
.academic-block { border-color: #38bdf8; } 
.music-block { border-color: #8338ec; } /* Purple color for music */

/* Timeline UI */
.timeline-group {
  margin-bottom: 40px;
  border-left: 4px solid #000;
  padding-left: 20px;
  position: relative;
}

.marker-title {
  font-weight: 900;
  background: #00bf63;
  color: #fff;
  padding: 5px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 15px;
  border: 2px solid #000;
  box-shadow: 2px 2px 0px #000;
}

.marker-title.edu-marker { background: #d90429; }
.marker-title.intern-marker { background: #38bdf8; color: #000; }

.timeline-item {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  margin-bottom: 20px;
}
.timeline-item h3 { margin-top: 0; font-size: 1.1rem; color: #000; font-weight: 800;}
.timeline-item p { font-size: 0.95rem; color: #333; line-height: 1.5; margin-top: 10px; }

.date-tag {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000;
  background: #ffde59;
  padding: 2px 6px;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 5px;
}

.edu-item { border-color: #d90429; }
.intern-item { border-color: #38bdf8; }

/* Video Grid Styles */
.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

@media (min-width: 600px) {
  .video-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.video-card {
  background: #fff;
  border: 3px solid #000;
  border-radius: 4px;
  box-shadow: 4px 4px 0px #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.video-wrapper {
  background: #1a1a1a;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Forces 16:9 ratio */
}

.native-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-info {
  padding: 15px;
}

.video-info h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: #000;
}

.video-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #52525b;
  line-height: 1.5;
}

.placeholder-box {
  background: #f3f4f6;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.placeholder-box span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #a1a1aa;
  font-weight: 700;
  font-size: 0.9rem;
}
</style>
