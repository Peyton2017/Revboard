<script lang="ts">
  let user: {
    avatarUrl: string;
    userName: string;
  } | null = {
    avatarUrl: "https://static.vecteezy.com/system/resources/previews/015/393/750/non_2x/gradient-fluid-background-purple-design-layout-for-banner-or-poster-cool-fluid-pattern-with-moving-purple-shapes-free-vector.jpg",
    userName: "Beezo"
  };

  // Set user = null when not logged in
</script>

<div class="navbar bg-black/10 backdrop-blur-md shadow-md border-b border-black/10 text-white">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Revboard</a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Add your server</a></li>
      <li><a>Servers</a></li>
      <li><a>About</a></li>
    </ul>
  </div>

  <div class="navbar-end">
    {#if user}
      <!-- Working avatar-only dropdown -->
      <div class="dropdown dropdown-end">
        <a class="p-2 text-xl">{user.userName}</a>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={user.avatarUrl} alt="Avatar" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-200 rounded-box w-40 text-black">
          <li><a>Dashboard</a></li>
          <li><a>Settings</a></li>
          <li><a class="text-error">Logout</a></li>
        </ul>
      </div>
    {:else}
      <a class="btn btn-primary">Login</a>
    {/if}
  </div>
</div>
