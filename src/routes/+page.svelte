<script lang="ts">
  import ServerCard from '$lib/components/ServerCard.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

    export let data: {
        servers: { name: string; image: string; banner: string; members: number }[];
    }
</script>

<Navbar></Navbar>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6">
  {#each data.servers as server}
    <ServerCard
      ServerName={server.name}
      ServerBanner={server.banner}
      ServerImage={server.image}
      ServerMembercount={server.members}
    >
      <button class="btn btn-primary w-full">Join Server</button>
    </ServerCard>
  {/each}
</div>
