<script lang="ts">
  export let ServerName: string;
  export let ServerImage: string;
  export let ServerBanner: string;
  export let ServerMembercount: number;
</script>

<div class="hidden">
  <svg width="0" height="0">
    <!-- Card background gradient -->
    <linearGradient id="serverCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2436" /> <!-- Lighter Navy -->
      <stop offset="100%" stop-color="#131825" /> <!-- Slightly darker navy -->
    </linearGradient>
  </svg>
</div>

<div class="card border-2 border-[#2789FF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(39,137,255,0.35)] hover:scale-[1.02] hover:translate-y-[-4px] bg-gradient-to-br from-[#1E2436] to-[#131825] text-white w-full">
  <!-- Banner section -->
  {#if ServerBanner}
    <figure class="relative w-full h-32 overflow-hidden">
      <img src={ServerBanner} alt="Server Banner" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#131825] via-transparent to-transparent"></div>
      <div class="absolute top-2 right-2 badge backdrop-blur-md bg-[#0B0E18]/60 border border-[#2789FF]/40 text-white py-3 px-4 font-medium">
        {ServerMembercount} members
      </div>
    </figure>
  {:else}
    <div class="relative w-full h-24 bg-gradient-to-br from-[#2789FF]/20 to-[#003EAE]/20">
      <div class="absolute top-2 right-2 badge backdrop-blur-md bg-[#0B0E18]/60 border border-[#2789FF]/40 text-white py-3 px-4 font-medium">
        {ServerMembercount} members
      </div>
    </div>
  {/if}

  <div class="card-body pt-4 px-5 pb-5">
    <!-- Server image and name row -->
    <div class="flex items-center gap-4 mb-3">
      {#if ServerImage}
        <img src={ServerImage} alt="Server Icon" class="w-16 h-16 rounded-full border-2 border-[#2789FF]/50 shadow-[0_0_8px_rgba(39,137,255,0.2)]" />
      {/if}

      <h2 class="card-title text-xl font-bold" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{ServerName}</h2>
    </div>

    <!-- Description -->
    <p class="text-sm text-[#6ED3FF]/80 mb-3">A cozy place to talk about anime and relax.</p>

    <!-- Tags/badges -->
    <div class="flex flex-wrap gap-2 mb-4">
      <div class="badge bg-[#131825]/80 border border-[#2789FF]/40 text-[#6ED3FF] hover:bg-[#0B0E18] transition-colors duration-300 py-2.5 px-3">
        <span class="text-[#6ED3FF] mr-1 font-medium">#</span>
        Anime
      </div>
      <div class="badge bg-[#131825]/80 border border-[#2789FF]/40 text-[#6ED3FF] hover:bg-[#0B0E18] transition-colors duration-300 py-2.5 px-3">
        <span class="text-[#6ED3FF] mr-1 font-medium">#</span>
        Chill
      </div>
      <div class="badge bg-[#131825]/80 border border-[#2789FF]/40 text-[#6ED3FF] hover:bg-[#0B0E18] transition-colors duration-300 py-2.5 px-3">
        <span class="text-[#6ED3FF] mr-1 font-medium">#</span>
        Fun
      </div>
    </div>

    <!-- Join button -->
    <div class="card-actions">
      <a href="#" class="btn text-white border-none transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(110,211,255,0.5)] hover:brightness-110 active:brightness-90 w-full"
         style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);">
        Join Server
      </a>
    </div>
  </div>
</div>