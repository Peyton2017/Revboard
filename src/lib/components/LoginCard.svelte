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


  <div class="card bg-base-300 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Login</h2>
      <p class="text-sm text-gray-500 mb-4">Enter your user ID and verification code to log in.</p>
      <form onsubmit={() => handleUserIdSubmit(userId)} class="flex flex-col items-center gap-4 w-full">
        <label class="label flex flex-col w-full items-start">
          <span class="label-text w-full">User ID</span>
          <input
          type="text"
          bind:value={userId}
          placeholder="Enter your user ID"
          class="input input-bordered w-full"
          required
          />
        </label>
        <button class="btn w-full" type="submit">
          Submit
        </button>
      </form>
      </div>
  </div>