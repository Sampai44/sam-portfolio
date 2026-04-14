<!-- app/layouts/default.vue -->
<template>
  <div class="layout-wrapper">
    
    <!-- NAVIGATION BAR -->
    <nav class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <span class="logo">Sam Lah | Aspiring Educator</span>
        </div>
        
        <div class="nav-right">

          <!-- BIGGER PROFILE PICTURE TOP RIGHT -->
          <div class="avatar-box">
            <img src="/profile.jpg" alt="Sam Lah" class="avatar" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content gets injected here -->
    <slot />

    <footer class="footer">
      <p>Copyright 2026 Sam Lah. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  background-color: #fbfbfb;
  background-image: linear-gradient(#f1f1f1 1px, transparent 1px);
  background-size: 100% 2.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  background: #ffde59; 
  border-bottom: 3px solid #000; 
  position: sticky;
  top: 0;
  z-index: 50;
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links a {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
}

.nav-links a:hover {
  text-decoration: underline;
  color: #d90429;
}

.avatar-box {
  width: 120px; 
  height: 120px;
  transform: translateY(25px); 
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0px rgba(0,0,0,1);
}

.footer {
  text-align: center;
  padding: 40px;
  color: #52525b;
  font-weight: 700;
  margin-top: auto;
}
</style>
