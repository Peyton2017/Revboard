<script lang="ts">
  interface LoginCardProps {
    userId: string;
    handleUserIdSubmit: (userId: string) => void;
  }

  let {
    userId = $bindable(''),
    handleUserIdSubmit,
  }: LoginCardProps = $props();


</script>

<div class="hidden">
  <svg width="0" height="0">
    <!-- Card background gradient -->
    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151823" /> <!-- Deep Navy -->
      <stop offset="100%" stop-color="#0B0E18" /> <!-- Slightly lighter navy -->
    </linearGradient>

    <!-- Button gradient (from the R logo) -->
    <linearGradient id="loginButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ED3FF" /> <!-- Ice Blue -->
      <stop offset="40%" stop-color="#2789FF" /> <!-- Cobalt -->
      <stop offset="100%" stop-color="#003EAE" /> <!-- Midnight Blue -->
    </linearGradient>
  </svg>
</div>


    <div class="card w-96 shadow-xl border border-[#2789FF]/20 text-white" style="background: linear-gradient(135deg, #151823 0%, #0B0E18 100%);">
      <div class="card-body">
      <h2 class="card-title text-2xl font-bold" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Login</h2>
      <p class="text-sm text-[#6ED3FF]/70 mb-4">Enter your user ID and verification code to log in.</p>
      <form on:submit|preventDefault={() => handleUserIdSubmit(userId)} class="flex flex-col items-center gap-4 w-full">
        <label class="label flex flex-col w-full items-start">
          <span class="label-text w-full text-white">User ID</span>
          <input
          type="text"
          bind:value={userId}
          placeholder="Enter your user ID"
          class="input w-full bg-[#0B0E18]/80 border border-[#2789FF]/30 text-white focus:border-[#6ED3FF] focus:outline-none focus:ring-1 focus:ring-[#6ED3FF]/50 transition-all duration-300"
          required
          />
        </label>
        <button class="btn w-full text-white border-none transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-110 active:brightness-90" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>