<script lang="ts">
    import type { PageData } from './$types';
    import Navbar from '$lib/components/Navbar.svelte';
    import LoginCard from '$lib/components/LoginCard.svelte';
    let { data }: { data: PageData } = $props();


</script>
<Navbar></Navbar>
<LoginCard></LoginCard>