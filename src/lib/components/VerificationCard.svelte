<script lang="ts">
  interface VerificationCardProps {
    verificationCode: string;
    onVerificationComplete: () => void;
  }

  let {
    verificationCode = $bindable('123456'), // Example code, should be generated
    onVerificationComplete,
  }: VerificationCardProps = $props();
</script>

<div class="hidden">
  <svg width="0" height="0">
    <!-- Card background gradient -->
    <linearGradient id="verificationCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151823" /> <!-- Deep Navy -->
      <stop offset="100%" stop-color="#0B0E18" /> <!-- Slightly lighter navy -->
    </linearGradient>

    <!-- Button gradient (from the R logo) -->
    <linearGradient id="verificationButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ED3FF" /> <!-- Ice Blue -->
      <stop offset="40%" stop-color="#2789FF" /> <!-- Cobalt -->
      <stop offset="100%" stop-color="#003EAE" /> <!-- Midnight Blue -->
    </linearGradient>
  </svg>
</div>

<div class="card w-96 shadow-lg border border-[#2789FF]/20 text-white" style="background: linear-gradient(135deg, #151823 0%, #0B0E18 100%);">
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Verify Your Account</h2>
    <p class="text-sm text-[#6ED3FF]/70 mb-4">Please complete the verification process using the code below:</p>
    
    <div class="bg-[#0B0E18]/70 border border-[#2789FF]/30 p-4 rounded-lg text-center mb-4">
      <span class="text-2xl font-mono font-bold tracking-wider" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{verificationCode}</span>
    </div>

    <p class="text-sm text-[#6ED3FF]/70 mb-4">Once you've completed the verification process off-platform, click the button below to continue.</p>

    <form on:submit|preventDefault={onVerificationComplete} class="w-full">
      <button class="btn w-full text-white border-none transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-110 active:brightness-90" style="background: linear-gradient(135deg, #6ED3FF 0%, #2789FF 60%, #003EAE 100%);" type="submit">
        I've Completed Verification
      </button>
    </form>
  </div>
</div>