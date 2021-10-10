<script>
  import { goto } from "$app/navigation";

  import { onMount } from "svelte";
  import { sUser } from "@lib/moralis";

  onMount(async () => {
    let user;
    sUser.subscribe((value) => {
      user = value;
    });
    // @ts-ignore
    if (user == null) goto("/");
  });
</script>

<slot />
