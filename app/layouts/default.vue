<!-- app/layouts/default.vue -->
<script setup>
import QrcodeVue from 'qrcode.vue'

// Your WhatsApp Link
const whatsappUrl = 'https://wa.me'
</script>

<template>
  <div class="layout-wrapper">
    
    <!-- NAVIGATION BAR -->
    <nav class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <span class="logo">Sam Lah | Aspiring Educator</span>
        </div>
        
        <div class="nav-right">
          <!-- AVATAR + QR GROUP -->
          <div class="header-profile-group">
            
            <!-- QR BADGE (GENERATED VIA CODE) -->
            <div class="mini-qr-card">
              <div class="red-pin"></div>
              <p class="qr-text">Scan & Chat</p>
              
              <div class="qr-container">
                <qrcode-vue 
                  :value="whatsappUrl" 
                  :size="70" 
                  level="H" 
                  render-as="svg"
                  foreground="#000000"
                />
              </div>
            </div>

            <!-- PROFILE PICTURE -->
            <div class="avatar-box">
              <img src="/profile.jpg" alt="Sam Lah" class="avatar" />
            </div>

          </div>
        </div>
      </div>
    </nav>

    <main class="content-body">
      <slot />
    </main>

    <footer class="footer">
      <p>Copyright 2026 Sam Lah. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* BASE LAYOUT */
.layout-wrapper {
  background-color: #fbfbfb;
  background-image: linear-gradient(#f1f1f1 1px, transparent 1px);
  background-size: 100% 2.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* NAVIGATION */
.nav-bar {
  background: #ffde59; 
  border-bottom: 3px solid #000; 
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 0px rgba(0,0,0,1); 
}

.nav-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 900;
  font-size: 1.2rem;
  color: #000;
  text-transform: uppercase;
}

/* PROFILE & QR GROUPING */
.header-profile-group {
  display: flex;
  align-items: flex-end; 
  gap: 15px;
  transform: translateY(35px); 
}

/* THE QR CARD */
.mini-qr-card {
  background: #ffffff;
  padding: 6px;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  transform: rotate(-4deg);
  text-align: center;
  width: 85px; 
  position: relative;
  transition: all 0.2s ease-in-out;
}

.qr-container {
  display: flex;
  justify-content: center;
  background: white;
  padding: 2px;
}

.mini-qr-card:hover {
  transform: rotate(0deg) scale(1.1);
  z-index: 110;
}

.qr-text {
  font-size: 0.55rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 4px;
  color: #000;
}

.red-pin {
  width: 10px;
  height: 10px;
  background: #d90429;
  border-radius: 50%;
  border: 1px solid #000;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
}

/* THE AVATAR */
.avatar-box {
  width: 110px; 
  height: 110px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #000;
  background: #fff;
  box-shadow: 5px 5px 0px rgba(0,0,0,1);
}

.content-body {
  padding-top: 50px; 
}

.footer {
  text-align: center;
  padding: 60px 40px 40px;
  color: #52525b;
  font-weight: 700;
  margin-top: auto;
}
</style>
