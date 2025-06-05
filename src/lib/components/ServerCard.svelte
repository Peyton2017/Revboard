<script lang="ts">
  export let ServerName: string;
  export let ServerImage: string;
  export let ServerBanner: string;
  export let ServerMembercount: number;
</script>

<div class="card bg-base-200 shadow-lg w-full sm:w-[500x] mx-auto overflow-hidden">
  {#if ServerBanner}
    <div class="relative">
      <img src={ServerBanner} alt="Server Banner" class="w-full h-32 object-cover" />
      <div class="absolute top-2 right-2 badge badge-neutral backdrop-blur-sm bg-black/60 text-white">
        {ServerMembercount} members
      </div>
    </div>
  {/if}

  <div class="card-body flex-row gap-4 items-start">
    {#if ServerImage}
      <img src={ServerImage} alt="Server Icon" class="w-14 h-14 rounded-full border-2 border-base-100 shadow" />
    {/if}

    <div class="flex flex-col gap-1">
      <h2 class="card-title text-white">{ServerName}</h2>
      <p class="text-sm text-base-content/70">A cozy place to talk about anime and relax.</p>
      <div class="flex flex-wrap gap-2 mt-1">
        <div class="badge badge-secondary">Anime</div>
        <div class="badge badge-secondary">Chill</div>
        <div class="badge badge-secondary">Fun</div>
      </div>
      <div class="mt-2">
        <a href="#" class="btn btn-primary btn-sm">Join Server</a>
      </div>
    </div>
  </div>
</div>
