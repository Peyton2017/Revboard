<script lang="ts">
  import { onMount } from 'svelte';
  import ServerCard from '$lib/components/ServerCard.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

    export let data: {
        servers: { name: string; image: string; banner: string; members: number }[];
    };

    // Sort options
    let sortOption = 'upvotes'; // Default sort: 'upvotes' or 'recent'

    function sortByUpvotes() {
      sortOption = 'upvotes';
      // Implementation to be added later
    }

    function sortByRecent() {
      sortOption = 'recent';
      // Implementation to be added later
    }

    // Filter by tags
    let selectedTags: string[] = [];
    let isDropdownOpen = false;

    const tags = [
      'Gaming',
      'Social',
      'Education',
      'Technology',
      'Art & Design',
      'Music'
    ];

    function toggleTag(tag: string) {
      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
      } else {
        selectedTags = [...selectedTags, tag];
      }
      // Implementation to be added later
    }

    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
    }
  
  // ... other existing code ...

  // Add this function to handle clicks outside the dropdown
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      isDropdownOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<style>
/* Base gradient button */
.btn-gradient {
  background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);
  border: none;
  color: white;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  box-shadow: 0 0 15px rgba(110, 211, 255, 0.5);
  filter: brightness(110%);
}

.btn-gradient:active {
  filter: brightness(90%);
}

/* Outline gradient button */
.btn-gradient-outline {
  background: linear-gradient(135deg, #151823 0%, #0B0E18 100%);
  border: 1px solid rgba(39, 137, 255, 0.3);
  color: #6ED3FF;
  transition: all 0.3s ease;
}

.btn-gradient-outline:hover {
  border-color: rgba(39, 137, 255, 0.8);
  box-shadow: 0 0 10px rgba(39, 137, 255, 0.2);
  background: linear-gradient(135deg, #1A1E2B 0%, #151823 100%);
}

/* Ghost gradient button */
.btn-gradient-ghost {
  background: transparent;
  color: #6ED3FF;
  border: none;
  transition: all 0.3s ease;
}

.btn-gradient-ghost:hover {
  background: rgba(39, 137, 255, 0.1);
}

  .breathing-glow {
    position: relative;
    display: inline-block; /* This makes the container wrap the text */
    color: transparent;
  }

  .breathing-glow::before {
    content: 'Discover Amazing Servers';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }

  .breathing-glow::after {
    content: 'Discover Amazing Servers';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #6ED3FF;
    -webkit-background-clip: text;
    background-clip: text;
    filter: blur(8px);
    z-index: 0;
    animation: breathe 3s ease-in-out infinite;
  }

  @keyframes breathe {
    0%, 100% {
      opacity: 0;
      filter: blur(8px);
    }
    50% {
      opacity: 0.7;
      filter: blur(12px);
    }
  }
</style>

<div class="hidden">
  <svg width="0" height="0">
    <!-- Background gradient -->
    <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151823" /> <!-- Deep Navy -->
      <stop offset="100%" stop-color="#0B0E18" /> <!-- Slightly lighter navy -->
    </linearGradient>

    <!-- Accent gradient -->
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ED3FF" /> <!-- Ice Blue -->
      <stop offset="40%" stop-color="#2789FF" /> <!-- Cobalt -->
      <stop offset="100%" stop-color="#003EAE" /> <!-- Midnight Blue -->
    </linearGradient>
  </svg>
</div>

<Navbar></Navbar>

<div class="min-h-screen py-8 px-4" style="background: linear-gradient(135deg, #151823 0%, #0B0E18 100%);">
  <div class="container mx-auto">
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-bold mb-5 leading-relaxed py-1 relative breathing-glow">
  Discover Amazing Servers
</h1>
      <p class="text-[#6ED3FF]/70 max-w-2xl mx-auto">Find and join communities that match your interests. Connect with like-minded people in our user-generated server list.</p>

      <div class="max-w-md mx-auto mt-8">
        <div class="relative">
          <div class="input input-bordered w-full flex items-center gap-2 flex-wrap min-h-12 bg-[#151823] border-[#2789FF]/50 text-[#6ED3FF] focus-within:border-[#2789FF] focus-within:ring-1 focus-within:ring-[#2789FF] cursor-pointer" on:click={toggleDropdown}>
            {#if selectedTags.length > 0}
              {#each selectedTags as tag}
                <div class="badge badge-sm badge-primary gap-1">
                  {tag}
                  <button class="btn-xs btn-circle btn-ghost" on:click|stopPropagation={() => toggleTag(tag)}>×</button>
                </div>
              {/each}
            {:else}
              <span class="text-[#6ED3FF]/50">Filter by tags...</span>
            {/if}
            <div class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          {#if isDropdownOpen}
            <div class="absolute top-full left-0 right-0 mt-1 z-10 rounded-lg shadow-lg bg-[#151823] border border-[#2789FF]/20 overflow-hidden">
              <div class="p-2 max-h-60 overflow-y-auto">
                {#each tags as tag}
                  <div 
                    class="flex items-center p-2 hover:bg-[#1A1E2B] rounded cursor-pointer"
                    on:click={() => toggleTag(tag)}
                  >
                    <input 
                      type="checkbox" 
                      class="checkbox checkbox-primary checkbox-sm mr-2" 
                      checked={selectedTags.includes(tag)}
                    />
                    <span class="text-[#6ED3FF]">{tag}</span>
                  </div>
                {/each}
              </div>
              <div class="p-2 border-t border-[#2789FF]/20 flex justify-between">
                <!-- Update the Clear all and Apply buttons -->
                <button class="btn btn-sm btn-gradient-ghost">Clear all</button>
                <button class="btn btn-sm btn-gradient">Apply</button>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>

    <div class="flex justify-end mb-6">
      <div class="dropdown dropdown-end">
        <!-- Update the sort button -->
<div tabindex="0" role="button" class="btn btn-sm btn-gradient-outline m-1">
  Sort by 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-[#151823] border border-[#2789FF]/20 rounded-box w-52">
          <li><a class="text-[#6ED3FF] hover:bg-[#1A1E2B]">Most Upvotes</a></li>
          <li><a class="text-[#6ED3FF] hover:bg-[#1A1E2B]">Recently Bumped</a></li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.servers as server}
        <ServerCard
          ServerName={server.name}
          ServerBanner={server.banner}
          ServerImage={server.image}
          ServerMembercount={server.members}
        >
          <button class="btn btn-gradient w-full">Join Server</button>
        </ServerCard>
      {/each}
    </div>
  </div>
</div>