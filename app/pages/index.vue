<template>
  <NuxtLayout>
    <div :class="{ 'dark-mode': isDark }" class="theme-wrapper">
      <main class="page-container">
        
        <div class="top-nav">
          <div class="status-chip">
            <span class="pulse"></span> Current Role: Salesforce Engineer @ Ufinity
          </div>
          <button @click="toggleDarkMode" class="theme-btn">
            {{ isDark ? '💡 LIGHTS ON' : '🌑 LIGHTS OFF' }}
          </button>
        </div>

        <!-- HERO / WHITEBOARD -->
        <header id="about" class="whiteboard">
          <div class="tape-piece top-left"></div>
          <div class="tape-piece top-right"></div>
          
          <p class="subtitle">Software Engineer // Aspiring Educator</p>
          <h1 class="main-title">Sam Lah.</h1>
          
          <div class="hero-content">
            <p class="bio">
              First-class honors CS graduate bridging the gap between 
              <span class="highlight-yellow">high-level engineering</span> and 
              <span class="highlight-red">active pedagogy</span>. 
            </p>
          </div>

          <div class="terminal">
            <div class="term-bar">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="term-title">samlah@laptop:~$ contact</span>
            </div>
            <div class="term-content">
              <p><span class="term-label">PHONE:</span> +65 94563996</p>
              <p><span class="term-label">EMAIL:</span> samlah48@yahoo.com.sg</p>
            </div>
          </div>
        </header>

        <!-- VISITOR COUNT -->
        <section class="sticky-note">
          <div class="pin"></div>
          <p v-if="!countPending">Class Attendance: <span>{{ countData?.count }}</span></p>
          <p v-else>Taking attendance...</p>
        </section>

       <!-- CAREER & EDUCATION ROADMAP -->
<section id="experience" class="narrative-section">
  <h2 class="section-heading">Educational & Professional Roadmap</h2>
  
  <div class="timeline-container">
    <!-- CURRENT ROLE -->
    <div class="timeline-item current">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Dec 2025 – Present</span>
        <h3>Salesforce Engineer @ Ufinity Pte Ltd</h3>
        <p>Developing cloud solutions and supporting the maintenance of MOE's <strong>Student Learning Space (SLS)</strong> ecosystem.</p>
      </div>
    </div>

    <!-- RECENT WORK & TEACHING -->
    <div class="timeline-item">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Jan 2025 – Present</span>
        <h3>Math & English Tutor @ Nanyang Educational Consultancy</h3>
        <p>Personalized coaching for P1-P6 students. Focused on grade improvement through logical deconstruction of math concepts.</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Feb 2024 – Dec 2025</span>
        <h3>Full Stack Developer @ Real Estate Analytics</h3>
        <p>Built API logic and data platforms using Nuxt.js, Springboot, and Python. Led product feature development and chatbot projects.</p>
      </div>
    </div>

    <!-- INTERNSHIP: ACP -->
    <div class="timeline-item intern">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">June 2023 – Sept 2023</span>
        <h3>Mobile Software Developer Intern @ ACP Group</h3>
        <p>Sole mobile developer for the MyQueen app, built from scratch using Flutter and Firebase. Resolved critical performance bugs for the group.</p>
      </div>
    </div>

    <!-- UNIVERSITY -->
    <div class="timeline-item academic">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Oct 2021 – Dec 2023</span>
        <h3>BSc Computer Science @ University of London</h3>
        <p>Graduated with <strong>First Class Honors</strong>. Specialized in Web Programming and Mobile Development.</p>
      </div>
    </div>

    <!-- Tutoring @ SAM -->
    <div class="timeline-item intern">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Jan 2021 – March 2022</span>
        <h3>Math Tutor @ Seriously Addictive Mathematics (SAM) </h3>
       <p>Personalized coaching for P1-P6 students. Focused on grade improvement through logical deconstruction of math concepts.</p>
      </div>
    </div>

      <!-- BG Badminton Academy -->
    <div class="timeline-item intern">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Feb 2018 – Aug 2024</span>
        <h3>Badminton Assistant Coach @ BG Badminton Academy </h3>
        <p>Planned and carried out lessons for students of all ages, focusing on technical improvements.</p>
      </div>
    </div>

    <!-- INTERNSHIP: MAS -->
    <div class="timeline-item intern">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Feb 2018 – Aug 2018</span>
        <h3>Data Analyst Intern @ Monetary Authority of Singapore</h3>
        <p>Assisted in collecting and visualizing data to derive insights for MAS decision-making processes.</p>
      </div>
    </div>

    <!-- POLYTECHNIC -->
    <div class="timeline-item poly">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Apr 2016 – Mar 2020</span>
        <h3>Diploma @ Republic Polytechnic</h3>
        <p>Technical engineering foundation. Served as <strong>Vice-Captain of the Badminton Team</strong>; led the team to a historic <strong>Double Gold</strong> for both Men and Women in 2018.</p>
      </div>
    </div>

    <!-- SECONDARY SCHOOL -->
    <div class="timeline-item secondary">
      <div class="marker"></div>
      <div class="timeline-content block">
        <span class="date-tag">Jan 2012 – Dec 2015</span>
        <h3>GCE O-Levels @ Shuqun Secondary School</h3>
        <p>Graduated with O-Level certification. Served as <strong>Captain of the Badminton Team</strong>, establishing early leadership and discipline.</p>
      </div>
    </div>
  </div>
</section>



        <!-- MISSION & GRID -->
        <section id="philosophy" class="narrative-section">
          <h2 class="section-heading">The Mission</h2>
          <div class="text-bubble">
            <p>
              Teaching has been my constant. From coaching badminton since 2018 to Grade 7 piano and P1-P6 Math tutoring, 
              I find my fulfillment in the "breakthrough"—helping a student debug their own logic.
            </p>
          </div>

          <div class="narrative-grid">
            <div class="block dev-block">
              <div class="block-tag">ENGINEERING</div>
              <h3>Technical Pedagogy</h3>
              <p>Applying code-based logic to deconstruct complex Math problems for primary students.</p>
            </div>
            <div class="block edu-block">
              <div class="block-tag">SPORTS</div>
              <h3>Coaching</h3>
              <p>6 years of badminton coaching (BG & Extreme Academy). Mastery in discipline and mental agility.</p>
            </div>
            <div class="block tutor-block">
              <div class="block-tag">ACADEMIC</div>
              <h3>Tutoring</h3>
              <p>Over a year at Nanyang Consultancy (Math/English) and SAM (Seriously Addictive Mathematics). Focused on logic-driven grade jumps.</p>
            </div>
            <div class="block music-block">
              <div class="block-tag">ARTS</div>
              <h3>Music</h3>
              <p>Freelance Grade 1-2 Piano Teacher. Instilling the technical patience required for artistic mastery.</p>
            </div>
          </div>
        </section>

        <!-- VIDEOS -->
        <section class="narrative-section">
          <h2 class="section-heading">Coaching Drills</h2>
          <div class="video-grid">
            <div class="video-card block">
              <div class="video-wrapper">
                <video controls preload="metadata" class="native-player">
                  <!-- Correct Pathing -->
                <source src="/videos/smash-drill.mp4" type="video/mp4">
                </video>
              </div>
              <div class="video-info">
                <h4>Smash & Recovery</h4>
                <p>Developing muscle memory through multi-shuttle high-intensity drills.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- UFINITY -->
        <section class="narrative-section">
          <h2 class="section-heading">Ufinity & SLS</h2>
          <div class="text-bubble sls-bubble">
            <p>
              At Ufinity, I observe the tech behind Singapore's <strong>Student Learning Space (SLS)</strong>. 
              Maintaining the tools thousands of students use daily has solidified my move: 
              from maintaining the network to standing in the classroom.
            </p>
          </div>
        </section>

        <section class="narrative-section">
          <h2 class="section-heading">Interactive Tools</h2>
          <CodePlayground />
        </section>

        <!-- GUESTBOOK -->
        <section id="guestbook" class="narrative-section">
          <h2 class="section-heading">Guestbook</h2>
          <div class="block guestbook-box">
            <div class="guestbook-form">
              <input v-model="guestName" type="text" placeholder="Your Name" />
              <textarea v-model="guestMessage" placeholder="Leave a message for the class..."></textarea>
              <button @click="sendEntry" :disabled="sending">POST NOTE</button>
            </div>
            <div class="entries-list">
              <div v-for="entry in entries" :key="entry.id" class="entry">
                <span class="entry-date">{{ entry.date }}</span>
                <h4>{{ entry.name }}</h4>
                <p>{{ entry.message }}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

const whatsappUrl = 'https://wa.me'
const isDark = ref(false)
const toggleDarkMode = () => { isDark.value = !isDark.value }
const { data: countData, pending: countPending } = await useFetch('/api/count')
const guestName = ref(''); const guestMessage = ref(''); const sending = ref(false)
const { data: entries, refresh } = await useFetch('/api/guestbook')
const sendEntry = async () => {
  if (!guestName.value || !guestMessage.value) return
  sending.value = true
  try {
    await $fetch('/api/guestbook', { method: 'POST', body: { name: guestName.value, message: guestMessage.value } })
    guestName.value = ''; guestMessage.value = ''; await refresh()
  } catch (e) { alert('Error') } finally { sending.value = false }
}
</script>

<style scoped>

.qr-wrapper {
  display: flex;
  justify-content: center;
  padding: 10px;
  background: white;
}
/* Color-coded markers for each stage */
.timeline-item.poly .marker { background: #00bf63; }      /* RP Green */
.timeline-item.secondary .marker { background: #6b7280; } /* Grey for Secondary */
.timeline-item.academic .marker { background: #38bdf8; }  /* Blue for Uni */

/* Visual Path Styling */
.timeline-container {
  position: relative;
  padding-left: 40px;
  border-left: 4px dashed var(--border);
  margin-left: 15px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.marker {
  position: absolute;
  left: -53px;
  top: 25px;
  width: 22px;
  height: 22px;
  border: 4px solid var(--border);
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  padding: 25px !important;
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(10px);
}

.timeline-container {
  position: relative;
  padding-left: 30px;
  border-left: 4px dashed var(--border);
  margin-left: 10px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.marker {
  position: absolute;
  left: -41px;
  top: 20px;
  width: 18px;
  height: 18px;
  background: var(--accent);
  border: 3px solid var(--border);
  border-radius: 50%;
}

.timeline-content {
  padding: 20px !important;
}

.date-tag {
  font-family: monospace;
  font-weight: 800;
  background: var(--accent);
  color: #fff;
  padding: 2px 8px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 10px;
}

.timeline-item.academic .marker { background: #38bdf8; } /* Blue for Uni */
.timeline-item.sports .marker { background: #fbbf24; }   /* Yellow for Coaching */

.timeline-item h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 900;
}

.timeline-item p {
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* THEME SETUP */
.theme-wrapper {
  --bg: #f3f4f6;
  --text: #111827;
  --accent: #d90429;
  --paper: #ffffff;
  --border: #111827;
  --shadow: #111827;
  --marker: #fff176;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 100vh;
  color: var(--text);
  background-color: var(--bg);
  background-image: 
    linear-gradient(var(--bg) 24px, #e5e7eb 25px),
    linear-gradient(90deg, var(--bg) 24px, #e5e7eb 25px);
  background-size: 25px 25px; /* Subtle graph paper */
  font-family: 'ui-serif', 'Georgia', serif;
}

.dark-mode {
  --bg: #0f172a;
  --text: #f8fafc;
  --accent: #f87171;
  --paper: #1e293b; 
  --border: #f8fafc;
  --shadow: #000000;
  --marker: #4ade80;
}

.page-container { max-width: 850px; margin: 0 auto; padding: 40px 20px; }

/* NAV & CHIPS */
.top-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.status-chip { 
  background: var(--paper); border: 2px solid var(--border); padding: 6px 14px; 
  font-family: monospace; font-size: 0.8rem; font-weight: bold; display: flex; align-items: center; gap: 8px;
  box-shadow: 3px 3px 0 var(--shadow);
}
.pulse { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 0 #22c55e; animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }

.theme-btn { 
  background: var(--border); color: var(--bg); border: 2px solid var(--border);
  padding: 8px 18px; font-weight: 900; cursor: pointer; box-shadow: 4px 4px 0 var(--accent);
  font-family: monospace; transition: transform 0.1s;
}
.theme-btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--accent); }

/* WHITEBOARD */
.whiteboard { 
  background: var(--paper); border: 4px solid var(--border); padding: 50px; 
  box-shadow: 15px 15px 0 var(--shadow); margin-bottom: 60px; position: relative;
}
.tape-piece { width: 80px; height: 30px; background: rgba(0,0,0,0.1); position: absolute; }
.top-left { top: -10px; left: -20px; transform: rotate(-45deg); background: rgba(217,4,41,0.2); }
.top-right { top: -10px; right: -20px; transform: rotate(45deg); background: rgba(56,189,248,0.2); }

.main-title { font-size: 5rem; font-weight: 900; margin: 0; line-height: 0.9; letter-spacing: -3px; }
.subtitle { font-family: monospace; text-transform: uppercase; color: var(--accent); font-weight: 800; margin-bottom: 10px; }
.bio { font-size: 1.5rem; line-height: 1.4; margin-top: 25px; max-width: 600px; }
.highlight-yellow { background: var(--marker); color: #000; padding: 0 4px; }
.highlight-red { border-bottom: 3px solid var(--accent); }

/* TERMINAL */
.terminal { background: #111; color: #eee; border-radius: 4px; font-family: 'Courier New', Courier, monospace; margin-top: 40px; border: 2px solid var(--border); }
.term-bar { background: #222; padding: 10px; display: flex; align-items: center; border-bottom: 1px solid #444; }
.dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 8px; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
.term-content { padding: 25px; line-height: 1.8; }
.term-label { color: var(--accent); font-weight: bold; margin-right: 10px; }

/* STICKY NOTE */
.sticky-note { 
  background: #fffb96; color: #111 !important; padding: 25px; border: 3px solid #111; 
  box-shadow: 8px 8px 0 #111; transform: rotate(-2deg); max-width: 320px; margin-bottom: 60px; position: relative;
}
.pin { width: 15px; height: 15px; background: #ef4444; border-radius: 50%; position: absolute; top: -8px; left: 50%; transform: translateX(-50%); border: 2px solid #000; }
.sticky-note span { font-weight: 900; font-size: 2rem; color: var(--accent); }

/* BLOCKS */
.section-heading { 
  font-size: 2.2rem; background: var(--border); color: var(--bg); 
  display: inline-block; padding: 8px 20px; margin-bottom: 40px; font-weight: 900;
  box-shadow: 6px 6px 0 var(--accent);
}
.block { 
  background: var(--paper); border: 4px solid var(--border); padding: 30px; 
  box-shadow: 8px 8px 0 var(--shadow); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.block:hover { transform: translate(-4px, -4px); box-shadow: 14px 14px 0 var(--shadow); }
.block-tag { font-family: monospace; font-size: 0.7rem; font-weight: 900; color: var(--accent); margin-bottom: 10px; }

/* GRID FIX */
.narrative-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }

/* VIDEOS */
.video-card { padding: 0 !important; overflow: hidden; }
.video-wrapper { background: #000; position: relative; padding-top: 56.25%; }
.native-player { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.video-info { padding: 20px; }

/* GUESTBOOK */
input, textarea { 
  width: 100%; padding: 18px; border: 3px solid var(--border); 
  background: var(--paper); color: var(--text); margin-bottom: 15px; font-family: inherit; font-size: 1rem;
}
.guestbook-form button { 
  background: var(--accent); color: white; border: 3px solid var(--border);
  padding: 12px 30px; font-weight: 900; cursor: pointer; box-shadow: 5px 5px 0 var(--shadow);
}
.entry { border-bottom: 2px dashed var(--border); padding: 25px 0; }
</style>
