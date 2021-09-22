<script>
  import { goto } from "$app/navigation";

  import { onMount } from "svelte";

  let sUser;

  onMount(async () => {
    // @ts-ignore
    sUser = await Moralis.User.current();
    if (sUser == null) goto("/");
  });
</script>

<slot></slot>