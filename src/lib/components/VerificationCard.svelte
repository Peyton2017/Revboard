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

<div class="card bg-base-300 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Verify Your Account</h2>
    <p class="text-sm text-gray-500 mb-4">Please complete the verification process using the code below:</p>
    
    <div class="bg-base-200 p-4 rounded-lg text-center mb-4">
      <span class="text-2xl font-mono font-bold tracking-wider">{verificationCode}</span>
    </div>

    <p class="text-sm text-gray-500 mb-4">Once you've completed the verification process off-platform, click the button below to continue.</p>

    <form onsubmit={onVerificationComplete} class="w-full">
      <button class="btn w-full" type="submit">
        I've Completed Verification
      </button>
    </form>
  </div>
</div>