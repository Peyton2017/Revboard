<script lang="ts">
  let user: {
    avatarUrl: string;
    userName: string;
  } | null = {
    avatarUrl: "https://static.vecteezy.com/system/resources/previews/015/393/750/non_2x/gradient-fluid-background-purple-design-layout-for-banner-or-poster-cool-fluid-pattern-with-moving-purple-shapes-free-vector.jpg",
    userName: "Beezo"
  };

  // Set user = null when not logged in
</script>

<div class="hidden">
  <svg width="0" height="0">
    <!-- Navigation bar background gradient -->
    <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151823" /> <!-- Deep Navy -->
      <stop offset="100%" stop-color="#0B0E18" /> <!-- Slightly lighter navy -->
    </linearGradient>

    <!-- Button gradient (from the R logo) -->
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ED3FF" /> <!-- Ice Blue -->
      <stop offset="40%" stop-color="#2789FF" /> <!-- Cobalt -->
      <stop offset="100%" stop-color="#003EAE" /> <!-- Midnight Blue -->
    </linearGradient>
  </svg>
</div>

<div class="navbar shadow-md border-b border-[#2789FF]/20 text-white" style="background: linear-gradient(135deg, #151823 0%, #0B0E18 100%); backdrop-filter: blur(8px);">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl font-bold" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Revboard</a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a class="hover:text-[#6ED3FF] transition-colors duration-300">Add your server</a></li>
      <li><a class="hover:text-[#6ED3FF] transition-colors duration-300">Servers</a></li>
      <li><a class="hover:text-[#6ED3FF] transition-colors duration-300">About</a></li>
    </ul>
  </div>

  <div class="navbar-end gap-2">
    <a 
      href="httpa://invite-template.inv" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="btn btn-sm text-white border-none hover:shadow-[0_0_15px_rgba(110,211,255,0.5)] hover:brightness-110 active:brightness-90"
      style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);"
    >
      Support Server
    </a>
    
    {#if user}
      <!-- Updated profile dropdown -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost hover:bg-[#2789FF]/10 normal-case flex items-center gap-2 pr-2">
          <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-[#2789FF]/30">
            <img src={user.avatarUrl} alt="Avatar" class="w-full h-full object-cover" />
          </div>
          <span class="text-[#6ED3FF]">{user.userName}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#6ED3FF]/70">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </label>
        
        <ul tabindex="0" class="menu dropdown-content mt-1 z-50 p-2 shadow-lg rounded-box w-48 text-white"
            style="background: linear-gradient(135deg, #0B0E18 0%, #151823 100%); border: 1px solid rgba(39, 137, 255, 0.2);">
          <li>
            <a class="flex items-center gap-2 hover:bg-[#2789FF]/10 hover:text-[#6ED3FF] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a class="flex items-center gap-2 hover:bg-[#2789FF]/10 hover:text-[#6ED3FF] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Settings
            </a>
          </li>
          <div class="divider my-1"></div>
          <li>
            <a class="flex items-center gap-2 text-[#FF6E6E] hover:bg-[#FF6E6E]/10 hover:text-[#FF8E8E] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
    {:else}
      <a class="btn text-white border-none" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);">Login</a>
    {/if}
  </div>
</div>