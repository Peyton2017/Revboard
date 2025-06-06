<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';
	import LoginCard from '$lib/components/LoginCard.svelte';
	import VerificationCard from '$lib/components/VerificationCard.svelte';
	import { goto } from '$app/navigation';
	let { data }: { data: PageData } = $props();

	let userId = $state('');
	let showLoginCard = $state(true);
	let showVerificationCard = $state(false);
	let verificationCode = $state('ABC123'); // This should be generated or received from your backend


	function handleUserIdSubmit(id: string) {
		userId = id;
		// Handle user ID submission logic here
		console.log('User ID submitted:', userId);
		// validate user id and show verification card if needed
		showLoginCard = false;
		showVerificationCard = true;
	}

	function handleVerificationComplete() {
		// Handle verification completion logic here
		console.log('Verification completed for user:', userId);
		goto('/'); // Redirect to dashboard after successful verification
	}
</script>

<!-- Full-height flex column layout -->
<div class="min-h-screen flex flex-col">
	<!-- Navbar at the top -->
	<Navbar />

	<!-- Fill remaining space and center card -->
	<div class="flex-grow flex items-center justify-center bg-base-100">
		{#if showLoginCard}
			<LoginCard userId={userId} handleUserIdSubmit={handleUserIdSubmit} />
		{/if}
		
		{#if showVerificationCard}
			<VerificationCard 
				verificationCode={verificationCode}
				onVerificationComplete={handleVerificationComplete}
			/>
		{/if}
	</div>
</div>
