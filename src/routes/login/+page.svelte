<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';
	import LoginCard from '$lib/components/LoginCard.svelte';
	import VerificationCard from '$lib/components/VerificationCard.svelte';
	import { goto } from '$app/navigation';

	let { data }: { data: PageData } = $props();

	// User state
	let myUserId = $state('');
	let isLoginVisible = $state(true);
	let isVerificationVisible = $state(false);
	let myVerificationCode = $state('ABC123'); // Example code

	// Login submission handler
	function submitUserId(id) {
		myUserId = id;
		console.log('User ID submitted:', myUserId);
		isLoginVisible = false;
		isVerificationVisible = true;
	}

	// Verification handler
	function completeVerification(event) {
		if (event) event.preventDefault();
		console.log('Verification completed for user:', myUserId);
		goto('/');
	}


	function handleUserIdSubmit(id: string) {
		userId = id;
		// Handle user ID submission logic here
		console.log('User ID submitted:', userId);
		// validate user id and show verification card if needed
		showLoginCard = false;
		showVerificationCard = true;
	}

	function handleVerificationComplete(event: Event) {
		// Prevent default form submission
		event.preventDefault();
		// Handle verification completion logic here
		console.log('Verification completed for user:', userId);
		goto('/'); // Redirect to dashboard after successful verification
	}
</script>


<!-- Full-height flex column layout -->
<div class="min-h-screen flex flex-col">
	<!-- Navbar at the top -->
	<Navbar />

	<!-- Simple background with centered cards -->
	<div class="flex-grow flex items-center justify-center" style="background: radial-gradient(circle at 50% 50%, #03050F 0%, #0B0E18 60%, #151823 100%);">

		{#if isLoginVisible}
			<LoginCard userId={myUserId} handleUserIdSubmit={submitUserId} />
		{/if}

		{#if isVerificationVisible}
			<VerificationCard 
				verificationCode={myVerificationCode}
				onVerificationComplete={completeVerification}
			/>
		{/if}
	</div>
</div>
